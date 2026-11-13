import residentialImage from "@/assets/rni-properties/residential.jpg";
import commercialImage from "@/assets/rni-properties/commercial.jpg";
import industrialImage from "@/assets/rni-properties/industrial.jpg";
import warehousingImage from "@/assets/rni-properties/warehousing.jpg";
import landImage from "@/assets/rni-properties/land.jpg";
import hospitalityImage from "@/assets/rni-properties/hospitality.jpg";
import institutionalImage from "@/assets/rni-properties/institutional.jpg";
import investmentImage from "@/assets/rni-properties/investment.jpg";

export type SegmentSlug =
  | "residential"
  | "commercial"
  | "industrial"
  | "logistics"
  | "land"
  | "hospitality"
  | "institutional"
  | "investment";

export interface SegmentDetail {
  slug: SegmentSlug;
  index: string;
  icon: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  overview: string;
  propertyTypes: string[];
  buyTitle: string;
  buyPoints: string[];
  sellTitle: string;
  sellPoints: string[];
  leaseTitle: string;
  leasePoints: string[];
  considerations: { title: string; description: string }[];
  ctaLabel: string;
}

export const segmentDetails: SegmentDetail[] = [
  {
    slug: "residential",
    index: "01",
    icon: "⌂",
    name: "Residential Real Estate",
    shortName: "Residential",
    tagline: "Apartments, villas, independent houses, builder floors and residential plots for homebuyers, sellers, landlords and tenants.",
    description: "Apartments, villas, independent houses, builder floors and residential plots for homebuyers, sellers, landlords and tenants.",
    image: residentialImage,
    imageAlt: "Modern residential apartment building with balconies",
    overview:
      "Residential property is where most real estate journeys begin — a first home, a growing family, an investment purchase or a rental arrangement. RNI connects homebuyers, sellers, landlords and tenants with relevant residential opportunities across apartments, independent houses, villas, builder floors and plotted developments. Whether you are looking for a ready-to-move-in home, an under-construction property or a residential plot to build on, the network aims to bring together the right people and opportunities for your requirement.",
    propertyTypes: [
      "Apartments and flats",
      "Villas and independent houses",
      "Builder floors",
      "Residential plots and gated communities",
      "Penthouses and duplexes",
      "Resale and pre-owned homes",
    ],
    buyTitle: "Buying a Home",
    buyPoints: [
      "Define your budget, preferred location and property type",
      "Consider readiness — ready-to-move-in vs. under-construction",
      "Review amenities, connectivity and neighbourhood infrastructure",
      "Assess resale potential and long-term value indicators",
    ],
    sellTitle: "Selling Residential Property",
    sellPoints: [
      "Share location, configuration and ownership details",
      "Indicate expected price and preferred timeline",
      "Discuss marketing approach and buyer outreach",
      "Coordinate site visits and buyer discussions",
    ],
    leaseTitle: "Residential Leasing",
    leasePoints: [
      "Specify furnished or unfurnished preferences",
      "Share rental budget and preferred locality",
      "Indicate lease duration and family requirements",
      "Discuss tenant screening for landlords",
    ],
    considerations: [
      { title: "Location & Connectivity", description: "Proximity to schools, workplaces, healthcare, transport and daily conveniences shapes both lifestyle and resale value." },
      { title: "Title & Documentation", description: "Clear title, approved plans, occupancy certificates and society NOCs are essential before proceeding with any residential transaction." },
      { title: "Financing & Budgeting", description: "Loan eligibility, down payment, registration, stamp duty and maintenance costs should be assessed together, not just the property price." },
    ],
    ctaLabel: "Explore residential",
  },
  {
    slug: "commercial",
    index: "02",
    icon: "▥",
    name: "Commercial Real Estate",
    shortName: "Commercial",
    tagline: "Office spaces, retail shops, showrooms, high-street retail and commercial buildings for businesses and investors.",
    description: "Office spaces, retail shops, showrooms, high-street retail and commercial buildings for businesses and investors.",
    image: commercialImage,
    imageAlt: "Glass-fronted commercial office tower in a business district",
    overview:
      "Commercial property sits at the intersection of business operations and investment returns. RNI connects businesses seeking office space, retail outlets or showrooms with owners and investors looking to transact. From high-street retail shops to Grade-A office floors and mixed-use commercial buildings, the network is designed to align operational requirements with commercially viable opportunities. Investors can explore income-producing commercial assets, while occupiers can find spaces that support their business growth.",
    propertyTypes: [
      "Office spaces and business centres",
      "Retail shops and high-street units",
      "Showrooms and commercial fronts",
      "Commercial buildings and towers",
      "Mixed-use developments",
      "Co-working and managed office spaces",
    ],
    buyTitle: "Acquiring Commercial Space",
    buyPoints: [
      "Identify business needs — team size, location preference and infrastructure",
      "Assess footfall, visibility and accessibility for retail requirements",
      "Evaluate investment yield and tenant profile for investor purchases",
      "Review zoning, permitted use and building compliance",
    ],
    sellTitle: "Selling Commercial Property",
    sellPoints: [
      "Share property specifications, floor plate and occupancy status",
      "Indicate expected price and commercial terms",
      "Discuss target buyer profile — owner-occupier or investor",
      "Coordinate property presentations and buyer meetings",
    ],
    leaseTitle: "Commercial Leasing",
    leasePoints: [
      "Specify use case — office, retail, showroom or mixed",
      "Share area requirements, budget and preferred micro-market",
      "Indicate lease tenure, lock-in and fit-out expectations",
      "Discuss rent structure — base rent, CAM and escalation terms",
    ],
    considerations: [
      { title: "Zoning & Permitted Use", description: "Confirm the property is zoned for your intended commercial activity and has the necessary municipal approvals and occupancy certificate." },
      { title: "Lease vs. Buy Analysis", description: "Compare the cost of capital deployment against rental outflow, factoring in business growth, tax implications and flexibility needs." },
      { title: "Tenant & Buyer Quality", description: "For investors, tenant covenants, lease tenure and credit profile drive asset value. For occupiers, building quality and amenities affect staff experience." },
    ],
    ctaLabel: "Explore commercial",
  },
  {
    slug: "industrial",
    index: "03",
    icon: "⌗",
    name: "Industrial & Manufacturing",
    shortName: "Industrial",
    tagline: "Industrial plots, factory buildings, manufacturing facilities and industrial sheds for operating businesses and investors.",
    description: "Industrial plots, factory buildings, manufacturing facilities and industrial sheds for operating businesses and investors.",
    image: industrialImage,
    imageAlt: "Industrial manufacturing facility with loading bays",
    overview:
      "Industrial real estate is the backbone of manufacturing and production businesses. RNI connects operating businesses with industrial plots, factory buildings, manufacturing units and industrial sheds suited to their operational needs. Whether you need a built-to-suit facility, an existing factory with power and water infrastructure, or a cleared industrial plot for greenfield development, the network aims to identify properties that match your production, storage and logistics requirements. Investors can also explore industrial assets with tenant potential.",
    propertyTypes: [
      "Industrial plots and parcels",
      "Factory buildings and manufacturing units",
      "Industrial sheds and pre-engineered buildings",
      "Built-to-suit facilities",
      "Industrial estates and clusters",
      "Ancillary and support structures",
    ],
    buyTitle: "Acquiring Industrial Property",
    buyPoints: [
      "Define production process, space and utility requirements",
      "Assess power, water, effluent treatment and road access",
      "Evaluate industrial zone classification and environmental clearance",
      "Consider expansion potential and future capacity needs",
    ],
    sellTitle: "Selling Industrial Property",
    sellPoints: [
      "Share plot area, built-up area and facility specifications",
      "Detail available utilities — power load, water, gas and waste systems",
      "Indicate environmental and municipal compliance status",
      "Discuss target buyers — operating businesses or investors",
    ],
    leaseTitle: "Industrial Leasing",
    leasePoints: [
      "Specify manufacturing process and space requirements",
      "Share power load, ceiling height and floor load needs",
      "Indicate lease tenure and fit-out scope",
      "Discuss compliance with industrial park regulations",
    ],
    considerations: [
      { title: "Utilities & Infrastructure", description: "Power load, water supply, effluent treatment, gas connectivity and road access for heavy vehicles are critical for industrial operations." },
      { title: "Regulatory Compliance", description: "Environmental clearance, factory licence, fire safety approval and industrial zone conformity must be verified before acquisition or lease." },
      { title: "Location & Supply Chain", description: "Proximity to raw material sources, markets, ports and labour pools directly impacts operational cost and efficiency." },
    ],
    ctaLabel: "Explore industrial",
  },
  {
    slug: "logistics",
    index: "04",
    icon: "▤",
    name: "Warehousing & Logistics",
    shortName: "Logistics",
    tagline: "Warehouses, distribution centres, logistics parks and storage facilities for occupiers, operators and asset owners.",
    description: "Warehouses, distribution centres, fulfilment facilities, logistics parks and storage facilities for occupiers, operators and asset owners.",
    image: warehousingImage,
    imageAlt: "Large logistics warehouse with multiple loading docks",
    overview:
      "Warehousing and logistics real estate has become a distinct and growing asset class, driven by e-commerce, third-party logistics and supply chain optimisation. RNI connects occupiers, operators and investors with warehouses, distribution centres, logistics parks and storage facilities. Whether you need a high-ceiling warehouse with multiple docking bays, a cold-storage facility, or a cleared logistics plot within an approved park, the network aims to match your operational profile with the right property. Investors can explore income-producing warehouse assets with tenant covenants.",
    propertyTypes: [
      "Warehouses and godowns",
      "Distribution centres and fulfilment hubs",
      "Logistics parks and warehousing estates",
      "Cold-storage and temperature-controlled facilities",
      "Cross-docking and sortation centres",
      "Industrial logistics plots",
    ],
    buyTitle: "Acquiring Warehousing Space",
    buyPoints: [
      "Define storage type — ambient, cold or temperature-controlled",
      "Assess ceiling height, floor load capacity and docking bays",
      "Evaluate highway access, port proximity and last-mile connectivity",
      "Consider expansion and scalability within the logistics park",
    ],
    sellTitle: "Selling Warehouse Property",
    sellPoints: [
      "Share built-up area, ceiling height and floor specifications",
      "Detail docking bays, truck movement area and parking",
      "Indicate tenant status and lease tenure if occupied",
      "Discuss target buyers — operators, 3PL firms or investors",
    ],
    leaseTitle: "Warehousing Leasing",
    leasePoints: [
      "Specify inventory type and storage conditions required",
      "Share area, ceiling height and dock requirements",
      "Indicate lease tenure and fit-out or racking scope",
      "Discuss logistics park rules and operational guidelines",
    ],
    considerations: [
      { title: "Connectivity & Access", description: "Highway frontage, port proximity, rail siding access and truck turnaround capacity determine the operational efficiency of a logistics property." },
      { title: "Structural Specifications", description: "Floor load capacity, ceiling clearance, column spacing, docking bay count and fire safety systems must match the intended cargo and throughput." },
      { title: "Park Management & Compliance", description: "Approved logistics parks offer shared infrastructure, security and compliance frameworks that standalone properties may not provide." },
    ],
    ctaLabel: "Explore logistics",
  },
  {
    slug: "land",
    index: "05",
    icon: "◇",
    name: "Land & Development",
    shortName: "Land",
    tagline: "Residential, commercial and industrial land opportunities, subject to location, permitted use, title and applicable approvals.",
    description: "Residential, commercial and industrial land, plotted developments, development parcels and potential land assembly.",
    image: landImage,
    imageAlt: "Open land parcel with clear boundaries in a developing area",
    overview:
      "Land is the foundational asset of all real estate development. RNI connects landowners, developers and investors with residential, commercial and industrial land opportunities. Whether you are a developer seeking a plotted development parcel, an investor looking at land appreciation potential, or a landowner exploring sale or joint development, the network aims to facilitate connections that align with your objectives. Each land opportunity is assessed with reference to location, permitted use, title status, applicable approvals and development potential.",
    propertyTypes: [
      "Residential plots and development land",
      "Commercial plots and mixed-use parcels",
      "Industrial land and zone-converted plots",
      "Agricultural land with conversion potential",
      "Development parcels and land assembly opportunities",
      "Plotted development sites",
    ],
    buyTitle: "Acquiring Land",
    buyPoints: [
      "Define intended use — residential, commercial or industrial development",
      "Verify land use zoning, permitted FAR/FSI and development rules",
      "Assess title clarity, encumbrance status and boundary demarcation",
      "Evaluate location, surrounding infrastructure and growth trajectory",
    ],
    sellTitle: "Selling Land",
    sellPoints: [
      "Share plot area, location and survey details",
      "Indicate land use zoning and available approvals",
      "Disclose title status, encumbrances and litigation if any",
      "Discuss development potential and expected valuation",
    ],
    leaseTitle: "Land Leasing & Joint Development",
    leasePoints: [
      "Specify lease purpose — agriculture, commercial or development",
      "Share lease tenure and development rights scope",
      "Indicate revenue-sharing or lease rental expectations",
      "Discuss exit terms and reversion conditions",
    ],
    considerations: [
      { title: "Title & Due Diligence", description: "Clear and marketable title is the most critical factor in any land transaction. Revenue records, mutation entries, encumbrance certificates and boundary surveys must be verified." },
      { title: "Zoning & Approvals", description: "Land use zoning, master plan classification, conversion status and development permissions determine what can legally be built on the parcel." },
      { title: "Development Viability", description: "FAR/FSI, road width, frontage, ground coverage and setback rules together determine the developable potential and therefore the land's commercial value." },
    ],
    ctaLabel: "Explore land",
  },
  {
    slug: "hospitality",
    index: "06",
    icon: "⌘",
    name: "Hospitality & Leisure",
    shortName: "Hospitality",
    tagline: "Hotels, resorts, serviced accommodation and leisure assets for operators, owners and investment-oriented buyers.",
    description: "Hotels, resorts, serviced apartments and leisure properties for owners, operators and prospective investors.",
    image: hospitalityImage,
    imageAlt: "Upscale hotel resort with landscaped pool area",
    overview:
      "Hospitality real estate combines property ownership with operational performance. RNI connects hotel owners, resort operators, investors and hospitality brands with relevant properties and opportunities. Whether you are an operator seeking a managed lease or franchise property, an investor exploring an income-producing hotel asset, or an owner considering sale or repositioning, the network aims to bring together the right combination of property, operator and capital. Serviced apartments, boutique stays and leisure properties are also within scope.",
    propertyTypes: [
      "Hotels and business hotels",
      "Resorts and leisure properties",
      "Serviced apartments and extended-stay units",
      "Boutique and heritage properties",
      "Banquet and event venues",
      "Resort land and development parcels",
    ],
    buyTitle: "Acquiring Hospitality Assets",
    buyPoints: [
      "Define strategy — owner-operated, managed or lease to an operator",
      "Assess location, demand drivers and seasonality profile",
      "Evaluate property condition, room inventory and F&B facilities",
      "Review operational performance and RevPAR benchmarks",
    ],
    sellTitle: "Selling Hospitality Property",
    sellPoints: [
      "Share property type, room count and facility details",
      "Indicate operational status — running, closed or under renovation",
      "Disclose brand agreements, management contracts or encumbrances",
      "Discuss target buyers — operators, investors or developers",
    ],
    leaseTitle: "Hospitality Leasing & Management",
    leasePoints: [
      "Specify management model — franchise, lease or managed contract",
      "Share property specifications and operational performance",
      "Indicate brand standards and capex requirements",
      "Discuss revenue-sharing or fixed lease terms",
    ],
    considerations: [
      { title: "Demand & Location", description: "Tourism flows, corporate demand, airport proximity, transport links and competing supply shape the revenue potential of a hospitality asset." },
      { title: "Operational Performance", description: "Occupancy, ARR, RevPAR and F&B contribution provide the real picture of a running property's value, beyond just the real estate." },
      { title: "Brand & Management Structure", description: "Existing brand agreements, management contracts and franchise obligations affect the flexibility and valuation of a hospitality transaction." },
    ],
    ctaLabel: "Explore hospitality",
  },
  {
    slug: "institutional",
    index: "07",
    icon: "▧",
    name: "Institutional & Special-Purpose",
    shortName: "Institutional",
    tagline: "Educational, healthcare, training and other specialised properties aligned with specific operating requirements.",
    description: "Hospitals, educational campuses, healthcare facilities and other specialised-use real estate assets.",
    image: institutionalImage,
    imageAlt: "Institutional campus building with landscaped entrance",
    overview:
      "Institutional and special-purpose properties are designed around specific operational requirements that generic commercial space cannot meet. RNI connects educational institutions, healthcare providers, training organisations and other specialist operators with properties suited to their needs. Whether you need a school campus with playgrounds, a hospital with OT and diagnostic infrastructure, or a training facility with specific layout requirements, the network aims to identify and connect you with relevant properties. Owners of such specialised assets can explore sale, lease or repositioning opportunities.",
    propertyTypes: [
      "School and college campuses",
      "Hospitals and healthcare facilities",
      "Diagnostic centres and clinics",
      "Training and skill development centres",
      "Research and laboratory facilities",
      "Community and religious institutions",
    ],
    buyTitle: "Acquiring Institutional Property",
    buyPoints: [
      "Define operational requirements — layout, utilities and compliance",
      "Assess accessibility, catchment area and user demographics",
      "Evaluate existing infrastructure and adaptation cost",
      "Review institutional zoning and land use permissions",
    ],
    sellTitle: "Selling Institutional Property",
    sellPoints: [
      "Share property specifications, built-up area and land area",
      "Detail specialised infrastructure — labs, OTs, classrooms or auditoriums",
      "Indicate compliance with institutional use norms and approvals",
      "Discuss target buyers — institutions, operators or developers",
    ],
    leaseTitle: "Institutional Leasing",
    leasePoints: [
      "Specify use — education, healthcare, training or community",
      "Share area, layout and infrastructure requirements",
      "Indicate lease tenure and fit-out scope",
      "Discuss regulatory and licensing requirements",
    ],
    considerations: [
      { title: "Specialised Infrastructure", description: "Hospitals need OTs, diagnostic rooms and medical gas lines; schools need classrooms, playgrounds and safety systems. Adaptation cost can be significant." },
      { title: "Regulatory Clearances", description: "Health licences, educational board approvals, fire safety, bio-medical waste norms and accessibility compliance must be verified for institutional use." },
      { title: "Catchment & Accessibility", description: "The value of an institutional property depends heavily on the population it serves, transport links and proximity to complementary facilities." },
    ],
    ctaLabel: "Discuss a requirement",
  },
  {
    slug: "investment",
    index: "08",
    icon: "◈",
    name: "Investment & Income-Producing",
    shortName: "Investment",
    tagline: "Rental-yield assets, leased commercial properties and selected real estate opportunities for investors and asset owners.",
    description: "Tenanted commercial assets, leased warehouses, rental-yield properties, investment-grade buildings and selected portfolios.",
    image: investmentImage,
    imageAlt: "Modern office complex with mixed-use commercial tenants",
    overview:
      "Investment-grade real estate is evaluated on returns, not just utility. RNI connects investors, asset owners and funds with income-producing properties — leased commercial buildings, rental-yield residential portfolios, tenanted warehouses and selected real estate assets with cash flow potential. Whether you are acquiring your first income property, divesting a mature asset, or exploring a portfolio transaction, the network aims to align investment objectives with relevant opportunities. Each opportunity is assessed with reference to tenant quality, lease structure, yield profile and exit potential.",
    propertyTypes: [
      "Leased commercial buildings and office assets",
      "Tenanted warehouses and logistics facilities",
      "Rental-yield residential portfolios",
      "Retail assets with anchor tenant covenants",
      "Mixed-use income properties",
      "Selected real estate portfolios",
    ],
    buyTitle: "Acquiring Investment Property",
    buyPoints: [
      "Define investment objective — yield, appreciation or balanced return",
      "Assess tenant profile, lease tenure and covenant strength",
      "Evaluate rental income, occupancy and expense structure",
      "Review exit options, liquidity and holding period",
    ],
    sellTitle: "Divesting Investment Assets",
    sellPoints: [
      "Share property details, income profile and tenant information",
      "Indicate occupancy, lease tenure and rental escalation terms",
      "Disclose expense structure and net operating income",
      "Discuss target buyers — investors, funds or REITs",
    ],
    leaseTitle: "Investment Leasing Strategy",
    leasePoints: [
      "Assess vacancy and identify target tenant profiles",
      "Share property specifications and competitive positioning",
      "Indicate rental expectations and lease structure preferences",
      "Discuss tenant fit-out contributions and lease incentives",
    ],
    considerations: [
      { title: "Yield & Cash Flow", description: "Gross yield, net yield after expenses and cash-on-cash return are the primary metrics. Compare against alternative investments and risk-adjusted expectations." },
      { title: "Tenant Risk", description: "Tenant credit quality, lease tenure, lock-in period, escalation clause and renewal probability directly impact income stability and asset value." },
      { title: "Exit & Liquidity", description: "Resale demand, market depth, capital appreciation trajectory and transaction timeline should be understood before committing capital." },
    ],
    ctaLabel: "Explore investments",
  },
];

export const segmentSlugs = segmentDetails.map((s) => s.slug);

export function getSegmentBySlug(slug: string): SegmentDetail | undefined {
  return segmentDetails.find((s) => s.slug === slug);
}
