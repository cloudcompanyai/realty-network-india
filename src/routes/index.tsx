import { useServerFn } from "@tanstack/react-start";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquiryTypes, propertySegments } from "@/lib/enquiry-schema";
import heroImage from "@/assets/rni-hero.jpg";
import residentialImage from "@/assets/rni-properties/residential.jpg";
import commercialImage from "@/assets/rni-properties/commercial.jpg";
import industrialImage from "@/assets/rni-properties/industrial.jpg";
import warehousingImage from "@/assets/rni-properties/warehousing.jpg";
import landImage from "@/assets/rni-properties/land.jpg";
import hospitalityImage from "@/assets/rni-properties/hospitality.jpg";
import institutionalImage from "@/assets/rni-properties/institutional.jpg";
import investmentImage from "@/assets/rni-properties/investment.jpg";
import projectsImage from "@/assets/rni-properties/new-developments.jpg";
import { submitEnquiry } from "@/routes/enquiries.functions";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Realty Network India | The Network for India’s Real Estate Market" },
      { name: "description", content: "Explore residential, commercial, industrial and specialist property opportunities through a connected real estate network. Connect with Realty Network India." },
      { property: "og:title", content: "Realty Network India | Connecting People. Enabling Transactions." },
      { property: "og:description", content: "One connected network bringing together India's property owners, buyers, developers and real estate professionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const propertyCards = [
  { name: "Residential Real Estate", description: "Apartments, flats, villas, independent houses, residential plots, gated communities and resale properties.", label: "Explore residential", image: residentialImage },
  { name: "Commercial Real Estate", description: "Office spaces, retail shops, showrooms, business centres, commercial buildings and mixed-use developments.", label: "Explore commercial", image: commercialImage },
  { name: "Industrial & Manufacturing", description: "Industrial plots, factories, manufacturing units, industrial sheds and built-to-suit facilities.", label: "Explore industrial", image: industrialImage },
  { name: "Warehousing & Logistics", description: "Warehouses, distribution centres, fulfilment facilities, logistics parks and cold-storage properties.", label: "Explore warehousing", image: warehousingImage },
  { name: "Land & Development", description: "Residential, commercial and industrial land, plotted developments, development parcels and potential land assembly.", label: "Explore land", image: landImage },
  { name: "Hospitality & Leisure", description: "Hotels, resorts, serviced apartments and leisure properties for owners, operators and prospective investors.", label: "Explore hospitality", image: hospitalityImage },
  { name: "Institutional & Special-Purpose", description: "Hospitals, educational campuses, healthcare facilities and other specialised-use real estate assets.", label: "Explore institutional", image: institutionalImage },
  { name: "Investment & Income-Producing", description: "Tenanted commercial assets, leased warehouses, rental-yield properties, investment-grade buildings and selected portfolios.", label: "Explore investments", image: investmentImage },
];

const requirements = [
  "Buy a Property",
  "Sell a Property",
  "Lease a Property",
  "Find a Tenant",
  "Explore Resale",
  "Discuss a New Project",
  "Submit an Opportunity",
  "Explore Business Property",
];

const networkGroups = [
  { for: "For individuals", title: "Refer an Opportunity", description: "Know someone looking to buy, sell or lease a property? Submit an introduction for review under the applicable referral terms.", link: "Submit an introduction", enquiry: "Refer an opportunity", href: undefined as string | undefined },
  { for: "For professionals", title: "Become a Consultant", description: "Explore working with RNI on property requirements, client relationships and transactions, subject to role-specific eligibility and applicable registrations.", link: "Express interest", enquiry: "Become a consultant", href: undefined as string | undefined },
  { for: "For businesses", title: "Partner With RNI", description: "Developers, property owners, channel partners and specialist service providers can discuss potential collaboration.", link: "Discuss partnership", enquiry: "Discuss a partnership", href: "/partnerships" },
];

const values = [
  { title: "Trust", description: "Respect relationships, handle information responsibly and communicate clearly." },
  { title: "Connection", description: "Bring relevant people and property opportunities together." },
  { title: "Transparency", description: "Establish clear expectations, roles and agreed terms." },
  { title: "Execution", description: "Coordinate thoughtfully towards a well-managed transaction." },
];

const perspectives = [
  { label: "Residential & commercial", title: "Choosing the Right Property", description: "Explore the practical considerations behind property selection, location, intended use and transaction readiness." },
  { label: "Industrial & logistics", title: "Property for Business Needs", description: "Consider access, location, land use, infrastructure and operational suitability when assessing business property." },
  { label: "Transactions & ownership", title: "Making Informed Decisions", description: "Understand the importance of due diligence, clear documentation and professional advice appropriate to each transaction." },
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Property Segments", href: "#segments" },
  { label: "Buy, Sell & Lease", href: "#requirements" },
  { label: "New Projects", href: "#projects" },
  { label: "Our Network", href: "#network" },
  { label: "About RNI", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function ActionLink({ children, enquiry, outlined = false, onChoose }: { children: string; enquiry: string; outlined?: boolean; onChoose: (value: string) => void }) {
  return (
    <Button asChild variant="ghost" className={`rni-button ${outlined ? "rni-button-outline" : ""}`}>
      <a href="#contact" onClick={() => onChoose(enquiry)}>
        {children}<ArrowRight aria-hidden="true" className="size-4" />
      </a>
    </Button>
  );
}

function Index() {
  const sendEnquiry = useServerFn(submitEnquiry);
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [sending, setSending] = useState(false);

  const chooseEnquiry = (value: string) => {
    setEnquiryType(value);
    setFormStatus("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const selectedType = String(fields.get("enquiryType") ?? "");
    if (!(enquiryTypes as readonly string[]).includes(selectedType)) {
      setFormStatus("Please select an enquiry type.");
      return;
    }

    setSending(true);
    setFormStatus("");
    try {
      await sendEnquiry({
        data: {
          fullName: String(fields.get("fullName") ?? ""),
          email: String(fields.get("email") ?? ""),
          phone: String(fields.get("phone") ?? ""),
          organisation: String(fields.get("organisation") ?? ""),
          enquiryType: selectedType as (typeof enquiryTypes)[number],
          propertySegment: String(fields.get("propertySegment") ?? ""),
          requirement: String(fields.get("requirement") ?? ""),
          consent: fields.get("consent") === "true",
        },
      });
      form.reset();
      setEnquiryType("");
      setFormStatus("Thank you. Your enquiry has been received.");
    } catch (error) {
      setFormStatus(error instanceof Error ? error.message : "We couldn't send your enquiry just now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rni-line/40 bg-rni-deep text-rni-paper">
        <div className="rni-wrap flex min-h-[4.75rem] items-center justify-between gap-6 lg:min-h-[5.5rem]">
          <a href="#home" className="shrink-0 text-rni-paper no-underline" aria-label="Realty Network India, home">
            <span className="block text-sm font-bold tracking-[0.17em] sm:text-base">REALTY NETWORK INDIA</span>
            <span className="mt-1 block text-[0.58rem] font-medium tracking-[0.23em] text-rni-gold sm:text-[0.62rem]">CONNECTING PEOPLE. ENABLING TRANSACTIONS.</span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-[0.78rem] font-medium text-rni-paper/85 transition-colors hover:text-rni-gold">{item.label}</a>
            ))}
            <a href="#contact" className="border border-rni-gold px-4 py-3 text-xs font-semibold text-rni-paper transition-colors hover:bg-rni-gold hover:text-rni-deep">Connect With Us</a>
          </nav>

          <Button type="button" variant="ghost" size="icon" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)} className="text-rni-paper hover:bg-rni-paper/10 hover:text-rni-gold xl:hidden">
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-rni-paper/15 bg-rni-deep px-6 pb-5 pt-2 xl:hidden">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-rni-paper/10 py-3 text-sm text-rni-paper">{item.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rni-gold">Connect with us <ArrowRight aria-hidden="true" className="size-4" /></a>
        </nav>}
      </header>

      <main>
        <section id="home" className="rni-hero flex scroll-mt-20 items-center">
          <img src={heroImage} alt="Contemporary commercial towers at dusk" width={1536} height={1024} fetchPriority="high" className="rni-hero-image" />
          <div className="rni-wrap relative z-10 py-16 text-rni-paper sm:py-24 lg:py-28">
            <span className="rni-label">A connected real estate ecosystem</span>
            <h1 className="font-display mt-8 max-w-[80rem] text-5xl font-medium leading-[1.1] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">The Network for India’s Real Estate Market.</h1>
            <p className="mt-5 text-xl font-medium tracking-[0.06em] text-rni-gold sm:text-2xl">Connecting People. Enabling Transactions.</p>
            <p className="mt-5 max-w-[47rem] text-base leading-8 text-rni-paper/85 sm:text-lg">
              From homes and commercial spaces to industrial assets, land and specialised property opportunities, Realty Network India connects people, property owners, developers and real estate professionals to help move opportunities towards meaningful transactions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink enquiry="Property requirement" onChoose={chooseEnquiry}>Explore Property Segments</ActionLink>
              <ActionLink enquiry="Discuss a partnership" outlined onChoose={chooseEnquiry}>Join the Network</ActionLink>
            </div>
            <div className="mt-12 border-t border-rni-paper/25 pt-5 sm:mt-16">
              <p className="text-xs font-semibold tracking-[0.16em] text-rni-paper/80">BUILT ON TRUST. CONNECTED BY OPPORTUNITY.</p>
            </div>
          </div>
        </section>

        <section aria-label="RNI at a glance" className="bg-rni-paper">
          <div className="rni-wrap grid grid-cols-2 border-x border-rni-line sm:grid-cols-4">
            {[
              { title: "Property", caption: "Opportunities across multiple segments" },
              { title: "People", caption: "Owners, buyers, sellers and developers" },
              { title: "Network", caption: "Consultants, referrers and partners" },
              { title: "Transactions", caption: "Connections designed to move business forward" },
            ].map((item, index) => (
              <div key={item.title} className={`px-5 py-7 sm:px-7 sm:py-9 ${index % 2 === 0 ? "border-r border-rni-line" : "sm:border-r sm:border-rni-line"} ${index >= 2 ? "border-t border-rni-line sm:border-t-0" : ""} ${index === 3 ? "sm:border-r-0" : ""}`}>
                <h2 className="font-display text-xl font-medium text-rni-navy sm:text-2xl">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-rni-muted">{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="segments" className="rni-section scroll-mt-20 bg-rni-cream">
          <div className="rni-wrap">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <span className="rni-label">Our property universe</span>
                <h2 className="rni-section-title mt-4">Real Estate, Across Segments.</h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-rni-muted sm:text-lg">
                  Different property needs. Different opportunities. One connected network bringing together residential, business, industrial and specialist real estate markets.
                </p>
              </div>
              <ActionLink enquiry="Property requirement" onChoose={chooseEnquiry}>Discuss an Opportunity</ActionLink>
            </div>
            <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {propertyCards.map((property, index) => (
                <article key={property.name} className="rni-property-card group flex min-w-0 flex-col overflow-hidden border border-rni-line bg-background">
                  <a href="#contact" onClick={() => chooseEnquiry(property.label.replace("Explore ", ""))} aria-label={`${property.label} properties`} className="relative block aspect-[1.36] overflow-hidden bg-rni-cream">
                    <img src={property.image} alt={property.name} width={512} height={512} loading="lazy" className="rni-property-image size-full object-cover" />
                    <span className="absolute left-4 top-4 bg-background px-3 py-2 font-display text-sm tabular-nums text-rni-navy">{String(index + 1).padStart(2, "0")}</span>
                  </a>
                  <div className="flex flex-1 flex-col px-5 pb-7 pt-6 sm:px-6">
                    <h3 className="font-display text-[1.45rem] font-medium leading-snug text-rni-navy">{property.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-rni-muted">{property.description}</p>
                    <a href="#contact" onClick={() => chooseEnquiry(property.label.replace("Explore ", ""))} className="rni-link mt-6 w-fit">{property.label}<ArrowRight aria-hidden="true" className="size-3.5" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="rni-section scroll-mt-20 bg-rni-navy text-rni-paper">
          <div className="rni-wrap">
            <span className="rni-label">More than property listings</span>
            <h2 className="rni-section-title mt-4 text-rni-paper">A Connected Real Estate Ecosystem.</h2>
            <p className="mt-5 max-w-4xl text-base leading-7 text-rni-paper/75 sm:text-lg">
              RNI is being developed around the relationships that make transactions possible: property owners, buyers, developers, consultants, referrers and specialist partners.
            </p>
            <div className="mt-12 grid border border-rni-paper/20 md:grid-cols-3">
              {[
                { title: "Property Opportunities", description: "Connect property requirements with relevant opportunities across residential, commercial, industrial and specialist assets." },
                { title: "People & Relationships", description: "Bring together property owners, buyers, sellers, developers, consultants and people who can introduce a genuine opportunity." },
                { title: "Transaction Support", description: "Facilitate introductions and coordinate with relevant parties throughout a transaction, within agreed roles and applicable law." },
              ].map((item, index) => (
                <article key={item.title} className={`px-6 py-7 sm:px-8 sm:py-9 ${index < 2 ? "border-b border-rni-paper/20 md:border-b-0 md:border-r" : ""}`}>
                  <p className="font-display text-2xl text-rni-gold">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="font-display mt-6 text-2xl font-medium text-rni-paper">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-rni-paper/75">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="requirements" className="rni-section scroll-mt-20 bg-rni-cream">
          <div className="rni-wrap grid items-center gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:gap-16">
            <div>
              <span className="rni-label">Your requirement. The right connection.</span>
              <h2 className="rni-section-title mt-4 max-w-2xl">Buy, Sell or Lease. Start With a Conversation.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-rni-muted">
                Whether you are looking for a home, marketing a commercial asset, exploring an industrial property or seeking a suitable tenant, RNI aims to connect your requirement with relevant people and opportunities.
              </p>
              <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                {requirements.map((item) => (
                  <a key={item} href="#contact" onClick={() => chooseEnquiry(item === "Discuss a New Project" ? "New project" : item === "Submit an Opportunity" ? "Refer an opportunity" : "Property requirement")} className="flex items-start gap-3 border-b border-rni-line py-3.5 text-sm font-medium leading-6 text-rni-navy transition-colors hover:text-rni-muted">
                    <span aria-hidden="true" className="text-rni-gold">—</span>{item}
                  </a>
                ))}
              </div>
              <ActionLink enquiry="Property requirement" onChoose={chooseEnquiry}>Share Your Requirement</ActionLink>
            </div>
            <div className="relative min-w-0">
              <img src={residentialImage} alt="Sunlit contemporary residential interior" width={512} height={512} loading="lazy" className="aspect-[1.1] w-full object-cover sm:aspect-[1.32]" />
              <div className="relative -mt-1 w-[88%] bg-rni-navy p-6 text-rni-paper sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:w-[78%] sm:p-8">
                <p className="text-[0.67rem] font-semibold tracking-[0.17em] text-rni-gold">REAL ESTATE, CONNECTED</p>
                <h3 className="font-display mt-3 text-2xl font-medium leading-snug sm:text-3xl">From property search to opportunity.</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="network" className="rni-section scroll-mt-20 bg-background">
          <div className="rni-wrap">
            <span className="rni-label">Grow with the network</span>
            <h2 className="rni-section-title mt-4">Opportunity Connects People.</h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-rni-muted sm:text-lg">
              Real estate opportunities can come from many places. RNI&apos;s network model is intended to make relevant introductions easier and create structured ways for people and organisations to engage.
            </p>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {networkGroups.map((item) => (
                <article key={item.title} className="flex flex-col border border-rni-line bg-rni-cream p-6 sm:p-8">
                  <span className="rni-label">{item.for}</span>
                  <h3 className="font-display mt-4 text-2xl font-medium text-rni-navy">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-rni-muted">{item.description}</p>
                  {item.href ? <Link to={item.href} className="rni-link mt-7 w-fit">{item.link}<ArrowRight aria-hidden="true" className="size-3.5" /></Link> : <a href="#contact" onClick={() => chooseEnquiry(item.enquiry)} className="rni-link mt-7 w-fit">{item.link}<ArrowRight aria-hidden="true" className="size-3.5" /></a>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="rni-section scroll-mt-20 bg-rni-cream">
          <div className="rni-wrap grid items-center gap-10 xl:grid-cols-2 xl:gap-16">
            <img src={projectsImage} alt="New residential developments with landscaped gardens" width={512} height={512} loading="lazy" className="aspect-[1.2] w-full object-cover sm:aspect-[1.45]" />
            <div>
              <span className="rni-label">Developer & project opportunities</span>
              <h2 className="rni-section-title mt-4 max-w-2xl">New Projects. New Possibilities.</h2>
              <p className="mt-5 text-base leading-7 text-rni-muted">
                RNI intends to connect prospective buyers and channel partners with relevant new residential and commercial developments. Developers can get in touch to discuss project information, inventory, marketing requirements and potential sales partnerships.
              </p>
              <ul className="mt-6 divide-y divide-rni-line">
                {["Residential developments and new homes", "Commercial projects and business spaces", "Plotted developments and eligible land opportunities", "Developer empanelment and channel partnerships"].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3.5 text-sm leading-6 text-rni-navy">
                    <span aria-hidden="true" className="mt-0.5 text-rni-gold">◆</span>{item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <ActionLink enquiry="New project" onChoose={chooseEnquiry}>Discuss a Project</ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section className="rni-section bg-rni-paper">
          <div className="rni-wrap">
            <div className="mx-auto max-w-4xl text-center">
              <span className="rni-label">The RNI approach</span>
              <h2 className="rni-section-title mt-4">Built on Trust. Connected by Opportunity.</h2>
              <p className="mt-4 text-base leading-7 text-rni-muted sm:text-lg">
                Real estate is ultimately a people business. We believe clear communication, relevant introductions, transparent expectations and responsible coordination are essential to building lasting relationships.
              </p>
            </div>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <article key={value.title} className="border-t-2 border-rni-gold pt-5">
                  <h3 className="font-display text-2xl font-medium text-rni-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-rni-muted">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="perspective" className="rni-section scroll-mt-20 bg-background">
          <div className="rni-wrap">
            <span className="rni-label">Knowledge & perspective</span>
            <h2 className="rni-section-title mt-4">Understand the Market.</h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-rni-muted sm:text-lg">
              Real estate decisions benefit from a clear understanding of property requirements, location dynamics, transaction structures and the considerations that shape each opportunity.
            </p>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {perspectives.map((item) => (
                <article key={item.title} className="border border-rni-line p-6 sm:p-8">
                  <span className="rni-label">{item.label}</span>
                  <h3 className="font-display mt-4 text-2xl font-medium leading-snug text-rni-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-rni-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rni-deep py-16 text-rni-paper sm:py-20">
          <div className="rni-wrap flex flex-col items-start justify-between gap-7 xl:flex-row xl:items-center">
            <div>
              <span className="rni-label">Let&apos;s connect</span>
              <h2 className="font-display mt-4 text-4xl font-medium leading-tight sm:text-5xl">Have a Property Opportunity?</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-rni-paper/75 sm:text-lg">Tell us what you are looking for, what you have available or how you would like to collaborate with Realty Network India.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ActionLink enquiry="Property requirement" onChoose={chooseEnquiry}>Contact RNI</ActionLink>
              <ActionLink enquiry="Discuss a partnership" outlined onChoose={chooseEnquiry}>Join the Network</ActionLink>
            </div>
          </div>
        </section>

        <section id="contact" className="rni-section scroll-mt-20 bg-rni-cream">
          <div className="rni-wrap grid items-start gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
            <div className="xl:sticky xl:top-28">
              <span className="rni-label">Start a conversation</span>
              <h2 className="rni-section-title mt-4 max-w-xl">Let&apos;s Discuss Your Requirement.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-rni-muted">
                Share a few details about your property, requirement or proposed partnership. Our team can review your enquiry and determine the appropriate next step.
              </p>
              <dl className="mt-8 space-y-5 border-t border-rni-line pt-6 text-sm">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.13em] text-rni-muted">Organisation</dt>
                  <dd className="mt-1 font-medium text-rni-navy">Realty Network India</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.13em] text-rni-muted">Email</dt>
                  <dd className="mt-1"><a href="mailto:contact@realtynetworkindia.com" className="font-medium text-rni-navy hover:underline">contact@realtynetworkindia.com</a></dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.13em] text-rni-muted">Phone</dt>
                  <dd className="mt-1"><a href="tel:+919996307143" className="inline-flex items-center gap-2 font-medium text-rni-navy hover:underline"><Phone aria-hidden="true" className="size-3.5" />+91-9996307143</a></dd>
                </div>
                <div className="border-t border-rni-line pt-5">
                  <dt className="text-xs font-medium uppercase tracking-[0.13em] text-rni-muted">Founder and Principal</dt>
                  <dd className="mt-1 font-display text-lg font-medium text-rni-navy">Alok Verma</dd>
                </div>
              </dl>
              <p className="mt-6 border-l-2 border-rni-gold pl-4 text-sm leading-6 text-rni-muted">Please do not include sensitive personal or financial information.</p>
            </div>

            <form onSubmit={handleSubmit} className="rni-contact-form border border-rni-line bg-background p-5 sm:p-8 lg:p-10">
              <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-semibold text-rni-navy">Full Name <span aria-hidden="true">*</span></Label>
                  <Input id="fullName" name="fullName" autoComplete="name" maxLength={120} required placeholder="Your name" className="rni-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-rni-navy">Email Address <span aria-hidden="true">*</span></Label>
                  <Input id="email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@example.com" className="rni-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-rni-navy">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={32} placeholder="Include your country code" className="rni-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organisation" className="text-sm font-semibold text-rni-navy">Organisation</Label>
                  <Input id="organisation" name="organisation" autoComplete="organization" maxLength={120} placeholder="Company or organisation" className="rni-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enquiryType" className="text-sm font-semibold text-rni-navy">Enquiry Type <span aria-hidden="true">*</span></Label>
                  <select id="enquiryType" name="enquiryType" required value={enquiryType} onChange={(event) => chooseEnquiry(event.currentTarget.value)} className="rni-input w-full px-3 text-sm" aria-label="Enquiry Type">
                    <option value="">Select an option</option>
                    {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="propertySegment" className="text-sm font-semibold text-rni-navy">Property Segment</Label>
                  <select id="propertySegment" name="propertySegment" defaultValue="" className="rni-input w-full px-3 text-sm" aria-label="Property Segment">
                    <option value="">Select a segment, if applicable</option>
                    {propertySegments.map((segment) => <option key={segment} value={segment}>{segment}</option>)}
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="requirement" className="text-sm font-semibold text-rni-navy">Tell Us About Your Requirement <span aria-hidden="true">*</span></Label>
                  <Textarea id="requirement" name="requirement" minLength={10} maxLength={5000} required rows={5} placeholder="Property type, location, budget or other relevant details..." className="rni-input min-h-36 resize-y py-3" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="consent" className="flex items-start gap-3 text-sm leading-6 text-rni-muted">
                    <input id="consent" name="consent" value="true" type="checkbox" required className="mt-1 size-4 shrink-0 accent-rni-navy" />
                    <span>By submitting, you agree that RNI may use the details provided to respond to this enquiry.</span>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" disabled={sending} className="rni-button w-full sm:w-auto sm:min-w-56">
                    {sending ? "Sending enquiry…" : <>Prepare Enquiry<ArrowRight aria-hidden="true" className="size-4" /></>}
                  </Button>
                  {formStatus && <p role="status" aria-live="polite" className={`mt-4 text-sm leading-6 ${formStatus.startsWith("Thank you") ? "text-rni-navy" : "text-destructive"}`}>{formStatus}</p>}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-rni-deep text-rni-paper">
        <div className="rni-wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <a href="#home" className="inline-block text-rni-paper no-underline">
              <span className="block text-sm font-bold tracking-[0.17em]">REALTY NETWORK INDIA</span>
              <span className="mt-2 block text-[0.58rem] tracking-[0.22em] text-rni-gold">THE NETWORK FOR INDIA&apos;S REAL ESTATE MARKET.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-rni-paper/70">Connecting People. Enabling Transactions.</p>
            <p className="mt-3 text-xs tracking-wide text-rni-paper/60">Built on Trust. Connected by Opportunity.</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">Property Segments</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-rni-paper/75">
              {propertyCards.slice(0, 6).map((item) => <li key={item.name}><a href="#segments" className="transition-colors hover:text-rni-gold">{item.name.replace(" Real Estate", "")}</a></li>)}
              <li><a href="#segments" className="transition-colors hover:text-rni-gold">Specialist Properties</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">Work With Us</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-rni-paper/75">
              {[
                { label: "Buy, Sell & Lease", href: "#requirements" },
                { label: "New Projects", href: "#projects" },
                { label: "Refer an Opportunity", href: "#network" },
                { label: "Become a Consultant", href: "#network" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-rni-gold">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/partnerships" className="transition-colors hover:text-rni-gold">
                  Partner With RNI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">Get in Touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-rni-paper/75">
              <li><a href="mailto:contact@realtynetworkindia.com" className="break-words hover:text-rni-gold">contact@realtynetworkindia.com</a></li>
              <li><a href="tel:+919996307143" className="hover:text-rni-gold">Call RNI</a></li>
              <li><a href="#contact" className="inline-flex items-center gap-2 font-semibold text-rni-paper hover:text-rni-gold">Submit an Enquiry <ArrowUpRight aria-hidden="true" className="size-3.5" /></a></li>
            </ul>
            <p className="mt-6 text-xs text-rni-paper/65">Founder and Principal</p>
            <p className="font-display mt-1 text-lg">Alok Verma</p>
          </div>
        </div>
        <div className="border-t border-rni-paper/15">
          <div className="rni-wrap flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-rni-paper/60">© 2026 Realty Network India. All rights reserved.</p>
            <p className="max-w-4xl text-xs leading-5 text-rni-paper/55">Property availability, services and transaction support are subject to verification, applicable law, registrations and agreed terms. Not every category or service may be operational in every location. Property information should be independently verified before a transaction. Nothing on this website constitutes legal, tax or investment advice.</p>
          </div>
        </div>
      </footer>

      <a href="#home" aria-label="Back to top" className="fixed bottom-5 right-5 z-30 grid size-12 place-items-center border border-rni-line bg-rni-paper text-rni-navy shadow-lg transition-colors hover:bg-rni-gold sm:bottom-7 sm:right-7">
        <ArrowDownRight aria-hidden="true" className="size-5 -rotate-135" />
      </a>
    </>
  );
}