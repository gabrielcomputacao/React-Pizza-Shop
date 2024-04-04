import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row space-y-0 items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Cancelamentos no Mês
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-4% </span>
          em relação ao mês passados
        </p>
      </CardContent>
    </Card>
  );
}
