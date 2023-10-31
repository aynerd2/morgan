import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Application = () => {

  const [loading, setLoading] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  
  const closeSuccessAlert = () => {
    setSuccessAlertOpen(false);
  };
  
  const closeErrorAlert = () => {
    setErrorAlertOpen(false);
  };

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    country: 'Select a Country',
    mobile: '',
    gender: '',
    ethnicity: '',
    veteranStatus: '',
    disabilityStatus: '',
    resume: null, 

  });

  const countries = ['Select a Country', 'USA', 'Canada', 'UK', 'Australia'];
  const genderOptions = ['Male', 'Female', 'Non-Binary', 'I do not wish to answer'];
  const ethnicityOptions = [
    'African American',
    'Asian',
    'Caucasian',
    'Hispanic',
    'Native American',
    'Pacific Islander',
    'Other',
  ];

  const veteranStatusOptions = [
    'Veteran',
    'Not a Veteran',
    'Active Duty Military',
    'Reserve/National Guard',
    'Retired Veteran',
    'Disabled Veteran',
  ];

  const disabilityStatusOptions = [
    'No Disability',
    'Individual with Disability',
    'I do not wish to answer',
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
  
    if (e.target.type === 'file') {
      const resume = e.target.files[0];
      updatedFormData.resume = resume;
    }
  
    setFormData(updatedFormData);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessAlertOpen(true); // Open the success alert
    setLoading(true);
    const formValues = { ...formData };
    console.log(formValues); 

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'service_kt7oc3c',
        'template_gr48mtq',

        {
          from_name: formData.name,
          to_name: "Morgans Med Staffing",
          from_email: formData.email,
          to_email: "info@morgansmedstaffing.com",
          message: [formData.name, 
            formData.address,
            formData.country,
            formData.mobile,
            formData.gender,
            formData.ethnicity,
            formData.veteranStatus,
            formData.disabilityStatus,
            formData.resume,
            ] 

        },
        'a5MJNUzqXi1C_OYaE',
      )
      .then(
        () => {
          setLoading(false);
         
            <Alert severity="success">We received your application and resume. We will respond to you as soon as possible.</Alert>
         
          // alert("");

          setFormData({
            name: '',
            email: '',
            address: '',
            country: '',
            mobile: '',
            gender: '',
            ethnicity: '',
            veteranStatus: '',
            disabilityStatus: '',
            resume: null, 
          });
        },
        (error) => {
          setLoading(false);
          setErrorAlertOpen(true); // Open the error alert
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className="flex flex-col items-center mt-10 justify-center p-4">
      <h2 className="text-3xl font-bold mb-4 font-sans">Applicant Information</h2>

      <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col w-full max-w-lg">

          <div className="flex flex-col mb-4">
            {/* Step 1 form fields */}
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-xl font-sans font-medium mb-2">Name:</label>
              <input type="text" name="name" id="name" className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                value={formData.name} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-xl font-medium mb-2 font-sans">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="country" className="text-xl font-medium mb-2 font-sans">
                Country:
              </label>
              <select
                name="country"
                id="country"
                className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                value={formData.country}
                onChange={handleInputChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>


            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="text-xl font-medium mb-2 font-sans">
                Address:
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="mobile" className="text-xl font-medium mb-2 font-sans">
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="resume" className="text-xl font-medium mb-2 font-sans">Resume:</label>
              <input
                type="file"
                name="resume"
                id="resume"
                className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                accept=".pdf, .doc, .docx"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="gender" className="text-xl font-sans font-medium mb-2">
                Gender:
              </label>
              <select
                name="gender"
                id="gender"
                className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                {genderOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mb-4">
            {/* Step 2 form fields */}

            <div className="flex flex-col mb-4">
              <label htmlFor="ethnicity" className="text-xl font-medium mb-2 font-sans">
                Ethnicity:
              </label>
              <select
                name="ethnicity"
                id="ethnicity"
                className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                value={formData.ethnicity}
                onChange={handleInputChange}
              >
                <option value="">Select Ethnicity</option>
                {ethnicityOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            


            <div className="flex flex-col mb-4">
                <label htmlFor="veteranStatus" className="text-xl font-medium mb-2 font-sans">
                  Veteran Status:
                </label>
                <select
                  name="veteranStatus"
                  id="veteranStatus"
                  className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                  value={formData.veteranStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Select Veteran Status</option>
                  {veteranStatusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="disabilityStatus" className="text-xl font-medium mb-2 font-sans">
                  Disability Status:
                </label>
                <select
                  name="disabilityStatus"
                  id="disabilityStatus"
                  className="border border-gray-300 rounded-md px-4 py-2 font-sans"
                  value={formData.disabilityStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Select Disability Status</option>
                  {disabilityStatusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

          </div>

          </div>


        <div className="flex justify-evenly mt-2"> 
            <button
              type="submit"
              className="bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded-md font-sans"
            >
              {loading ? "Sending..." : "Send"}
            </button>
        </div>
      </form>

      {/* Material-UI Alert for success */}
    {successAlertOpen && (
      <Alert severity="success" onClose={closeSuccessAlert}>
        <AlertTitle>Success</AlertTitle>
        We received your application and resume. We will respond to you as soon as possible.
      </Alert>
    )}

    {/* Material-UI Alert for error */}
    {errorAlertOpen && (
      <Alert severity="error" onClose={closeErrorAlert}>
        <AlertTitle>Error</AlertTitle>
        Ahh, something went wrong. Please try again.
      </Alert>
    )}



    </div>
  );
};

export default Application;

