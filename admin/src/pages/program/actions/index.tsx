import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useErrorStore } from "@/hooks/store";
import { crudService } from "@/lib/crudService";
import { Editor } from "@tinymce/tinymce-react";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

type FormData = Record<string, string>;

type Program = {
   id: number;
   judul: string;
   content: string;
   uploaded: Date;
   modified: Date;
};

export default function Index() {
   const { id } = useParams();
   const isEdit = !!id;

   const navigate = useNavigate();

   const { useCreate, useDetail, useUpdate } = crudService("/program");
   const { mutate: createMutate, isPending: isPendingCreate } = useCreate();
   const { data, isLoading } = useDetail(id);
   const { mutate: updateMutate, isPending: isPendingUpdate } = useUpdate();

   const { errors } = useErrorStore();

   const [formData, setFormData] = useState<FormData>({});

   const onSuccess = (res: { status: boolean; message: string }) => {
      const { status, message } = res;
      if (status) {
         toast.success(message);
         navigate("/program");
      } else {
         toast.error(message);
      }
   };

   const handleSubmit = () => {
      if (isEdit) {
         updateMutate({ ...formData, id }, { onSuccess });
      } else {
         createMutate(formData, { onSuccess });
      }
   };

   useEffect(() => {
      if (!isLoading && data) {
         const programData = data as Program;
         setFormData({
            judul: programData.judul,
            content: decode(programData.content),
         });
      }
      return () => {};
   }, [isLoading, data]);

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Program</CardTitle>
            <CardDescription>Detail Program</CardDescription>
            <CardAction>
               <ButtonGroup>
                  <Button variant="outline" asChild>
                     <Link to="/program">Batal</Link>
                  </Button>
                  <Button disabled={isPendingCreate || isPendingUpdate} onClick={handleSubmit}>
                     {(isPendingCreate || isPendingUpdate) && <Spinner />}
                     {isEdit ? "Perbaharui" : "Simpan"}
                  </Button>
               </ButtonGroup>
            </CardAction>
         </CardHeader>
         <CardContent>
            <div className="row">
               <TextInput
                  divClassName="col-12"
                  label="Judul"
                  value={formData?.judul}
                  onChange={(value) => setFormData({ ...formData, judul: value })}
                  errors={errors}
               />
            </div>
            <div className="row">
               <div className="col-12">
                  <Editor
                     tinymceScriptSrc={import.meta.env.VITE_TINYMCE}
                     licenseKey="gpl"
                     value={formData?.content ?? ""}
                     onEditorChange={(value) => setFormData({ ...formData, content: value })}
                     init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                           "advlist",
                           "autolink",
                           "lists",
                           "link",
                           "image",
                           "charmap",
                           "anchor",
                           "searchreplace",
                           "visualblocks",
                           "code",
                           "fullscreen",
                           "insertdatetime",
                           "media",
                           "table",
                           "preview",
                           "help",
                           "wordcount",
                        ],
                        toolbar:
                           "undo redo | blocks | " +
                           "bold italic forecolor | alignleft aligncenter " +
                           "alignright alignjustify | bullist numlist outdent indent | " +
                           "removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                     }}
                  />
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
