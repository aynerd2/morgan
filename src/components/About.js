import React, {useState} from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import Team from "./modals/Team"
import Community from "./modals/Community"
import Location from "./modals/Loaction"


const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100vw',
      height: '100vh',
      bgcolor: 'background.paper',
      border: '0px solid #000',
      boxShadow: 44,
      p: 4,
      transition: 'all 0.5s ease-in',
      borderRadius: '5px',
      opacity: '0.8',
    
    };
    

const About = () => {

      const [open, setOpen] = useState(false);
      const [modalC, setModalC] = useState(null);

      const handleOpen = (modalC) => {
            setOpen(true);
            setModalC(modalC);
      };

      const handleClose = () => {
            setOpen(false);
            setModalC(null);
      };



  return (
    <div>
      
      <div class="relative">
        <img src="./assets/usman.jpg" alt="cover Image" class="inset-0 object-cover w-full" />
        <div class="absolute inset-0 bg-black opacity-40"></div>

        <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p class="text-4xl md:text-6xl font-serif text-center md:text-center">Get the talent and results<br/> you need - <i>STAT</i></p>
          <hr class="w-2/3 md:w-2/5 border-black border-t-2 my-4" />
          <p class="text-xl md:text-2xl font-serif text-white">People are Talking about MorgansMed!</p>
          <div class="w-full md:mx-20">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
            >
              <div class="text-carousel-item font-serif text-xs md:text-base text-center md:text-center"><b>-Carmen T: </b>
                Just wanted to send you a quick note to thank you for helping me<br />
                find the job I was looking for all along with great benefits and great leadership.<br />
                You created the perfect fit, and I appreciate that!
              </div>
              <div class="text-carousel-item text-xs md:text-base text-center md:text-center"> <b>-Tanthia P :</b> I have been with this company for years.<br />
                I love the professionalism, personal attention, and open communication from my recruiters..
              </div>
              <div class="text-carousel-item text-xs md:text-base text-center md:text-center"> <b>-Mira M., a public health organization: </b><br /> We have had a very good relationship with<br />
                Team1Medical for so many years now. We plan
                to continue to use their services<br /> in sourcing candidates/temps for us..
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className='bg-blue-200 w-full h-full '>
      <p className='font-serif text-4xl text-white p-10'>ABOUT</p>
      </div>

           
      <div className="flex flex-wrap justify-center items-center max-w-full mx-auto">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 1000,
            },
          }}
        >
          <Box sx={style}>
            <Box position="absolute" top={1} right={0} p={1} cursor="pointer">
              <Fab size="small" aria-label="close">
                <CloseIcon sx={{ color: 'white' }} onClick={handleClose} />
              </Fab>
            </Box>
            {modalC}
          </Box>
        </Modal>
        <button onClick={() => handleOpen(<Team />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
        OUR TEAM
        </button>

        <button onClick={() => handleOpen(<Community />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
        LOCATIONS
        </button>

        <button onClick={() => handleOpen(<Location />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
        COMMUNITY INVOLVEMENT
        </button>
      </div>
    
          
      <div className="flex flex-col-reverse md:flex-row mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <p className="font-serif text-2xl my-2">Our Expertise Makes More Possible</p>
          <p className="font-serif">
            Team1Medical is a division of ExecuTeam Staffing.
            For over 20 years, we have been providing doctors,
            hospitals, and clinical facilities with star employees
            for a myriad of healthcare positions to deliver top-notch
            patient care while cost-effectively managing changes in demand.
          </p>

          <p className="mt-5 font-serif">
            Our team is passionate about helping our clients maximize their
            internal resources through strategic healthcare staffing solutions.
            That passion shines through in each candidate placement, and it has
            helped us become one of the most trusted medical resources in the
            Houston area. Placing top professionals in healthcare jobs in Houston,
            TX is only a small part of what we do and our history has proven that
            we are committed to your success!
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img src="./assets/covid.jpg" alt="nurse" className="w-full rounded-full" />
        </div>
      </div>

      <div className="mx-10">

      <div className="sm:flex">
  <div className="sm:w-1/2"> {/* On small screens (sm), take half of the width */}
    <p className="text-2xl font-bold font-serif mt-5">Mission</p>
    <ul>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Trusted partnerships through honesty and mutual respect.</li>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Exceeding expectations for care and compassion.</li>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Adapting to and anticipating the ever-changing need of employees and the workplace.</li>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Maintaining healthcare standards and compliance.</li>
    </ul>
  </div>

  <div className="sm:w-1/2"> {/* On small screens (sm), take half of the width */}
    <p className="text-2xl font-bold font-serif mt-5">Core Values</p>
    <ul>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Operate business and life with honesty and integrity.</li>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Treat everyone with dignity and respect.</li>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Have a team-driven environment that is positive, fun, and professional.</li>
      <li className="list-disc font-serif my-1 mx-2 sm:mx-10">Know that excellence is not an event…it’s a habit!</li>
    </ul>
  </div>
</div>





        <div>
          <p className="text-2xl font-bold font-serif mt-5">Vision</p>
          <p className="font-serif">Team1Medical is committed to being a nationwide resource in enriching lives, nurturing patient/provider relationships, and empowering success in healthcare organizations.</p>
        </div>

        <div>
          <p className="text-2xl font-bold font-serif mt-5">Why Team1Medical?</p>
          <ul>
            <li className="list-disc font-serif my-1 mx-10">Our award-winning service is built through referrals and relationships.</li>
            <li className="list-disc font-serif my-1 mx-10">Our certified industry experts connect top talent with top companies.</li>
            <li className="list-disc font-serif my-1 mx-10">We are solution-focused with our client-partner approach.</li>
            <li className="list-disc font-serif my-1 mx-10">Our determination and dedication have driven results for over 20 years!</li>
          </ul>
        </div>
        
      </div>

    </div>
  )
}

export default About