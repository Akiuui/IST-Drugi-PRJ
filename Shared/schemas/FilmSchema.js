const FilmSchema = [
    {
      name: 'naziv',
      label: 'Naziv (Title)',
      type: 'String',
      required: true,
      header: true,
    },
    {
      name: 'ocena',
      label: 'Ocena (Rating)',
      type: 'Number',
      required: true,
      min: 1,
      max: 10,
      body: true,
    },
    {
      name: 'reziser',
      label: 'Reziser (Director)',
      type: 'String',
      required: true,
      body: true,
    },
    {
      name: 'trajanje',
      label: 'Trajanje (Duration)',
      type: 'Number',
      required: true,
      min: 1,
      body: true,
    },
    {
      name: 'specijal3D',
      label: 'Specijal 3D',
      type: 'checkbox',
      required: false,
      body: true,
    },
    {
      name: 'slika',
      label: 'Avatar',
      type: 'image',
      required: false,
      hideInTable: true,
    }
  ]

export default FilmSchema