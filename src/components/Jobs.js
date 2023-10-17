import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import HireingProcess from './modals/HireingProcess';
import Benefits from "./modals/Benefits"
import Refer from './modals/Refer';
import Onboarding from "./modals/Onboarding"
import Faq from './modals/Faq';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



// Styling for Modal
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




const Jobs = () => {


  const [open, setOpen] = React.useState(false);
  const [modalComponent, setModalComponent] = React.useState(null);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleOpen = (modalComponent) => {
    setOpen(true);
    setModalComponent(modalComponent);
  };

  const handleClose = () => {
    setOpen(false);
    setModalComponent(null);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }

  // To generate current date
  // const currentDate = new Date().toLocaleDateString(undefined, {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });


  return (
    
      <div className='flex-wrap '> 

      <div className='bg-blue-200 p-5 '>
      <p className='font-serif text-4xl text-white'>JOB SEAKERS</p>
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
            {modalComponent}
          </Box>
        </Modal>

        <button onClick={() => handleOpen(<HireingProcess />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
          HIRING PROCESS
        </button>

          {/* To be added later */}
        {/* <button onClick={() => handleOpen(<Faq />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
          FAQ
        </button> */}

        <button onClick={() => handleOpen(<Benefits />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
          BENEFITS
        </button>

        {/* <button onClick={() => handleOpen(<Onboarding />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
          ONBOARDING AND ENROLLMENT
        </button> */}
{/* 
        <button onClick={() => handleOpen(<Refer />)} className="flex-grow rounded-xl text-center text-sm font-serif border hover:bg-blue-200 cursor-pointer p-2">
          REFER A FRIEND
        </button> */}

      </div>

      <div className="flex flex-col-reverse md:flex-row my-10 mx-5">
        <div className="w-full md:w-1/2">
          <p className="font-serif text-4xl">Don’t just “find a job.” Build a healthcare career you <i>love</i>.</p>
          <p className="font-serif">Morgans Med Staffing is one of the most trusted medical staffing agencies serving the healthcare employment needs. Whether you’re an experienced professional or just launching your career, Morgans Med Staffing can be a partner in your success, providing:</p>
          <ul className="my-2 mx-10">
            <li className="list-disc font-serif my-1">
              <b>Respect, attention, and care.</b> We’ll learn who you are as a person and a professional – your strengths, interests, skills, goals, and personality – to find your perfect employment match. We won’t merely put you in a job; we’ll provide the resources and guidance to help you grow in your profession.
            </li>
            <li className="list-disc font-serif my-1">
              <b>Flexibility, variety, and opportunity.</b> Control your schedule. Choose the opportunities that fit your needs and fulfill your professional aspirations. Direct positions and temporary/PRN/per diem assignments are available immediately.
            </li>
            <li className="list-disc font-serif my-1">
              <b>Access to best employers.</b>Morgans Med Staffing has built strong partnerships with the most trusted and well-known healthcare organizations. We’ll connect you to the hidden job market, providing access to opportunities that never get advertised.
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <img src="./assets/n6.jpg" alt="nurse" className="w-full rounded-3xl" />
        </div>
      </div>

      <div className='flex-wrap '>
        <div className='mx-10'>
          <p className='text-3xl font-serif my-4'>Healthcare Professionals Morgans Med Staffing Places:</p>

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
        </div>
      </div>


          {/* PENDING */}
      {/* <div className='flex-wrap my-10'>
        <p className='text-2xl font-serif mx-10'><a href='' className='hover:underline hover:text-blue-300'>Apply with Morgans Med Staffing online</a> or <a href='' className='hover:underline hover:text-blue-300'>contact us</a> for more information.</p>
      </div> */}


    </div>
  )
}

export default Jobs