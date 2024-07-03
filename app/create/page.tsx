'use client';
import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Form from '../components/Home/Form';

const CreateEvent = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        title: '',
        tag:'',
        link: '',
    })

    const createEvent = async(e) => {

    }
  return (
    <Form
        // type="Create"
        // post={post}
        // setPost={setPost}
        // submitting={submitting}
        // handlesubmit={createEvent}
    />
  )
}

export default CreateEvent