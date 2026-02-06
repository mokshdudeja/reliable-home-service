import { Badge } from "@/components/ui/badge";
import {
  SiLg,
  SiSamsung,
  SiBosch,
  SiPanasonic,
  SiSiemens,
} from "react-icons/si";

const BRAND_DATA = [
  { name: "LG", icon: SiLg },
  { name: "Samsung", icon: SiSamsung },
  { name: "Whirlpool", icon: null },
  { name: "Bosch", icon: SiBosch },
  { name: "IFB", icon: null },
  { name: "Haier", icon: null },
  { name: "Siemens", icon: SiSiemens },
  { name: "Panasonic", icon: SiPanasonic },
  { name: "Godrej", icon: null },
  { name: "Electrolux", icon: null },
];

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {BRAND_DATA.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center gap-2 px-4 py-5 bg-background rounded-lg border hover:border-primary/50 transition-colors"
              data-testid={`brand-${brand.name.toLowerCase()}`}
            >
              {brand.icon ? (
                <brand.icon className="w-8 h-8 text-muted-foreground" />
              ) : (
                <span className="text-lg font-bold text-muted-foreground">{brand.name}</span>
              )}
              <span className="text-xs text-muted-foreground font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
