import React, { useState } from 'react';



const Application = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const resume = e.target.files[0];
    // You can handle the uploaded resume here, e.g., save it to state or perform further actions.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server.
  };

  return (

    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold mb-4">Applicant Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-sm font-medium mb-2">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 rounded-md px-4 py-2"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="resume" className="text-sm font-medium mb-2">Resume:</label>
          <input
            type="file"
            name="resume"
            id="resume"
            className="border border-gray-300 rounded-md px-4 py-2"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>

  );
};

export default Application;
