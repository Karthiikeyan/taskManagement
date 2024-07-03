import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.svg'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import User from '../Helper/User'

const Nav = async() => {
  const session = await getServerSession(authOptions);
  
  return (
    <div className="flex items-center justify-between bg-teal-800 p-4">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-white text-lg font-bold mr-4">eventXpress</h1>
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        {!session && (
          <Link
            href="/signup"
            className="flex justify-center items-center"
          >
            <button className="text-teal-700 font-semibold text-lg px-6 py-1 rounded bg-white cursor-pointer hover:bg-teal-200">
              Sign Up
            </button>
          </Link>
        )}
        {session && <User session={session} />}
      </div>
      <div className="md:hidden">
        <Image
          src={logo}
          className="w-8 h-8 rounded-full"
          height={30}
          width={30}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Nav