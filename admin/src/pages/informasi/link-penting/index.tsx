import Table from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useTablePagination } from "@/hooks/store";
import { crudService } from "@/lib/crudService";
import { SquarePen, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

type Response = {
   results: Array<Record<string, string>>;
   total: number;
};

const ActionButtons = ({ id }: Readonly<{ id: string | number }>) => {
   const navigate = useNavigate();

   const { useDelete } = crudService("/informasi/link-penting");
   const { mutate, isPending } = useDelete();

   return (
      <>
         <Button size="icon-sm" className="size-6" variant="outline" onClick={() => navigate(`/informasi/link-penting/actions/${id}`)}>
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
   const { useList } = crudService("/informasi/link-penting");
   const { data, isLoading } = useList<Response>({ pagination });

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Link Penting</CardTitle>
            <CardDescription>Daftar Link Penting</CardDescription>
            <CardAction>
               <Button asChild variant="outline">
                  <Link to="/informasi/link-penting/actions">Tambah</Link>
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
                     accessorKey: "nama",
                     header: "nama",
                  },
                  {
                     accessorKey: "keterangan",
                     header: "keterangan",
                  },
                  {
                     accessorKey: "link",
                     header: "link",
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
