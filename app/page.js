import Link from "next/link";
import AdminPage from "./admin/page";
import photos from "./components/photo";
export default function Home() {
 
  return (
      <div className=" text-center">
        <Link href={"/admin"}>
          <button className="text-4xl   ">Go to AdminPage</button>
        </Link>
        <div className="grid grid-cols-3 gap-5">
        
        {photos.map((p) => {
          return <img src={p.urls?.regular} alt={p?.alt_description} key={p?.id} />;
        })}
        </div>
      </div>
  );
}
