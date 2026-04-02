import Link from "next/link";

export default function MinimalFooter() {
  return (
    <footer className="bg-brand-black text-brand-white py-8">
      <div className="container-main flex flex-col items-center justify-center font-body text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Amble &amp; Fox Media. All rights reserved.</p>
        <div className="mt-4 flex gap-4">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
