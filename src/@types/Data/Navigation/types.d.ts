interface Navigation {
  url: string;
  title: string;
  dropdown?: Dropdown[];
}

interface Dropdown {
  url: string;
  title: string;
}