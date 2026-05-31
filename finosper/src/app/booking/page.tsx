import type { Metadata } from "next";
import { PageTransition } from "@/components/layout";
import { siteConfig } from "@/config/site";
import { Phone, Calendar, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Consultation",
  description: "Prefer direct calling or proceed to book a consultation via Topmate.",
};

export default function BookingPage() {
  const telHref = `tel:${siteConfig.contact.phone}`;
  const bookingHref = siteConfig.topmateUrl;

  return (
    <PageTransition>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold">Schedule a Consultation</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Get personalised advice from {siteConfig.caName}. Start with a quick call or
              book a focused consultation — we recommend calling for the fastest help.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={telHref}
                className="inline-flex items-center gap-3 rounded-md bg-blue-600 px-6 py-3 text-white shadow hover:opacity-95"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-neutral-200 bg-white px-6 py-3 text-sm shadow hover:bg-neutral-50"
              >
                <Calendar className="h-5 w-5" />
                Proceed to Booking
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              We'll prioritise urgent callers. If you prefer a scheduled slot, continue to
              the booking flow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border p-6 text-center">
              <Users className="mx-auto h-8 w-8 text-blue-600" />
              <h3 className="mt-4 font-semibold">Client-Centred</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Practical advice tailored to your business size and stage — no generic
                templates.
              </p>
            </div>

            <div className="rounded-lg border p-6 text-center">
              <ShieldCheck className="mx-auto h-8 w-8 text-green-600" />
              <h3 className="mt-4 font-semibold">Compliance First</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We prioritise accurate filings and proactive compliance to avoid penalties.
              </p>
            </div>

            <div className="rounded-lg border p-6 text-center">
              <Calendar className="mx-auto h-8 w-8 text-yellow-600" />
              <h3 className="mt-4 font-semibold">Focused Sessions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Short, actionable consultations that leave you with a clear next step.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">1</div>
                <div>
                  <p className="font-medium">Call for quick help</p>
                  <p className="text-sm text-muted-foreground">Speak directly to our team for urgent queries.</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">2</div>
                <div>
                  <p className="font-medium">Book a slot</p>
                  <p className="text-sm text-muted-foreground">Choose a convenient time via our booking partner.</p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">3</div>
                <div>
                  <p className="font-medium">Get tailored advice</p>
                  <p className="text-sm text-muted-foreground">Receive a clear plan and next steps after the session.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <a
              href={telHref}
              className="inline-flex items-center gap-3 rounded-md bg-blue-600 px-6 py-3 text-white shadow hover:opacity-95"
            >
              <Phone className="h-5 w-5" />
              Call Now — Immediate Help
            </a>
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-3 rounded-md border border-neutral-200 bg-white px-6 py-3 text-sm shadow hover:bg-neutral-50"
            >
              <Calendar className="h-5 w-5" />
              Book a Slot
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
