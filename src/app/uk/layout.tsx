import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Converting Websites & Ad Creatives UK | Get More Leads",
  description:
    "We fix websites and ads for UK businesses to generate more enquiries. 7-day delivery. Free audit available.",
};

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-uk-background text-uk-text selection:bg-uk-primary selection:text-uk-background font-body">
      <main className="flex-1">{children}</main>
    </div>
  );
}
