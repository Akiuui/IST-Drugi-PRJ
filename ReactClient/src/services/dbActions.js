// import { openDB } from 'idb';
import axios from 'axios';

// const dbName = "FilmDb"
// const storeName = "films"


// export const getDB = () => {
//   return openDB(dbName, 1, {
//     upgrade: (db) => {
//       if (!db.objectStoreNames.contains(storeName)) {
//         db.createObjectStore(storeName, { keyPath: 'id' });
//       }
//     }
//   });
// };

export async function addItemDb(typeName,item){
  
    // try {
      
    //   const db = await getDB()
    //   await db.put(storeName, item)
    
    // } catch (error) {
    //   console.log(error)  
    // }

    return await axios.post(`http://localhost:3000/create/${typeName}`, item)


}

export async function deleteItemDb(typeName, id) {
  // const db = await getDB()
  // await db.delete(storeName, id)

  return await axios.delete(`http://localhost:3000/delete/${typeName}/${id}`)
}

export async function getItemByIdDb(typeName,id){
    // const db = await getDB()
    // let data = {}

    // try{
    //   data = await db.get(storeName, id);

    //   if(data == undefined)
    //     data = {}

    // }catch(e){
    //   console.log(`Error: ${e}`)
    //   data = {}
    // }
    
    // return data

    return axios.get(`http://localhost:3000/get/${typeName}/${id}`)
}

export async function getItemAllDb(typeName){
    // const db = await getDB()
    // return await db.getAll(storeName);

    return axios.get(`http://localhost:3000/get/${typeName}`)

  }

export async function patchItemInDb(typeName,id, data){

  return axios.patch(`http://localhost:3000/update/${typeName}/${id}`, data)

}

