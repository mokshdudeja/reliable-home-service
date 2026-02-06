import { Badge } from "@/components/ui/badge";
import {
  SiLg,
  SiSamsung,
  SiSony,
  SiXiaomi,
} from "react-icons/si";
import type { IconType } from "react-icons";

type BrandItem = {
  name: string;
  icon: IconType | null;
  color: string;
  fontStyle?: string;
};

const BRAND_DATA: BrandItem[] = [
  { name: "Samsung", icon: SiSamsung, color: "#1428A0" },
  { name: "Godrej", icon: null, color: "#4B8B3B", fontStyle: "italic" },
  { name: "Haier", icon: null, color: "#E60012" },
  { name: "LG", icon: SiLg, color: "#A50034" },
  { name: "Videocon", icon: null, color: "#7B2D8E" },
  { name: "Whirlpool", icon: null, color: "#1A7AC4" },
  { name: "IFB", icon: null, color: "#1B1B1B" },
  { name: "Xiaomi", icon: SiXiaomi, color: "#FF6900" },
  { name: "Sony", icon: SiSony, color: "#000000" },
];

export function BrandLogos() {
  return (
    <section className="py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">Brand We Serve</Badge>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            We Repair All Major Brands
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
          {BRAND_DATA.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center px-4 py-6 bg-background rounded-lg border hover:border-primary/50 transition-colors"
              data-testid={`brand-${brand.name.toLowerCase()}`}
            >
              {brand.icon ? (
                <brand.icon className="w-16 h-10 md:w-20 md:h-12" style={{ color: brand.color }} />
              ) : (
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    color: brand.color,
                    fontStyle: brand.fontStyle || "normal",
                  }}
                >
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
