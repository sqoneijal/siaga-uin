import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { v4 } from "uuid";
import { Label } from "../ui/label";

type Option = {
   value: string;
   label: string;
   hasChild?: boolean;
   child?: Array<Option>;
   tooltipContent?: string;
};

export default function FormSelect({
   divClassName,
   label,
   options,
   value,
   onChange,
}: Readonly<{ label: string; divClassName: string; options: Array<Option>; value?: string; onChange?: (value: string) => void }>) {
   const id = v4();

   return (
      <div className={cn(divClassName)}>
         <Label htmlFor={id} className="mb-2">
            {label}
         </Label>
         <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full">
               <SelectValue placeholder={`Pilih ${label}`} />
            </SelectTrigger>
            <SelectContent>
               {options?.map((item) => {
                  return (
                     <SelectItem value={item?.value} key={item?.value}>
                        {item?.label}
                     </SelectItem>
                  );
               })}
            </SelectContent>
         </Select>
      </div>
   );
}
