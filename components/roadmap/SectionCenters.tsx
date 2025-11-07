type Center = {
  name: string
  address: string
  phone: string
}

type CityCenters = {
  city: string
  list: Center[]
}

export default function SectionCenters({
  description,
  centers,
}: {
  description: string
  centers: CityCenters[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-muted-foreground">{description}</p>
      {centers.map((city, i) => (
        <div key={i}>
          <h3 className="font-semibold text-lg">{city.city}</h3>
          <div className="flex flex-col gap-3 mt-2">
            {city.list.map((place, j) => (
              <div key={j} className="border p-4 rounded-lg">
                <p className="font-semibold text-base">{place.name}</p>
                <p className="text-muted-foreground mt-0.5">{place.address}</p>
                <a href={`tel:${place.phone}`} className="text-primary underline mt-2 inline-block text-base font-medium">
                  {place.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}


