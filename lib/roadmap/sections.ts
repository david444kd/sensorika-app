export function getSections(t: (key: string) => string) {
  return [
    {
      id: "specialists",
      title: t('Roadmap.sections.specialists.title'),
      description: t('Roadmap.sections.specialists.description'),
      specialists: [
        {
          name: t('Roadmap.sections.specialists.items.speech_therapist.name'),
          desc: t('Roadmap.sections.specialists.items.speech_therapist.desc'),
          phone: "+7 777 111 22 33",
        },
        {
          name: t('Roadmap.sections.specialists.items.neuropsychologist.name'),
          desc: t('Roadmap.sections.specialists.items.neuropsychologist.desc'),
          phone: "+7 705 555 66 77",
        },
        {
          name: t('Roadmap.sections.specialists.items.afk_instructor.name'),
          desc: t('Roadmap.sections.specialists.items.afk_instructor.desc'),
          phone: "+7 701 999 88 44",
        },
      ],
    },
    {
      id: "gov_support",
      title: t('Roadmap.sections.gov_support.title'),
      description: t('Roadmap.sections.gov_support.description'),
      sections: [
        {
          heading: t('Roadmap.sections.gov_support.items.disability.heading'),
          text: t('Roadmap.sections.gov_support.items.disability.text'),
        },
        {
          heading: t('Roadmap.sections.gov_support.items.benefits.heading'),
          text: t('Roadmap.sections.gov_support.items.benefits.text'),
        },
        {
          heading: t('Roadmap.sections.gov_support.items.education.heading'),
          text: t('Roadmap.sections.gov_support.items.education.text'),
        },
      ],
    },
    {
      id: "centers",
      title: t('Roadmap.sections.centers.title'),
      description: t('Roadmap.sections.centers.description'),
      centers: [
        {
          city: t('Roadmap.sections.centers.cities.almaty'),
          list: [
            {
              name: t('Roadmap.sections.centers.places.almaty.center1.name'),
              address: t('Roadmap.sections.centers.places.almaty.center1.address'),
              phone: "+7 727 333 44 55",
            },
            {
              name: t('Roadmap.sections.centers.places.almaty.center2.name'),
              address: t('Roadmap.sections.centers.places.almaty.center2.address'),
              phone: "+7 727 222 11 00",
            },
          ],
        },
        {
          city: t('Roadmap.sections.centers.cities.astana'),
          list: [
            {
              name: t('Roadmap.sections.centers.places.astana.center1.name'),
              address: t('Roadmap.sections.centers.places.astana.center1.address'),
              phone: "+7 7172 777 88 99",
            },
          ],
        },
      ],
    },
  ]
}