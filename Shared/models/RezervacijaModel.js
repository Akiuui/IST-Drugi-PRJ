import ZakupacModel from "./ZakupacModel.js"
import AbstractDataClass from "./AbstractDataClass.js"

class RezervacijaModel extends AbstractDataClass{

    constructor(){
        super()
        this._id = null
        this.vozilo = null
        this.datumPreuzimanja = ""
        this.datumVracanja = ""
        this.zakupac = null
    }

    getId(){
        return this._id
    }

    static getName(){
        return "rezervacija"
    }

    FormConstructor({id, formData}){
        this._id = id
        this.vozilo = formData["vozilo"]
        this.datumPreuzimanja = formData["datumPreuzimanja"]
        this.datumVracanja = formData["datumVracanja"]
        this.zakupac = null
    }

    DbConstructor(dbData){
        this._id = dbData["_id"]
        this.vozilo = dbData["vozilo"]
        this.datumPreuzimanja = dbData["datumPreuzimanja"]
        this.datumVracanja = dbData["datumVracanja"]
        this.zakupac = dbData["zakupac"]
    }

    preuzimaVozilo(zakupac){
        
        if(!(zakupac instanceof ZakupacModel))
            throw new Exception("Argument of method 'preuzimaVozilo' needs to be type of 'ZakupacModel' class") 
        
        this.zakupac = zakupac

    }


}

export default RezervacijaModel