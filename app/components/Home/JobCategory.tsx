
import JobData from '@/data'
import Link from 'next/link'
import React from 'react'

const JobCategory = () => {
  return (
    <div>
        <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-teal-500">Job Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mb-8">
            {
                JobData.map((job)=> {
                    return (
                      <Link href={`/jobcategory/${job.category}`} key={job.id}>
                        <div className="relative group overflow-hidden bg-teal-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 flex items-center cursor-pointer">
                          <div className="flex justify-center items-center sm:mr-4">
                            <img
                              src={job.image}
                              alt="Card Image"
                              className="rounded-lg h-24 w-24"
                            />
                          </div>
                          <div className="p-1">
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <p className="text-sm text-gray-600">
                              {job.location} | {job.salary}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                })
            }


            {/* <div className="relative group overflow-hidden bg-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 flex items-center cursor-pointer">
                <div className="flex justify-center items-center sm:mr-4">
                    <img src="image2.jpg" alt="Card Image" className="rounded-lg h-24 w-24"/>
                </div>
                <div className="p-1">
                    <h3 className="text-lg font-semibold">Title 2</h3>
                    <p className="text-sm text-gray-600">Description 2</p>
                </div>
            </div>
            <div className="relative group overflow-hidden bg-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 flex items-center cursor-pointer">
                <div className="flex justify-center items-center sm:mr-4">
                    <img src="image3.jpg" alt="Card Image" className="rounded-lg h-24 w-24"/>
                </div>
                <div className="p-1">
                    <h3 className="text-lg font-semibold">Title 3</h3>
                    <p className="text-sm text-gray-600">Description 3</p>
                </div>
            </div> */}
            {/* <!-- Repeat the above structure for 2 more rows --> */}
        </div>
    </div>
  )
}

export default JobCategory