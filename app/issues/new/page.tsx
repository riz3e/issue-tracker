'use client'
import React, { useState } from 'react'
import { useForm, SubmitHandler, Form } from "react-hook-form"
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { createIssueSchema } from '@/app/createIssueSchema';
import z from 'zod';
import ErrorMessage from '@/app/components/errormessage';
import LoadingDots from '@/app/components/Loading';

type IssueForm = z.infer<typeof createIssueSchema>;
const NewIssuePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
    });
    const router = useRouter();
    const [error, setError] = useState('')
    const [isSubmitting, setSumbitting] = useState(false);

    return (
        <div className='max-w-xl mx-auto'>
            
            <form onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post('/api/issues', data)
                    router.push('/issues')
                    setSumbitting(true);
                } catch (error) {
                    setError("Unexpected error occured.");
                    setSumbitting(false)
                }
            })}>
                < div className="form-control w-full max-w-xl">
                    <label className="label">
                        <span className="label-text">New issue</span>
                        {/* <span className="label-text-alt">Almas gay</span> */}
                    </label>
                    <input type="text" placeholder="Type here" {...register('title')}
                        className="input input-bordered w-full" />
                    {/* <label className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt"></span>
                </label> */}
                </div>
                <ErrorMessage>
                    {errors.title?.message}
                </ErrorMessage>
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
                <ErrorMessage>
                    {errors.description?.message}
                </ErrorMessage>
                <button disabled = {isSubmitting} className="btn btn-outline btn-primary">Submit new issue {isSubmitting && <LoadingDots />}</button>
            </form>
        </div>
    )
}

export default NewIssuePage