import { useState, type FormEvent } from "react";
import { trackStandardEvent } from "../lib/pixel";

const WaitlistForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Track Meta Pixel Event
    trackStandardEvent('Lead', {
      content_name: 'Waitlist Signup',
    });

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.text();
          setStatus("error");
          setErrorMessage(body || `Request failed with status ${res.status}`);
          return;
        }

        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        setErrorMessage(error?.message ?? "Network error");
      });
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-heading text-2xl text-foreground mb-2">
          You're on the list.
        </h3>
        <p className="text-muted-foreground">We'll be in touch.</p>
      </div>
    );
  }

  return (
    <form
      name="waitlist"
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-5 text-left"
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <input type="hidden" name="bot-field" />

      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
          First Name <span className="text-destructive">*</span>
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          maxLength={100}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your first name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email Address <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={255}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1.5">
          Are you?
        </label>
        <select
          id="role"
          name="role"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select one…</option>
          <option value="individual">Individual believer</option>
          <option value="church-leader">Church leader</option>
          <option value="ministry">Ministry</option>
          <option value="content-creator">Content creator</option>
        </select>
      </div>

      <div>
        <label htmlFor="excitement" className="block text-sm font-medium text-foreground mb-1.5">
          What excites you most about Ziona?
        </label>
        <select
          id="excitement"
          name="excitement"
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select one…</option>
          <option value="faith-content">Faith-based content</option>
          <option value="safe-community">Safe Christian community</option>
          <option value="content-creation">Content creation</option>
          <option value="church-visibility">Church visibility</option>
          <option value="other">Others</option>
        </select>
      </div>

      <div>
        <label htmlFor="otherExcitement" className="block text-sm font-medium text-foreground mb-1.5">
          If "Others," please specify
        </label>
        <input
          id="otherExcitement"
          name="otherExcitement"
          type="text"
          maxLength={200}
          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Tell us more…"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Early beta access?
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
            <input type="radio" name="betaAccess" value="yes" className="accent-primary" />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
            <input type="radio" name="betaAccess" value="no" className="accent-primary" />
            No
          </label>
        </div>
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
          {errorMessage || "Something went wrong. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full rounded-xl px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 ${status === "submitting"
            ? "bg-primary/70 cursor-not-allowed"
            : "bg-primary hover:bg-primary-dark"
          }`}
      >
        {status === "submitting" ? "Submitting..." : "Join the Waitlist"}
      </button>
    </form>
  );
};

export default WaitlistForm;
