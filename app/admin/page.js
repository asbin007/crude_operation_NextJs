"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/api/photo");
        setPhotos(res.data?.data);
        console.log(res.data?.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    getPhotos();
  }, []);

  return (
    <>
      <div className="flex justify-around m-10 items-center">
        <h2 className="text-center font-bold text-3xl  uppercase underline underline-offset-7 hover:font-extrabold">
          photo Gallery
        </h2>
        <Link href="/admin/add-image">
          <button className="text-center bg-black text-white text-xl font-bold rounded-md p-4 hover:drop-shadow-lg">
            Add Image
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {photos.map((p) => (
          <Link href={`/photo/${p?.id}`} key={p.id}>
            <img src={p?.url} alt={p?.title} />
          </Link>
        ))}
      </div>
    </>
  );
}
