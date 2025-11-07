type Specialist = {
  name: string
  desc: string
  phone: string
}

export default function SectionSpecialists({
  description,
  specialists,
}: {
  description: string
  specialists: Specialist[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-muted-foreground">{description}</p>
      <div className="flex flex-col gap-4">
        {specialists.map((spec, i) => (
          <div key={i} className="border p-4 rounded-lg">
            <p className="font-semibold text-lg">{spec.name}</p>
            <p className="text-muted-foreground mt-1">{spec.desc}</p>
            <a href={`tel:${spec.phone}`} className="text-primary underline mt-2 inline-block text-base font-medium">
              {spec.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}


