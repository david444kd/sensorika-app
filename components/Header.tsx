import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
          <div className="max-w-2xl mx-auto flex h-20 px-5 justify-between items-center">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary font-bold select-none">
                  S
                </span>
                <span className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  Sensorika
                </span>
              </Link>
            </div>
            <Select defaultValue="ru">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Языки</SelectLabel>
                  <SelectItem value="ru">RU</SelectItem>
                  <SelectItem value="kz">KZ</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </header>
  )
}