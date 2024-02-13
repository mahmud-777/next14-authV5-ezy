import { NextResponse } from "next/server";

export async function GET(request){

  return NextResponse.json({ message: "Get Request"});

}

export async function POST(request){
  const body = await request.json();

  return NextResponse.json({ message: body})
}

export async function PUT(request){
  const body = await request.json();
  return NextResponse.json({ message: body})
}

export async function PATCH(request){
  const body = await request.json();
  return NextResponse.json({ message: body })
}

export async function DELETE(request){
  const body = await request.json();
  return NextResponse.json({message: "Delete Request", body})
}