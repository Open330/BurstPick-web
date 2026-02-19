import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { BASE_PATH } from "@/lib/constants";
import { Clock, ShieldCheck, Cpu, HardDrive, Monitor } from "lucide-react";

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
        <img
          src={`${BASE_PATH}/logo.avif`}
          alt="BurstPick"
          width={645}
          height={618}
          className="mx-auto mb-8 h-24 w-24 drop-shadow-2xl sm:h-28 sm:w-28"
        />

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-text-secondary">
          {t("description")}
        </p>

        {/* Coming soon badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-text-secondary">
            <Clock size={20} />
            {t("button")}
          </div>
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
