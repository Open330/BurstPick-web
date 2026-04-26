import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { APP_STORE_URL, BASE_PATH } from "@/lib/constants";
import { ShieldCheck, Cpu, HardDrive, Monitor, AppWindow } from "lucide-react";

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DownloadContent />;
}

function DownloadContent() {
  const t = useTranslations("downloadPage");

  return (
    <main className="px-0 pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container className="max-w-3xl text-center">
        <Image
          src={`${BASE_PATH}/logo.avif`}
          alt="BurstPick"
          width={645}
          height={618}
          className="mx-auto mb-8 h-24 w-24 object-contain drop-shadow-2xl sm:h-28 sm:w-28"
          priority
        />

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-text-secondary">
          {t("description")}
        </p>

        {/* Mac App Store download badge */}
        <div className="mb-6 flex flex-col items-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-text-secondary transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-medium leading-none">{t("button_mac")}</div>
              <div className="text-xl font-semibold leading-tight">Mac App Store</div>
            </div>
          </a>
        </div>

        <p className="mb-12 text-sm text-text-muted">
          {t("version")}
        </p>

        {/* System Requirements */}
        <div className="mx-auto max-w-lg rounded-xl border border-white/[0.08] bg-surface-secondary p-6 text-left sm:p-8">
          <h2 className="mb-5 text-lg font-semibold">{t("requirements")}</h2>

          <div className="space-y-4">
            <Requirement
              icon={<Monitor size={18} />}
              label={t("req_os")}
              value={t("req_os_value")}
            />
            <Requirement
              icon={<Cpu size={18} />}
              label={t("req_chip")}
              value={t("req_chip_value")}
            />
            <Requirement
              icon={<HardDrive size={18} />}
              label={t("req_disk")}
              value={t("req_disk_value")}
            />
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-lg bg-green-500/5 px-4 py-3 text-sm text-green-400">
            <ShieldCheck size={16} />
            {t("privacy_note")}
          </div>
        </div>

        {/* Windows Coming Soon */}
        <div className="mx-auto mt-10 max-w-lg rounded-xl border border-white/[0.08] bg-surface-secondary p-6 text-left sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <AppWindow size={22} className="text-[#0078D4]" />
            <h2 className="text-lg font-semibold">{t("windows_title")}</h2>
            <span className="rounded-full bg-[#0078D4]/15 px-3 py-0.5 text-xs font-medium text-[#0078D4]">
              {t("windows_badge")}
            </span>
          </div>
          <p className="text-sm text-text-secondary mb-4">
            {t("windows_description")}
          </p>

          <div className="space-y-3 border-t border-white/[0.06] pt-4">
            <Requirement
              icon={<Monitor size={18} />}
              label={t("windows_req_os")}
              value={t("windows_req_os_value")}
            />
            <Requirement
              icon={<Cpu size={18} />}
              label={t("windows_req_chip")}
              value={t("windows_req_chip_value")}
            />
            <Requirement
              icon={<HardDrive size={18} />}
              label={t("windows_req_disk")}
              value={t("windows_req_disk_value")}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

function Requirement({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-text-muted">{icon}</span>
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-sm text-text-secondary">{value}</div>
      </div>
    </div>
  );
}
