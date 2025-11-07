import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
          <div className="max-w-2xl mx-auto flex h-20 px-5">
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
          </div>
        </header>
  )
}