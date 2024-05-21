import { NextResponse } from "next/server";
import { collection, addDoc,getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export async function GET(req) {
  try {
    const querySnapshot = await getDocs(collection(db, "photos"));
    const tempArray = [];
    querySnapshot.forEach((doc) => {
      tempArray.push({id:doc.id,...doc.data()});
    });
    return NextResponse.json({
      message: "success",
      status: 200,
      data: tempArray,
    });
  } catch (err) {
    return NextResponse.json(`${err}`);
  }
}

export async function POST(req) {
  try {
    const res = await req.json();
    const title = res?.title;
    const desc = res?.desc;
    const url = res?.url;
    const docRef = await addDoc(collection(db, "photos"), { title, desc, url });
    return NextResponse.json({ message: "success", docId: docRef.id });
  } catch (err) {
    return NextResponse.json(`${err}`);
  }
}
