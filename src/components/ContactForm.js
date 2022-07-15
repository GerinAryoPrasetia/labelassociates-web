import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";
import Navbar from "./Navbar/Navbar";
import { NavLink } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Loading from "./Loading";

import { FaInstagram, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [clickedOne, setClickedOne] = useState(false);
  const [clickedTwo, setClickedTwo] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.container_form}>
      <Navbar />
      <div className={styles.main_content_about}>
        <div class={styles.side_container}>
          <div class={styles.side_content}>
            {/* <h1>LabelAssociates</h1> */}
            <NavLink to="/contact-form" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div className={styles.item_container}>
                  <p
                    className={
                      isActive ? styles.side_item_active : styles.side_item
                    }
                  >
                    Contact Form
                  </p>
                </div>
              )}
            </NavLink>
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <div className={styles.item_container}>
                  <p
                    className={
                      isActive ? styles.side_item_active : styles.side_item
                    }
                  >
                    Location
                  </p>
                </div>
              )}
            </NavLink>
          </div>
          <div className={styles.contact_container}>
            <div className={styles.contact_content}>
              <FaPhoneAlt />
              <span>(022) 20515404</span>
            </div>
            <div className={styles.contact_content}>
              <FaInstagram />
              <span>@label.associates</span>
            </div>
            <div className={styles.contact_content}>
              <FaRegEnvelope />
              <span>label.assoc@gmail.com</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.container_content_form}>
            <div className={styles.container_step}>
              <div
                className={
                  clickedOne ? styles.overlay_showing : styles.overlay_hidden
                }
              ></div>
              <h3>Step 1</h3>
              <span>Information</span>
              <div className={styles.form_wrapper}>
                <label for="name">Full Name</label>
                <input type="text" name="name" placeholder="Full Name" />
              </div>
              <div className={styles.form_wrapper}>
                <label for="name">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email Address"
                />
              </div>
              <div className={styles.form_wrapper}>
                <label for="phone">Phone Number</label>
                <input type="number" name="phone" placeholder="Phone Number" />
              </div>
              <div
                className={styles.btn_next}
                onClick={() => setClickedOne(true)}
              >
                Next
              </div>
            </div>
            <div className={styles.container_step}>
              <div
                className={
                  clickedOne && !clickedTwo
                    ? styles.overlay_hidden
                    : styles.overlay_showing
                }
              ></div>
              <h3>Step 2</h3>
              <span>Building Information</span>
              <div className={styles.form_wrapper}>
                <label for="type">Building Type</label>
                <select name="type">
                  <option value="Rumah">Rumah</option>
                  <option value="Interior">Interior</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div className={styles.form_wrapper}>
                <label for="luas">Building Area</label>
                <input
                  type="text"
                  name="luas"
                  placeholder="Dalam Meter Persegi"
                />
              </div>
              <div className={styles.form_wrapper}>
                <label for="location">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Building Location"
                />
              </div>
              <div
                className={styles.btn_next}
                onClick={() => setClickedTwo(true)}
              >
                Next
              </div>
            </div>
            <div className={styles.container_step}>
              <div
                className={
                  clickedTwo ? styles.overlay_hidden : styles.overlay_showing
                }
              ></div>
              <h3>Step 3</h3>
              <span>Messages and Submit</span>
              <div className={styles.form_wrapper}>
                <label for="message">Messages</label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Write Any Message to Our Team"
                />
              </div>

              {submitSuccess ? (
                <p style={{ marginTop: 20, fontWeight: "bold" }}>
                  We will send offering to your email!
                </p>
              ) : (
                <input type="submit" className={styles.btn_next} />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
