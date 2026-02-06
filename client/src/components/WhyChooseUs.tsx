import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Shield, 
  ThumbsUp, 
  Wrench, 
  IndianRupee, 
  Award,
  MapPin,
  Headphones
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const features = [
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Get your appliance repaired the same day. Our technicians reach within 2-4 hours of booking.",
  },
  {
    icon: Shield,
    title: "Service Warranty",
    description: "All our repairs come with 30-90 days warranty. Quality assured repairs for peace of mind.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: `${COMPANY_INFO.experience}+ years of experience. Factory-trained experts for all major brands.`,
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden charges. Get upfront quotes before any repair work begins.",
  },
  {
    icon: Wrench,
    title: "Genuine Parts",
    description: "We use only genuine and high-quality spare parts for long-lasting repairs.",
  },
  {
    icon: MapPin,
    title: "Doorstep Service",
    description: "No need to carry heavy appliances. We come to your home across Gurugram.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: `${COMPANY_INFO.happyCustomers} happy customers and counting. Rated 4.8/5 by our clients.`,
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support. Book anytime, get help anytime.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30" id="why-us">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Gurugram's Trusted Home Appliance Repair Experts
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to providing the best repair service with quality workmanship, 
            genuine parts, and customer satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate overflow-visible">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
