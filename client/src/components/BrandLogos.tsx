import { Badge } from "@/components/ui/badge";
import {
  SiLg,
  SiSamsung,
  SiBosch,
  SiPanasonic,
  SiSiemens,
} from "react-icons/si";

const BRAND_DATA = [
  { name: "LG", icon: SiLg, color: "#A50034" },
  { name: "Samsung", icon: SiSamsung, color: "#1428A0" },
  { name: "Whirlpool", icon: null, color: "#1A7AC4" },
  { name: "Bosch", icon: SiBosch, color: "#E60004" },
  { name: "IFB", icon: null, color: "#E31E24" },
  { name: "Haier", icon: null, color: "#00A0E3" },
  { name: "Siemens", icon: SiSiemens, color: "#009999" },
  { name: "Panasonic", icon: SiPanasonic, color: "#0F58A8" },
  { name: "Godrej", icon: null, color: "#5C2D91" },
  { name: "Electrolux", icon: null, color: "#041E42" },
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
                <brand.icon className="w-10 h-10" style={{ color: brand.color }} />
              ) : (
                <span className="text-xl font-bold" style={{ color: brand.color }}>{brand.name}</span>
              )}
              <span className="text-xs text-muted-foreground font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
