type Section = {
  heading: string
  text: string
}

export default function SectionGovSupport({
  description,
  sections,
}: {
  description: string
  sections: Section[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-muted-foreground">{description}</p>
      <div className="flex flex-col gap-5">
        {sections.map((sec, i) => (
          <div key={i}>
            <h2 className="font-semibold text-xl">{sec.heading}</h2>
            <p className="text-muted-foreground leading-relaxed mt-1">
              {sec.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}


