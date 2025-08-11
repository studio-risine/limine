"use client";

import {
	IconChartBar,
	IconDashboard,
	IconHelp,
	IconListDetails,
	IconSettings,
} from "@tabler/icons-react";
import { NavMain } from "@workspace/ui/components/nav-main";
import { NavSecondary } from "@workspace/ui/components/nav-secondary";
import { NavSideBrand } from "@workspace/ui/components/nav-side-brand";
import { NavUser } from "@workspace/ui/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import type * as React from "react";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "/dash",
			icon: IconDashboard,
		},
		{
			title: "Processos",
			url: "/dash/processes",
			icon: IconListDetails,
		},
		{
			title: "Prazos",
			url: "/dash/deadlines",
			icon: IconChartBar,
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "#",
			icon: IconSettings,
		},
		{
			title: "Get Help",
			url: "#",
			icon: IconHelp,
		},
		{
			title: "Feedback",
			url: "#",
			icon: IconHelp,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<NavSideBrand />
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
