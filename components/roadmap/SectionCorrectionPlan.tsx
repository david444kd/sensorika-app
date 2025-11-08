export type CorrectionStep = {
  heading: string
  text: string
}

type SectionCorrectionPlanProps = {
  description: string
  steps: CorrectionStep[]
}

export default function SectionCorrectionPlan({
  description,
  steps,
}: SectionCorrectionPlanProps) {
  return (
    <div className='flex flex-col gap-6'>
      <p className='text-muted-foreground'>{description}</p>
      <div className='flex flex-col gap-5'>
        {steps.map((step, i) => (
          <div key={i} className='border-l-4 border-primary pl-4'>
            <h2 className='font-semibold text-xl'>{step.heading}</h2>
            <p className='text-muted-foreground leading-relaxed mt-1'>
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
