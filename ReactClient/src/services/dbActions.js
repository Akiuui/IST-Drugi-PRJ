import { openDB } from 'idb';

const dbName = "FilmDb"
const storeName = "films"


export const getDB = () => {
  return openDB(dbName, 1, {
    upgrade: (db) => {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
    }
  });
};

export async function addItemDb(item){
  
    try {
      
      const db = await getDB()
      await db.put(storeName, item)
    
    } catch (error) {
      console.log(error)  
    }
}

export async function deleteItemDb(id) {
  const db = await getDB()
  await db.delete(storeName, id)
}

export async function getItemByIdDb(id){
    const db = await getDB()
    let data = {}

    try{
      data = await db.get(storeName, id);

      if(data == undefined)
        data = {}

    }catch(e){
      console.log(`Error: ${e}`)
      data = {}
    }
    
    return data
}

export async function getItemAllDb(){
    const db = await getDB()
    return await db.getAll(storeName);
}

