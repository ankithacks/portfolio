import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_ah4yofq';
      const templateId = 'template_bre1vem';
      const publicKey = 'u4v_EASlPJDnL-2jW';

      const templateParams = {
          from_name: name,
          from_email: email,
          to_name: 'Ankit Chakraborty',
          message: message
      }

      emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
          console.log("Email sent successfully", response);
          toast.success("Message Sent Successfully!")
          setName('');
          setEmail('');
          setMessage('');
      })
      .catch((error) => {
          console.log("Error in sending email:", error);
      })
  }



  return (
    <section className="py-16 px-12 flex flex-col justify-center items-center gap-12 bg-lime">
    <h1 className="text-5xl font-semibold text-blue">
          <span className="text-4xl text-black">{"<"}</span>Contact
          <span className="text-4xl text-black">{"/>"}</span>
        </h1>
        <div className="flex justify-evenly items-center w-full py-6">
        <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-6xl font-semibold">Let&#39;s <span className="text-blue">Connect</span></h1>
          <img src="/assets/contact.gif" className="h-80 rounded-2xl shadow-xl transition ease-in-out delay-150 hover:scale-110 duration-300"/>
        </div>
        <div className="bg-blue py-6 px-6 w-[27rem] rounded-2xl shadow-xl">
        <form onSubmit={handleSubmit}  className="flex flex-col justify-start items-start gap-5">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="py-1 px-2 rounded-lg w-full text-md lg:text-lg outline-none bg-black text-lime"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-1 px-2 rounded-lg w-full text-md lg:text-lg outline-none bg-black text-lime"
                />
                <textarea
                  cols={35}
                  rows={10}
                  placeholder="Type Your Message Here*"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="py-2 px-2 rounded-lg w-full text-md lg:text-lg outline-none bg-black text-lime"
                ></textarea>
                <button type="submit" className="bg-black flex gap-1 px-6 lg:px-10 py-2 text-lime text-md lg:text-lg font-semibold rounded-xl hover:text-primary hover:bg-secondary text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Send</button>
                <ToastContainer />
              </form>
        </div>
        </div>
    </section>
  )
}

export default Contact