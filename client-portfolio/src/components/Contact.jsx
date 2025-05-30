import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

let url = "https://portfolio-react-express-backend.onrender.com";

const Contact = () => {
  const [context, Setcon] = useState("");
  const [subject, Setsub] = useState("");
  const [sender, Setemail] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading
  const [responseMessage, setResponseMessage] = useState(""); // State to show backend response

  const handlemail = async () => {
    setLoading(true); // Start loading
    setResponseMessage(""); // Clear any previous response message

    try {
      const response = await axios.post(`${url}/bulkmail`, {
        context,
        subject,
        sender,
      });
      console.log(response.data);
      setResponseMessage("Message sent successfully!"); // Set success message
    } catch (err) {
      console.error(err);
      setResponseMessage("Failed to send the message. Please try again."); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-[full] h-[100vh]">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <Link to={"/"}>
            <button className="bg-[#365FA0] py-2 px-5 rounded-xl absolute top-[30px] left-[50px] hover:opacity-85">
              Back
            </button>
          </Link>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent form submission
              handlemail();
            }}
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                value={sender}
                onChange={(ev) => {
                  Setemail(ev.target.value);
                  console.log("email:" + sender);
                }}
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(ev) => {
                  Setsub(ev.target.value);
                  console.log("Subject:" + subject);
                }}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                value={context}
                onChange={(ev) => {
                  Setcon(ev.target.value);
                  console.log("Context: " + context);
                }}
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-sm font-medium text-gray-900 dark:text-white">
              {responseMessage}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
