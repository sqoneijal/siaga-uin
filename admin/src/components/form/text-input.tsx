import { cn } from "@/lib/utils";
import { useRef } from "react";
import { v4 } from "uuid";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function TextInput({
   label,
   type = "text",
   divClassName,
   className,
   errors = {},
   onChange,
   value,
   name,
   withLabel = true,
   disabled = false,
   apakahFormatRupiah = false,
}: Readonly<{
   disabled?: boolean;
   type?: string;
   label?: string;
   divClassName?: string;
   errors?: Record<string, string | null>;
   onChange?: (value: string) => void;
   value?: string | null;
   name?: string;
   className?: string;
   withLabel?: boolean;
   apakahFormatRupiah?: boolean;
}>) {
   const id = v4();
   const errorMessage = name ? errors?.[name] : undefined;
   const inputRef = useRef<HTMLInputElement | null>(null);

   const formatRupiah = (value: string, input: HTMLInputElement | null) => {
      if (!input) return value;

      const selectionStart = input.selectionStart || 0;
      const rawValue = value.replaceAll(/\D/g, "");

      // Format angka ke ribuan dengan titik
      const formattedValue = rawValue.replaceAll(/\B(?=(\d{3})+(?!\d))/g, ".");

      // Hitung perbedaan panjang string sebelum dan sesudah format
      const diff = formattedValue.length - rawValue.length;

      // Set posisi kursor kembali ke posisi semula, hanya untuk input yang mendukung selection (bukan number)
      if (input.type !== "number") {
         requestAnimationFrame(() => {
            const newPos = Math.max(selectionStart + diff, 0);
            input.setSelectionRange(newPos, newPos);
         });
      }

      return formattedValue;
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value;

      if (apakahFormatRupiah) {
         val = formatRupiah(val, inputRef.current);
      }
      onChange?.(val);
   };

   return (
      <div className={cn(divClassName)}>
         {withLabel && (
            <Label htmlFor={id} className="mb-2">
               {label}
            </Label>
         )}
         <Input
            ref={inputRef}
            disabled={disabled}
            type={type}
            id={id}
            placeholder={label}
            value={apakahFormatRupiah ? formatRupiah(value || "", null) : value || ""}
            className={cn(errorMessage && "border-red-500", className)}
            onChange={handleChange}
         />
         {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
      </div>
   );
}
