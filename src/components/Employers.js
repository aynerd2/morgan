import React, {useState, useEffect} from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Sp from "../components/modals/Sp"
import Sa from "../components/modals/Sa"
import So from "../components/modals/So"
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import PieChartComponent from "./Piechartcomp";
import { BsPeople, BsFillCheckSquareFill } from "react-icons/bs";

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';




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


// Styling for Accordion
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));






const Employers = () => {

  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalC, setModalC] = useState(null);
  const [expanded, setExpanded] = React.useState('panel1');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }


  const handleOpen = (modalC) => {
    setOpen(true);
    setModalC(modalC);
  };

  const handleClose = () => {
    setOpen(false);
    setModalC(null);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 90) {
        setCount(count + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count]);


  return (


    <div>

      <div class="relative">
        <img src="./assets/nl.jpg" alt="cover" class="inset-0 object-cover w-full" />
        <div class="absolute inset-0 bg-black opacity-40"></div>

        <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p class="text-4xl md:text-6xl font-serif text-center md:text-left">Build your career with</p>
          <p class="text-3xl md:text-5xl font-serif font-semibold text-white text-center md:text-left">Morgans Med Staffing</p>
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
      <p className='font-serif text-4xl text-white p-10'>EMPLOYERS</p>
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

        <button onClick={() => handleOpen(<So />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
        SERVICE OVERVIEW
        </button>

        <button onClick={() => handleOpen(<Sp />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
        SERVICE PROCESS
        </button>

        <button onClick={() => handleOpen(<Sa />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
        CLEARLYRATED’S BEST OF STAFFING® AWARD
        </button>


      </div>
    


      <div className="mx-10 mt-10">

          <p className="text-4xl my-4 font-serif">A Passion for Healthcare Staffing. Measurable Results.</p>
          <p className="font-serif">Team1Medical, leading healthcare recruiters in Houston,
             has a knack for spotting – and placing – top medical talent.
              We’re different than other healthcare employment<br/> 
              agencies in Houston because we genuinely love what we do, 
            and it shows:</p>

        <div className="flex-wrap">

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-5">
            <div className="text-center md:text-left">
              <p className="text-4xl md:text-5xl text-black font-serif font-bold my-2">{count}%</p>
              <BsPeople style={{ color: '#90CAF9', fontSize: '150px' }} />
              <p className="font-serif text-center md:text-left">
                offers to candidates <br /> that resulted in a successful hire
              </p>
            </div>

            <div className="text-center md:text-left mt-4 md:mt-0">
              <p className="text-4xl md:text-5xl text-black font-serif font-bold my-2">{count}%</p>
              <BsFillCheckSquareFill style={{ color: '#90CAF9', fontSize: '150px' }} />
              <p className="font-serif text-center md:text-left">
                of our assigned employees <br /> result in direct hires.
              </p>
            </div>

            <div className="text-center md:text-left mt-4 md:mt-0">
              <PieChartComponent />
              <p className="font-serif text-center md:text-left">
                Team1Medical candidate <br /> resumes result in an interview
              </p>
            </div>
          </div>

        </div>


          <div className="flex-wrap mt-20">

          <div className="px-4 sm:px-6 md:px-8">
          
          <p className="text-3xl font-serif my-4">Healthcare Professionals Team1Medical Places:</p>
          <p className="font-serif">Serving doctor’s offices, clinics, hospitals, patient health centers, and diagnostic imaging centers in the Houston area:</p>
          <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Allied Health Professionals:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li className="list-disc font-serif my-1 mx-10">Dietitian/Nutritionist</li>
                    <li className="list-disc font-serif my-1 mx-10">Diagnostic Medical Sonographist</li>
                    <li className="list-disc font-serif my-1 mx-10">Medical Assistant</li>
                    <li className="list-disc font-serif my-1 mx-10">Epidemiologist</li>
                    <li className="list-disc font-serif my-1 mx-10">Phlebotomist</li>
                    <li className="list-disc font-serif my-1 mx-10">Surgical Technologist</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Nurses:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li className="list-disc font-serif my-1 mx-10">Registered Nurse</li>
                    <li className="list-disc font-serif my-1 mx-10">Licensed Vocational Nurse</li>
                    <li className="list-disc font-serif my-1 mx-10">Operating Room Nurse</li>
                    <li className="list-disc font-serif my-1 mx-10">Case Management Nurse</li>
                    <li className="list-disc font-serif my-1 mx-10">Clinical Nurse Manager</li>
                    <li className="list-disc font-serif my-1 mx-10">Triage Nurse – Specialty Clinic</li>
                    <li className="list-disc font-serif my-1 mx-10">Pre-Op Nurse</li>
                    <li className="list-disc font-serif my-1 mx-10">PACU Nurse</li>
                    <li className="list-disc font-serif my-1 mx-10">Cath Lab Nurse</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Medical Financial Services Professionals:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className='flex justify-around items-center'>
                    <ul>
                      <li className="list-disc font-serif my-1">Accountant</li>
                      <li className="list-disc font-serif my-1">Accounting Coordinator</li>
                      <li className="list-disc font-serif my-1">Accounting Clerk</li>
                      <li className="list-disc font-serif my-1">Medical Biller</li>
                      <li className="list-disc font-serif my-1">Medical Coder</li>
                      <li className="list-disc font-serif my-1">Accounts Receivable Analyst</li>
                    </ul>


                    <ul>
                      <li className="list-disc font-serif my-1">Accounts Receivable Specialist</li>
                      <li className="list-disc font-serif my-1">Collections Specialist</li>
                      <li className="list-disc font-serif my-1">Claims Examiner</li>
                      <li className="list-disc font-serif my-1">Customer Service Representative</li>
                      <li className="list-disc font-serif my-1">Medical Claims Specialist</li>
                      <li className="list-disc font-serif my-1">Financial Analyst</li>
                    </ul>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Administrative Support:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li className="list-disc font-serif my-1 mx-10">Medical Office Specialist</li>
                    <li className="list-disc font-serif my-1 mx-10">Scheduler</li>
                    <li className="list-disc font-serif my-1 mx-10">Insurance Verification Specialist</li>
                    <li className="list-disc font-serif my-1 mx-10">Clinic Coordinator</li>
                    <li className="list-disc font-serif my-1 mx-10">Office Manager</li>
                    <li className="list-disc font-serif my-1 mx-10">Receptionist</li>
                    <li className="list-disc font-serif my-1 mx-10">Administrative Assistant</li>
                    <li className="list-disc font-serif my-1 mx-10">Executive Assistant</li>
                    <li className="list-disc font-serif my-1 mx-10">Human Resource Assistant</li>
                    <li className="list-disc font-serif my-1 mx-10">File Clerk</li>
                    <li className="list-disc font-serif my-1 mx-10">General Clerk</li>
                    <li className="list-disc font-serif my-1 mx-10">Member Service Associate</li>
                    <li className="list-disc font-serif my-1 mx-10">Staffing Coordinator</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Radiology/Imaging:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li className="list-disc font-serif my-1 mx-10">Radiological Technologist (ARRT & LMRT)</li>
                    <li className="list-disc font-serif my-1 mx-10">CT Technologist</li>
                    <li className="list-disc font-serif my-1 mx-10">MRI Technologist</li>
                    <li className="list-disc font-serif my-1 mx-10">Sonographer</li>
                    <li className="list-disc font-serif my-1 mx-10">Medical Assistant</li>
                    <li className="list-disc font-serif my-1 mx-10">Clinic Coordinator</li>
                    <li className="list-disc font-serif my-1 mx-10">Medical Office Specialist</li>
                    <li className="list-disc font-serif my-1 mx-10">Scheduler</li>
                    <li className="list-disc font-serif my-1 mx-10">Mammographer</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Dental – Clinical & Administrative:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li className="list-disc font-serif my-1 mx-10">Dental Assistant</li>
                    <li className="list-disc font-serif my-1 mx-10">Dental Hygienist</li>
                    <li className="list-disc font-serif my-1 mx-10">Lab Technician/Ceramist</li>
                    <li className="list-disc font-serif my-1 mx-10">Front Office Specialist</li>
                    <li className="list-disc font-serif my-1 mx-10">Treatment Coordinator</li>
                    <li className="list-disc font-serif my-1 mx-10">Clinic Coordinator</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>

            <div className="mt-10">
          <p className='text-3xl font-serif my-4'>Bring Team1Medical professionals onto your team today!</p>
          <p className="font-serif">Call 713.590.2980 or email us today!</p>
          </div>
          </div>


          </div>
      </div>


    </div>


  )
}

export default Employers