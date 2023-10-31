import React, {useState} from "react";




const About = () => {

   




  return (
    <div>
      <div class="relative">
        <img src="./assets/d5.jpg" alt="cover" class="inset-0 object-cover w-full h-60 md:h-80" />
        <div class="absolute inset-0 bg-black opacity-40"></div>

        <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p class="text-4xl md:text-6xl font-sans text-center md:text-left">Improving Healthcare Nationwide</p>
          <hr class="w-2/3 md:w-2/5 border-black border-t-2 my-4" />

          <p class="text-lg md:text-xl font-sans text-center md:text-left mb-4">
            Our mission is to ensure healthcare facilities have skilled staff and provide optimal patient experiences.
          </p>


        </div>
      </div>
      <div className='bg-blue-200 w-full '>
      <p className='font-sans text-4xl text-white p-5'>ABOUT</p>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-5 gap-5">

        <div className="md:col-span-1 text-left">

          <div className="mb-5">
          <p className="text-4xl font-sans mb-2">Mission</p>
          <p className="font-sans text-xl">
            Our mission is to help improve the overall quality of healthcare nationwide by
            ensuring that healthcare facilities have skilled staff members and professionals
            are assigned to facilities where their roles fit their training and experience.
            In doing so, we aim to avoid role mismatches and promote an optimal patient experience as they receive treatment.
          </p>
          </div>

          <div className="mb-5">
            <p className="text-4xl font-sans mb-2">Vission</p>
            <p className="font-sans text-xl">
              Morgans Med Staffing  is committed to being a nationwide resource in
              enriching lives, nurturing patient/provider relationships,
              and empowering success in healthcare organizations via provision of excellent staffings.
            </p>
          </div>
          
        </div>

        <div className="md:col-span-1">
          <img src="./assets/d4.jpg" alt="nurse" className="w-full  object-contain" />
        </div>

      </div>

    


    </div>
  )
}

export default About