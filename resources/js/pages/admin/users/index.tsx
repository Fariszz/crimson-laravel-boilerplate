import { Column, DataTable } from "@/components/data-table";
import { type FilterableColumn } from "@/components/data-table/filter";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/layouts/app-layout";
import { ROUTES } from "@/routes";
import { TPaginatedUserResponse } from "@/types/modules/admin/user";
import { IUser } from "@/types/shared";
import { IBreadcrumbItem } from "@/types/shared/navigation";
import { Head } from "@inertiajs/react";

const breadcrumbs: IBreadcrumbItem[] = [
  {
    title: "Users",
    href: route(ROUTES.ADMIN.USERS.INDEX),
  },
];

interface UsersProps {
  data: TPaginatedUserResponse;
}

export default function Users({ data }: UsersProps) {
  const columns: Column<IUser>[] = [
    {
      id: "id",
      header: "No",
      enableSorting: false,
      accessorKey: "id",
      width: 64,
      cell: (_, index) => (index !== undefined ? index + 1 : ""),
    },
    {
      id: "name",
      header: "Name",
      accessorKey: "name",
      enableSorting: true,
    },
    {
      id: "email",
      header: "Email",
      accessorKey: "email",
    },
    {
      id: "is_active",
      header: "Status",
      accessorKey: "is_active",
      enableSorting: true,
      cell: (row: IUser) => (
        <Badge variant={row.is_active ? "default" : "destructive"}>
          {row.is_active ? "Active" : "Inactive"}
        </Badge>
      ),
    },
    {
      id: "created_at",
      header: "Created At",
      accessorKey: "created_at",
      cell: (row: IUser) => new Date(row.created_at).toLocaleDateString(),
    },
  ];

  const filters: FilterableColumn[] = [
    {
      id: "is_active",
      title: "Status",
      type: "combobox",
      options: [
        { label: "Active", value: "1" },
        { label: "Inactive", value: "0" },
      ],
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Users" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Users</h1>
            <DataTable
              columns={columns}
              data={data.data}
              filterComponents={filters}
              meta={data.meta}
              searchKey="search"
              searchPlaceholder="Search users..."
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
