'use server'

import DBConnection from "@/app/lib/DBConnection";
import ItemModel from "@/app/lib/models/ItemModel";
import { revalidatePath } from "next/cache";

export default async function ItemEntryAction(formData) {
  try {
    await DBConnection();
    console.log(formData);
    const { itemName, price} = formData

    await ItemModel.create(formData);
    revalidatePath("/product/itementry");    
    return { success: true }

  } catch (error) {
    return { success: false }
  }
  
  
}
