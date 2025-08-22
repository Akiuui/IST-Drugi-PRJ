const RezervacijaSchema = [
    {
        name: "_id",
        type: "String",
        required: true,
        hiddenFromForm: true
    },
    {
        name: "vozilo",
        label: 'Vozilo (Car)',
        type: 'String',
        required: true,
    },
    {
        name: "datumPreuzimanja",
        label: 'Datum Preuzimanja (Date Taken)',
        type: 'String',
        required: true,
    },
    {
        name: "datumVracanja",
        label: 'Datum Vracanje (Date Retieved)',
        type: 'String',
        required: true,
    },
    {
        name: "zakupac",
        label: "Zakupac Vozila",
        type: "String",
        required: false,
    },

]

export default RezervacijaSchema