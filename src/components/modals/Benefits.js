import React from 'react'
import NewHeader from '../NewHeader'

const Benefits = () => {
  return (
    <>
    
    {/* <NewHeader/> */}

    <div className='h-full flex flex-col mb-10'>

      <div className='w-full border border-blue-200 p-5 md:p-10 mb-5'>
        <p className='mx-5 md:mx-10 font-thin text-4xl md:text-6xl'>Benefits</p>
      </div>

      <div className='mx-5 md:mx-10 flex-1 overflow-y-scroll'>
        <p className='mb-2 text-xl md:text-3xl font-sans'>Great Work Starts With Great Benefits, Your talent is our most important asset.</p>
        <p className='font-sans mb-4'>That’s why Morgans Med Staffing offers a comprehensive benefits package. We want to give you and your family peace of mind, so you’re free to do your best work.</p>
        <p className='font-sans mb-2'>All Morgans Med Staffing PRN and temporary employees may be eligible to receive:</p>
        <ul className='font-sans mx-5 md:mx-10 mb-4'>

          <li className='list-disc font-sans'>Holiday pay (see recruiter for details)</li>
          <li className='list-disc font-sans' >Vacation pay (see recruiter for details)</li>
          <li className='list-disc font-sans'>Medical insurance compliant with ACA rules and regulations.  Options available to eliminate individual tax penalty.</li>
          <li className='list-disc font-sans'>Dental and Vision benefits</li>
          <li className='list-disc font-sans'>Term life benefits</li>
          <li className='list-disc font-sans'>Short term disability benefits</li>
          <li className='list-disc font-sans'>Paid pre-assignment drug screenings</li>
          <li className='list-disc font-sans'>Credit union membership</li>
          <li className='list-disc font-sans'>Direct deposit into a bank account or Pay Card</li>
          <li className='list-disc font-sans'>Transportation reimbursement</li>
          <li className='list-disc font-sans'>Discounted pet insurance</li>
          <li className='list-disc font-sans'>Online time reporting</li>
          <li className='list-disc font-sans'>Access to discounted immunizations</li>
          <li className='list-disc font-sans'>Training opportunities to maintain credentials</li>
          <li className='list-disc font-sans'>Medical Professional insurance</li>
        </ul>

        <p className='font-sans text-3xl md:text-4xl'>Want to be in a new healthcare position with great benefits?</p>
        <p className='font-sans '>Contact us at Email: info@morgansmedstaffing.com  today!</p>
      </div>

    </div>

    </>
  )
}

export default Benefits