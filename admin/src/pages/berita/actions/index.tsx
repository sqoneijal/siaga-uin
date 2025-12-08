import TextInput from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { crudService } from "@/lib/crudService";
import { Editor } from "@tinymce/tinymce-react";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

type FormData = Record<string, string>;

export default function Index() {
   const { id } = useParams();
   const isEdit = !!id;

   const navigate = useNavigate();

   const [formData, setFormData] = useState<FormData>({});

   const { useCreate, useDetail, useUpdate } = crudService("/berita");
   const { mutate: createMutate, isPending: isPendingCreate } = useCreate();
   const { mutate: updateMutate, isPending: isPendingUpdate } = useUpdate();
   const { data, isLoading } = useDetail(id);

   useEffect(() => {
      if (!isLoading && data) {
         const dataContent = data as FormData;
         setFormData({
            ...dataContent,
            content: decode(dataContent?.content),
         });
      }

      return () => {};
   }, [data, isLoading]);

   const onSuccess = (res: { status: boolean; message: string }) => {
      const { status, message } = res;
      if (status) {
         toast.success(message);
         navigate("/berita");
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

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Berita</CardTitle>
            <CardDescription>Detail Berita</CardDescription>
            <CardAction>
               <ButtonGroup>
                  <Button variant="outline" asChild>
                     <Link to="/berita">Batal</Link>
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
                  divClassName="col-12 col-md-12"
                  label="Judul"
                  name="judul"
                  value={formData?.judul}
                  onChange={(value) => setFormData({ ...formData, judul: value })}
               />
            </div>
            <div className="row">
               <TextInput
                  divClassName="col-12 col-md-12"
                  label="Link Thumbnail"
                  name="thumbnail"
                  value={formData?.thumbnail}
                  onChange={(value) => setFormData({ ...formData, thumbnail: value })}
               />
            </div>
            <div className="row">
               <div className="col-12 col-md-12">
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
         <CardFooter>
            <p>Card Footer</p>
         </CardFooter>
      </Card>
   );
}
