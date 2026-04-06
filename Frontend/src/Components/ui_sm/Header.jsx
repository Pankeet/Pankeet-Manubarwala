import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Sidebar } from "../icons/sidebar";
import { Close } from "../icons/Close";
import { useState } from 'react';
import Lottie from "lottie-react";

export default function Header_sm({ theme, setheme }) {
  const [sidebaropen, setsidebaropen] = useState(false);

  function ldmode() {
    setheme(current => !current);
  }

  const container = {
    width: 50,
    height: 25,
    backgroundColor: "gray",
    borderRadius: 25,
    cursor: "pointer",
    display: "flex",
    padding: 2.5,
  };

  const handle = {
    width: 20,
    height: 20,
    backgroundColor: "black",
    borderRadius: "50%",
  };

  return (
    <>
      {!sidebaropen && (
        <div className="flex justify-between mx-5 my-4">
          <div className="flex items-center" onClick={() => setsidebaropen(true)}>
            <Sidebar />
          </div>
          <div className="flex items-center">
            <button
            aria-label='toggle page theme'
              className="toggle-container"
              style={{
                ...container,
                justifyContent: theme ? "flex-start" : "flex-end",
              }}
              onClick={ldmode}
            >
              <motion.div
                className="toggle-handle"
                style={handle}
                layout
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0.2,
                }}
              />
            </button>
          </div>
        </div>
      )}

      {sidebaropen && (
        <div>
          <div className='flex justify-end items-center my-4 mx-5' onClick={() => setsidebaropen(false)}>
            <Close />
          </div>
          <div className='h-screen w-full grid place-content-center text-2xl text-purple-600'>
          <nav className='flex-col flex gap-5'>
            <Link to='/'
                className='bg-gray-800 rounded-lg px-4 py-3 text-center'
                onClick={() => setsidebaropen(false)}>
              Home 
            </Link>

            <Link to="/projects" 
              className='bg-gray-800 rounded-lg px-4 py-3'
              onClick={() => setsidebaropen(false)}>
              Project
            </Link>

            <a href='https://contact-me-flax-nu.vercel.app/' 
            role='button'
            aria-label='Open Contact Page'
            target='_blank' 
            className='bg-gray-800 rounded-lg px-4 py-3'
            rel='noopener noreferrer'>
            Contact</a>

          </nav>
        </div>
        </div>
        
      )}
    </>
  );
}
