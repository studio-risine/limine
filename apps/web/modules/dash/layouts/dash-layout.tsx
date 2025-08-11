import { AppSidebar } from "@workspace/ui/components/app-sidebar";
import {
	SidebarInset,
	SidebarProvider,
} from "@workspace/ui/components/sidebar";
import AuthGuard from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";

export default function DashLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<AuthGuard>
				<OrganizationGuard>
					<SidebarProvider
						style={
							{
								"--sidebar-width": "calc(var(--spacing) * 72)",
								"--header-height": "calc(var(--spacing) * 12)",
							} as React.CSSProperties
						}
					>
						<AppSidebar variant="inset" />
						<SidebarInset>{children}</SidebarInset>
					</SidebarProvider>
				</OrganizationGuard>
			</AuthGuard>
		</div>
	);
}
