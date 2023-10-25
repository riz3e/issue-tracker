'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler, Form } from "react-hook-form"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { createIssueSchema } from '@/app/createIssueSchema';
import z from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const router = useRouter();
    const [error, setError] = useState('')

    return (
        <div className='max-w-xl mx-auto'>
            
            <form onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post('/api/issues', data)
                    router.push('/issues')
                } catch (error) {
                    setError("Unexpected error occured.");

                }
            })}>
                < div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">New issue</span>
                        <span className="label-text-alt">Almas gay</span>
                    </label>
                    <input type="text" placeholder="Type here" {...register('title')}
                        className="input input-bordered w-full" />
                    {/* <label className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt"></span>
                </label> */}
                </div>
                {errors.title && <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{errors.title.message}</span>
            </div>}
                <div className="form-control my-5 max-w-xl">
                    <label className="label">
                        <span className="label-text">Description of the issue</span>
                    </label>
                    <textarea className="textarea  h-24 textarea-md textarea-bordered" placeholder="Type here" {...register('description')}></textarea>
                    <label className="label">
                        <span className="label-text-alt"></span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                </div>
                {errors.description && <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{errors.description.message}</span>
            </div>}
                <button className="btn btn-outline btn-primary">Submit new issue</button>
            </form>
        </div>
    )
}

export default NewIssuePage