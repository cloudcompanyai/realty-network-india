import { describe, expect, it } from "vitest";

import { enquirySchema } from "@/lib/enquiry-schema";

const validEnquiry = {
  fullName: "Alok Verma",
  email: "contact@example.com",
  phone: "",
  organisation: "",
  enquiryType: "Property requirement",
  propertySegment: "",
  requirement: "Looking for a residential property in India.",
  consent: true,
} as const;

describe("RNI enquiry requirements", () => {
  it.each([
    ["fullName", ""],
    ["email", "not-an-email"],
    ["requirement", "brief"],
  ] as const)("rejects invalid %s", (field, value) => {
    expect(enquirySchema.safeParse({ ...validEnquiry, [field]: value }).success).toBe(false);
  });

  it("requires visitor consent", () => {
    expect(enquirySchema.safeParse({ ...validEnquiry, consent: false }).success).toBe(false);
  });

  it("accepts a complete enquiry from the form", () => {
    expect(enquirySchema.safeParse(validEnquiry).success).toBe(true);
  });
});