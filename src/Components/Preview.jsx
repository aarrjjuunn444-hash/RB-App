import React from 'react'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'

function Preview({ resumeData }) {
  return (
    <>
      <div className="w-100">
        <h2>{resumeData?.fullName}</h2>
        <p className="fs-6 lh-1">{resumeData?.phone}</p>
        <p className="fs-6 lh-1">{resumeData?.email}</p>
        <p className="fs-6 lh-1">{resumeData?.linkedin}</p>
        <p className="fs-6 lh-1">{resumeData?.github}</p>
        <p className="fs-6 lh-1">{resumeData?.location}</p>

        <Divider className="bg-dark my-3" />

        <h4>Professional Summary</h4>
        <p>{resumeData?.summary}</p>

        <Divider className="bg-dark my-3" />

        <h4>Technical Skills</h4>

        {resumeData?.skills?.map(skill => (
          <span key={skill}>
            <Button variant="text" className="text-dark">
              {skill}
            </Button>
          </span>
        ))}

        <Divider className="bg-dark my-3" />

        <h4>Education</h4>

        <p className="fs-6 lh-1">
          Bachelor's Degree in {resumeData?.degree}
        </p>

        <p className="fs-6 lh-1">
          College/University Name: {resumeData?.collage}
        </p>

        <p className="fs-6 lh-1">
          Year of Graduation: {resumeData?.year}
        </p>
      </div>
    </>
  )
}

export default Preview