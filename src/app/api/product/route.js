import DBConnect from "@/app/mongodb/DBConnection";
import ItemModel from "@/app/mongodb/models/ItemModel";
import { NextResponse } from "next/server";

export async function GET(request){
  await DBConnect()

  return NextResponse.json({ message: "Testing Api"})
}

export async function POST(request){
  const itemData= await request.json();
  console.log(itemData)
  await DBConnect();
  const result = await ItemModel.create(itemData)
  
  return NextResponse.json({ message: "Post Request"})

}