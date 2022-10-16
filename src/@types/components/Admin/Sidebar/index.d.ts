type SidebarProps = {
  title: string;
  items: SidebarItem[];
};

type SidebarItem = {
  title: string;
  icon: JSX.Element;
  url?: string;
  items?: SubSidebarItem[];
};

type SubSidebarItem = {
  title: string;
  url: string;
};
