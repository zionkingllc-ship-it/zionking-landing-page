import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { submitContactForm } from "@/lib/contact";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type ContactSubmissionState = {
  type: "success" | "error";
  message: string;
};

const Contact = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<ContactSubmissionState | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formState.name.trim();
    const email = formState.email.trim();
    const message = formState.message.trim();

    if (!name || !email || !message) {
      setSubmissionState({
        type: "error",
        message: "Please fill in your name, email address, and message.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionState(null);

    try {
      await submitContactForm({
        brand: "ZIONKING",
        name,
        email,
        message,
      });

      setSubmissionState({
        type: "success",
        message: "Your message has been sent successfully.",
      });
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmissionState({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#111118] px-5 py-[60px]">
      <div className="relative w-full max-w-[1320px] pb-[420px] sm:pb-[380px] lg:pb-[260px]">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-[#f3eeff] to-[#d9cce8] px-6 pb-[220px] pt-12 text-center sm:px-8 sm:pb-[240px] md:px-12 md:pt-16 lg:px-[60px] lg:pb-[280px] lg:pt-20">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-[-0.02em] text-[#1a1523] sm:text-[52px] sm:leading-[1.1] lg:text-[72px]">
            Be Part of the Mission
          </h1>
          <p className="mx-auto max-w-[680px] text-base font-normal leading-7 text-[#3d3547] sm:text-lg sm:leading-8 lg:text-xl lg:leading-[1.6]">
            Whether you&apos;re looking to partner, collaborate or learn more about what we&apos;re
            building, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 w-[calc(100%-32px)] max-w-[1240px] -translate-x-1/2 rounded-[24px] bg-white px-6 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:w-[calc(100%-48px)] sm:px-8 sm:py-10 lg:w-[calc(100%-80px)] lg:px-[60px] lg:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[60px]">
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-bold leading-tight text-[#1a1523] sm:text-[28px] lg:text-[32px]">
                Get In Touch
              </h2>
              <p className="mb-8 text-base font-normal leading-6 text-[#6b7280]">
                Have an idea or question? Let&apos;s talk...
              </p>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={formState.name}
                  onChange={(event) => {
                    setFormState((current) => ({
                      ...current,
                      name: event.target.value,
                    }));
                  }}
                  placeholder="Enter your name"
                  className="h-auto rounded-[12px] border-0 bg-[#f5f5f7] px-5 py-[18px] text-base font-normal text-[#1a1523] placeholder:text-[#9ca3af] focus-visible:ring-2 focus-visible:ring-[#1a1523]/15"
                  disabled={isSubmitting}
                />
                <Input
                  type="email"
                  value={formState.email}
                  onChange={(event) => {
                    setFormState((current) => ({
                      ...current,
                      email: event.target.value,
                    }));
                  }}
                  placeholder="Enter your email address"
                  className="h-auto rounded-[12px] border-0 bg-[#f5f5f7] px-5 py-[18px] text-base font-normal text-[#1a1523] placeholder:text-[#9ca3af] focus-visible:ring-2 focus-visible:ring-[#1a1523]/15"
                  disabled={isSubmitting}
                />
                <Textarea
                  value={formState.message}
                  onChange={(event) => {
                    setFormState((current) => ({
                      ...current,
                      message: event.target.value,
                    }));
                  }}
                  placeholder="Message"
                  className="h-[140px] resize-none rounded-[12px] border-0 bg-[#f5f5f7] px-5 py-[18px] text-base font-normal text-[#1a1523] placeholder:text-[#9ca3af] focus-visible:ring-2 focus-visible:ring-[#1a1523]/15"
                  disabled={isSubmitting}
                />

                {submissionState && (
                  <div
                    className={[
                      "rounded-[12px] px-4 py-3 text-sm",
                      submissionState.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-600",
                    ].join(" ")}
                  >
                    {submissionState.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 h-auto w-full rounded-[12px] bg-[#1a1523] px-6 py-4 text-base font-semibold text-white hover:bg-[#1a1523]/95 sm:w-[240px]"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            </div>

            <div className="hidden w-px bg-[#f0f0f0] lg:block" />

            <div className="flex flex-1 flex-col items-start justify-center lg:items-center">
              <h2 className="mb-5 text-2xl font-bold leading-tight text-[#1a1523] sm:text-[28px] lg:mb-8 lg:text-[32px]">
                Contact Us
              </h2>

              <div className="flex flex-col items-start gap-4 lg:items-center">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1a1523]">
                  <Mail className="h-[22px] w-[22px] text-white" />
                </div>
                <p className="text-base font-normal leading-7 text-[#3d3547] sm:text-lg">
                  contact@zionkingllc.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
