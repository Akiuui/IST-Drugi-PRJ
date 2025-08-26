const ZakupacSchema = [
    {
        name: "_id",
        type: "String",
        required: true,
        hiddenFromForm: true,
        hideInTable: true,
    },
    {
        name: "ime",
        label: 'Ime (Name)',
        type: 'String',
        required: true,
    },
    {
        name: "prezime",
        label: 'Prezime (Surname)',
        type: 'String',
        required: true,
    },
    {
        name: "jmbg",
        label: 'JMBG (ID No)',
        type: 'Number',
        required: true,
        min: 0,
    },
    {
        name: "starost",
        label: "Starost (Years)",
        type: "Number",
        required: false,
        min: 18,
    },  
]

export default ZakupacSchema