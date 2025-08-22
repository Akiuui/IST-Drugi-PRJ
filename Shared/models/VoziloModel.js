class VoziloModel{

    static #brojRecenzija = 0
    static #sumaRecenzija = 0

    //float ocena (0-1)
    oceniVozilo(ocena){

        if(typeof ocena !== "number"){
            throw new TypeError("Argument of method 'oceniVozilo' only takes numbers")
        }

        if(ocena<0 || ocena> 5){
            throw new RangeError("Argument of method 'oceniVozilo' must be between '0' and '5'")
        }

        VoziloModel.#brojRecenzija =+ 1

        VoziloModel.#sumaRecenzija =+ ocena
    }

    getRecenzija(){
        return VoziloModel.#sumaRecenzija / VoziloModel.#brojRecenzija
    }
}

export default VoziloModel
