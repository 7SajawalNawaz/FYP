// src/components/FileUpload.jsx

import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../utilis/baseUrl"; // Ensure this axios instance is correctly configured
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const initialFileData = {
  file: null,
};

const initialFileErr = {
  file: "",
};

const FileUpload = () => {
  const [fileData, setFileData] = useState(initialFileData);
  const [fileErr, setFileErr] = useState(initialFileErr);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  // Handle file input change
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileData({ file });
      setFileErr({ file: "" }); // Clear error when file is selected
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if file is selected
    if (!fileData.file) {
      setFileErr({ file: "Please select a file" });
      return;
    }

    try {
      setLoading(true);

      // Retrieve token from localStorage
      const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;

      if (!token) {
        toast.error("No valid token found.", { position: "top-right", autoClose: 5000 });
        setLoading(false);
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Ensure correct content type
      };

      // Create FormData instance and append the file with correct key name "image"
      const formData = new FormData();
      formData.append("image", fileData.file); // Update field name to "image" (matching backend)

      // Send the POST request with FormData
      const response = await axios.post("/file/upload", formData, { headers });

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
      });

      setFileData(initialFileData); // Reset file data
      setFileErr(initialFileErr); // Clear errors
      setLoading(false);

      // Redirect to the PendingApproval page after successful upload
      navigate("/pending-approval"); // Navigate to PendingApproval page
    } catch (error) {
      setLoading(false);
      console.error("Upload error:", error);

      if (error.response) {
        // Axios error
        toast.error(error.response.data?.message || "Something went wrong", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        // Network error or no response
        toast.error("Network error, please try again later.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8 mr-6 mt-10 rounded-xl">
      <div className="flex flex-col bg-purple-100 items-center justify-center  py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
          Research File Upload
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">Select File</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="file"
              name="file"
              onChange={handleChange}
            />
            {fileErr.file && (
              <p className="text-xs text-red-600">{fileErr.file}</p>
            )}
          </div>

          <div className="py-4">
            <input
              className="w-full p-2 border border-l-fuchsia-800 rounded-md cursor-pointer text-white font-bold bg-purple-900 hover:bg-slate-800 transition-colors"
              type="submit"
              value={`${loading ? "Uploading..." : "Upload File"}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
