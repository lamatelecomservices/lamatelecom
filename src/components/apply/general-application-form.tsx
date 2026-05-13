"use client";

import { ArrowUp } from "lucide-react";
import { useRef, useState } from "react";
import Button from "@/components/button";

const placeholderTypography =
  "placeholder:font-body placeholder:text-b2 placeholder:text-(--color-text-body)";

const inputTypography = "font-body text-b2 leading-normal text-(--color-fg)";

const inputShell = `w-full border-0 border-b border-(--color-border) bg-transparent py-3 outline-none transition-colors ${inputTypography}`;

function PlaceholderLineInput({
  id,
  type = "text",
  required,
  placeholderText,
}: {
  id: string;
  type?: string;
  required?: boolean;
  placeholderText: string;
}) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const showSyntheticHint = Boolean(required) && !value && !focused;

  if (!required) {
    return (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholderText}
        className={`${inputShell} ${placeholderTypography}`}
        autoComplete={
          type === "email" ? "email" : type === "tel" ? "tel" : undefined
        }
      />
    );
  }

  return (
    <div className="relative w-full min-w-0 border-b border-(--color-border)">
      {showSyntheticHint ? (
        <span
          className="pointer-events-none absolute top-3 left-0 font-body text-b2 leading-normal"
          aria-hidden
        >
          <span className="text-(--color-text-body)">{placeholderText}</span>
          <span className="text-(--color-primary)">*</span>
        </span>
      ) : null}
      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`relative z-10 w-full border-0 bg-transparent py-3 outline-none transition-colors ${inputTypography}`}
        aria-label={`${placeholderText} (required)`}
        autoComplete={
          type === "email" ? "email" : type === "tel" ? "tel" : undefined
        }
      />
    </div>
  );
}

function PlaceholderLineTextarea({
  id,
  placeholderText,
  rows = 5,
}: {
  id: string;
  placeholderText: string;
  rows?: number;
}) {
  return (
    <textarea
      id={id}
      name={id}
      rows={rows}
      placeholder={placeholderText}
      className={`min-h-36 w-full resize-y border-0 border-b border-(--color-border) bg-transparent py-3 ${inputTypography} outline-none transition-colors ${placeholderTypography}`}
    />
  );
}

function ResumeUploadRow() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [fileFocused, setFileFocused] = useState(false);
  const showSyntheticHint = !fileName && !fileFocused;

  const openPicker = () => fileRef.current?.click();

  return (
    <div className="flex w-full min-w-0 flex-col gap-2">
      <input
        ref={fileRef}
        id="apply-resume"
        name="resume"
        type="file"
        required
        accept=".pdf,.doc,.docx,.odt,.rtf,application/pdf"
        className="sr-only"
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        onFocus={() => setFileFocused(true)}
        onBlur={() => setFileFocused(false)}
      />
      <div className="flex w-full min-w-0 items-end gap-3 border-b border-(--color-border) pb-3">
        <button
          type="button"
          className="min-h-10 min-w-0 flex-1 cursor-pointer border-0 bg-transparent py-1 text-left"
          onClick={openPicker}
        >
          {showSyntheticHint ? (
            <span className="font-body text-b2 leading-normal">
              <span className="text-(--color-text-body)">Resume</span>
              <span className="text-(--color-primary)">*</span>
            </span>
          ) : (
            <p className="truncate font-body text-b2 text-(--color-fg)">
              {fileName}
            </p>
          )}
        </button>
        <label
          htmlFor="apply-resume"
          className="group flex shrink-0 cursor-pointer items-center gap-1 font-mono text-o1 leading-none tracking-wide text-white transition-all duration-400 md:gap-(--space-gap-sm) md:text-b2"
        >
          <span className="flex h-[54px] w-[54px] min-h-[54px] shrink-0 items-center justify-center rounded-sm bg-black transition-all duration-400 group-hover:translate-x-1 group-hover:bg-(--color-primary) md:h-[54px] md:w-[54px] md:min-h-[54px] md:min-w-[54px]">
            <ArrowUp
              className="size-5 shrink-0 text-white"
              strokeWidth={2.25}
              aria-hidden
            />
          </span>
        </label>
      </div>
      <p className="font-body text-caption text-(--color-text-body)">
        Upload your resume in PDF, DOC, DOCX, ODT, or RTF format (max 10MB).
      </p>
    </div>
  );
}

export type GeneralApplicationFormProps = {
  /** Careers job `id` when applying from a listing */
  positionId?: string | null;
  /** Human-readable role for accessibility / hidden field */
  roleTitle?: string | null;
};

export default function GeneralApplicationForm({
  positionId,
  roleTitle,
}: GeneralApplicationFormProps) {
  return (
    <div className="w-full min-w-0 lg:max-w-none">
      <form
        className="flex w-full min-w-0 flex-col gap-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {positionId ? (
          <input type="hidden" name="positionId" value={positionId} />
        ) : null}
        {roleTitle ? (
          <input type="hidden" name="positionTitle" value={roleTitle} />
        ) : null}

        <PlaceholderLineInput id="applyName" placeholderText="Name" required />
        <PlaceholderLineInput
          id="applyEmail"
          placeholderText="Email"
          type="email"
          required
        />
        <PlaceholderLineInput
          id="applyPhone"
          placeholderText="Phone Number"
          type="tel"
          required
        />

        <ResumeUploadRow />

        <PlaceholderLineTextarea
          id="applyAbout"
          placeholderText="Tell us more about yourself"
          rows={5}
        />

        <div className="pt-2">
          <Button variant="secondary" isArrow type="submit">
            SEND
          </Button>
        </div>

        <p className="font-body text-caption text-(--color-text-body)">
          By submitting this form, you agree to receive communications from Lama
          Telecom. You can unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}
