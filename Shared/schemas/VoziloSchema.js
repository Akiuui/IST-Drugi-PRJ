const VoziloSchema = [
    {
        name: "_id",
        type: "String",
        required: true,
        hiddenFromForm: true,
        hideInTable: true,
    },
    {
        name: "marka",
        label: 'Mark (Car)',
        type: 'String',
        required: true,
    },
    {
        name: "brend",
        label: 'Brend',
        type: 'String',
        required: true,
    },
    {
        name: "boja",
        label: 'Boja (Colour)',
        type: 'String',
        required: true,
    },
    {
        name: "godiste",
        label: "Godiste (Year manufactured)",
        type: "Number",
        required: false,
        min: 1900,
        max: 2026,
    },  
    {
        name: "snaga",
        label: "Snaga (Power)",
        type: "Number",
        required: false,
        min: 0,
        max: 10000
    },
]

export default VoziloSchema