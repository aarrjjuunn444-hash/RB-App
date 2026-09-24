import React from 'react'
import { Link } from 'react-router-dom'
import { IoDocumentText } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";

function Resumesteps() {
  return (
    <div>
      <div style={{ minHeight: '90vh' }} className='mt-5'>

        <h1 className="text-center">
          Create an ATS Friendly Resume in Minutes with AI
        </h1>

        <div className="container mt-5">
          <div className="row">

            <div className="col-md-1"></div>

            <div className="col-md-4 rounded p-5 shadow text-center">
              <IoDocumentText className='fs-1 text-primary mb-3'/>
              <h4>Add Your Details</h4>
              <p>Our AI will generate Skills & Summary</p>
              <h5>Step 1</h5>
            </div>

            <div className="col-md-2"></div>

            <div className="col-md-4 rounded p-5 shadow text-center">
            <FaFileDownload className='fs-1 text-danger mb-3'/>
            <h4>Download your Resume</h4>
            <p>Download CV as PDF and Start applying</p>
            <h5>Step 1</h5>
            </div>

            <div className="col-md-1"></div>

          </div>
        </div>

        <div className="mt-5 text-center">
          <Link to={'/form'} style={{ backgroundColor: '#225fd0' }}className='btn text-light'>
            Let's 
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Resumesteps