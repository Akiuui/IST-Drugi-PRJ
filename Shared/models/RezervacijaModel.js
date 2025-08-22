import ZakupacModel from "./ZakupacModel.js"
import AbstractDataClass from "./AbstractDataClass.js"

class RezervacijaModel extends AbstractDataClass{

    constructor(){
        super()
        this.id = null
        this.vozilo = null
        this.datumPreuzimanja = ""
        this.datumVracanja = ""
        this.zakupac = null
    }

    getId(){
        return this.id
    }

    static getName(){
        return "rezervacija"
    }

    FormConstructor({id, formData}){
        this.id = id
        this.vozilo = formData["vozilo"]
        this.datumPreuzimanja = formData["datumPreuzimanja"]
        this.datumVracanja = formData["datumVracanja"]
        this.zakupac = null
    }

    DbConstructor(dbData){
        this.id = dbData["id"]
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