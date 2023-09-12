import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Contact from "@/models/Contact";

export const PUT = async (request: any, { params }: any) => {
  const { id } = params;
  const { status } = await request.json();

  try {
    await connect();

    const filter = { id };
    const update = { status };
    
    // `doc` is the document _before_ `update` was applied
    let data = await Contact.findOneAndUpdate(filter, update);
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request: any, { params }: any) => {
  const { id } = params;

  try {
    await connect();

    await Contact.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
