import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
          <h2 className="font-heading text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="gap-2 w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <a href={`tel:${COMPANY_INFO.phone}`}>
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <Phone className="w-4 h-4" />
              Call Us
            </Button>
          </a>
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            Need help? Call us at{" "}
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary font-medium">
              {COMPANY_INFO.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
