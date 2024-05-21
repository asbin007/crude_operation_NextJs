"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
export default function UpdateImage({ params }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const getPhotos = () => {
    axios.get(`http://localhost:3000/admin/api/photo/${params.id}`).then((res) => {
        setTitle(res.data?.data?.title);
        setDescription(res.data?.data?.description);
        setUrl(res.data?.data?.url);
  
    });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div className="w-screen h-auto border m-auto border-b-gray-300 p-40 bg-slate-100">
        <form onSubmit={(e) => handleSubmit(e)} method="POST">
          <h2 className="font-bold text-2xl p-10 text-center">
            Update Image Here
          </h2>
          <div className="flex gap-4 p-2">
            <label className="text-lg font-bold" htmlFor="title">
              Update Title
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
              Update Description
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
              Update URL
            </label>
            <input
              type="text"
              id="url"
              className="rounded-md p-1 focus:bg-slate-400"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="px-20 text-center py-3 mt-5 rounded-md bg-black text-white hover:shadow-lg"
            value="Update"
          />
        </form>
      </div>
    </>
  );
}
