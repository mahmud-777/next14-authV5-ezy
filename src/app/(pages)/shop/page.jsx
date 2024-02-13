const { default: DBConnect } = require("@/app/mongodb/DBConnection");
const { default: ItemModel } = require("@/app/mongodb/models/ItemModel");

function ItemPage(){

  const handleServer = async () => {
    "use server"
    await DBConnect();
    let itemInfo = await ItemModel.find({})
    console.log(itemInfo)
  }

  return (
    <div className=" max-w-xl mx-auto mt-20">
      <div>
        <form >
          <button formAction={handleServer}>
            Get Server
          </button>
        </form>
      </div>

    </div>
  )
}

export default ItemPage;