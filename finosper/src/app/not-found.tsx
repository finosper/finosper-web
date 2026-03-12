import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center py-24">
            <div className="mx-auto max-w-md px-4 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                    404
                </p>
                <h1 className="mt-2 text-4xl font-bold text-navy">Page Not Found</h1>
                <p className="mt-4 text-muted-foreground">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Button
                    asChild
                    className="mt-8 rounded-lg bg-navy px-6 font-semibold text-white hover:bg-navy-light"
                >
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </section>
    );
}
