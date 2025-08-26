// import { getItemByIdDb } from "../../ReactClient/src/services/dbActions";

class AbstractDataClass{

  FormConstructor() {
        throw new Error('You must implement the FormConstructor() method in your subclass.');
  }

  DbConstructor() {
    throw new Error('You must implement the DbConstructor() method in your subclass.');
  }

  getId(){
    throw new Error('You must implement the getId() method in your subclass.');
  }

  getName(){
    throw new Error('You must implement the getName() method in your subclass.');
  }
  
  formatDateTime(dateTime){
    
    let date

    try{

      date = new Date(dateTime)

    }catch(err){
      throw Exception("The passed string is not in the valid ISO format")
    }

    const datePart = date.toLocaleDateString('en-GB');

    const timePart = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    const formattedDate = `${datePart} ${timePart} (UTC)`;

    return formattedDate
  }

  // formatObject(DataSchema, id){

  //   // const obj = getItemByIdDb(DataSchema.getName(), id)

  //   return obj

  // }
} 

export default AbstractDataClass