import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fddef7dc-56cb-4e53-b761-0e05f118d670");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form submitted successfully!");  // Alert for success
      event.target.reset();
    } else {
      console.log("Error:", data);
      console.log("Error message:", data.message);
      console.log("Error code:", data.code);
      setResult(data.message);
      alert("Form submission failed: " + data.message);  // Alert for error
    }
  };

  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:akhilrajayanikkal@gmail.com" className='hover:underline'>
                akhilrajayanikkal@gmail.com
              </a>      
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+915678547892</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>street, city, country</span> 
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter You Name' name="name" /> 
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input type="email" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter You Email' name="email" /> 
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' rows="5" placeholder='Enter You Message' name="message"></textarea>
              </div>
              <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
