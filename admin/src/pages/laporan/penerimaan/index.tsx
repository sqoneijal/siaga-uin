import Table from "@/components/table";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useTablePagination } from "@/hooks/store";
import { crudService } from "@/lib/crudService";
import { Trash2 } from "lucide-react";
import readXlsxFile from "read-excel-file";
import { toast } from "sonner";
import writeXlsxFile, { type Cell } from "write-excel-file";

interface PenerimaanData {
   nim: string;
   nama: string;
   fakultas: string;
   prodi: string;
   nominal: string;
}

type Response = {
   results: Array<Record<string, string>>;
   total: number;
};

const ActionButtons = ({ id }: Readonly<{ id: string | number }>) => {
   const { useDelete } = crudService("/laporan/penerimaan");
   const { mutate, isPending } = useDelete();

   return (
      <Button
         size="icon-sm"
         className="size-6"
         variant="outline"
         onClick={() =>
            mutate(id, {
               onSuccess: (res) => {
                  const { message } = res;
                  toast.success(message);
               },
            })
         }>
         {isPending ? <Spinner /> : <Trash2 />}
      </Button>
   );
};

const ActionButtonsCell = (props: Readonly<{ getValue: () => unknown }>) => {
   const id = props.getValue() as string | number;
   return <ActionButtons id={id} />;
};

export default function Index() {
   const { pagination } = useTablePagination();
   const { useCreate, useList } = crudService("/laporan/penerimaan");
   const { mutate, isPending } = useCreate();
   const { data, isLoading } = useList<Response>({ pagination });

   const downloadTemplate = async () => {
      const HEADER_ROW = [
         {
            value: "NIM",
            type: String,
            fontWeight: "bold",
         },
         {
            value: "Nama Mahasiswa",
            type: String,
            fontWeight: "bold",
         },
         {
            value: "Fakultas",
            type: String,
            fontWeight: "bold",
         },
         {
            value: "Program Studi",
            type: String,
            fontWeight: "bold",
         },
         {
            value: "Nominal",
            type: String,
            fontWeight: "bold",
         },
      ];

      const DATA_ROW_1 = [
         {
            type: String,
            value: "KETIK DISINI NIM",
         },
         {
            type: String,
            value: "KETIK DISINI NAMA",
         },
         {
            type: String,
            value: "KETIK DISINI FAKULTAS",
         },
         {
            type: String,
            value: "KETIK DISINI PROGRAM STUDI",
         },
         {
            type: String,
            value: "KETIK DISINI NOMINAL",
         },
      ];

      const DATA_ROW_2 = [
         {
            type: String,
            value: "KETIK DISINI NIM",
         },
         {
            type: String,
            value: "KETIK DISINI NAMA",
         },
         {
            type: String,
            value: "KETIK DISINI FAKULTAS",
         },
         {
            type: String,
            value: "KETIK DISINI PROGRAM STUDI",
         },
         {
            type: String,
            value: "KETIK DISINI NOMINAL",
         },
      ];

      await writeXlsxFile([HEADER_ROW, DATA_ROW_1, DATA_ROW_2] as Array<Array<Cell>>, {
         fileName: "laporan_penerima.xlsx",
      });
   };

   const handleUpload = (input: HTMLInputElement) => {
      if (!input.files || input.files.length === 0) return;
      readXlsxFile(input.files[0]).then((rows) => {
         const data: Array<PenerimaanData> = [];
         for (const [i, item] of rows.entries()) {
            if (i !== 0) {
               data.push({
                  nim: String(item[0] || ""),
                  nama: String(item[1] || ""),
                  fakultas: String(item[2] || ""),
                  prodi: String(item[3] || ""),
                  nominal: String(item[4] || ""),
               });
            }
         }

         mutate(
            { content: { ...data } },
            {
               onSuccess: (res) => {
                  const { status, message } = res;
                  if (status) {
                     toast.message(message);
                  } else {
                     toast.error(message);
                  }
               },
            }
         );
      });
   };

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Laporan Penerima</CardTitle>
            <CardDescription>Daftar Laporan Penerima</CardDescription>
            <CardAction>
               <ButtonGroup>
                  <Button variant="outline" onClick={downloadTemplate}>
                     Download Template
                  </Button>
                  <label className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3">
                     <input type="file" style={{ display: "none" }} onChange={(e) => handleUpload(e.target)} /> {isPending && <Spinner />}Upload Data
                  </label>
               </ButtonGroup>
            </CardAction>
         </CardHeader>
         <CardContent>
            <Table
               columns={[
                  {
                     accessorKey: "id",
                     cell: ActionButtonsCell,
                     header: "",
                     meta: { className: "w-[10px]" },
                  },
                  {
                     accessorKey: "nim",
                     header: "nim",
                  },
                  {
                     accessorKey: "nama",
                     header: "nama",
                  },
                  {
                     accessorKey: "fakultas",
                     header: "fakultas",
                  },
                  {
                     accessorKey: "prodi",
                     header: "prodi",
                  },
                  {
                     accessorKey: "nominal",
                     header: "nominal",
                     cell: ({ getValue }) => {
                        const value = getValue() as string;
                        const num = Number.parseFloat(value) || 0;
                        return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
                     },
                  },
                  /* {
                     accessorKey: "tanggal",
                     header: "tanggal",
                     cell: ({ getValue }) => moment(getValue() as string).format("DD-MM-YYYY"),
                  }, */
               ]}
               data={data?.results ?? []}
               total={data?.total ?? 0}
               isLoading={false}
            />
         </CardContent>
      </Card>
   );
}
