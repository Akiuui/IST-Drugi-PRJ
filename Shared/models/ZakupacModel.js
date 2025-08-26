import AbstractDataClass from "./AbstractDataClass.js"

class ZakupacModel extends AbstractDataClass{

    constructor(){
        super()
        this._id = null
        this.ime = ""
        this.prezime = ""
        this.jmbg = ""
        this.starost = ""
    }

    FormConstructor({id, formData}){
        this._id = id
        this.ime = formData["ime"]
        this.prezime = formData["prezime"]
        this.jmbg = formData["jmbg"]
        this.starost = formData["starost"]
    }

    DbConstructor(dbData){
        this._id = dbData["_id"]
        this.ime = dbData["ime"]
        this.prezime = dbData["prezime"]
        this.jmbg = dbData["jmbg"]
        this.starost = dbData["starost"]
    }

    getId(){
        return this._id
    }
    
    static getName(){
        return 'zakupac'
    }
}

export default ZakupacModel
