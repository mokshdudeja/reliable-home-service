import { Badge } from "@/components/ui/badge";
import { BRANDS } from "@/lib/constants";

export function BrandLogos() {
  return (
    <section className="py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">All Brands Serviced</Badge>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            We Repair All Major Brands
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="px-6 py-3 bg-background rounded-lg border text-sm md:text-base font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
