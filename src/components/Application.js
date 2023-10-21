import React, { useState } from 'react';

const Application = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    country: 'Select a Country',
    state: '',
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

  const statesByCountry = {
    'Select a Country': [],
    USA: ['New York', 'California', 'Texas', 'Florida'],
    Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    Australia: ['New South Wales', 'Queensland', 'Victoria', 'Western Australia'],
  };

  const [step, setStep] = useState(1);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const resume = e.target.files[0];
    setFormData({ ...formData, resume });

    // You can handle the uploaded resume here, e.g., save it to state or perform further actions.
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const formValues = { ...formData };
  console.log(formValues); 
  };

  return (
    <div className="flex flex-col items-center mt-10 justify-center p-4">
      <h2 className="text-3xl font-bold mb-4 font-serif">Applicant Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg">
        {step === 1 && (
          <div className="flex flex-col mb-4">
            {/* Step 1 form fields */}
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-sm font-serif font-medium mb-2">Name:</label>
              <input type="text" name="name" id="name" className="border border-gray-300 rounded-md px-4 py-2 font-serif"
                value={formData.name} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-sm font-medium mb-2 font-serif">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="address" className="text-sm font-medium mb-2 font-serif">
                Address:
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="country" className="text-sm font-medium mb-2 font-serif">
                Country:
              </label>
              <select
                name="country"
                id="country"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
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
              <label htmlFor="state" className="text-sm font-medium mb-2 font-serif">
                State:
              </label>
              <select
                name="state"
                id="state"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
                value={formData.state}
                onChange={handleInputChange}
              >
                {statesByCountry[formData.country].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

          </div>
        )}


        {step === 2 && (

          <div className="flex flex-col mb-4">
            {/* Step 2 form fields */}

            <div className="flex flex-col mb-4">
              <label htmlFor="mobile" className="text-sm font-medium mb-2 font-serif">
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="resume" className="text-sm font-medium mb-2 font-serif">Resume:</label>
              <input
                type="file"
                name="resume"
                id="resume"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
                accept=".pdf, .doc, .docx"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="gender" className="text-sm font-serif font-medium mb-2">
                Gender:
              </label>
              <select
                name="gender"
                id="gender"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
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
              <label htmlFor="ethnicity" className="text-sm font-medium mb-2 font-serif">
                Ethnicity:
              </label>
              <select
                name="ethnicity"
                id="ethnicity"
                className="border border-gray-300 rounded-md px-4 py-2 font-serif"
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

          </div>

        )}


        {step === 3 && (
          <div className="flex flex-col mb-4">
            {/* Step 3 form fields */}
            <div className="flex flex-col mb-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="veteranStatus" className="text-sm font-medium mb-2 font-serif">
                  Veteran Status:
                </label>
                <select
                  name="veteranStatus"
                  id="veteranStatus"
                  className="border border-gray-300 rounded-md px-4 py-2 font-serif"
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
                <label htmlFor="disabilityStatus" className="text-sm font-medium mb-2 font-serif">
                  Disability Status:
                </label>
                <select
                  name="disabilityStatus"
                  id="disabilityStatus"
                  className="border border-gray-300 rounded-md px-4 py-2 font-serif"
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
        )}
        



        <div className="flex justify-evenly mt-4">
          {step > 1 && (
            <button
              onClick={handlePreviousStep}
              className="bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded-md font-serif"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              onClick={handleNextStep}
              className="bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded-md font-serif"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded-md font-serif"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Application;

