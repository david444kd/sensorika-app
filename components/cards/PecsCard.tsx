import { CardItem } from "@/lib/cards/cards"
import { Card, CardContent } from "../ui/card"
import Toast from "./Toast"
import Image from "next/image"
import toast from "react-hot-toast"
import { Mic } from "lucide-react"

export default function PecsCard({item}: {item:CardItem}) {
  return (
    <Card className="border-2 hover:border-primary/50 transition-all overflow-hidden cursor-pointer" onClick={() => {
      toast.success(
        <Toast item={item}/>
      );
    }}>
      <div className="relative w-full aspect-4/3 bg-muted">
        <img src={item.imageSrc} alt={item.imageAlt} className="object-cover" />
        <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors shadow-lg">
          <Mic className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
      <CardContent>
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
      </CardContent>
    </Card>
  )
}