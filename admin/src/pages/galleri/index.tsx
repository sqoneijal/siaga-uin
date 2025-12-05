import Table from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useTablePagination } from "@/hooks/store";
import { crudService } from "@/lib/crudService";
import { SquarePen, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const ActionButtons = ({ id }: Readonly<{ id: string | number }>) => {
   const navigate = useNavigate();

   const { useDelete } = crudService("/galleri");
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

type Response = {
   results: Array<Record<string, string>>;
   total: number;
};

export default function Index() {
   const { pagination } = useTablePagination();
   const { useList } = crudService(`/galleri`);
   const { data, isLoading } = useList<Response>({ pagination });

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Galleri</CardTitle>
            <CardDescription>Daftar Galleri</CardDescription>
            <CardAction>
               <Button asChild variant="outline">
                  <Link to="/galleri/actions">Tambah</Link>
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
                     meta: { className: "w-[100px]" },
                  },
                  {
                     accessorKey: "judul",
                     header: "judul",
                  },
                  {
                     accessorKey: "link_folder_drive",
                     header: "link folder",
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
