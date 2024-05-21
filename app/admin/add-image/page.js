'use client'
import React, { useState } from "react";
import axios from "axios";

export default function AddImage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/admin/api/photo', { title, description, url })
            .then(res => {
                alert('Successfully uploaded');
                // Reset form fields after successful upload
                setTitle("");
                setDescription("");
                setUrl("");
            })
            .catch(err => {
                alert('Error uploading image');
                console.error(err);
            });
    };

    return (
        <div className="w-screen h-auto border m-auto border-b-gray-300 p-40 bg-slate-100">
            <form onSubmit={(e)=>handleSubmit(e)}method="POST"  >
                <h2 className="font-bold text-2xl p-10 text-center">
                    Add Image Here
                </h2>
                <div className="flex gap-4 p-2">
                    <label className="text-lg font-bold" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="rounded-md p-1 focus:bg-slate-400"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex gap-4 p-2">
                    <label className="text-lg font-bold" htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="rounded-md p-1 focus:bg-slate-400"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex gap-4 p-2">
                    <label className="text-lg font-bold" htmlFor="url">
                        URL
                    </label>
                    <input
                        type="text"
                        id="url"
                        className="rounded-md p-1 focus:bg-slate-400"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <input type="submit" className="px-20 text-center py-3 mt-5 rounded-md bg-black text-white hover:shadow-lg" value="Add" />
            </form>
        </div>
    );
}
