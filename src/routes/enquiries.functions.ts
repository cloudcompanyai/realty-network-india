import { createServerFn } from "@tanstack/react-start";

import { enquirySchema } from "@/lib/enquiry-schema";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("rni_enquiries").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      organisation: data.organisation || null,
      enquiry_type: data.enquiryType,
      property_segment: data.propertySegment || null,
      requirement: data.requirement,
      consent: data.consent,
    });

    if (error) {
      console.error("Unable to save RNI enquiry.", error.message);
      throw new Error("We couldn't send your enquiry just now. Please try again or call RNI.");
    }

    return { ok: true as const };
  });