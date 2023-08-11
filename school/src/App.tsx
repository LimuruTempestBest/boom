import { BrowserRouter as Router, Routes, Route, Link, useNavigate, NavLink } from "react-router-dom";
import 'animate.css';
import { Icon } from '@iconify/react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import apple from './assets/oppenheimer-still1-62df17ed1c2fb-1.webp'


const Home = () => {
  return (
    <div className="bg-Yankees-Blue w-full h-screen">
      <div className="flex bg-[#4a4e69] w-full h-28">
        <div className="flex justify-between w-full p-7">
          <div className="flex flex-rows gap-16 items-center">
            <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-widest ml-7 hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
              Home
            </button>
            <Link to="Reminiscene">
              <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                Reminiscence
              </button>
            </Link>
            <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
              Revolution
            </button>
          </div>
          <div className="flex flex-rows gap-16 items-center mr-8">
            <Link to="contact">
              <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full w-[32rem] min-h-[85%] p-7 ">
        <div className="flex justify-center items-center w-[32rem] min-h-[85%] ml-7">
          <div className="flex flex-col gap-20 animate__animated animate__fadeInLeft">
            <div className="flex flex-col gap-2">
              <div className="text-[#f2e9e4] text-6xl xl font-black font-mono tracking-wide mt-5">
                Nostalgia
              </div>
              <div className="text-[#f2e9e4] text-6xl font-black font-mono tracking-wide">
                And
              </div>
              <div className="text-[#f2e9e4] text-6xl font-black font-mono tracking-wide">
                Reformation
              </div>
              <div className="text-[#c9ada7] text-xl font-semibold font-mono mt-5">
                Welcome to "Nostalgia and Reformation"! We explore the link between fond memories and positive change. Robert Oppenheimer, the atomic bomb creator, embodies nostalgia and reformation. Join us to delve into this connection, shaping the future through reflection and innovation!
              </div>

            </div>
            <div>
              <div className="flex flex-rows gap-20 mb-10">
                <button className="ease-in-out transform hover:scale-125 transition duration-200">
                  <div className="tracking-wider bg-[#9a8c98] px-10 py-3 rounded text-[#f2e9e4] text-4xl font-black font-mono hover:text-[#edede9] hover:bg-[#4a4e69] duration-200">
                    Start
                  </div>
                </button>
                <Link to="contact">
                  <button className="ease-in-out transform hover:scale-125 transition duration-200">
                    <div className="tracking-wider bg-[#9a8c98] px-10 py-3 rounded text-[#f2e9e4] text-4xl font-black font-mono hover:text-[#edede9] hover:bg-[#4a4e69] duration-200">
                      Contact
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center w-[36rem] min-h-[95%] mr-10 animate__animated animate__fadeInRight">
            <div>
              <img src={apple} className="rounded opacity-100 transition duration-300 ease-in-out hover:opacity-70" />
              <div className="flex items-center justify-center p-3 bg-[#4a4e69] font-mono text-2xl font-black text-[#f2e9e4] tracking-wider">
                J. Robert Oppenheimer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uhkr45e', 'template_ueqe2cn', form.current, 'LMO-fwGuLVCOuYdTy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="bg-Yankees-Blue w-full h-screen">
      <div className="flex bg-[#4a4e69] w-full h-28">
        <div className="flex justify-between w-full p-7">
          <div className="flex flex-rows gap-16 items-center">
            <Link to="/">
              <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-widest ml-7 hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                Home
              </button>
            </Link>
            <Link to="/Reminiscene">
              <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                Reminiscence
              </button>
            </Link>
            <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
              Revolution
            </button>
          </div>
          <div className="flex flex-rows gap-16 items-center mr-10">
            <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[85%]">
        <div className="flex">
          <div className="flex flex-col gap-6 p-10 bg-[#685c66] rounded">
            <div className="font-mono font-black tracking-wider text-3xl underline underline-2 mt-3">
              Contact us!
            </div>
            <div className="font-mono font-black tracking-wider text-2xl mt-10">
              Tell us if there is bug.
            </div>
            <div className="font-mono font-black tracking-wider text-2xl">
              or
            </div>
            <div className="font-mono font-black tracking-wider text-2xl">
              Give some suggestion.
            </div>
            <div className="font-mono font-black tracking-wider text-2xl mt-16">
              We will fix it soon.
            </div>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#9a8c98] rounded">
              <label className="font-mono font-black tracking-wider text-2xl">Name</label>
              <input className="font-mono w-80 h-12 tracking-wider px-2 border-2 border-slate-950" type="text" placeholder="Daniel" name="user_name" />
              <label className="font-mono font-black tracking-wider text-2xl">Email</label>
              <input className="font-mono w-80 h-12 tracking-wider px-2 border-2 border-slate-950" type="email" placeholder="jb210286@foonyew.edu.my" name="user_email" />
              <label className="font-mono font-black tracking-wider text-2xl">Message</label>
              <textarea className="font-mono tracking-wider w-80 h-16 p-2 border-2 border-slate-950" placeholder="Your message here..." name="message" />
              <input className="mt-2 font-mono font-black tracking-wider text-xl px-7 py-5 bg-[#f2e9e4] border-2 border-slate-950 hover:cursor-pointer" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Reminiscene = () => {
  return (
    <div className="bg-Yankees-Blue w-full h-screen">
      <div className="flex bg-[#4a4e69] w-full h-28">
        <div className="flex justify-between w-full p-7">
          <div className="flex flex-rows gap-16 items-center">
            <Link to="/">
              <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-widest ml-7 hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                Home
              </button>
            </Link>
            <Link to="/Reminiscene">
              <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                Reminiscence
              </button>
            </Link>
            <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
              Revolution
            </button>
          </div>
          <div className="flex flex-rows gap-16 items-center mr-8">
            <Link to="/contact">
              <button className="text-[#f2e9e4] text-4xl font-black font-mono tracking-wide hover:ease-in-out transform hover:scale-125 transition duration-200 hover:text-[#f5ebe0]">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="p-72">
          <div className="text-[#f2e9e4] text-xl font-semibold font-mono mt-5">
            Scientific Achievements: As an eminent theoretical physicist, Oppenheimer achieved significant milestones in the field of science. His work and contributions have had a profound impact on atomic physics and quantum mechanics, and his ideas and research continue to influence the modern field of physics.
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="Reminiscene" element={<Reminiscene />}></Route>
      </Routes>
    </Router>
  );
};


export default App
