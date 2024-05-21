'use client'
import ModelContainer from "@/app/components/ModelContainer";
import photos from "@/app/components/photo";
import { useRouter } from "next/navigation";
export default function photo({ params,id }) {
  const photo = photos.find((p) => p.id === params.id);
  const   router=useRouter()
  return (
    <>
    <button className="absolute right-4 top-3 text-4xl" onClick={() => router.back()}>X</button>

    <ModelContainer photo={photo}/>
    </>

    
  );
}
