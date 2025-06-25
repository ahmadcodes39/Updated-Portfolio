import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading,setLoading] = useState(false)

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm(
        "service_xrhja9q",     // Replace with your EmailJS Service ID
        "template_0m01h3j",    // Replace with your EmailJS Template ID
        form.current,
        "KsAWXPZVaJsxAAfrQ"      // Replace with your EmailJS Public Key (not secret)
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          // Reset form
          setData({ name: "", email: "", subject: "", message: "" });
          setLoading(false)
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center sm:px-6 py-8" id="contact">
      <h2 className="text-4xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wide mt-12 mb-10 text-center">
        Let's Connect Together
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="contactUs.svg"
            alt="Contact Us"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 bg-base-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Contact Me
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={data.name}
              onChange={handleonChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleonChange}
              placeholder="Email Address"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={handleonChange}
              placeholder="Subject"
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              value={data.message}
              onChange={handleonChange}
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full mt-2">
             {loading?(<span className="loading loading-spinner text-primary"></span>):"Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
