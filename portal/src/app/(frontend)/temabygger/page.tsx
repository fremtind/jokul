import { redirect } from "next/navigation";
import { FIRST_THEME_BUILDER_STEP } from "./_steps/stepConfig";

export default function ThemeBuilderPage() {
    redirect(FIRST_THEME_BUILDER_STEP.path);
}
