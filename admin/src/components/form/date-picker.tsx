import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { v4 } from "uuid";

export default function DatePicker({
   label,
   divClassName,
   value,
   onChange,
}: Readonly<{ label: string; divClassName: string; value?: Date; onChange?: (date: Date | undefined) => void }>) {
   const id = v4();

   const [open, setOpen] = React.useState(false);
   const [date, setDate] = React.useState<Date | undefined>(value);

   return (
      <div className={cn(divClassName)}>
         <Label htmlFor={id} className="mb-2">
            {label}
         </Label>
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button variant="outline" id={id} className="w-50 justify-between font-normal">
                  {date ? date.toLocaleDateString() : `Pilih ${label}`}
                  <ChevronDownIcon />
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
               <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(selectedDate) => {
                     setDate(selectedDate);
                     onChange?.(selectedDate);
                     setOpen(false);
                  }}
               />
            </PopoverContent>
         </Popover>
      </div>
   );
}
