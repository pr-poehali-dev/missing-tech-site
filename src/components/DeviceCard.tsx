import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Smartphone } from "lucide-react";

export interface DeviceProps {
  id: string;
  title: string;
  type: string;
  location: string;
  date: string;
  image?: string;
  reward?: string;
}

const DeviceCard = ({ 
  title, 
  type, 
  location, 
  date, 
  image, 
  reward 
}: DeviceProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md animate-fade-in">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img 
          src={image || "/placeholder.svg"} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-200 hover:scale-105" 
        />
        {reward && (
          <Badge className="absolute top-2 right-2 bg-tech-accent text-tech-dark">
            Вознаграждение: {reward}
          </Badge>
        )}
      </div>
      
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 pb-2 space-y-2">
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <Smartphone size={16} />
          <span>{type}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <Clock size={16} />
          <span>{date}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-2">
        <Button variant="default" className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default DeviceCard;
