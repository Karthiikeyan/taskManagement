'use client'
import React from 'react'
import JobData from '@/data';
import Link from 'next/link';
import { FiBookmark } from "react-icons/fi";

const JobFeatures = () => {
  return (
    <div>
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-teal-500">Featured Jobs</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 mb-8">
        {JobData.map((job) => {
          return (
            <Link href={`/jobs/jobdetails/${job.id}`} key={job.id}>
              <div className="relative group overflow-hidden rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center bg-teal-100 p-4 cursor-pointer">
                <img
                  src={job.image}
                  alt="Card Image"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                  <p className="text-sm">{job.location}</p>
                  <div className="flex mt-2">
                    <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">
                      {job.jobtype}
                    </span>
                    <span className="bg-teal-500 text-white rounded-full px-2 py-1">
                      {job.salary}
                    </span>
                  </div>
                </div>
                <FiBookmark className="absolute top-0 right-0 w-5 h-5 mt-2 mr-2" />
              </div>
            </Link>
          );
        })}

        {/* ///////// */}
        {/* <div className="relative group overflow-hidden rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center bg-teal-100 p-4 cursor-pointer">
          <img
            src="your-image.jpg"
            alt="Card Image"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Title Here</h2>
            <p className="text-sm">Place</p>
            <div className="flex mt-2">
              <span className="bg-teal-500 text-white rounded-full px-2 py-1 mr-2">
                Tag1
              </span>
              <span className="bg-teal-500 text-white rounded-full px-2 py-1">
                Tag2
              </span>
            </div>
          </div>
          <img
            src="bookmark-icon.png"
            alt="Bookmark Icon"
            className="absolute top-0 right-0 w-6 h-6 mt-2 mr-2"
          />
        </div> */}
      </div>
      <Link
        href="/events/allevents"
        className="flex justify-center items-center"
      >
        <button className="text-white font-semibold text-lg px-6 py-1 rounded bg-teal-400 cursor-pointer hover:bg-teal-600 m-5">
          More...
        </button>
      </Link>
    </div>
  );
}

export default JobFeatures