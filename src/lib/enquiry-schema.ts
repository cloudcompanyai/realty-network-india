import { z } from "zod";

export const enquiryTypes = [
  "Property requirement",
  "Sell or lease a property",
  "New project",
  "Refer an opportunity",
  "Become a consultant",
  "Discuss a partnership",
  "Other",
] as const;

export const propertySegments = [
  "Residential real estate",
  "Commercial real estate",
  "Industrial & manufacturing",
  "Warehousing & logistics",
  "Land & development",
  "Hospitality & leisure",
  "Institutional & special-purpose",
  "Investment & income-producing",
] as const;

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  phone: z.string().trim().max(32),
  organisation: z.string().trim().max(120),
  enquiryType: z.enum(enquiryTypes),
  propertySegment: z.string().max(80),
  requirement: z.string().trim().min(10, "Please share a little more about your requirement.").max(5000),
  consent: z.boolean().refine((value) => value, { message: "Please agree before submitting your enquiry." }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;