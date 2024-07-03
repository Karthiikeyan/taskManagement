'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-teal-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Your Website Name</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, necessitatibus.
            </p>
            <div className="flex space-x-4 ">
              <a
                href="#"
                className="text-whitehover:underline hover:text-blue-600 cursor-pointer"
              >
                <FaFacebook className="w-8 h-8 hover:bg-white " />
              </a>
              <a
                href="#"
                className="text-whitehover:underline hover:bg-white cursor-pointer rounded"
              >
                <FaTwitter className="w-8 h-8 hover:bg-sky-300 rounded" />
              </a>
              <a
                href="#"
                className="text-whitehover:underline  hover:bg-white cursor-pointer rounded"
              >
                <FaInstagram className="w-8 h-8 hover:bg-pink-400 rounded" />
              </a>
              <a
                href="#"
                className="text-whitehover:underline hover:text-blue-500 cursor-pointer  rounded"
              >
                <FaLinkedin className="w-8 h-8 hover:bg-white  rounded" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <a
              href="#"
              className="block mb-2 text-white hover:underline hover:text-blue-500 cursor-pointer"
            >
              Services
            </a>
            <a
              href="#"
              className="block mb-2 text-white hover:underline hover:text-blue-500 cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#"
              className="block mb-2 text-white hover:underline hover:text-blue-500 cursor-pointer"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block text-white hover:underline hover:text-blue-500 cursor-pointer"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p className="text-sm mb-2">123 Street, City</p>
            <p className="text-sm mb-2">contact@yourwebsite.com</p>
            <p className="text-sm">123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer