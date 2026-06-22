import { redirect } from "next/navigation";

export default function ThemeBuilderPage(_props: PageProps<"/temabygger">) {
    redirect("/temabygger/identitet");
}
