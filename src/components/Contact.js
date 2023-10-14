import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {slideIn} from "../Utils/motion"


const Contact = () => {

      const formRef = useRef();
      const [form, setForm] = useState({
            name: "",
            email: "",
            message: "",
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
                        <p className='font-serif text-4xl text-white p-10'>CONTACT US</p>
                  </div>


                  <div className={`xl:mt-4 flex xl:flex-row flex-col-reverse gap-80 overflow-hidden`}>

                        <motion.div
                              variants={slideIn("left", "tween", 0.2, 1)}
                              className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
                        >
                              <p className="font-serif ">
                              Please tell us about your hiring needs 
                              below and one of our staffing professionals 
                              will contact you shortly.
                              </p>
                              <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className='mt-12 flex flex-col gap-8'
                              >
                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Position hiring for</span>
                                          <input
                                                type='text'
                                                name='name'
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="What's your good name?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Position Type</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Job Function</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Zip Code</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <p className="font-serif mt-4 text-3xl">
                                    Contact information.
                                    </p>



                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Name</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Company</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>


                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>Phone</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
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
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
                                          />
                                    </label>

                                    
                                    <label className='flex flex-col'>
                                          <span className='text-black font-medium mb-1'>How Did You Hear About Us?</span>
                                          <input
                                                type='email'
                                                name='email'
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="What's your email address?"
                                                className='bg-gray-200 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium'
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
                                          className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black font-bold font-serif shadow-md shadow-primary'
                                    >
                                          {loading ? "Sending..." : "Send"}
                                    </button>
                              </form>
                        </motion.div>




                        <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        >


                        <p className="font-serif text-4xl">
                        Morgans Med Staffing
                              </p>

                              <p>Location info goes here....</p>
                        </motion.div>

                  </div>

            </div>
      )
}

export default Contact