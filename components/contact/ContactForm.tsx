"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Tropical Landscaping",
  "Garden Design",
  "Home Garden Setup",
  "Nursery & Plant Consultation",
  "Bulk Plant Supply",
  "Indoor Plants",
  "Vertical Gardens",
  "Plant Maintenance",
  "Garden Renovation",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setError("Something went wrong. Please try again or reach us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-3xl border border-higarden-soft bg-white p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-higarden-bright" aria-hidden="true" />
        <p className="font-heading text-xl font-bold text-forest-900">Message sent successfully!</p>
        <p className="text-sm text-higarden-muted">
          Our team will get back to you within one business day.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")} className="mt-2">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Interested In</Label>
          <select
            id="service"
            name="service"
            className="h-10 rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your outdoor space, plot location, or plants you are looking for..."
          required
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 h-12 w-fit rounded-full bg-higarden-bright px-8 text-sm font-bold uppercase tracking-wider text-forest-950 hover:bg-higarden-lime shadow-sm"
      >
        {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
