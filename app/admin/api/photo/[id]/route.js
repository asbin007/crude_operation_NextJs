import { NextResponse } from "next/server";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export async function PATCH(req, { params }) {
  try {
    const id = params?.id;
    const res = await req.json();
    const photosRef = doc(db, "photos", id);

    await updateDoc(photosRef, res);
    return NextResponse.json({ message: "successfully update the document" });
  } catch (err) {
    return NextResponse.json(`${err}`);
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = params?.id;
    await deleteDoc(doc(db, "photos", id));
    return NextResponse.json({ message: "successfully DELETE the document" });
  } catch (err) {
    return NextResponse.json(`${err}`);
  }
}
export async function GET(req,{params}) {
  try {
    const docRef = doc(db, "photos", params?.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json({ success: "updated", data: docSnap.data() });
    } else {
      return NextResponse.json({ error: "No such doc" });
    }
  } catch (err) {
    return NextResponse.json(`${err}`);
  }
}
