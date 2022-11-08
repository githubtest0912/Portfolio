import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const submitHandle = (e) => {
    // to prevent page to reload
    e.preventDefault();
    // \n used to print next line
    alert(
      `Name: ${data.name}, \n 
      Email: ${data.email},\n 
      Message: ${data.msg}`
    );
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    // get the value while enter the form
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-4 mb-5">
              <h1 className="display-5 ">Contact</h1>
              <hr />
            </div>
          </div>

          <div className="container">
            <div className="row  d-flex justify-content-center">
              <div className="col-md-8 mb-5">
                <form onSubmit={submitHandle}>
                  <div className="mb-3">
                    <div className="mb-3">
                      <label htmlhtmlFor="fullName" className="form-label">
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="name"
                        value={data.name}
                        onChange={handleInput}
                      />
                    </div>

                    <label htmlhtmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      name="email"
                      value={data.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Example textarea
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="msg"
                      value={data.msg}
                      onChange={handleInput}
                    ></textarea>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
