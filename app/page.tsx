import { NavItem, routes } from "@/lib/routes"
import RouteCard from "@/components/RouteCard"


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full flex flex-col p-6 gap-6">
        <div className="text-center pt-8 pb-4">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Добро пожаловать</h1>
          <p className="text-muted-foreground text-balance">Выберите, куда вы хотите перейти</p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {routes.map((item: NavItem) => (
            <RouteCard key={item.href} item={item} />
          ))}
        </div>
        <div className="text-center pb-6">
          <p className="text-xs text-muted-foreground">Нажмите на любую карточку, чтобы начать</p>
        </div>
      </div>
    </main>
  )
}
