import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MessageCircle, Clock, MapPin, Loader2, CheckCircle } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  serviceType: z.string().min(1, "Please select a service"),
  address: z.string().min(5, "Please enter your address"),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      serviceType: "",
      address: "",
      preferredTime: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const serviceName = SERVICES.find(s => s.id === data.serviceType)?.name || data.serviceType;
      const timeLabels: Record<string, string> = {
        morning: "Morning (9 AM - 12 PM)",
        afternoon: "Afternoon (12 PM - 4 PM)",
        evening: "Evening (4 PM - 8 PM)",
        asap: "As Soon As Possible",
      };
      const preferredTimeLabel = data.preferredTime ? timeLabels[data.preferredTime] || data.preferredTime : "Not specified";

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            phone: data.phone,
            service_type: serviceName,
            address: data.address,
            preferred_time: preferredTimeLabel,
            message: data.message || "No additional details provided",
          },
          publicKey
        );
      }

      try {
        await apiRequest("POST", "/api/contact", data);
      } catch {
      }
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 30 minutes.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Book a Service</Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Get Expert Repair Service Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill the form or contact us directly. Our technician will reach your doorstep within 2-4 hours.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-primary text-primary-foreground hover-elevate overflow-visible"
                data-testid="link-contact-call"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Call Now</p>
                  <p className="opacity-90">{COMPANY_INFO.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I need home appliance repair service in Gurugram.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-green-600 text-white hover-elevate overflow-visible"
                data-testid="link-contact-whatsapp"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">WhatsApp Us</p>
                  <p className="opacity-90">Quick Response</p>
                </div>
              </a>

              <div className="grid gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-muted-foreground text-sm">
                      {COMPANY_INFO.workingHours} ({COMPANY_INFO.workingDays})
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Service Area</p>
                    <p className="text-muted-foreground text-sm">
                      All areas of Gurugram, Haryana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="overflow-visible">
            <CardContent className="p-6 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">Request Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. Our team will call you within 30 minutes.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your phone number"
                              type="tel"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Required *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SERVICES.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Address in Gurugram *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your complete address"
                              {...field}
                              data-testid="input-address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-time">
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                              <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                              <SelectItem value="asap">As Soon As Possible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Describe Your Issue (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about the problem with your appliance..."
                              className="resize-none"
                              rows={3}
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Book Service Now"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll contact you within 30 minutes to confirm your booking.
                    </p>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
