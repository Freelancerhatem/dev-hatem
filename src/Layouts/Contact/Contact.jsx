import { useRef } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { MdMarkEmailUnread } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w4h9dnv",
        "template_fjjf6na",
        e.target,
        "uvSy1pe9ap-JM7kRS"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-12 lg:py-24 px-4 lg:px-16 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-6 rounded-lg shadow-lg lg:w-1/2"
        >
          <h2 className="text-2xl text-center md:text-left mb-4">
            Send me a message
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="user"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                rows="6"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-green-400 hover:bg-green-400 text-white py-2 rounded-lg  transition-colors"
          >
            Send Email
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-12  lg:mt-0 lg:w-1/2 rounded-lg shadow-lg p-6 bg-green-400 text-white">
          <h2 className="text-2xl text-center md:text-left mb-4">
            Contact Information
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <MdMarkEmailUnread className="text-3xl" />
              <div>
                <h3 className="text-xl ">Email</h3>
                <p className="mt-1">hatem5373@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoCallOutline className="text-3xl" />
              <div>
                <h3 className="text-xl ">Phone</h3>
                <p className="mt-1">+88 01609342968</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CiLocationOn className="text-3xl" />
              <div>
                <h3 className="text-xl ">Address</h3>
                <p className="mt-1">Jamalpur, Mymensingh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
