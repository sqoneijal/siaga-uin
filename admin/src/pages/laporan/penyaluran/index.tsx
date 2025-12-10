import Table from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useTablePagination } from "@/hooks/store";
import { crudService } from "@/lib/crudService";
import { SquarePen, Trash2 } from "lucide-react";
import moment from "moment";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

type Response = {
   results: Array<Record<string, string>>;
   total: number;
};

const ActionButtons = ({ id }: Readonly<{ id: string | number }>) => {
   const navigate = useNavigate();

   const { useDelete } = crudService("/program");
   const { mutate, isPending } = useDelete();

   return (
      <>
         <Button size="icon-sm" className="size-6" variant="outline" onClick={() => navigate(`/program/actions/${id}`)}>
            <SquarePen />
         </Button>
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
      </>
   );
};

const ActionButtonsCell = (props: Readonly<{ getValue: () => unknown }>) => {
   const id = props.getValue() as string | number;
   return <ActionButtons id={id} />;
};

export default function Index() {
   const { pagination } = useTablePagination();
   const { useList } = crudService("/laporan/penyaluran");
   const { data, isLoading } = useList<Response>({ pagination });

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Laporan Penyaluran</CardTitle>
            <CardDescription>Daftar Laporan Penyaluran</CardDescription>
            <CardAction>
               <Button variant="outline">
                  <Link to="/laporan/penyaluran/actions">Tambah</Link>
               </Button>
            </CardAction>
         </CardHeader>
         <CardContent>
            <Table
               columns={[
                  {
                     accessorKey: "id",
                     cell: ActionButtonsCell,
                     header: "",
                     meta: { className: "w-[110px]" },
                  },
                  {
                     accessorKey: "id_program",
                     header: "program",
                  },
                  {
                     accessorKey: "jumlah_penerima",
                     header: "jumlah penerima",
                  },
                  {
                     accessorKey: "total_dana",
                     header: "total dana",
                     cell: ({ getValue }) => {
                        const value = getValue() as string;
                        const num = Number.parseFloat(value) || 0;
                        return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
                     },
                  },
                  {
                     accessorKey: "tanggal",
                     header: "tanggal",
                     cell: ({ getValue }) => moment(getValue() as string).format("DD-MM-YYYY"),
                  },
               ]}
               data={data?.results ?? []}
               total={data?.total ?? 0}
               isLoading={false}
            />
         </CardContent>
      </Card>
   );
}
