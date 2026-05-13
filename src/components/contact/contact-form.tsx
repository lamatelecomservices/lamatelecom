"use client";

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
  return (
    <div className="rounded-lg bg-(--color-surface-cream) p-6 sm:p-8 lg:p-10 xl:p-12">
      <form
        className="flex flex-col gap-8"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <UnderlineField id="fullName" placeholder="Your Full Name*" required />
        <UnderlineField
          id="companyName"
          placeholder="Company’s Name*"
          required
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
          <UnderlineField
            id="workEmail"
            placeholder="Work Email Address*"
            type="email"
            required
          />
          <UnderlineField
            id="workPhone"
            placeholder="Work Phone*"
            type="tel"
            required
          />
        </div>

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
            I agree that Lama Telecom may contact me at the email address or
            phone number above.
          </span>
        </label>

        <div className="pt-2">
          <Button variant="secondary" isArrow type="submit">
            SEND
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
