import React from 'react'

const NewIssuePage = () => {
    return (
        <div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">New issue</span>
                    <span className="label-text-alt">Almas gay</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                {/* <label className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt"></span>
                </label> */}
            </div>
            <div className="form-control my-5 max-w-xl">
                <label className="label">
                    <span className="label-text">Description of the issue</span>
                </label>
                <textarea className="textarea  h-24 textarea-md textarea-bordered" placeholder="Type here"></textarea>
                <label className="label">
                    <span className="label-text-alt"></span>
                    {/* <span className="label-text-alt">Alt label</span> */}
                </label>
            </div>
            <button className="btn btn-outline btn-primary">Submit new issue</button>
        </div>
    )
}

export default NewIssuePage