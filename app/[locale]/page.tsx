import { NavItem, routes } from "@/lib/routes"
import RouteCard from "@/components/RouteCard"
import { getTranslations } from "next-intl/server"

export default async function Home() {
  const t = await getTranslations('Home');
  const tRoutes = await getTranslations('Routes');
  
  return (
    <main className="flex flex-col min-h-screen">
      <div className="w-full flex flex-col p-6 gap-6">
        <div className="text-center pt-8 pb-4">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">{t('title')}</h1>
          <p className="text-muted-foreground text-balance">{t('description')}</p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {routes.map((item: NavItem) => (
            <RouteCard 
              key={item.href} 
              item={item}
              label={tRoutes(`${item.labelKey}.label`)}
              description={tRoutes(`${item.descriptionKey}.description`)}
            />
          ))}
        </div>
        <div className="text-center pb-6">
          <p className="text-xs text-muted-foreground">{t('footer')}</p>
        </div>
      </div>
    </main>
  )
}