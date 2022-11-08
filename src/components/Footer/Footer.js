import React from 'react'
import './Footer.css'
const footer = () => {
  return (
    <div>
      <footer className = "mt-5 ">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-12 bg-dark text-white">
              <p className="lead text-center pt-3">
                Copyright &copy; 2021 All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer