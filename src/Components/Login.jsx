import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const Login = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary ms-lg-auto d-flex align-items-center justify-content-center gap-lg-3 gap-2"
        data-bs-toggle="modal"
        data-bs-target="#LoginModal"
      >
        <ExitToAppIcon />
        Login
      </button>

      <div
        className="modal fade"
        id="LoginModal"
        tabindex="-1"
        aria-label="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="LoginModalLabel1">
                Login
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
              {/* <button className="btn btn-outline-primary mb-2 w-100">
                Login with facebook
              </button> */}
              <form>
                <div className="mb-3">
                  <label for="InputEmail" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id=" login_email"
                    aria-label="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="InputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputPassword"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Check"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
