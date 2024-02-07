import ItemEntryForm from '@/app/components/ItemEntryForm'
import DBConnection from '@/app/lib/DBConnection'
import ItemModel from '@/app/lib/models/ItemModel'

async function ItemEntryPage() {
  await DBConnection();
  const items = await ItemModel.find({})
  return (
    <div>
      <ItemEntryForm/>
      <div className=' max-w-xl mx-auto mt-10'>
        {
          items.map((item, i)=> {
            return(
              <div key={i} className=' flex flex-col justify-between'>
                <div>{item.itemName}</div>
                <div>{item.price }</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemEntryPage
