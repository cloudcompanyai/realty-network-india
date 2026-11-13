CREATE TABLE public.rni_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organisation TEXT,
  enquiry_type TEXT NOT NULL,
  property_segment TEXT,
  requirement TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.rni_enquiries TO service_role;
ALTER TABLE public.rni_enquiries ENABLE ROW LEVEL SECURITY;