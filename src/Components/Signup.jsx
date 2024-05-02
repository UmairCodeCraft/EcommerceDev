import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
const Signup = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary ms-lg-auto d-flex align-items-center justify-content-center gap-lg-3 gap-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <GroupAddIcon />
        Register
      </button>

      <div
        className="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signupModalLabel1">
                Signup
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-outline-primary mb-2 w-100 d-flex align-items-center justify-content-center gap-3">
                <FacebookOutlinedIcon />
                Login with facebook
              </button>
              <button className="btn btn-outline-primary mb-2 w-100 d-flex align-items-center justify-content-center gap-3">
                <GoogleIcon fontSize="small" />
                Login with Google
              </button>

              <form>
                <div className="mb-3">
                  <label for="Signup_Username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="signup_Username"
                    aria-label="Username"
                  />
                </div>
                <div className="mb-3">
                  <label for="Signup_Email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="signup_email"
                  />
                </div>
                <div class="mb-3">
                  <label for="signup_Password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="signup_Password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Check2"
                  />
                  <label className="form-check-label" for="Check2">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary register_btn w-100"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
