'use client'
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function ModelContainer({ photo }) {
  const deletePhoto = () => {
    axios
      .delete(`http://localhost:3000/admin/api/photo/${photo.id}`)
      .then((res) => {
        alert(res.data?.message);
        router.push('/admin')
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const router=useRouter();
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-28">
        <img src={photo?.url} alt={photo?.title} />
        <div>
          <h2 className="text-3xl text-center font-bold p-2">{photo?.title}</h2>
          <p className="justify-center p-3">{photo?.desc}</p>
        </div>
      </div>
      <div className="flex gap-5 p-18 justify-center">
          <button onClick={deletePhoto} className="text-xl bg-black text-white p-4 rounded-md hover:shadow-lg">
            DELETE
          </button>
        <Link href={`/admin/add-image/${photo?.id}`}>
          <button className="text-xl bg-black text-white p-4 rounded-md hover:shadow-lg">
            UPDATE
          </button>
        </Link>
      </div>
    </>
  );
}
