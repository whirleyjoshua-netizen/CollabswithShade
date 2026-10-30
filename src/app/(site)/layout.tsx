import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

// Profile, My World, and Contact share the header and footer. The link hub at / has neither.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
