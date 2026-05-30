"use client";

import { useEffect, useState } from "react";
import Button from "@/components/button";

function UnderlineField({
  id,
  placeholder,
  type = "text",
  required,
  rows,
}: {
  id: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  rows?: number;
}) {
  const inputClass =
    "w-full border-0 border-b border-(--color-border) bg-transparent py-3 font-body text-b2 leading-normal text-(--color-fg) outline-none transition-colors placeholder:font-body placeholder:text-b2 placeholder:text-black";

  if (rows !== undefined) {
    return (
      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        aria-label={placeholder}
        className={`${inputClass} h-10 resize-y`}
      />
    );
  }

  return (
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      placeholder={placeholder}
      aria-label={placeholder}
      className={inputClass}
      autoComplete={
        type === "email" ? "email" : type === "tel" ? "tel" : undefined
      }
    />
  );
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("fullName"),
      company: formData.get("companyName"),
      email: formData.get("workEmail"),
      tellUsMore: formData.get("message") || "",
    };

    try {
      const response = await fetch(
        "https://lama-logistics-88b311025848.herokuapp.com/staff/api/sendInquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setSubmitStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Failed to send inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg bg-(--color-surface-cream) p-6 sm:p-8 lg:p-10 xl:p-12">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <UnderlineField id="fullName" placeholder="Your Full Name*" required />
        <UnderlineField
          id="companyName"
          placeholder="Company's Name*"
          required
        />

        <UnderlineField
          id="workEmail"
          placeholder="Work Email Address*"
          type="email"
          required
        />

        <UnderlineField
          id="message"
          placeholder="Tell us more about your needs (Optional)"
          rows={4}
        />

        <label
          htmlFor="contact-consent"
          className="flex cursor-pointer items-start gap-3 pt-2"
        >
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            className="contact-consent-checkbox"
          />
          <span className="font-body text-b2 leading-relaxed text-(--color-text-body)">
            I agree that Lama Telecom may contact me at the email address above.
          </span>
        </label>

        {submitStatus === "success" && (
          <p className="font-body text-b2 text-green-600">
            Inquiry sent successfully!
          </p>
        )}

        {submitStatus === "error" && (
          <p className="font-body text-b2 text-red-600">{errorMessage}</p>
        )}

        <div className="pt-2">
          <Button
            variant="secondary"
            isArrow
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING..." : "SEND"}
          </Button>
        </div>

        <p className="font-body text-b3 text-(--color-muted)">
          By completing this form, I have read, acknowledged and agree to the
          Privacy Statement
        </p>
      </form>
    </div>
  );
}
