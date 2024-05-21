"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import ModelContainer from "@/app/components/ModelContainer";

export default function PhotoModel({ params }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/api/photo");
        setPhotos(res.data?.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    getPhotos();
  }, []);

  const selectedPhoto = photos.find((p) => p.id === params.id);
  const router = useRouter();

  return (
    <>
      <button
        className="absolute right-4 top-3 text-4xl"
        onClick={() => router.back()}
      >
        X
      </button>
      <ModelContainer photo={selectedPhoto} />
    </>
  );
}
