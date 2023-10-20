import React from 'react'
import { AiOutlineTwitter, AiFillFacebook, AiTwotoneMail, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
      return (
            <div>
                  <div className='bg-blue-200 flex flex-col items-center justify-center w-full h-full'>

                        <div className='flex flex-col items-center mt-10 justify-center'>
                              <div className='flex gap-4 items-center justify-center'>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                          <AiFillFacebook style={{ color: '#00000', fontSize: '30px', cursor: 'pointer' }} />
                                    </a>
                                    <a href="https://twitter.com/MorgansStaffing" target="_blank" rel="noopener noreferrer">
                                          <AiOutlineTwitter style={{ color: '#00000', fontSize: '30px', cursor: 'pointer' }} />
                                    </a>
                                    <a href="mailto:info@morgansmedstaffing.com">
                                          <AiTwotoneMail style={{ color: '#00000', fontSize: '30px', cursor: 'pointer' }} />
                                    </a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                          <AiFillInstagram style={{ color: '#00000', fontSize: '30px', cursor: 'pointer' }} />
                                    </a>
                              </div>
                        </div>

                        <div className='text-center mt-4'>
                              <p className='font-Georgia'>© 2023 Morgans Med Staffing | Site Credits</p>
                        </div>
                  </div>


            </div>
      )
}

export default Footer