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
} 

export default AbstractDataClass