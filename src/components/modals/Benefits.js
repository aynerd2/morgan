import React from 'react'

const Benefits = () => {
  return (
    <div className='h-full flex flex-col mb-10'>

      <div className='w-full border border-blue-200 p-5 md:p-10 mb-5'>
        <p className='mx-5 md:mx-10 font-thin text-4xl md:text-6xl'>Benefits</p>
      </div>

      <div className='mx-5 md:mx-10 flex-1 overflow-y-scroll'>
        <p className='mb-2 text-xl md:text-3xl'>Great Work Starts With Great Benefits, Your talent is our most important asset.</p>
        <p className='font-serif mb-4'>That’s why Morgans Med Staffing offers a comprehensive benefits package. We want to give you and your family peace of mind, so you’re free to do your best work.</p>
        <p className='font-serif mb-2'>All Morgans Med Staffing PRN and temporary employees may be eligible to receive:</p>
        <ul className='font-serif mx-5 md:mx-10 mb-4'>

          <li className='list-disc font-serif'>Holiday pay (see recruiter for details)</li>
          <li className='list-disc font-serif' >Vacation pay (see recruiter for details)</li>
          <li className='list-disc font-serif'>Medical insurance compliant with ACA rules and regulations.  Options available to eliminate individual tax penalty.</li>
          <li className='list-disc font-serif'>Dental and Vision benefits</li>
          <li className='list-disc font-serif'>Term life benefits</li>
          <li className='list-disc font-serif'>Short term disability benefits</li>
          <li className='list-disc font-serif'>Paid pre-assignment drug screenings</li>
          <li className='list-disc font-serif'>Credit union membership</li>
          <li className='list-disc font-serif'>Direct deposit into a bank account or Pay Card</li>
          <li className='list-disc font-serif'>Transportation reimbursement</li>
          <li className='list-disc font-serif'>Discounted pet insurance</li>
          <li className='list-disc font-serif'>Online time reporting</li>
          <li className='list-disc font-serif'>Access to discounted immunizations</li>
          <li className='list-disc font-serif'>Training opportunities to maintain credentials</li>
          <li className='list-disc font-serif'>Medical Professional insurance</li>
        </ul>

        <p className='font-serif text-3xl md:text-4xl'>Want to be in a new healthcare position with great benefits?</p>
        <p className='font-serif '>Contact us at Email: info@morgansmedstaffing.com  today!</p>
      </div>

    </div>
  )
}

export default Benefits