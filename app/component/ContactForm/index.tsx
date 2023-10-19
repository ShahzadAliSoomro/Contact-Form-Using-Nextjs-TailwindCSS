import React from "react";

export default function ContactForm() {
  return (
    <div className="w-full">
      <div className="container mx-auto bg-[#fff]">
        <div className="flex flex-col justify-center items-center gap-10 lg:p-20 p-2">
          <div className="flex justify-center text-5xl font-semibold ">
            Contact Form
          </div>
          <div className="flex flex-col gap-7 flex-wrap lg:flex-nowrap">
            <div className="flex flex-col gap-2">
              <label htmlFor="Name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="Name"
                placeholder="Enter your name"
                className="border-2 w-full lg:w-[600px] border-black p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="Email"
                id="Name"
                placeholder="Enter your email"
                className="border-2 w-full lg:w-[600px] border-black p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Number" className="text-lg font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                id="Name"
                placeholder="Enter your phone number"
                className="border-2 w-full lg:w-[600px] border-black p-2"
              />
            </div>

            <div className="flex flex-col gap-2">
            <label
              htmlFor="shipping"
              className="text-lg font-semibold"
            >
              Service
            </label>
            <select
              id="shipping"
              className="border-2 w-full lg:w-[600px] border-black p-2"
            >
              <option selected>Select a Service</option>
              <option value="DAE">Movers and Packers</option>
              <option value="DAE">House Shifting</option>
              <option value="DAE">Domestic Shifting</option>
              <option value="DAE">Office Shifting</option>
            </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                id="Message"
                placeholder="Enter your message"
                className="border-2 w-full lg:w-[600px] h-[200px] border-black p-2"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-black w-full lg:w-[600px] text-white p-2 font-semibold py-3 rounded-lg">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
