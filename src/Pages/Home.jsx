import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div style={{ height: '100vh', backgroundImage: 'url("/landing.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className='d-flex justify-content-center align-items-center'>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.4' }} className='w-50 p-5 rounded text-light text-center'>
          <h1>Designed to get Hired. Your Skills,Yoir Story,Your Next Job -All in One</h1>
          <Link to={'/steps'} style={{ backgroundColor: '#755846' }} className='btn text-light mt-3'>Make Your Resume with AI</Link>
        </div>
      </div>
      {/* about */}
      <div className='container my-5'>
        <h1 className='text-center mb-5'>What's AI Builder</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <p style={{ textAlign: 'justify' }}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{ textAlign: 'justify' }}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{ textAlign: 'justify' }}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{ textAlign: 'justify' }}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <img width={'100%'} height={'550px'} src='/resume.png' alt='resume' />
          </div>
        </div>

      </div>
      {/* banner */}
      <div style={{ height: '80vh', backgroundImage: 'url("/team.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
      {/* testimony */}
      <div className='container my-5'>
        <h1 className='text-center mb-5'>Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <h5>Trusted By Professionals World</h5>
            <p style={{ textAlign: 'justify' }}>
              At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>

            <p style={{ textAlign: 'justify' }}> In fact, users who used rBuilder reported getting hired an average of 48 days faster.
            </p>
            <p style={{ textAlign: 'justify' }}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <div className="row">
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOniQ3ZJ9E_fUp6TcsdQ4OCr9kd8FhoU2wNyj0ENsUwMeLFBlIujWZczQ&s=10" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://www.jobberman.com/discover/wp-content/uploads/2024/05/shutterstock-413274865-1-1024x683.jpg" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://www.yourtango.com/sites/default/files/image_blog/job-seeker-with-ten-years-experience-can-not-get-hired-despite-sending-out-five-hundred-applications.png" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://t3.ftcdn.net/jpg/02/81/42/08/360_F_281420865_iug5lmRJrSnfxxtSWtjQJoAL1Sqv9x7h.jpg" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://blog.glassdoor.com/site-us/wp-content/uploads/sites/2/iStock-800355150.jpg?w=900" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0lmXsYDQyX5c7seIc8XD5vFCsgABMcqQNgtavGEbPrWKUmcHr8mCmvMx&s=10" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://static.vecteezy.com/system/resources/thumbnails/079/375/061/small/confident-businessman-sitting-on-city-steps-holding-a-black-notebook-photo.jpeg" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://thumbs.dreamstime.com/b/new-goals-business-vision-leadership-businessman-suit-boss-man-success-entrepreneur-office-manager-confident-executive-317448077.jpg" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1EVsbADwwjMJTJRptXl3Ctdv06XezMFfJyLOVO1HZFZS_6puP-pWx_nA&s=10" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSjTObp9yMRzmr0paesH7uDglg3q_ZdC1O_6UCQiVTndCGHBZxs5CK2Q&s=10" alt="user"/>
            </div>
            <div className='col-md-3'>
              <img className='img-fluid p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjVTjnve1-iRX1iX9KEqpS695o5-ZPyyYwm-QmVLHjteSL_vZGomph1lU&s=10" alt="user"/>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
  )
}

export default Home