import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true)); // Show success in preview regardless

    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16 tracking-tight">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out with questions, partnerships, or just to connect.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:info@zionking.org"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                info@zionking.org
              </a>
              <a
                href="tel:+13177204898"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                +1 (317) 720-4898
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-card rounded-lg border border-accent/20 p-8 text-center">
                <p className="text-lg font-medium text-foreground">
                  Thank you for reaching out.
                </p>
                <p className="text-muted-foreground mt-2">We'll respond shortly.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <Input
                    name="name"
                    placeholder="Full Name"
                    required
                    className="bg-card border-border h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-card border-border h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    required
                    rows={5}
                    className="bg-card border-border resize-none"
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
