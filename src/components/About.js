import React, {useState} from "react";




const About = () => {

   




  return (
    <div>
      <div class="relative">
        <img src="./assets/p2.jpg" alt="cover" class="inset-0 object-cover w-full h-60 md:h-80" />
        <div class="absolute inset-0 bg-black opacity-40"></div>

        <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p class="text-4xl md:text-6xl font-serif text-center md:text-left">Improving Healthcare Nationwide</p>
          <hr class="w-2/3 md:w-2/5 border-black border-t-2 my-4" />

          <p class="text-lg md:text-xl font-serif text-center md:text-left mb-4">
            Our mission is to ensure healthcare facilities have skilled staff and provide optimal patient experiences.
          </p>


        </div>
      </div>
      <div className='bg-blue-200 w-full h-full '>
      <p className='font-serif text-4xl text-white p-10'>ABOUT</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mx-5">
        <div className="md:col-span-1">
          <p className="font-serif text-2xl my-2">Our Expertise Makes More Possible</p>
          <p className="font-serif">
            Morgans Med Staffing is a division of ExecuTeam Staffing.
            We have been providing doctors, hospitals, and clinical facilities with star employees for a myriad of healthcare positions to deliver top-notch patient care while cost-effectively managing changes in demand.
          </p>

          <p className="mt-5 font-serif">
            Our team is passionate about helping our clients maximize their internal resources through strategic healthcare staffing solutions.
            That passion shines through in each candidate placement, and it has helped us become one of the most trusted medical resources nationwide. Placing top professionals in healthcare jobs nationwide, MMS is only a small part of what we do, and our history has proven that we are committed to your success!
          </p>


          <div className="mx-10">

            <div className="sm:flex">
              <div className="">
                <p className="text-2xl font-bold font-serif mt-5">Mission</p>
                <p className="font-serif">
                  Our mission is to help improve the overall quality of healthcare nationwide by
                  ensuring that healthcare facilities have skilled staff members and professionals
                  are assigned to facilities where their roles fit their training and experience.
                  In doing so, we aim to avoid role mismatches and promote an optimal patient experience as they receive treatment.
                </p>

              </div>


            </div>

            <div className="mb-4">
              <p className="text-2xl font-bold font-serif mt-5">Vision</p>
              <p className="font-serif">Morgans Med Staffing  is committed to being a nationwide resource in
                enriching lives, nurturing patient/provider relationships,
                and empowering success in healthcare organizations via provision of excellent staffings.</p>
            </div>


          </div>

        </div>

        <div className="md:col-span-1">
          <img src="./assets/p3.jpg" alt="nurse" className="w-full h-4/5 object-contain " />
        </div>
      </div>
    </div>
  )
}

export default About