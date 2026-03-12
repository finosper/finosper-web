import PageHeader from "@/components/layout/page-header";
import { siteConfig } from "@/config/site";

export default function TermsOfServicePage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Terms of Service"
                subtitle="The terms and conditions for using Finosper services."
            />

            <section className="py-20">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="prose prose-navy max-w-none">
                        <p className="text-sm text-muted-foreground mb-8 text-right italic">Effective Date: March 3, 2024</p>

                        <h2 className="text-2xl font-bold text-navy mb-4">1. Agreement to Terms</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            By accessing or using {siteConfig.name} services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the services.
                        </p>

                        <h2 className="text-2xl font-bold text-navy mb-4">2. Professional Services</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {siteConfig.name} provides Chartered Accountancy and consultancy services. All services are provided by qualified professionals. However, the information on this website is for general guidance and should not be considered as substitute for professional advice.
                        </p>

                        <h2 className="text-2xl font-bold text-navy mb-4">3. User Responsibilities</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            You are responsible for providing accurate and complete information required for the performance of our services. We are not liable for any penalties or defaults arising from incorrect or delayed information provided by the user.
                        </p>

                        <h2 className="text-2xl font-bold text-navy mb-4">4. Consultation and Booking</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Consultation bookings are subject to availability. {siteConfig.name} reserves the right to reschedule or cancel appointments with prior notice. Payments for consultations (if any) are handled as per the booking platform policies.
                        </p>

                        <h2 className="text-2xl font-bold text-navy mb-4">5. Intellectual Property</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            The content, logo, and design of this website are the intellectual property of {siteConfig.name}. Unauthorized reproduction or distribution is prohibited.
                        </p>

                        <h2 className="text-2xl font-bold text-navy mb-4">6. Limitation of Liability</h2>
                        <p className="text-muted-foreground mb-12 leading-relaxed">
                            To the maximum extent permitted by law, {siteConfig.name} shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                        </p>

                        <div className="rounded-xl bg-off-white p-6 border border-border">
                            <p className="text-xs text-muted-foreground italic">
                                Disclaimer: These are placeholder terms of service. For professional use, please consult with a legal expert to draft terms specific to your business operations and jurisdiction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
