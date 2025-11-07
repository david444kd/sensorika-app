export type Section = {
  id: string
  title: string
  items: string
}
export type Chapter = {
  id: string
  title: string
  sections: Section[]
}
export type SectionValue = {
  score: number[]
  comment: string
}
export type FormValues = Record<string, Record<string, SectionValue>>