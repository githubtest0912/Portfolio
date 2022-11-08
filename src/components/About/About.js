import React from "react";
import "./About.css";
import img from "../../assets/images/girl.png";
const About = () => {
  return (
    <div>
      <section className="about">
        <div className="container">
          <div className="row">
            {/* // heading About */}
            <div className="col-12 text-center py-4">
              <h1>About</h1>
              <hr />
            </div>
          </div>
        </div>
        {/* // left side */}

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <img src={img} alt="" height="300px" width="300px" />
            </div>
            {/* // right side */}

            <div className="col-md-6 my-5">
              <h1 className="display-5 mb-4">Selvarani</h1>
              <p className="lead mb-5">
                Build websites and ensure they perform reliably and efficiently.
                Designing user interfaces and navigation menus. Writing and
                reviewing code for sites, typically HTML, XML, or JavaScript.
                Integrating multimedia content onto a site. Testing web
                applications. Troubleshooting problems with performance or user
                experience Collaborating with designers, and developers
              </p>

              {/* // progress */}
              <div className="progress my-4" style= {{ height:"30px"}}>
                <div
                 className="progress-bar bg-success"
                  role="progressbar"
                  aria-label="Success example"
                  style={{width: "80%"}}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >HTML / HTML5</div>
                <span className='pro'>80%</span>
              </div>

              <div className="progress my-4" style= {{ height:"30px"}}>
                <div
                 className="progress-bar bg-info"
                  role="progressbar"
                  aria-label="Info example"
                  style= {{width: "70%"}}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >CSS / CSS3</div>
                 <span className='pro'>70%</span>
              </div>

              <div className="progress my-4" style= {{ height:"30px"}}>
                <div
                 className="progress-bar bg-warning"
                  role="progressbar"
                  aria-label="Warning example"
                  style= {{width: "60%"}}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  JavaScript
                </div>
                 <span className='pro'>60%</span>
              </div>

              <div className="progress my-4" style= {{ height:"30px"}}>
                <div
                 className="progress-bar bg-danger"
                  role="progressbar"
                  aria-label="Danger example"
                  style= {{width: "50%"}}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                > React</div>
                 <span className='pro'>50%</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
