import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Post from "@/models/Contact";

export const GET = async (request: any, { params }: any) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.find();

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request: any, { params }: any) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
