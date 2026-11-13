import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { BuySellLeaseLayout } from "@/components/buy-sell-lease-layout";
import { getSegmentBySlug, segmentDetails, type SegmentSlug } from "@/lib/segment-data";

export const Route = createFileRoute("/buy-sell-lease/$segment")({
  component: SegmentPage,
  head: ({ params }) => {
    const segment = getSegmentBySlug(params.segment);
    if (!segment) return { meta: [] };
    return {
      meta: [
        { title: `${segment.name} | Buy, Sell & Lease | Realty Network India` },
        {
          name: "description",
          content: segment.tagline,
        },
        { property: "og:title", content: `${segment.name} | Realty Network India` },
        { property: "og:description", content: segment.overview.slice(0, 160) },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function SegmentPage() {
  const { segment: slug } = Route.useParams();
  const segment = getSegmentBySlug(slug);

  if (!segment) {
    throw notFound();
  }

  const currentIndex = segmentDetails.findIndex((s) => s.slug === segment.slug);
  const prevSegment = currentIndex > 0 ? segmentDetails[currentIndex - 1] : segmentDetails[segmentDetails.length - 1];
  const nextSegment = currentIndex < segmentDetails.length - 1 ? segmentDetails[currentIndex + 1] : segmentDetails[0];

  const otherSegments = segmentDetails.filter((s) => s.slug !== segment.slug);

  return (
    <BuySellLeaseLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-rni-deep">
        <img
          src={segment.image}
          alt={segment.imageAlt}
          width={512}
          height={512}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-rni-deep via-rni-deep/90 to-rni-deep/50" />
        <div className="rni-wrap relative z-10 py-16 text-rni-paper sm:py-24 lg:py-28">
          <Link
            to="/buy-sell-lease"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-rni-gold transition-colors hover:text-rni-paper"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All Property Segments
          </Link>
          <span className="rni-label mt-8">{segment.index} / {segment.shortName.toUpperCase()}</span>
          <h1 className="font-display mt-4 max-w-[80rem] text-5xl font-medium leading-[1.1] sm:text-6xl lg:text-7xl">
            {segment.name}
          </h1>
          <p className="mt-5 max-w-[47rem] text-base leading-8 text-rni-paper/85 sm:text-lg">
            {segment.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/" hash="contact" className="rni-button inline-flex items-center justify-center gap-2">
              {segment.ctaLabel}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link to="/" hash="contact" className="rni-button rni-button-outline inline-flex items-center justify-center gap-2 text-rni-paper">
              Discuss a Requirement
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="rni-section bg-rni-cream">
        <div className="rni-wrap grid items-start gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
          <div className="xl:sticky xl:top-28">
            <span className="rni-label">Segment Overview</span>
            <h2 className="rni-section-title mt-4 text-4xl">
              {segment.shortName} Real Estate.
            </h2>
            <img
              src={segment.image}
              alt={segment.imageAlt}
              width={512}
              height={512}
              loading="lazy"
              className="mt-8 aspect-[1.2] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base leading-8 text-rni-muted sm:text-lg">{segment.overview}</p>

            <h3 className="font-display mt-10 text-xl font-medium text-rni-navy">Property Types</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {segment.propertyTypes.map((type) => (
                <div key={type} className="flex items-start gap-3 border border-rni-line bg-background px-4 py-3.5">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-rni-gold" />
                  <span className="text-sm leading-6 text-rni-navy">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buy / Sell / Lease */}
      <section className="rni-section bg-background">
        <div className="rni-wrap">
          <div className="max-w-3xl">
            <span className="rni-label">Buy · Sell · Lease</span>
            <h2 className="rni-section-title mt-4">Three Ways to Engage.</h2>
            <p className="mt-5 text-base leading-7 text-rni-muted sm:text-lg">
              Whether you are acquiring, disposing or leasing {segment.shortName.toLowerCase()} property, each path starts with understanding your objective and connecting it with the right opportunity.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <article className="flex flex-col border border-rni-line bg-rni-cream p-6 sm:p-8">
              <span className="rni-label">Buy</span>
              <h3 className="font-display mt-4 text-2xl font-medium text-rni-navy">{segment.buyTitle}</h3>
              <ul className="mt-5 space-y-3 border-t border-rni-line pt-5">
                {segment.buyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-rni-navy">
                    <span aria-hidden="true" className="mt-0.5 text-rni-gold">◆</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
            <article className="flex flex-col border border-rni-line bg-rni-cream p-6 sm:p-8">
              <span className="rni-label">Sell</span>
              <h3 className="font-display mt-4 text-2xl font-medium text-rni-navy">{segment.sellTitle}</h3>
              <ul className="mt-5 space-y-3 border-t border-rni-line pt-5">
                {segment.sellPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-rni-navy">
                    <span aria-hidden="true" className="mt-0.5 text-rni-gold">◆</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
            <article className="flex flex-col border border-rni-line bg-rni-cream p-6 sm:p-8">
              <span className="rni-label">Lease</span>
              <h3 className="font-display mt-4 text-2xl font-medium text-rni-navy">{segment.leaseTitle}</h3>
              <ul className="mt-5 space-y-3 border-t border-rni-line pt-5">
                {segment.leasePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-6 text-rni-navy">
                    <span aria-hidden="true" className="mt-0.5 text-rni-gold">◆</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="rni-section bg-rni-navy text-rni-paper">
        <div className="rni-wrap">
          <div className="max-w-3xl">
            <span className="rni-label">Key Considerations</span>
            <h2 className="rni-section-title mt-4 text-rni-paper">What to Evaluate in {segment.shortName} Property.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-rni-paper/75 sm:text-lg">
              Every property segment has its own set of factors that drive value, suitability and transaction readiness. These are the considerations most relevant to {segment.shortName.toLowerCase()} real estate.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {segment.considerations.map((item, index) => (
              <article key={item.title} className="border-t-2 border-rni-gold pt-5">
                <p className="font-display text-2xl text-rni-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-5 text-xl font-medium text-rni-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-rni-paper/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rni-deep py-16 text-rni-paper sm:py-20">
        <div className="rni-wrap flex flex-col items-start justify-between gap-7 xl:flex-row xl:items-center">
          <div>
            <span className="rni-label">{segment.shortName} Opportunities</span>
            <h2 className="font-display mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              Interested in {segment.shortName} Property?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-rni-paper/75 sm:text-lg">
              Share your requirement — whether buying, selling or leasing — and we will explore the appropriate next steps within our network.
            </p>
          </div>
          <Link to="/" hash="contact" className="rni-button inline-flex shrink-0 items-center justify-center gap-2 sm:min-w-56">
            {segment.ctaLabel}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      {/* Other segments */}
      <section className="rni-section bg-rni-cream">
        <div className="rni-wrap">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="rni-label">Explore More Segments</span>
              <h2 className="rni-section-title mt-4 text-3xl sm:text-4xl">Other Property Types.</h2>
            </div>
            <Link to="/buy-sell-lease" className="rni-link w-fit">
              View All Segments
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {otherSegments.map((other) => (
              <Link
                key={other.slug}
                to="/buy-sell-lease/$segment"
                params={{ segment: other.slug as SegmentSlug }}
                className="group flex flex-col border border-rni-line bg-background p-6 transition-colors hover:border-rni-gold"
              >
                <span className="text-2xl text-rni-gold" aria-hidden="true">{other.icon}</span>
                <h3 className="font-display mt-4 text-lg font-medium leading-snug text-rni-navy">{other.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-rni-muted">{other.tagline}</p>
                <span className="rni-link mt-5 w-fit">
                  {other.ctaLabel}
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="border-t border-rni-line bg-background">
        <div className="rni-wrap grid sm:grid-cols-2">
          <Link
            to="/buy-sell-lease/$segment"
            params={{ segment: prevSegment.slug as SegmentSlug }}
            className="group flex items-center justify-between gap-4 border-b border-rni-line px-6 py-6 transition-colors hover:bg-rni-cream sm:border-b-0 sm:border-r sm:px-8"
          >
            <div className="flex items-center gap-4">
              <ArrowLeft aria-hidden="true" className="size-5 text-rni-gold transition-transform group-hover:-translate-x-1" />
              <div>
                <span className="rni-label">Previous</span>
                <p className="font-display mt-1 text-lg font-medium text-rni-navy">{prevSegment.shortName}</p>
              </div>
            </div>
          </Link>
          <Link
            to="/buy-sell-lease/$segment"
            params={{ segment: nextSegment.slug as SegmentSlug }}
            className="group flex items-center justify-end gap-4 px-6 py-6 transition-colors hover:bg-rni-cream sm:px-8"
          >
            <div className="text-right">
              <span className="rni-label">Next</span>
              <p className="font-display mt-1 text-lg font-medium text-rni-navy">{nextSegment.shortName}</p>
            </div>
            <ArrowRight aria-hidden="true" className="size-5 text-rni-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </BuySellLeaseLayout>
  );
}
