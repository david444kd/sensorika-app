import SectionCenters from "@/components/roadmap/SectionCenters"
import SectionGovSupport from "@/components/roadmap/SectionGovSupport"
import SectionSpecialists from "@/components/roadmap/SectionSpecialists"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getSections } from "@/lib/roadmap/sections"
import { getTranslations } from "next-intl/server"

export default async function RoadmapPage() {
  const t = await getTranslations()
  const sections = getSections(t)
  
  return (
    <Accordion type="single" collapsible className="w-full p-3">
      {sections.map((section, index) => (
        <AccordionItem key={section.id} value={`item-${index + 1}`}>
          <AccordionTrigger>{section.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-6 text-balance">
            {section.specialists && (
              <SectionSpecialists description={section.description} specialists={section.specialists} />
            )}
            {section.sections && (
              <SectionGovSupport description={section.description} sections={section.sections} />
            )}
            {section.centers && (
              <SectionCenters description={section.description} centers={section.centers} />
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}