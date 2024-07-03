'use client'
import React from 'react'
import eventImg from '@/public/images/a1.jpg';
import Image from 'next/image';

const AllEvents = () => {
  return (
    <div className="bg-[#f8f8ff]">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-teal-500">Featured Jobs</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mb-8">
        <div className="max-w-lg mx-auto px-8 py-6 bg-white shadow-xl rounded-lg">
          <Image
            src={eventImg}
            className="w-full h-32 object-cover rounded-t-lg"
            width={200}
            height={200}
            alt="eventImg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-teal-500">Event Name</h2>
            <p className="text-gray-600 mt-2">
              Event Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Date: 20th Oct 2022</p>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md cursor-pointer hover:border-2 hover:border-teal-500 hover:bg-white hover:text-teal-500">
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto px-8 py-6 bg-white shadow-xl rounded-lg">
          <Image
            src={eventImg}
            className="w-full h-32 object-cover rounded-t-lg"
            width={200}
            height={200}
            alt="eventImg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-teal-500">Event Name</h2>
            <p className="text-gray-600 mt-2">
              Event Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Date: 20th Oct 2022</p>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md cursor-pointer hover:border-2 hover:border-teal-500 hover:bg-white hover:text-teal-500">
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto px-8 py-6 bg-white shadow-xl rounded-lg">
          <Image
            src={eventImg}
            className="w-full h-32 object-cover rounded-t-lg"
            width={200}
            height={200}
            alt="eventImg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-teal-500">Event Name</h2>
            <p className="text-gray-600 mt-2">
              Event Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Date: 20th Oct 2022</p>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md cursor-pointer hover:border-2 hover:border-teal-500 hover:bg-white hover:text-teal-500">
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto px-8 py-6 bg-white shadow-xl rounded-lg">
          <Image
            src={eventImg}
            className="w-full h-32 object-cover rounded-t-lg"
            width={200}
            height={200}
            alt="eventImg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-teal-500">Event Name</h2>
            <p className="text-gray-600 mt-2">
              Event Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Date: 20th Oct 2022</p>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md cursor-pointer hover:border-2 hover:border-teal-500 hover:bg-white hover:text-teal-500">
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto px-8 py-6 bg-white shadow-xl rounded-lg">
          <Image
            src={eventImg}
            className="w-full h-32 object-cover rounded-t-lg"
            width={200}
            height={200}
            alt="eventImg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-teal-500">Event Name</h2>
            <p className="text-gray-600 mt-2">
              Event Description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">Date: 20th Oct 2022</p>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-md cursor-pointer hover:border-2 hover:border-teal-500 hover:bg-white hover:text-teal-500">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEvents