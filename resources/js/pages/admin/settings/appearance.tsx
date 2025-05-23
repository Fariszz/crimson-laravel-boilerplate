import { Head } from "@inertiajs/react";

import AppearanceTabs from "@/components/common/appearance-tabs";
import HeadingSmall from "@/components/common/heading-small";
import { type IBreadcrumbItem } from "@/types/shared/navigation";

import AppLayout from "@/layouts/app-layout";
import SettingsLayout from "@/layouts/settings/layout";

const breadcrumbs: IBreadcrumbItem[] = [
  {
    title: "Appearance settings",
    href: "/settings/appearance",
  },
];

export default function Appearance() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Appearance settings" />

      <SettingsLayout>
        <div className="space-y-6">
          <HeadingSmall
            description="Update your account's appearance settings"
            title="Appearance settings"
          />
          <AppearanceTabs />
        </div>
      </SettingsLayout>
    </AppLayout>
  );
}
