import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services/washing-machine-repair", label: "Washing Machine" },
    { href: "/services/refrigerator-repair", label: "Refrigerator" },
    { href: "/services/microwave-repair", label: "Microwave" },
    { href: "/services/dryer-repair", label: "Dryer" },
    { href: "/services/dishwasher-repair", label: "Dishwasher" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl mx-auto gap-4">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home">
          <img src="/images/logo.jpg" alt="Reliable Home Service" className="w-8 h-8 rounded-full object-cover" />
          <span className="font-heading font-bold text-lg hidden sm:inline-block">
            Reliable Home Service
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={isActive(link.href) ? "secondary" : "ghost"}
                size="sm"
                className="text-sm"
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${COMPANY_INFO.phone}`} data-testid="link-call-header">
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Call Now</span>
            </Button>
          </a>

          <ThemeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]" aria-describedby={undefined}>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant={isActive(link.href) ? "secondary" : "ghost"}
                      className="w-full justify-start text-base"
                      data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
                <div className="border-t my-4" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  data-testid="link-call-mobile"
                >
                  <Button className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now: {COMPANY_INFO.phone}
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
