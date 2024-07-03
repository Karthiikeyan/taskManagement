'use client'
import { Session } from 'next-auth'
import React from 'react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

interface Props {
  session: Session
}

const User = ({session}: Props) => {
  return (
    <div className="flex gap-3">
      <Link href="/create">
        <button className="bg-white text-blue-500 rounded-full px-3 py-2 mr-2">
          Create Post
        </button>
      </Link>

      {/* <img alt="user" className="h-10 w-10 cursor-pointer rounded-full" /> */}
      <div>
        <Image
          src={`${session?.user?.image}`}
          onClick={() => {
            signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup` });
          }}
          className="w-10 h-10 rounded-full cursor-pointer"
          height={30}
          width={30}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default User