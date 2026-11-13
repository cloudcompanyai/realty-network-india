import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const bslNavigation = [
  { label: "Home", href: "/" },
  { label: "Property Segments", href: "/buy-sell-lease#segments" },
  { label: "Buy, Sell & Lease", href: "/buy-sell-lease" },
  { label: "New Projects", href: "/#projects" },
  { label: "Our Network", href: "/#network" },
  { label: "About RNI", href: "/#about" },
];

export function BuySellLeaseLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rni-line/40 bg-rni-deep text-rni-paper">
        <div className="rni-wrap flex min-h-[4.75rem] items-center justify-between gap-6 lg:min-h-[5.5rem]">
          <Link to="/" className="shrink-0 text-rni-paper no-underline" aria-label="Realty Network India, home">
            <span className="block text-sm font-bold tracking-[0.17em] sm:text-base">REALTY NETWORK INDIA</span>
            <span className="mt-1 block text-[0.58rem] font-medium tracking-[0.23em] text-rni-gold sm:text-[0.62rem]">CONNECTING PEOPLE. ENABLING TRANSACTIONS.</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {bslNavigation.map((item) =>
              item.href.startsWith("/#") ? (
                <Link key={item.label} to="/" hash={item.href.slice(2)} className="text-[0.78rem] font-medium text-rni-paper/85 transition-colors hover:text-rni-gold">
                  {item.label}
                </Link>
              ) : item.href.startsWith("/buy-sell-lease#") ? (
                <Link key={item.label} to="/buy-sell-lease" hash={item.href.split("#")[1]} className="text-[0.78rem] font-medium text-rni-paper/85 transition-colors hover:text-rni-gold">
                  {item.label}
                </Link>
              ) : (
                <Link key={item.label} to={item.href} className="text-[0.78rem] font-medium text-rni-gold transition-colors hover:text-rni-paper">
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/" hash="contact" className="border border-rni-gold px-4 py-3 text-xs font-semibold text-rni-paper transition-colors hover:bg-rni-gold hover:text-rni-deep">
              Contact RNI
            </Link>
          </nav>

          <Button type="button" variant="ghost" size="icon" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)} className="text-rni-paper hover:bg-rni-paper/10 hover:text-rni-gold xl:hidden">
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-rni-paper/15 bg-rni-deep px-6 pb-5 pt-2 xl:hidden">
            {bslNavigation.map((item) =>
              item.href.startsWith("/#") ? (
                <Link key={item.label} to="/" hash={item.href.slice(2)} onClick={() => setMenuOpen(false)} className="block border-b border-rni-paper/10 py-3 text-sm text-rni-paper">
                  {item.label}
                </Link>
              ) : item.href.startsWith("/buy-sell-lease#") ? (
                <Link key={item.label} to="/buy-sell-lease" hash={item.href.split("#")[1]} onClick={() => setMenuOpen(false)} className="block border-b border-rni-paper/10 py-3 text-sm text-rni-paper">
                  {item.label}
                </Link>
              ) : (
                <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-rni-paper/10 py-3 text-sm text-rni-gold">
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/" hash="contact" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rni-gold">
              Contact RNI <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-rni-deep text-rni-paper">
        <div className="rni-wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <Link to="/" className="inline-block text-rni-paper no-underline">
              <span className="block text-sm font-bold tracking-[0.17em]">REALTY NETWORK INDIA</span>
              <span className="mt-2 block text-[0.58rem] tracking-[0.22em] text-rni-gold">CONNECTING PEOPLE. ENABLING TRANSACTIONS.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-rni-paper/70">
              A connected real estate network built around property opportunities, relationships and transactions across multiple real estate segments.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">Property Segments</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-rni-paper/75">
              <li><Link to="/buy-sell-lease/residential" className="transition-colors hover:text-rni-gold">Residential</Link></li>
              <li><Link to="/buy-sell-lease/commercial" className="transition-colors hover:text-rni-gold">Commercial</Link></li>
              <li><Link to="/buy-sell-lease/industrial" className="transition-colors hover:text-rni-gold">Industrial</Link></li>
              <li><Link to="/buy-sell-lease/logistics" className="transition-colors hover:text-rni-gold">Warehousing &amp; Logistics</Link></li>
              <li><Link to="/buy-sell-lease/land" className="transition-colors hover:text-rni-gold">Land &amp; Development</Link></li>
              <li><Link to="/buy-sell-lease/investment" className="transition-colors hover:text-rni-gold">Investment</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">Work With Us</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-rni-paper/75">
              <li><Link to="/buy-sell-lease" className="transition-colors hover:text-rni-gold">Buy, Sell &amp; Lease</Link></li>
              <li><Link to="/#projects" className="transition-colors hover:text-rni-gold">New Projects</Link></li>
              <li><Link to="/#network" className="transition-colors hover:text-rni-gold">Refer an Opportunity</Link></li>
              <li><Link to="/#network" className="transition-colors hover:text-rni-gold">Become a Consultant</Link></li>
              <li><Link to="/partnerships" className="transition-colors hover:text-rni-gold">Partner With RNI</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">Get in Touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-rni-paper/75">
              <li><a href="mailto:contact@realtynetworkindia.com" className="break-words hover:text-rni-gold">contact@realtynetworkindia.com</a></li>
              <li><a href="tel:+919996307143" className="inline-flex items-center gap-2 hover:text-rni-gold"><Phone aria-hidden="true" className="size-3.5" />+91-9996307143</a></li>
              <li><Link to="/" hash="contact" className="inline-flex items-center gap-2 font-semibold text-rni-paper hover:text-rni-gold">Submit an Enquiry <ArrowUpRight aria-hidden="true" className="size-3.5" /></Link></li>
            </ul>
            <p className="mt-6 text-xs text-rni-paper/65">Founder and Principal</p>
            <p className="font-display mt-1 text-lg">Alok Verma</p>
          </div>
        </div>
        <div className="border-t border-rni-paper/15">
          <div className="rni-wrap flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-rni-paper/60">© 2026 Realty Network India. All rights reserved.</p>
            <p className="max-w-4xl text-xs leading-5 text-rni-paper/55">Property opportunities are subject to availability, verification and applicable terms. Information on this page is general in nature and does not constitute a guarantee of availability, investment return, title or legal status. Applicable regulatory requirements and professional due diligence should be observed for each transaction.</p>
          </div>
        </div>
      </footer>

      <Link to="/" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 grid size-12 place-items-center border border-rni-line bg-rni-paper text-rni-navy shadow-lg transition-colors hover:bg-rni-gold sm:bottom-7 sm:right-7">
        <ArrowDownRight aria-hidden="true" className="size-5 -rotate-135" />
      </Link>
    </>
  );
}
