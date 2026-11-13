import { useServerFn } from "@tanstack/react-start";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  Phone,
  Plus,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitEnquiry } from "@/routes/enquiries.functions";

export const Route = createFileRoute("/partnerships")({
  component: Partnerships,
  head: () => ({
    meta: [
      {
        title: "Partnerships & Collaboration | Realty Network India",
      },
      {
        name: "description",
        content:
          "Explore partnership and collaboration opportunities with Realty Network India. Connect your market access, property expertise and business relationships with relevant real estate opportunities.",
      },
      {
        property: "og:title",
        content: "Partnerships & Collaboration | Realty Network India",
      },
      {
        property: "og:description",
        content:
          "Better Connected. Stronger Together. Explore collaboration with Realty Network India across developers, agencies, landowners, industrial specialists and professional service providers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navigation = [
  { label: "Home", href: "/" },
  { label: "Buy, Sell & Lease", href: "/#requirements" },
  { label: "New Projects", href: "/#projects" },
  { label: "Industrial & Land", href: "/#segments" },
  { label: "Contact RNI", href: "/#contact" },
  { label: "Partnerships & Collaboration", href: "/partnerships" },
];

const approachSteps = [
  {
    number: "01",
    title: "Complementary Strengths",
    description: "Bring expertise, inventory or local relationships.",
  },
  {
    number: "02",
    title: "Defined Responsibilities",
    description: "Clarify scope, roles and expectations before work begins.",
  },
  {
    number: "03",
    title: "Mutual Business Value",
    description:
      "Explore opportunities where both parties can contribute.",
  },
];

const collaboratorTypes = [
  {
    number: "01",
    title: "Real Estate Developers",
    description:
      "Explore project marketing, qualified buyer introductions, sales support and channel collaboration where appropriate.",
    tag: "Project Collaboration",
  },
  {
    number: "02",
    title: "Property Agencies",
    description:
      "Discuss co-broking, shared requirements, referral arrangements and complementary market coverage.",
    tag: "Agency Network",
  },
  {
    number: "03",
    title: "Landowners & Asset Owners",
    description:
      "Explore potential sale, lease, redevelopment or other property opportunities based on owner objectives.",
    tag: "Asset Opportunities",
  },
  {
    number: "04",
    title: "Industrial & Logistics Specialists",
    description:
      "Connect industrial premises, manufacturing assets, warehouses, land parcels and business requirements.",
    tag: "Industrial Real Estate",
  },
  {
    number: "05",
    title: "Corporate & Institutional Contacts",
    description:
      "Explore property requirements involving offices, operational facilities, institutional sites and business expansion.",
    tag: "Corporate Requirements",
  },
  {
    number: "06",
    title: "Professional Service Providers",
    description:
      "Discuss complementary support from qualified legal, technical, valuation, financial and property service professionals.",
    tag: "Professional Ecosystem",
  },
  {
    number: "07",
    title: "Investment & Asset Networks",
    description:
      "Introduce relevant income-producing property or potential acquisition and disposal opportunities for assessment.",
    tag: "Investment Opportunities",
  },
  {
    number: "08",
    title: "Regional Business Networks",
    description:
      "Collaborate with people who understand local markets, emerging business clusters and property demand.",
    tag: "Market Connectivity",
  },
  {
    number: "09",
    title: "Technology & Data Providers",
    description:
      "Explore tools and services that could improve property information, lead management or transaction coordination.",
    tag: "Digital Enablement",
  },
];

const partnershipPillars = [
  {
    title: "Complementary Capabilities",
    description:
      "Each party brings a clear contribution, such as property access, market expertise, client relationships or specialist services.",
  },
  {
    title: "Transparent Communication",
    description:
      "Information is shared responsibly, expectations are discussed early and relevant parties are kept appropriately informed.",
  },
  {
    title: "Defined Commercial Terms",
    description:
      "Any fees, commissions, referral payments, cost sharing or other economics are documented before applicable work begins.",
  },
  {
    title: "Professional Standards",
    description:
      "Respect for client consent, confidentiality, verification, applicable registrations and legal obligations is fundamental.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Introduce Your Business",
    description:
      "Tell us about your organisation, market coverage, capabilities and the opportunity you see.",
  },
  {
    number: "02",
    title: "Identify Common Ground",
    description:
      "Discuss complementary objectives, target property segments and the potential value of working together.",
  },
  {
    number: "03",
    title: "Define the Arrangement",
    description:
      "Clarify roles, commercial terms, client communication, confidentiality and any required documentation.",
  },
  {
    number: "04",
    title: "Agree Next Steps",
    description:
      "Proceed only where there is mutual agreement, a suitable opportunity and the required permissions or authorisations.",
  },
];

const faqs = [
  {
    question: "Does submitting an enquiry make us an RNI partner?",
    answer:
      "No. It starts a discussion. A partnership exists only when both parties have reviewed and accepted the relevant terms and documentation.",
  },
  {
    question: "Can a small agency or independent professional enquire?",
    answer:
      "Yes. RNI is open to considering organisations and independent professionals whose capabilities and working approach suit a potential collaboration.",
  },
  {
    question: "How are fees or commissions determined?",
    answer:
      "Any commercial terms must be discussed and documented in advance for the relevant arrangement, subject to applicable law and any required registrations.",
  },
  {
    question: "Can we collaborate across multiple property segments?",
    answer:
      "Potentially. The scope will depend on the parties' capabilities, the opportunity and the terms agreed for each assignment.",
  },
  {
    question: "Does RNI guarantee referrals or transaction volume?",
    answer:
      "No. Introductions and transactions depend on market conditions, client needs, suitability and the decisions of the parties involved.",
  },
  {
    question: "Can service providers enquire about working together?",
    answer:
      "Yes. Qualified service providers can introduce their expertise for consideration where it complements an appropriate real estate requirement.",
  },
];

const partnerTypes = [
  "Real Estate Developer",
  "Property Agency",
  "Landowner / Asset Owner",
  "Industrial & Logistics Specialist",
  "Corporate / Institutional Contact",
  "Professional Service Provider",
  "Investment / Asset Network",
  "Regional Business Network",
  "Technology / Data Provider",
  "Other",
];

const collaborationAreas = [
  "Project Marketing & Sales Support",
  "Co-Broking & Referrals",
  "Asset Sale, Lease or Redevelopment",
  "Industrial Real Estate",
  "Corporate Property Requirements",
  "Professional Services Support",
  "Investment Opportunities",
  "Market Connectivity",
  "Digital & Technology Enablement",
  "Other",
];

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Buy, Sell & Lease", href: "/#requirements" },
  { label: "New Projects", href: "/#projects" },
  { label: "Refer an Opportunity", href: "/#network" },
  { label: "Become a Consultant", href: "/#network" },
  { label: "Partner with RNI", href: "/partnerships" },
  { label: "Market Insights", href: "/#perspective" },
  { label: "About RNI", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function Partnerships() {
  const sendEnquiry = useServerFn(submitEnquiry);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState("");
  const [sending, setSending] = useState(false);

  const toggleFaq = (index: number) =>
    setOpenFaq((current) => (current === index ? null : index));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);

    const partnerType = String(fields.get("partnerType") ?? "");
    const primaryMarket = String(fields.get("primaryMarket") ?? "");
    const collaborationArea = String(fields.get("collaborationArea") ?? "");
    const opportunity = String(fields.get("opportunity") ?? "");

    if (!partnerType) {
      setFormStatus("Please select a partner type.");
      return;
    }
    if (!collaborationArea) {
      setFormStatus("Please select an area of collaboration.");
      return;
    }

    const composedRequirement = [
      `Partner type: ${partnerType}`,
      primaryMarket ? `Primary market: ${primaryMarket}` : "",
      `Collaboration area: ${collaborationArea}`,
      "",
      opportunity,
    ]
      .filter(Boolean)
      .join("\n");

    setSending(true);
    setFormStatus("");
    try {
      await sendEnquiry({
        data: {
          fullName: String(fields.get("fullName") ?? ""),
          email: String(fields.get("email") ?? ""),
          phone: String(fields.get("phone") ?? ""),
          organisation: String(fields.get("organisation") ?? ""),
          enquiryType: "Discuss a partnership",
          propertySegment: "",
          requirement: composedRequirement,
          consent: fields.get("consent") === "true",
        },
      });
      form.reset();
      setFormStatus("Thank you. Your partnership enquiry has been received.");
    } catch (error) {
      setFormStatus(
        error instanceof Error
          ? error.message
          : "We couldn't send your enquiry just now. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rni-line/40 bg-rni-deep text-rni-paper">
        <div className="rni-wrap flex min-h-[4.75rem] items-center justify-between gap-6 lg:min-h-[5.5rem]">
          <Link
            to="/"
            className="shrink-0 text-rni-paper no-underline"
            aria-label="Realty Network India, home"
          >
            <span className="block text-sm font-bold tracking-[0.17em] sm:text-base">
              REALTY NETWORK INDIA
            </span>
            <span className="mt-1 block text-[0.58rem] font-medium tracking-[0.23em] text-rni-gold sm:text-[0.62rem]">
              CONNECTING PEOPLE. ENABLING TRANSACTIONS.
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          >
            {navigation.map((item) =>
              item.href.startsWith("/#") || item.href === "/" ? (
                <Link
                  key={item.label}
                  to="/"
                  hash={item.href.startsWith("/#") ? item.href.slice(2) : undefined}
                  className="text-[0.78rem] font-medium text-rni-paper/85 transition-colors hover:text-rni-gold"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[0.78rem] font-medium text-rni-gold transition-colors hover:text-rni-paper"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-rni-paper hover:bg-rni-paper/10 hover:text-rni-gold xl:hidden"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-rni-paper/15 bg-rni-deep px-6 pb-5 pt-2 xl:hidden"
          >
            {navigation.map((item) =>
              item.href.startsWith("/#") || item.href === "/" ? (
                <Link
                  key={item.label}
                  to="/"
                  hash={item.href.startsWith("/#") ? item.href.slice(2) : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-rni-paper/10 py-3 text-sm text-rni-paper"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-rni-paper/10 py-3 text-sm text-rni-gold"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="rni-hero flex items-center">
          <div className="rni-wrap relative z-10 py-16 text-rni-paper sm:py-24 lg:py-28">
            <span className="rni-label">Partnerships &amp; Collaboration</span>
            <h1 className="font-display mt-8 max-w-[80rem] text-5xl font-medium leading-[1.1] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Better Connected.
              <br />
              Stronger Together.
            </h1>
            <p className="mt-5 max-w-[47rem] text-base leading-8 text-rni-paper/85 sm:text-lg">
              Real estate opportunities rarely exist in isolation. They develop
              through relationships between property owners, developers,
              businesses, consultants and local markets. Realty Network India
              aims to bring complementary capabilities together to explore those
              opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#enquiry" className="rni-button inline-flex items-center justify-center gap-2">
                Explore a Partnership
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#collaborators"
                className="rni-button rni-button-outline inline-flex items-center justify-center gap-2 text-rni-paper"
              >
                Discover Collaboration Areas
              </a>
            </div>
          </div>
        </section>

        {/* RNI Approach */}
        <section className="rni-section bg-rni-cream">
          <div className="rni-wrap">
            <div className="max-w-3xl">
              <span className="rni-label">The RNI Approach</span>
              <h2 className="rni-section-title mt-4">
                A network designed around collaboration.
              </h2>
              <p className="mt-5 text-base leading-7 text-rni-muted sm:text-lg">
                Connect your market access, property expertise, inventory or
                business relationships with relevant opportunities.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {approachSteps.map((step) => (
                <article
                  key={step.number}
                  className="border border-rni-line bg-background p-6 sm:p-8"
                >
                  <p className="font-display text-2xl text-rni-gold">
                    {step.number}
                  </p>
                  <h3 className="font-display mt-5 text-2xl font-medium text-rni-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-rni-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Can Collaborate With */}
        <section
          id="collaborators"
          className="rni-section scroll-mt-20 bg-background"
        >
          <div className="rni-wrap">
            <div className="max-w-3xl">
              <span className="rni-label">Who We Can Collaborate With</span>
              <h2 className="rni-section-title mt-4">
                Different strengths. A shared real estate ecosystem.
              </h2>
              <p className="mt-5 text-base leading-7 text-rni-muted sm:text-lg">
                RNI welcomes enquiries from organisations and professionals
                interested in exploring practical collaboration. Each
                relationship is assessed individually, and no partnership is
                implied until formally agreed.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {collaboratorTypes.map((item) => (
                <article
                  key={item.number}
                  className="flex flex-col border border-rni-line bg-rni-cream p-6 sm:p-8"
                >
                  <p className="font-display text-2xl text-rni-gold">
                    {item.number}
                  </p>
                  <h3 className="font-display mt-5 text-2xl font-medium text-rni-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-rni-muted">
                    {item.description}
                  </p>
                  <span className="rni-label mt-6">{item.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes a Good Partnership */}
        <section className="rni-section bg-rni-navy text-rni-paper">
          <div className="rni-wrap">
            <div className="max-w-3xl">
              <span className="rni-label">What Makes a Good Partnership</span>
              <h2 className="rni-section-title mt-4 text-rni-paper">
                Start with a clear reason to work together.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-rni-paper/75 sm:text-lg">
                The strongest partnerships combine relevant market access with
                reliable information, responsive communication and a shared
                understanding of the client's needs.
              </p>
            </div>
            <p className="font-display mt-10 max-w-4xl text-2xl font-medium leading-snug text-rni-paper sm:text-3xl">
              One Network. Multiple Real Estate Opportunities.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {partnershipPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="border-t-2 border-rni-gold pt-5"
                >
                  <span className="mb-4 inline-flex size-9 items-center justify-center bg-rni-gold text-rni-deep">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  <h3 className="font-display text-xl font-medium text-rni-paper">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-rni-paper/75">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* From Introduction to Collaboration */}
        <section className="rni-section bg-rni-cream">
          <div className="rni-wrap">
            <div className="max-w-3xl">
              <span className="rni-label">From Introduction to Collaboration</span>
              <h2 className="rni-section-title mt-4">
                A straightforward path to exploring fit.
              </h2>
              <p className="mt-5 text-base leading-7 text-rni-muted sm:text-lg">
                Partnerships should start with a practical conversation, not
                assumptions. The process below outlines a potential starting
                point.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col border border-rni-line bg-background p-6 sm:p-8"
                >
                  <p className="font-display text-2xl text-rni-gold">
                    {step.number}
                  </p>
                  <h3 className="font-display mt-5 text-xl font-medium text-rni-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-rni-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section id="enquiry" className="rni-section scroll-mt-20 bg-background">
          <div className="rni-wrap grid items-start gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
            <div className="xl:sticky xl:top-28">
              <span className="rni-label">Start a Conversation</span>
              <h2 className="rni-section-title mt-4 max-w-xl">
                Tell us what a partnership could look like.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-rni-muted">
                Share a little about your organisation, the markets you serve and
                the kind of collaboration you would like to explore.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-rni-muted">
                Whether you represent a developer, an agency, a property owner or
                a specialist business, the first step is understanding where your
                capabilities and RNI's proposed network model may align.
              </p>
              <p className="mt-5 border-l-2 border-rni-gold pl-4 text-sm leading-6 text-rni-muted">
                This is an expression of interest, not a partnership agreement,
                appointment, mandate or guarantee of business.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rni-contact-form border border-rni-line bg-rni-cream p-5 sm:p-8 lg:p-10"
            >
              <h3 className="font-display text-2xl font-medium text-rni-navy">
                Partnership Enquiry
              </h3>
              <p className="mt-2 text-xs font-medium text-rni-muted">
                Fields marked * are required.
              </p>

              <div className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Your Name <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    maxLength={120}
                    required
                    placeholder="Full name"
                    className="rni-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Phone Number <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={32}
                    required
                    placeholder="Contact number"
                    className="rni-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Business Email <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    placeholder="name@company.com"
                    className="rni-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="organisation"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Organisation / Business
                  </Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    autoComplete="organization"
                    maxLength={120}
                    placeholder="Organisation name"
                    className="rni-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="partnerType"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Partner Type <span aria-hidden="true">*</span>
                  </Label>
                  <select
                    id="partnerType"
                    name="partnerType"
                    required
                    defaultValue=""
                    className="rni-input w-full px-3 text-sm"
                    aria-label="Partner type"
                  >
                    <option value="">Select partner type</option>
                    {partnerTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="primaryMarket"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Primary Market
                  </Label>
                  <Input
                    id="primaryMarket"
                    name="primaryMarket"
                    maxLength={120}
                    placeholder="City, region or state"
                    className="rni-input"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label
                    htmlFor="collaborationArea"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Area of Collaboration <span aria-hidden="true">*</span>
                  </Label>
                  <select
                    id="collaborationArea"
                    name="collaborationArea"
                    required
                    defaultValue=""
                    className="rni-input w-full px-3 text-sm"
                    aria-label="Area of collaboration"
                  >
                    <option value="">Select collaboration area</option>
                    {collaborationAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label
                    htmlFor="opportunity"
                    className="text-sm font-semibold text-rni-navy"
                  >
                    Tell Us About the Opportunity{" "}
                    <span aria-hidden="true">*</span>
                  </Label>
                  <Textarea
                    id="opportunity"
                    name="opportunity"
                    minLength={10}
                    maxLength={5000}
                    required
                    rows={5}
                    placeholder="Describe your business, capabilities, market coverage and the type of partnership you have in mind."
                    className="rni-input min-h-36 resize-y py-3"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="consent"
                    className="flex items-start gap-3 text-sm leading-6 text-rni-muted"
                  >
                    <input
                      id="consent"
                      name="consent"
                      value="true"
                      type="checkbox"
                      required
                      className="mt-1 size-4 shrink-0 accent-rni-navy"
                    />
                    <span>
                      I confirm that the information provided is accurate to the
                      best of my knowledge and agree that RNI may contact me
                      regarding this enquiry. I understand that submission does
                      not create a partnership or guarantee business.
                    </span>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={sending}
                    className="rni-button w-full sm:w-auto sm:min-w-56"
                  >
                    {sending ? (
                      "Sending enquiry…"
                    ) : (
                      <>
                        Prepare Partnership Enquiry
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </>
                    )}
                  </Button>
                  {formStatus && (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`mt-4 text-sm leading-6 ${
                        formStatus.startsWith("Thank you")
                          ? "text-rni-navy"
                          : "text-destructive"
                      }`}
                    >
                      {formStatus}
                    </p>
                  )}
                  <p className="mt-5 border-l-2 border-rni-line pl-4 text-xs leading-5 text-rni-muted">
                    This demonstration form does not transmit information to
                    RNI. Connect it to a secure form handler, CRM or approved
                    business email workflow before publishing it for live
                    enquiries.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="rni-section bg-rni-cream">
          <div className="rni-wrap max-w-4xl">
            <div className="text-center">
              <span className="rni-label">Frequently Asked Questions</span>
              <h2 className="rni-section-title mt-4">Before we work together.</h2>
            </div>
            <div className="mt-10 divide-y divide-rni-line border-y border-rni-line">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-lg font-medium text-rni-navy sm:text-xl">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-rni-gold">
                      {openFaq === index ? (
                        <X aria-hidden="true" className="size-5" />
                      ) : (
                        <Plus aria-hidden="true" className="size-5" />
                      )}
                    </span>
                  </button>
                  {openFaq === index && (
                    <p className="pb-5 pr-8 text-sm leading-6 text-rni-muted">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-rni-deep py-16 text-rni-paper sm:py-20">
          <div className="rni-wrap flex flex-col items-start justify-between gap-7 xl:flex-row xl:items-center">
            <div>
              <span className="rni-label">Let's connect</span>
              <h2 className="font-display mt-4 text-4xl font-medium leading-tight sm:text-5xl">
                Have a capability worth connecting?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-rni-paper/75 sm:text-lg">
                Let's explore whether your network, expertise or property
                opportunities align with RNI.
              </p>
            </div>
            <a
              href="#enquiry"
              className="rni-button inline-flex shrink-0 items-center justify-center gap-2 sm:min-w-56"
            >
              Discuss a Partnership
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-rni-deep text-rni-paper">
        <div className="rni-wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <Link to="/" className="inline-block text-rni-paper no-underline">
              <span className="block text-sm font-bold tracking-[0.17em]">
                REALTY NETWORK INDIA
              </span>
              <span className="mt-2 block text-[0.58rem] tracking-[0.22em] text-rni-gold">
                CONNECTING PEOPLE. ENABLING TRANSACTIONS.
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-rni-paper/70">
              A connected real estate network built around property
              opportunities, professional relationships and transaction-focused
              collaboration.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-rni-paper/75">
              {footerNav.map((item) =>
                item.href.startsWith("/#") || item.href === "/" ? (
                  <li key={item.label}>
                    <Link
                      to="/"
                      hash={
                        item.href.startsWith("/#")
                          ? item.href.slice(2)
                          : undefined
                      }
                      className="transition-colors hover:text-rni-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="transition-colors hover:text-rni-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-rni-paper/75">
              <li>
                <a
                  href="mailto:contact@realtynetworkindia.com"
                  className="break-words hover:text-rni-gold"
                >
                  contact@realtynetworkindia.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919996307143"
                  className="inline-flex items-center gap-2 hover:text-rni-gold"
                >
                  <Phone aria-hidden="true" className="size-3.5" />
                  +91-9996307143
                </a>
              </li>
              <li>
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 font-semibold text-rni-paper hover:text-rni-gold"
                >
                  Submit an Enquiry
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.17em] text-rni-gold">
              Partnership
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-rni-paper/75">
              {collaboratorTypes.slice(0, 6).map((item) => (
                <li key={item.title}>
                  <a
                    href="#collaborators"
                    className="transition-colors hover:text-rni-gold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-rni-paper/15">
          <div className="rni-wrap flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-rni-paper/60">
              © 2026 Realty Network India. All rights reserved.
            </p>
            <p className="max-w-4xl text-xs leading-5 text-rni-paper/55">
              Partnership opportunities are subject to review, mutual agreement,
              appropriate documentation and applicable legal requirements. No
              partnership, mandate, listing, referral, commission or transaction
              is guaranteed. Each party remains responsible for its own
              representations, permissions and obligations.
            </p>
          </div>
        </div>
      </footer>

      <Link
        to="/"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-30 grid size-12 place-items-center border border-rni-line bg-rni-paper text-rni-navy shadow-lg transition-colors hover:bg-rni-gold sm:bottom-7 sm:right-7"
      >
        <ArrowDownRight aria-hidden="true" className="size-5 -rotate-135" />
      </Link>
    </>
  );
}
