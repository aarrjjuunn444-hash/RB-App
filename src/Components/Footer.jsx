import React from 'react'

function Footer() {
  return (
    <div>
       <footer
      className="text-white mt-5"
      style={{ backgroundColor: "#2563eb" }}
    >
      <div className="container py-5">
        <div className="row">

          <div className="col-md-4">
            <h3 className="fw-bold">ResumeBuilder</h3>
            <p>
              Create your professional resume easily and quickly.
              Build your career with confidence.
            </p>
          </div>

          <div className="col-md-2">
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>Templates</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div className="col-md-3">
            <h5>Features</h5>
            <p>✓ Easy Resume Builder</p>
            <p>✓ Professional Templates</p>
            <p>✓ Live Preview</p>
            <p>✓ Download Resume</p>
          </div>

          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>📧 support@resumebuilder.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Kerala, India</p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-1">
            © 2026 ResumeBuilder. All Rights Reserved.
          </p>
          <small>Build Your Resume. Build Your Future.</small>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
