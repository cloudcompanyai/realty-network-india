import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { BuySellLeaseLayout } from "@/components/buy-sell-lease-layout";
import { segmentDetails } from "@/lib/segment-data";

export const Route = createFileRoute("/buy-sell-lease/")({
  component: BuySellLeaseIndex,
  head: () => ({
    meta: [
      { title: "Buy, Sell & Lease | Realty Network India" },
      {
        name: "description",
        content:
          "Find the right property and make the right move. Buy, sell or lease residential, commercial, industrial, land and investment real estate through Realty Network India's connected network.",
      },
      {
        property: "og:title",
        content: "Buy, Sell & Lease | Realty Network India",
      },
      {
        property: "og:description",
        content:
          "From a home for your family to commercial premises, industrial facilities, development land and income-producing assets, RNI connects property requirements with relevant opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const approachSteps = [
  { number: "01", title: "Understand", description: "We start with your property type, location, intended use, budget or commercial objectives." },
  { number: "02", title: "Connect", description: "We work to connect your requirement with relevant owners, opportunities or network participants." },
  { number: "03", title: "Evaluate", description: "Relevant options can be assessed against suitability, commercial terms and appropriate due-diligence requirements." },
  { number: "04", title: "Progress", description: "Where agreed, we help coordinate discussions and transaction steps with the relevant parties and qualified professionals." },
];

const objectiveCards = [
  {
    audience: "For Buyers",
    title: "Find a Property",
    description: "Tell us what you are looking for and we can assess the requirement for potential matching opportunities within our available network.",
    points: ["Define location and property type", "Share budget and intended use", "Discuss suitable opportunities"],
  },
  {
    audience: "For Owners",
    title: "Sell a Property",
    description: "Share the essential details of your property so the opportunity can be reviewed for potential buyer interest and an appropriate route to market.",
    points: ["Share location and property specifications", "Indicate expected price and timeline", "Discuss marketing and transaction support"],
  },
  {
    audience: "For Occupiers & Landlords",
    title: "Lease a Property",
    description: "Explore potential spaces for business operations, storage, retail, residential use or other suitable requirements.",
    points: ["Specify use, area and preferred location", "Share rental expectations and lease term", "Discuss suitable occupancy opportunities"],
  },
];

function BuySellLeaseIndex() {
  return (
    <BuySellLeaseLayout>
      {/* Hero */}
      <section className="rni-hero flex items-center">
        <div className="rni-wrap relative z-10 py-16 text-rni-paper sm:py-24 lg:py-28">
          <span className="rni-label">Buy · Sell · Lease</span>
          <h1 className="font-display mt-8 max-w-[80rem] text-5xl font-medium leading-[1.1] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Find the Right Property.
            <br />
            Make the Right Move.
          </h1>
          <p className="mt-5 max-w-[47rem] text-base leading-8 text-rni-paper/85 sm:text-lg">
            From a home for your family to commercial premises, industrial facilities, development land and income-producing assets, Realty Network India connects property requirements with relevant opportunities through a connected real estate network.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/" hash="contact" className="rni-button inline-flex items-center justify-center gap-2">
              Find a Property
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link to="/" hash="contact" className="rni-button inline-flex items-center justify-center gap-2">
              List a Property
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link to="/" hash="contact" className="rni-button rni-button-outline inline-flex items-center justify-center gap-2 text-rni-paper">
              Explore Leasing
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="mt-12 border-t border-rni-paper/25 pt-5 sm:mt-16">
            <p className="text-xs font-semibold tracking-[0.16em] text-rni-paper/80">
              RESIDENTIAL · COMMERCIAL · INDUSTRIAL · LAND · WAREHOUSING · INVESTMENT
            </p>
          </div>
        </div>
      </section>

      {/* Buy / Sell / Lease quick links */}
      <section className="bg-rni-paper">
        <div className="rni-wrap grid sm:grid-cols-3">
          {[
            { label: "Buy", description: "Find property aligned with your needs." },
            { label: "Sell", description: "Connect your property with potential buyers." },
            { label: "Lease", description: "Explore spaces for occupation or rental income." },
          ].map((item, index) => (
            <Link
              key={item.label}
              to="/"
              hash="contact"
              className={`group flex items-center justify-between gap-4 px-6 py-8 transition-colors hover:bg-rni-cream sm:px-8 sm:py-10 ${
                index < 2 ? "border-b border-rni-line sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <div>
                <h2 className="font-display text-2xl font-medium text-rni-navy sm:text-3xl">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-rni-muted">{item.description}</p>
              </div>
              <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-rni-gold transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* Full-Spectrum Approach — segments grid */}
      <section id="segments" className="rni-section scroll-mt-20 bg-rni-cream">
        <div className="rni-wrap">
          <div className="max-w-3xl">
            <span className="rni-label">A Full-Spectrum Approach</span>
            <h2 className="rni-section-title mt-4">One Network. Multiple Real Estate Opportunities.</h2>
            <p className="mt-5 text-base leading-7 text-rni-muted sm:text-lg">
              Different property needs call for different expertise. Explore our eight property segments and connect with the relevant team or network partner for your requirement.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {segmentDetails.map((segment) => (
              <article key={segment.slug} className="rni-property-card group flex min-w-0 flex-col overflow-hidden border border-rni-line bg-background">
                <Link to="/buy-sell-lease/$segment" params={{ segment: segment.slug }} aria-label={segment.name} className="relative block aspect-[1.36] overflow-hidden bg-rni-cream">
                  <img src={segment.image} alt={segment.imageAlt} width={512} height={512} loading="lazy" className="rni-property-image size-full object-cover" />
                  <span className="absolute left-4 top-4 bg-background px-3 py-2 font-display text-sm tabular-nums text-rni-navy">{segment.index} / {segment.shortName.toUpperCase()}</span>
                </Link>
                <div className="flex flex-1 flex-col px-5 pb-7 pt-6 sm:px-6">
                  <span className="text-2xl text-rni-gold" aria-hidden="true">{segment.icon}</span>
                  <h3 className="font-display mt-4 text-[1.35rem] font-medium leading-snug text-rni-navy">{segment.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-rni-muted">{segment.tagline}</p>
                  <Link to="/buy-sell-lease/$segment" params={{ segment: segment.slug }} className="rni-link mt-6 w-fit">
                    {segment.ctaLabel}
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The RNI Approach */}
      <section className="rni-section bg-rni-navy text-rni-paper">
        <div className="rni-wrap">
          <div className="max-w-3xl">
            <span className="rni-label">The RNI Approach</span>
            <h2 className="rni-section-title mt-4 text-rni-paper">A More Connected Way to Move Property Forward.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-rni-paper/75 sm:text-lg">
              A structured approach to bringing together property requirements, owners and relevant market participants, with transaction support shaped around the opportunity.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {approachSteps.map((step) => (
              <article key={step.number} className="border-t-2 border-rni-gold pt-5">
                <p className="font-display text-2xl text-rni-gold">{step.number}</p>
                <h3 className="font-display mt-5 text-xl font-medium text-rni-paper">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-rni-paper/75">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Start with Your Objective */}
      <section className="rni-section bg-rni-cream">
        <div className="rni-wrap">
          <div className="max-w-3xl">
            <span className="rni-label">Start with Your Objective</span>
            <h2 className="rni-section-title mt-4">What Would You Like to Do?</h2>
            <p className="mt-5 text-base leading-7 text-rni-muted sm:text-lg">
              Whether you are acquiring an asset, bringing a property to market or looking for the right space to occupy, start by telling us what you need.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {objectiveCards.map((card) => (
              <article key={card.title} className="flex flex-col border border-rni-line bg-background p-6 sm:p-8">
                <span className="rni-label">{card.audience}</span>
                <h3 className="font-display mt-4 text-2xl font-medium text-rni-navy">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-rni-muted">{card.description}</p>
                <ul className="mt-6 space-y-3 border-t border-rni-line pt-5">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-rni-navy">
                      <span aria-hidden="true" className="mt-0.5 text-rni-gold">◆</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link to="/" hash="contact" className="rni-link mt-7 w-fit">
                  Get Started
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rni-deep py-16 text-rni-paper sm:py-20">
        <div className="rni-wrap flex flex-col items-start justify-between gap-7 xl:flex-row xl:items-center">
          <div>
            <span className="rni-label">Your Next Move Starts Here</span>
            <h2 className="font-display mt-4 text-4xl font-medium leading-tight sm:text-5xl">Have a Property Requirement or Opportunity?</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-rni-paper/75 sm:text-lg">
              Whether you are a buyer, seller, landlord, tenant, investor or property owner, start a conversation with Realty Network India. Share your requirement and we will explore the appropriate next steps.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link to="/" hash="contact" className="rni-button inline-flex items-center justify-center gap-2">
              Connect with RNI
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link to="/#network" className="rni-button rni-button-outline inline-flex items-center justify-center gap-2 text-rni-paper">
              Explore Our Network
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </BuySellLeaseLayout>
  );
}
