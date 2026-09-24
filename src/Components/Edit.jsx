import React, { useRef } from 'react'
import { MdEditSquare } from 'react-icons/md';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography' 
import TextField from '@mui/material/TextField'; 
import InputLabel from '@mui/material/InputLabel'; 
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl'; 
import Select from '@mui/material/Select'; 
import jobRole from '../assets/jobRole.json'; 
import { FaXmark } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { updateResumeAPI } from '../services/allAPI';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:"90vh",
  overflowY:"auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Edit({resumeData,setResumeData}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef=useRef();

  const removeSkill=(skill)=>{
    setResumeData({...resumeData,skills:resumeData.skills.filter(item=>item!=skill)})
    toast.warning("Skill Deleted...")
  }


  const addSkill=(skill)=>{
  if(skill){
    if(resumeData?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase())){
      toast.error("The Skill Already Exist")
    }else{
      setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
      toast.success("Skill Added Successfully")
    }
    skillRef.current.value="";

  } else{
    toast.info("Enter a valid Skill")
  } 
  }

   const handleUpdate =async()=>{
      const{fullName,location,job,email,phone,linkedin,github,degree,college,year,skills,summary}=resumeData
      if(fullName && location&&job&&email&&phone&& linkedin&& github&&degree&&college&& year&&skills&&summary){
        
        const response= await updateResumeAPI(resumeData.id,resumeData)
        //console.log(response);
        if(response.status=="200"){
          toast.success("Resume Added Successfully")
          //const resumeId=response.data.id
          setTimeout(()=>{
          handleClose()
          },2000)
        }
      
       } else{
          toast.error("please fill missing fields")
        }
      }


  return (
    <>
     <button onClick={handleOpen} style={{color:'#2d8f18'}} className='btn'>
      <MdEditSquare className='fs-3'/>Edit CV</button> 


      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Box id="modal-modal-title" variant="h6" component="h2">
          <div> 
        <h3>Personal Details</h3> 
        <div className="p-3 row"> 
          <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="FullName" variant="standard" /> 
          <TextField value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-loc" label="Location" variant="standard" /> 
          <FormControl variant='standard'> 
            <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel> 
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Job" value={resumeData?.job} onChange={e=>setResumeData({...resumeData,job:e.target.value})} > 
             {jobRole.jobRoles.map(job=>( 
              <MenuItem key={job} value={job}>{job}</MenuItem> 
             ))  
             } 
            </Select> 
          </FormControl> 
        </div> 
      </div> 
      {/* contact details */}
       <div> 
          <h3>Contact Details</h3> 
          <div className="p-3 row"> 
            <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" /> 
            <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})} id="standard-basic-num" label="Contact Number" variant="standard" /> 
            <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" /> 
            <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})} id="standard-basic-github" label="Github Link" variant="standard" /> 
          </div> 
        </div> 
        {/* education */}
         <div> 
                  <h3>Educational Details</h3> 
                  <div className="p-3 row"> 
                    <TextField value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" /> 
                    <TextField value={resumeData.college} onChange={e=>setResumeData({...resumeData,college:e.target.value})} id="standard-basic-college" label="Collage/Univeresity Name" variant="standard" /> 
                    <TextField value={resumeData.year} onChange={e=>setResumeData({...resumeData,year:e.target.value})} id="standard-basic-year" label="Year Of Graduation" variant="standard" /> 
                  </div> 
                </div> 

                <div>
                  <h3>Skills</h3>
                  <div className="d-flex p-3">
                    <input ref={skillRef} type="text" placeholder='Add New Skill' className='form-control' />
                    <Button onClick={()=>addSkill(skillRef.current.value)} style={{color:'#101210'}}>Add</Button>
                  </div>
                  <h6>Add Skills :</h6>
                  <div className="d-flex p-3 justify-content-between flex-wrap">
                  {resumeData?.skills?.map(skill=>(
                <Button onClick={()=>removeSkill(skill)} key={skill} variant='contained' sx={{backgroundColor:'#0c60de'}}
                className='my-1'>{skill}<FaXmark className='ms-2'/></Button>
                ))}
                  </div>
                </div>
                {/* summary */}
                <div className='p-3 row'>
                 <TextField value={resumeData.summary} onChange={e=>setResumeData({...resumeData,summary:e.target.value})} id="standard-basic-summary" label="Summary" variant="standard" /> 
                </div>
                {/* Update button */}
                <div className="ms-2">
                  <Button onClick={handleUpdate} style={{color:'#f31c1c'}}>UPDATE</Button>
                </div>
                
                </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Edit