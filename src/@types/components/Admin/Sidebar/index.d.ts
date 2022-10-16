type SidebarProps = {
  label: string;
  items: SidebarItem[];
};

type SidebarItem = {
  label: string;
  icon: JSX.Element;
  href?: string;
  items?: SubSidebarItem[];
};

type SubSidebarItem = {
  label: string;
  href: string;
};
