import React from 'react'



const HireingProcess = () => {
  return (
    <div className='h-full flex flex-col mb-10'>

      <div className='w-full border border-blue-200 p-5 mb-5'>
        <p className='mx-5 font-thin text-4xl'>Hiring Process</p>
      </div>

      <div className='flex-1 overflow-y-scroll'>
        <div className='my-5 mx-5'>
          <p className='font-sans text-2xl mb-4 '>
            Welcome to Morgans Med Staffing - Your Partner in Healthcare Careers
          </p>
          <p className='font-sans text-xl'>
            At Morgans Med Staffing, we're dedicated to helping you build a healthcare career you love. Whether you're an experienced healthcare professional or just starting your career, we're here to provide you with the best opportunities and support you in your journey.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
          <div className='flex items-center'>
            <div className="bg-clip-content p-4 border-4 border-blue-200 border-double">
              <p className='text-2xl font-sans'>1</p>
            </div>
            <p className='font-sans ml-2 text-xl'>Complete our online application.</p>
          </div>

          <div className='flex items-center'>
            <div className="bg-clip-content p-4 border-4 border-blue-200 border-double">
              <p className='text-2xl font-sans'>2</p>
            </div>
            <p className='font-sans ml-2 text-xl'>
              Our goal is to contact all qualified applicants within 5 business days. If you have not heard from us, please give us a call or email info@morgansmedstaffing.com.
            </p>
          </div>

          <div className='flex items-center'>
            <div className="bg-clip-content p-4 border-4 border-blue-200 border-double">
              <p className='text-2xl font-sans'>3</p>
            </div>
            <p className='font-sans ml-2 text-xl'>
              Through our interview and 360⁰ assessment process, we identify your interests, experience, skills, personality, and work style.
            </p>
          </div>

          <div className='flex items-center'>
            <div className="bg-clip-content p-4 border-4 border-blue-200 border-double">
              <p className='text-2xl font-sans'>4</p>
            </div>
            <p className='font-sans ml-2 text-xl'>
              Once we get to know you well, we look for opportunities in which you will thrive.
            </p>
          </div>

          <div className='flex items-center'>
            <div className="bg-clip-content p-4 border-4 border-blue-200 border-double">
              <p className='text-2xl font-sans'>5</p>
            </div>
            <p className='font-sans ml-2 text-xl'>
              We verify your certifications, references, and background, and conduct drug screenings.
            </p>
          </div>

          <div className='flex items-center'>
            <div className="bg-clip-content p-4 border-4 border-blue-200 border-double">
              <p className='text-2xl font-sans'>6</p>
            </div>
            <p className='font-sans ml-2 text-xl'>
              Morgans Med Staffing presents the right opportunities for you.
            </p>
          </div>
        </div>
      </div>
     

    </div>
  
  )
}

export default HireingProcess