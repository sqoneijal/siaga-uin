import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { v4 } from "uuid";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

type Option = {
   value: string;
   label: string;
   hasChild?: boolean;
   child?: Array<Option>;
   tooltipContent?: string;
};

function findOptionByValue(options: Option[], value: string): Option | undefined {
   for (const option of options) {
      if (option.value === value) return option;
      if (option.child) {
         const found = findOptionByValue(option.child, value);
         if (found) return found;
      }
   }
   return undefined;
}

export default function FormSelect({
   divClassName,
   label,
   options,
   value,
}: Readonly<{ label: string; divClassName: string; options: Array<Option>; value: string }>) {
   const id = v4();

   const [open, setOpen] = useState(false);

   const selectedLabel = findOptionByValue(options, value || "")?.label;

   return (
      <div className={cn(divClassName)}>
         <Label htmlFor={id} className="mb-2">
            {label}
         </Label>
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button variant="outline" role="combobox" aria-expanded={open} className={cn("w-full justify-between")}>
                  {selectedLabel || `Pilih ${label?.toLowerCase() || "opsi"}...`}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
               </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" style={{ width: "var(--radix-popover-trigger-width)" }}>
               Place content for the popover here.
            </PopoverContent>
         </Popover>
      </div>
   );
}
