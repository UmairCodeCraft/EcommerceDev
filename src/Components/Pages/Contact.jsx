import React from "react";
import Contact_img from "../../Images/message_contact.avif";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-12">
            <h1>Have some Question?</h1>
          </div>
        </div>
        <div className="row pt-4 gy-3">
          <div className="col-lg-5">
            <img src={Contact_img} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 offset-lg-1">
            <form>
              <div class="mb-3">
                <label for="FullName" class="form-label col-form-label-lg">
                  Full Name:
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Enter your full name"
                  id="FullName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="Contact_Email" class="form-label col-form-label-lg">
                  Email address:
                </label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="Contact_Email"
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label col-form-label-lg"
                >
                  Textarea
                </label>
                <textarea
                  class="form-control form-control-lg"
                  placeholder="Enter your Message"
                  id="Textarea"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-outline-primary btn-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
