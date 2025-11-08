import SectionCenters from '@/components/roadmap/SectionCenters'
import SectionCorrectionPlan from '@/components/roadmap/SectionCorrectionPlan'
import SectionGovSupport from '@/components/roadmap/SectionGovSupport'
import SectionSpecialists from '@/components/roadmap/SectionSpecialists'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getSections } from '@/lib/roadmap/sections'
import { getTranslations } from 'next-intl/server'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

export default async function RoadmapPage() {
  const t = await getTranslations()
  const sections = getSections(t)

  return (
    <>
      <div className='flex gap-3 p-3'>
        <Select>
          <SelectTrigger className='w-[100px]'>
            <SelectValue placeholder={t('Roadmap.city.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='astana'>{t('Roadmap.city.astana')}</SelectItem>
              <SelectItem value='almaty'>{t('Roadmap.city.almaty')}</SelectItem>
              <SelectItem value='shymkent'>
                {t('Roadmap.city.shymkent')}
              </SelectItem>
              <SelectItem value='karaganda'>
                {t('Roadmap.city.karaganda')}
              </SelectItem>
              <SelectItem value='atyrau'>{t('Roadmap.city.atyrau')}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder={t('Roadmap.diagnosis.placeholder')}></Input>
      </div>
      <Accordion type='single' collapsible className='w-full p-3'>
        {sections.map((section, index) => (
          <AccordionItem key={section.id} value={`item-${index + 1}`}>
            <AccordionTrigger>{section.title}</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-6 text-balance'>
              {section.steps && (
                <SectionCorrectionPlan
                  description={section.description}
                  steps={section.steps}
                />
              )}
              {section.specialists && (
                <SectionSpecialists
                  description={section.description}
                  specialists={section.specialists}
                />
              )}
              {section.sections && (
                <SectionGovSupport
                  description={section.description}
                  sections={section.sections}
                />
              )}
              {section.centers && (
                <SectionCenters
                  description={section.description}
                  centers={section.centers}
                />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
