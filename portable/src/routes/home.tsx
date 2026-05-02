import { Footer } from "@components/block/footer";
import { HomeView } from "@components/view/home-view";
import { useForwarded } from "@utils/path";
import { type LayoutProps, useRouter } from "@utils/router";

function Layout({ dynamic, children }: LayoutProps) {
  return <>
    {children}
    {(!children && !dynamic) && (<div>
      <HomeView />
      <Footer />
    </div>)}
  </>;
}

export function HomePage() {
  return useRouter(useForwarded(), Layout, {});
}

