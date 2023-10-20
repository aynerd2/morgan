import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {slideIn} from "../Utils/motion"


const Contact = () => {

      const formRef = useRef();
      const [form, setForm] = useState({
            name: "",
            email: "",
            message: "",
            position: "",
            phone: "",


      });

      const [loading, setLoading] = useState(false);
      const handleChange = (e) => {
            const { target } = e;
            const { name, value } = target;

            setForm({
                  ...form,
                  [name]: value,
            });
            // this was added
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            setLoading(true);

      }



      return (
            <div>

                  <div className='bg-blue-200 w-full h-full mb-10'>
                        <p className='font-Georgia text-4xl text-white p-10'>CONTACT US</p>
                  </div>

                  {/* <div className='xl:mt-4 grid grid-cols-1 xl:grid-cols-2 gap-8 overflow-hidden'>

                        <motion.div
                            variants={slideIn("left", "tween", 0.2, 1)}
                            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
                        
                        >
                              <p className="font-Georgia ">
                              Please tell us about your hiring needs 
                              below and one of our staffing professionals 
                              will contact you shortly.
                              </p>


                              <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className='mt-12 flex flex-col gap-4'
                              >
                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Position hiring for</span>
                                          <input
                                                type='text'
                                                name='position'
                                                value={form.position}
                                                onChange={handleChange}
                                                placeholder="Enter position"
                                                className='bg-gray-200 py-2 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>

                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Name</span>
                                          <input
                                                type='text'
                                                name='name'
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                className='bg-gray-200 py-2 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Phone</span>
                                          <input
                                                type='number'
                                                name='phone'
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+(199) ..."
                                                className='bg-gray-200 py-2 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Email</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-2 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Questions / Comments</span>
                                          <textarea
                                                rows={7}
                                                name='message'
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder='What you want to say?'
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>

                                    <button
                                          type='submit'
                                          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black font-bold font-Georgia shadow-md shadow-primary'
                                    >
                                          {loading ? "Sending..." : "Send"}
                                    </button>
                              </form>
                        </motion.div>

                        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="flex-[0.25]">
                              <div className="p-4 md:w-1/2 lg:w-1/3 xl:w-full">
                                    <p className="font-Georgia text-2xl md:text-3xl lg:text-4xl">
                                          Corporate Office Address:
                                    </p>
                                    <p className="font-Georgia text-sm md:text-base lg:text-lg">
                                          Morgans Med Staffing, 600 Park Offices Dr, Suite 300-45, Durham, NC 27709.
                                    </p>
                              </div>


                              <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.014017041794!2d-78.87317809018916!3d35.897672372403534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acef97c2f2c44b%3A0xebafdb6ec8ae01e9!2s600%20Park%20Offices%20Dr%2C%20Durham%2C%20NC%2027709%2C%20USA!5e0!3m2!1sen!2sng!4v1697705404382!5m2!1sen!2sng" 
                                     title="Navigation"
                                     width="1200"
                                     height="450"
                                     loading="lazy"
                                     referrerPolicy="no-referrer-when-downgrade">

                                    </iframe>

                              </div>
                              

                        </motion.div>

                  </div> */}



                  <div className="flex flex-wrap justify-between items-center">

                        <div className="flex flex-col">

                              <div className="mt-10 mx-5 text-left">
                                    <p className="font-Georgia text-2xl md:text-3xl lg:text-4xl">
                                          Corporate Office Address:
                                    </p>
                                    <p className="font-Georgia text-sm md:text-base lg:text-lg">
                                          Morgans Med Staffing, 600 Park Offices Dr, Suite 300-45, Durham, NC 27709.
                                    </p>
                              </div>



                              <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.014017041794!2d-78.87317809018916!3d35.897672372403534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acef97c2f2c44b%3A0xebafdb6ec8ae01e9!2s600%20Park%20Offices%20Dr%2C%20Durham%2C%20NC%2027709%2C%20USA!5e0!3m2!1sen!2sng!4v1697705404382!5m2!1sen!2sng"
                                          title="Navigation"
                                          width="1500"
                                          height="450"
                                          loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade">

                                    </iframe>

                              </div>
                        </div>

                  </div>




            </div>
      )
}

export default Contact