import React, {useState, useEffect} from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';





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
        <img src="./assets/d1.jpg" alt="cover" className="inset-0 object-cover w-full h-60 md:h-80" />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p className="text-4xl md:text-6xl font-sans text-center md:text-left">Build your career with</p>
          <p className="text-3xl md:text-5xl font-sans font-semibold text-white text-center md:text-left">Morgans Med Staffing</p>
          <hr className="w-2/3 md:w-2/5 border-black border-t-2 my-4" />

          <p className="text-lg md:text-xl font-sans text-center md:text-left mb-4">
            Your trusted partner in healthcare career opportunities.
          </p>

       
        </div>
      </div>

      <div className='bg-blue-200 w-full h-full '>
      <p className='font-sans text-4xl text-white p-5'>EMPLOYERS</p>
      </div>
    
      <div className="mx-5 mt-10">
        <p className="text-4xl my-4 font-sans">A Passion for Healthcare Staffing. Measurable Results.</p>
        <p className="font-sans text-xl">Morgans Med Staffing, leading healthcare recruiters nationwide,
          has a knack for spotting – and placing – top medical talent.
          We’re different than other healthcare employment
          agencies because we genuinely love what we do.</p>

        <div className="flex-wrap mt-10">

          <div className="px-4 sm:px-6 md:px-6">

            <p className="text-3xl font-sans my-4">Healthcare Professionals Morgans Med Staffing Places:</p>
            <p className="font-sans text-xl">Serving doctor’s offices, clinics, hospitals, patient health centers, and diagnostic imaging centers nationwide:</p>
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Allied Health Professionals:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      <li className="list-disc font-sans my-1 mx-10">Dietitian/Nutritionist</li>
                      <li className="list-disc font-sans my-1 mx-10">Diagnostic Medical Sonographist</li>
                      <li className="list-disc font-sans my-1 mx-10">Medical Assistant</li>
                      <li className="list-disc font-sans my-1 mx-10">Epidemiologist</li>
                      <li className="list-disc font-sans my-1 mx-10">Phlebotomist</li>
                      <li className="list-disc font-sans my-1 mx-10">Surgical Technologist</li>
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
                      <li className="list-disc font-sans my-1 mx-10">Registered Nurse</li>
                      <li className="list-disc font-sans my-1 mx-10">Licensed Vocational Nurse</li>
                      <li className="list-disc font-sans my-1 mx-10">Operating Room Nurse</li>
                      <li className="list-disc font-sans my-1 mx-10">Case Management Nurse</li>
                      <li className="list-disc font-sans my-1 mx-10">Clinical Nurse Manager</li>
                      <li className="list-disc font-sans my-1 mx-10">Triage Nurse – Specialty Clinic</li>
                      <li className="list-disc font-sans my-1 mx-10">Pre-Op Nurse</li>
                      <li className="list-disc font-sans my-1 mx-10">PACU Nurse</li>
                      <li className="list-disc font-sans my-1 mx-10">Cath Lab Nurse</li>
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
                        <li className="list-disc font-sans my-1">Accountant</li>
                        <li className="list-disc font-sans my-1">Accounting Coordinator</li>
                        <li className="list-disc font-sans my-1">Accounting Clerk</li>
                        <li className="list-disc font-sans my-1">Medical Biller</li>
                        <li className="list-disc font-sans my-1">Medical Coder</li>
                        <li className="list-disc font-sans my-1">Accounts Receivable Analyst</li>
                      </ul>


                      <ul>
                        <li className="list-disc font-sans my-1">Accounts Receivable Specialist</li>
                        <li className="list-disc font-sans my-1">Collections Specialist</li>
                        <li className="list-disc font-sans my-1">Claims Examiner</li>
                        <li className="list-disc font-sans my-1">Customer Service Representative</li>
                        <li className="list-disc font-sans my-1">Medical Claims Specialist</li>
                        <li className="list-disc font-sans my-1">Financial Analyst</li>
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
                      <li className="list-disc font-sans my-1 mx-10">Medical Office Specialist</li>
                      <li className="list-disc font-sans my-1 mx-10">Scheduler</li>
                      <li className="list-disc font-sans my-1 mx-10">Insurance Verification Specialist</li>
                      <li className="list-disc font-sans my-1 mx-10">Clinic Coordinator</li>
                      <li className="list-disc font-sans my-1 mx-10">Office Manager</li>
                      <li className="list-disc font-sans my-1 mx-10">Receptionist</li>
                      <li className="list-disc font-sans my-1 mx-10">Administrative Assistant</li>
                      <li className="list-disc font-sans my-1 mx-10">Executive Assistant</li>
                      <li className="list-disc font-sans my-1 mx-10">Human Resource Assistant</li>
                      <li className="list-disc font-sans my-1 mx-10">File Clerk</li>
                      <li className="list-disc font-sans my-1 mx-10">General Clerk</li>
                      <li className="list-disc font-sans my-1 mx-10">Member Service Associate</li>
                      <li className="list-disc font-sans my-1 mx-10">Staffing Coordinator</li>
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
                      <li className="list-disc font-sans my-1 mx-10">Radiological Technologist (ARRT & LMRT)</li>
                      <li className="list-disc font-sans my-1 mx-10">CT Technologist</li>
                      <li className="list-disc font-sans my-1 mx-10">MRI Technologist</li>
                      <li className="list-disc font-sans my-1 mx-10">Sonographer</li>
                      <li className="list-disc font-sans my-1 mx-10">Medical Assistant</li>
                      <li className="list-disc font-sans my-1 mx-10">Clinic Coordinator</li>
                      <li className="list-disc font-sans my-1 mx-10">Medical Office Specialist</li>
                      <li className="list-disc font-sans my-1 mx-10">Scheduler</li>
                      <li className="list-disc font-sans my-1 mx-10">Mammographer</li>
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
                      <li className="list-disc font-sans my-1 mx-10">Dental Assistant</li>
                      <li className="list-disc font-sans my-1 mx-10">Dental Hygienist</li>
                      <li className="list-disc font-sans my-1 mx-10">Lab Technician/Ceramist</li>
                      <li className="list-disc font-sans my-1 mx-10">Front Office Specialist</li>
                      <li className="list-disc font-sans my-1 mx-10">Treatment Coordinator</li>
                      <li className="list-disc font-sans my-1 mx-10">Clinic Coordinator</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </div>

            <div className="mt-10">
              <p className='text-3xl font-sans my-4'>Bring Morgans Med Staffing professionals onto your team today!</p>
              <p className="font-sans">Email us  info@morgansmedstaffing.com</p>
            </div>
          </div>


        </div>
      </div>


    </div>


  )
}

export default Employers