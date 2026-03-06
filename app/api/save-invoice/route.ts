import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Di sini biasanya Anda akan menggunakan Prisma atau Mongoose:
  // await db.invoice.create({ data: body });

  console.log("Data diterima untuk disimpan:", body);

  return NextResponse.json({ 
    message: "Invoice berhasil disimpan!",
    id: "INV-" + Math.floor(Math.random() * 1000) 
  });
}