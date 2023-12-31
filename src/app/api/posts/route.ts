import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Contact from "@/models/Contact";

export const GET = async () => {

  try {
    await connect();
    const posts = await Contact.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: any) => {
  const body = await request.json();

  const newPost = new Contact(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
