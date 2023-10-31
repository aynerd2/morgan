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

                  <div className='bg-blue-200 w-full mb-5'>
                        <p className='font-sans text-3xl text-white p-5'>CONTACT US</p>
                  </div>
                        <div className="flex flex-col">
                              <div class="mt-2 mx-5 mb-5">
                                    <div class="text-left">
                                          <p class="font-sans text-xl">
                                                Corporate Office Address: <br/>
                                                Morgans Med Staffing, 600 Park Offices Dr, Suite 300-45, Durham, NC 27709.
                                          </p>
                                    </div>

                                    <div class="text-left">
                                          <p class="font-sans text-xl">
                                          email: info@morgansmedstaffing.com
                                          </p>
                                    </div>

                                    <div class="text-left">
                                          <p class="font-sans text-xl">
                                           Tel: 919-746-3903  
                                          </p>
                                    </div>
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
      )
}

export default Contact