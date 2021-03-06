import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Social() {
    return (
        <div className="logo flex w-36 gap-4">
            <div className="linkedin border-2 border-lightGreen text-lightGreen rounded-full p-1.5 hover:bg-lightGreen hover:border-lightGreen hover:text-darkerBlue cursor-pointer transition duration-300 ease-in">
              <a
                href="https://www.linkedin.com/in/niyashameer/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="instagram border-2 border-lightGreen text-lightGreen rounded-full p-1.5 hover:bg-lightGreen hover:lightGreen hover:text-darkerBlue cursor-pointer transition duration-300 ease-in">
              <a
                href="https://www.instagram.com/niya._.shameeer/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="github rounded-full border-2 border-lightGreen text-lightGreen p-1.5 hover:bg-lightGreen hover:border-lightGreen hover:text-darkerBlue cursor-pointer transition duration-300 ease-in">
              <a
                href="https://github.com/niyashameer"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
    )
}
