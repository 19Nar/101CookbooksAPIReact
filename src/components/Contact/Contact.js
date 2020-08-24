import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function submitForm(e) {
    e.preventDefault();

    const webhookUrl =
      "https://hooks.slack.com/services/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";

    const data = {
      text: `Name: ${name} \n${email} \n${message}`,
    };

    let res = await axios.post(webhookUrl, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post["Content-Type"];
          return data;
        },
      ],
    });

    if (res.status === 200) {
      alert("Message Sent!");

      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Error.  Please, try again later.");
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2 container mx-auto mt-5">
        <form className="form bg-dark text-white  px-8 pt-6 pb-8 mb-8 self-center">
          <label
            className="block m-2 text-gray-700 text-sm font-bold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label
            className="block m-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label
            className="block m-2 text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none block mr-2 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="message"
            type="message"
            placeholder="Write your message here, please"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <button
            className="mybutton mt-4 shadow bg-dark text-white text focus:outline-none font-bold py-2 px-4 rounded"
            onClick={(e) => submitForm(e)}
          >
            Submit
          </button>
        </form>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
