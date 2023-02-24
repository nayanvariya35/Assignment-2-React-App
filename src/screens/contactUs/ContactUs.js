import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    if (name === "") {
      alert("Please enter name");
    } else if (email === "") {
      alert("Please enter email");
    } else if (!isValidEmail(email)) {
      alert("Please enter valid email id");
    } else if (message === "") {
      alert("Please enter your message");
    } else {
      alert(
        `Your below details have been submitted. Name: ${name}   email:${email}   message:${message}  `
      );
    }
  };

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  return (
    <div>
      <section className="doctors">
        <div style={{ padding: 1 }}>
          <p>
            Dr John Doe <br />
            Contact No: +1 876-556-2563 <br />
            E-mail : drjd@gmail.com <br />
            Speciality:- Surgeon
          </p>
        </div>

        <div className="docContainer2" style={{ padding: 1 }}>
          <p>
            Dr Chris Patt <br />
            Contact No: +1 773-987-5346 <br />
            E-mail : drchris@gmail.com <br />
            Speciality:- Cardiologist
          </p>
        </div>
      </section>

      <section>
        <div className="w-80">
          <div className="form-box">
            <form name="contact">
              <label for="fullname">
                <b>Your name :</b>
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{ width: "80%", maxWidth: 600 }}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
              <br />
              <br />

              <label for="email">
                <b>Email :</b>
              </label>
              <br />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{ width: "80%", maxWidth: 600 }}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
              <br />
              <br />

              <label for="message">
                <b>Your message :</b>
              </label>
              <br />
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                style={{ padding: 10, width: "80%", maxWidth: 600 }}
                className="form-control"
                rows="5"
                cols="100"
                id="comment"
                placeholder="Enter your message"
              ></textarea>
              <br />
              <br />

              <button
                onClick={submitForm}
                type="button"
                style={{
                  width: 100,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: "blue",
                  borderWidth: 0,
                  justifyContent: "center",
                  alignItems: "center",
                  display:'flex'
                }}
              >
                <text style={{ color: "white", fontSize: 16,alignSelf:'center' }}>
                  Submit
                </text>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
