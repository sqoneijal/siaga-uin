import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { crudService } from "@/lib/crudService";
import { Editor } from "@tinymce/tinymce-react";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type FormData = Record<string, string>;

const onSuccess = (res: { status: boolean; message: string }) => {
   const { status, message } = res;
   if (status) {
      toast.success(message);
   } else {
      toast.error(message);
   }
};

export default function Misi() {
   const [formData, setFormData] = useState<FormData>({});

   const { useUpdate, useDetail } = crudService("/misi");
   const { data, isLoading } = useDetail(1);
   const { mutate, isPending } = useUpdate();

   useEffect(() => {
      if (!isLoading && data) {
         const dataContent = data as FormData;
         setFormData({
            ...data,
            content: decode(dataContent?.content),
         });
      }
      return () => {};
   }, [data, isLoading]);

   if (isLoading) {
      return <div>loading...</div>;
   }

   return (
      <Card>
         <CardHeader>
            <CardTitle>Misi</CardTitle>
            <CardDescription>Detail Misi</CardDescription>
            <CardAction>
               <Button disabled={isPending} onClick={() => mutate({ ...formData, id: 1 }, { onSuccess })}>
                  {isPending && <Spinner />}Perbaharui
               </Button>
            </CardAction>
         </CardHeader>
         <CardContent>
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
