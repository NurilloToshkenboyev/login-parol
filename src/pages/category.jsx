import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Category = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Category added successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">Category</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <input
              placeholder="Category Name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};


