'use client'
import React from 'react'
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <button
        onClick={() =>
          signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_URL })
        }
        className="bg-blue-500 text-white rounded-full px-4 py-2 mb-4"
      >
        Sign Up
      </button>
      <p className="text-gray-600">
        Already have an account?{" "}
        <Link
          href="/signup"
          onClick={() =>
            signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_URL })
          }
          className="text-blue-500"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default SignUp