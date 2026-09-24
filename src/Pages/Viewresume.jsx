import React, { useEffect, useRef, useState } from 'react'
import Preview from '../Components/Preview'
import { FaDownload } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { downloadResumeAPI, viewResumeAPI } from '../services/allAPI';
import { Link,useParams } from 'react-router-dom';
import Edit from '../Components/Edit';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Viewresume() {
 
  const{id}=useParams()
  const[resume,setResume]=useState({})
  const Previewref=useRef()
//console.log(resume);

useEffect(()=>{
  getAresume()
},[])

  const getAresume=async()=>{
    const response=await viewResumeAPI(id)
    if(response.status=="200"){
      setResume(response.data) 
    }
  }
  const downloadCv=async()=>{
    const previewtag=Previewref.current
    const canvas=await html2canvas(previewtag)
   // generating img link 
     canvas.toBlob(async(imgFile)=>{
      const formData=new FormData()
     formData.append("file",imgFile)
     formData.append("upload_preset","rbuild")
     const result =await fetch('https://api.cloudinary.com/v1_1/cm5xh0cq/auto/upload',{method:"POST",body : formData})
     const serverData=await result.json ()
     //console.log(serverData);
     const url=serverData.secure_url 
     //console.log(url);
     generatePDF(url)
     })
     
  }
 
  const generatePDF=async(resumeImg)=>{
    let today= new Date()
    //console.log(today);
    let timestamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`;
    const pdf= new jsPDF();
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg,"PNG",0,0,imageWidth,imageHeight)

    const downloadDetails={
      timestamp,resumeId:id,resumeImg,jobRole:resume.job
    }
    const result =await downloadResumeAPI(downloadDetails)

    if(result.status===201){
      pdf.save(`${resume.fullName}-CV.pdf`)
    }
  }
  return ( 
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-2"> </div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center">
{/* download */}
          <button onClick={downloadCv} style={{color:'#5571cd'}} className='btn'><FaDownload className='fs-4' />Download CV</button>
{/* edit */} 
          <Edit resumeData={resume} setResumeData={setResume} />
          {/* back */}
          <Link to={''} style={{color:'#ce142d'}} className="btn"><FaBackward className='fs-4' />Back to Home</Link>
          </div>
          <div ref={Previewref} className="p-5">
            <Preview resumeData={resume}/>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Viewresume
