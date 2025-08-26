const RezervacijaSchema = [
    {
        name: "_id",
        type: "String",
        required: true,
        hiddenFromForm: true,
        hideInTable: true,

    },
    {
        name: "vozilo",
        label: 'Vozilo (Car)',
        type: 'Object',
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
        type: "Object",
        required: false,
        // hiddenFromForm: true,

    },

]

export default RezervacijaSchema