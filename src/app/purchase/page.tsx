import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";
import { localizedPath } from "@/lib/constants";

export default function PurchaseRootPage() {
  redirect(localizedPath(routing.defaultLocale, "/purchase"));
}
