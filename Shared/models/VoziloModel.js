import AbstractDataClass from "./AbstractDataClass.js"

class VoziloModel extends AbstractDataClass{

    #brojRecenzija = 0
    #sumaRecenzija = 0

    constructor(){
        super()
        this._id = null
        this.marka = ""
        this.brend = ""
        this.boja = ""
        this.godiste = null
        this.snaga = null
    }

    FormConstructor({id, formData}){
        this._id = id
        this.#brojRecenzija = formData["brojRecenzija"] 
        this.#sumaRecenzija = formData["sumaRecenzija"]
        this.marka = formData["marka"]
        this.brend = formData["brend"]
        this.boja = formData["boja"]
        this.godiste = formData["godiste"]
        this.snaga = formData["snaga"]
    }

    DbConstructor(dbData){
        this._id = dbData["_id"]
        this.#brojRecenzija = dbData["brojRecenzija"]
        this.#sumaRecenzija = dbData["sumaRecenzija"]
        this.marka = dbData["marka"]
        this.brend = dbData["brend"]
        this.boja = dbData["boja"]
        this.godiste = dbData["godiste"]
        this.snaga = dbData["snaga"]
    }

    getId(){
        return this._id
    }
    
    static getName(){
        return 'vozilo'
    }

    //float ocena (0-1)
    oceniVozilo(ocena){

        if(typeof ocena !== "number"){
            throw new TypeError("Argument of method 'oceniVozilo' only takes numbers")
        }

        if(ocena<0 || ocena> 5){
            throw new RangeError("Argument of method 'oceniVozilo' must be between '0' and '5'")
        }

        this.#brojRecenzija += 1

        this.#sumaRecenzija += ocena
    }

    getRecenzija(){
        if (this.#brojRecenzija === 0) return 0;
        return this.#sumaRecenzija / this.#brojRecenzija
    }
}

export default VoziloModel
