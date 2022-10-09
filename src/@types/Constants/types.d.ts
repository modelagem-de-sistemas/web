interface NavbarItemProps {
  uid: string;
  title: string;
}

interface PageVariantProps {
  pageInitial: {
    opacity: number;
  };
  pageAnimate: {
    opacity: number;
  };
}

interface Application {
  title: string;
  description: string;
  url: string;
  image: string;
}
