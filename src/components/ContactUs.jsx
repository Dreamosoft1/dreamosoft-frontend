import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  function sendMessage(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="fullName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && phone && message) {
      setLoading(true);
      console.log("sending message...");
      axios
        .post("https://dreamosft.vercel.app/contact/", {
          name,
          email,
          phone,
          message,
        })
        .then((res) => {
          toast.success("Message sent successfully");
          setLoading(false);
          document.querySelector("form").reset();
        })
        .catch((err) => {
          toast.error("An error occurred while sending the message");
          setLoading(false);
        });
    } else {
      alert("Please fill all the fields");
      setLoading(false);
    }
  }
  return (
    <section
      className="w-full py-12 md:py-24 px-4 dark:bg-[#2C375A]"
      id="contact"
    >
      <div
        data-aos="fade-up"
        className="w-full flex flex-col items-center justify-center"
      >
        <h3 className="text-3xl font-bold text-section-heading mb-6 dark:text-white">
          Contact Us
        </h3>
        <div className="flex items-center justify-center gap-3">
          <span className="w-10 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
          <p className="text-section-label text-sm md:text-[16px]">
            Message Us and We Will Get Back To You
          </p>
          <span className="w-10 md:w-20 h-[4px] rounded-full shadow-xl bg-section-label"></span>
        </div>

        <form action="" className="w-full mt-8 md:mt-16 max-w-3xl mx-auto">
          <div className="w-full">
            <input
              type="text"
              className="w-full bg-[#B7DBEB] dark:bg-[#010833] dark:text-white rounded-[5px] py-3 border-[1px] border-[#00CB5157] !focus:outline-0"
              placeholder="Enter Full Name"
              aria-label="Enter Full Name"
              name="fullName"
            />
          </div>
          <div className="flex items-center w-full gap-4 mt-4 md:mt-8">
            <div className="w-full">
              <input
                type="email"
                className="w-full bg-[#B7DBEB] dark:bg-[#010833] dark:text-white rounded-[5px] py-3 border-[1px] border-[#00CB5157] !focus:outline-0"
                placeholder="Enter Email Address"
                aria-label="Enter Email Address"
                name="email"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="w-full bg-[#B7DBEB] dark:bg-[#010833] dark:text-white rounded-[5px] py-3 border-[1px] border-[#00CB5157] !focus:outline-0"
                placeholder="Enter Phone Number"
                aria-label="Enter Phone Number"
                name="phone"
              />
            </div>
          </div>
          <div className="w-full mt-4 md:mt-8">
            <textarea
              type="text"
              className="w-full bg-[#B7DBEB] dark:bg-[#010833] dark:text-white h-48 md:h-64 resize-none rounded-[5px] py-3 border-[1px] border-[#00CB5157] focus:outline-0"
              placeholder="Type your Message"
              aria-label="Type your Message"
              name="message"
            ></textarea>
          </div>
          <button
            {...(loading && { disabled: true })}
            type="button"
            onClick={sendMessage}
            className="text-white bg-primary-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            {loading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Sending message...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
