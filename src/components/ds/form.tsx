"use client";

import {
  useState,
  type ChangeEvent,
  type CSSProperties,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

/* ── shared control surface ──────────────────────────────────────────────── */

const controlStyle = (invalid?: boolean, focus?: boolean): CSSProperties => ({
  width: "100%",
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body)",
  color: "var(--text-strong)",
  background: "var(--white)",
  padding: "13px 15px",
  borderRadius: "var(--radius-sm)",
  border: `1px solid ${
    invalid ? "var(--status-error)" : focus ? "var(--brass-600)" : "var(--border-strong)"
  }`,
  boxShadow: focus ? "0 0 0 3px rgba(190,138,50,.16)" : "none",
  outline: "none",
  transition:
    "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
});

/* ── Field ───────────────────────────────────────────────────────────────── */

export interface FieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

export function Field({ label, htmlFor, hint, error, required, children, style }: FieldProps) {
  return (
    <div style={{ display: "grid", gap: 7, ...style }}>
      <label
        htmlFor={htmlFor}
        style={{
          fontSize: "var(--fs-body-sm)",
          fontWeight: "var(--fw-medium)",
          color: "var(--text-strong)",
          letterSpacing: "-0.005em",
        }}
      >
        {label}
        {required ? (
          <span style={{ color: "var(--brass-600)" }} aria-hidden="true">
            {" *"}
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <span id={`${htmlFor}-error`} role="alert" style={{ fontSize: "var(--fs-caption)", color: "var(--status-error)" }}>
          {error}
        </span>
      ) : hint ? (
        <span id={`${htmlFor}-hint`} style={{ fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}>
          {hint}
        </span>
      ) : null}
    </div>
  );
}

/* ── Input ───────────────────────────────────────────────────────────────── */

export interface InputProps {
  id: string;
  name?: string;
  type?: string;
  /** Omit both `value` and `onChange` to use the field uncontrolled. */
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  invalid?: boolean;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  describedBy?: string;
  style?: CSSProperties;
}

export function Input({ invalid, describedBy, style, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <input
      aria-invalid={invalid || undefined}
      aria-describedby={describedBy}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{ ...controlStyle(invalid, focus), ...style }}
      {...rest}
    />
  );
}

/* ── Textarea ────────────────────────────────────────────────────────────── */

export interface TextareaProps
  extends Pick<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "id" | "name" | "value" | "defaultValue" | "onChange" | "placeholder" | "rows"
  > {
  invalid?: boolean;
  describedBy?: string;
  style?: CSSProperties;
}

export function Textarea({ invalid, rows = 5, describedBy, style, ...rest }: TextareaProps) {
  const [focus, setFocus] = useState(false);
  return (
    <textarea
      rows={rows}
      aria-invalid={invalid || undefined}
      aria-describedby={describedBy}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        ...controlStyle(invalid, focus),
        resize: "vertical",
        lineHeight: "var(--lh-body)",
        ...style,
      }}
      {...rest}
    />
  );
}

/* ── Select ──────────────────────────────────────────────────────────────── */

export interface SelectProps {
  id: string;
  name?: string;
  /** Omit both `value` and `onChange` to use the field uncontrolled. */
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder?: string;
  invalid?: boolean;
  required?: boolean;
  describedBy?: string;
  style?: CSSProperties;
}

export function Select({
  invalid,
  options,
  placeholder,
  describedBy,
  style,
  ...rest
}: SelectProps) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <select
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...controlStyle(invalid, focus),
          appearance: "none",
          paddingRight: 42,
          cursor: "pointer",
          ...style,
        }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--gray-500)"
        strokeWidth="2"
        style={{
          position: "absolute",
          right: 15,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

/* ── Checkbox ────────────────────────────────────────────────────────────── */

export interface CheckboxProps {
  id: string;
  name?: string;
  label: string;
  description?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: CSSProperties;
}

const CHECK_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3'><polyline points='20 6 9 17 4 12'/></svg>\")";

export function Checkbox({
  id,
  name,
  label,
  description,
  checked,
  onChange,
  disabled,
  style,
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      style={{
        display: "grid",
        gridTemplateColumns: "18px 1fr",
        gap: "var(--space-3)",
        alignItems: "start",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{
          appearance: "none",
          width: 18,
          height: 18,
          marginTop: 3,
          borderRadius: "var(--radius-xs)",
          border: `1px solid ${checked ? "var(--brass-600)" : "var(--border-strong)"}`,
          background: checked ? "var(--brass-600)" : "var(--white)",
          backgroundImage: checked ? CHECK_SVG : "none",
          backgroundSize: "13px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          cursor: "inherit",
          transition:
            "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
        }}
      />
      <span style={{ display: "grid", gap: 2 }}>
        <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-strong)" }}>{label}</span>
        {description ? (
          <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-faint)" }}>
            {description}
          </span>
        ) : null}
      </span>
    </label>
  );
}

/* ── FormStatus ──────────────────────────────────────────────────────────── */

export interface FormStatusProps {
  state: "idle" | "pending" | "success" | "error";
  title?: string;
  message?: string;
  style?: CSSProperties;
}

const statusTones = {
  success: { bg: "var(--status-success-bg)", fg: "var(--status-success)", bd: "var(--sage-200)" },
  error: { bg: "var(--status-error-bg)", fg: "var(--status-error)", bd: "#EED6D2" },
  pending: { bg: "var(--ivory-200)", fg: "var(--text-muted)", bd: "var(--border-soft)" },
};

export function FormStatus({ state, title, message, style }: FormStatusProps) {
  if (state === "idle") return null;
  const tone = statusTones[state];
  return (
    <div
      role={state === "error" ? "alert" : "status"}
      aria-live="polite"
      style={{
        display: "grid",
        gap: 4,
        padding: "var(--space-4) var(--space-5)",
        borderRadius: "var(--radius-md)",
        background: tone.bg,
        border: `1px solid ${tone.bd}`,
        ...style,
      }}
    >
      <strong
        style={{ fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-medium)", color: tone.fg }}
      >
        {title}
      </strong>
      {message ? (
        <span
          style={{
            fontSize: "var(--fs-body-sm)",
            color: "var(--text-muted)",
            lineHeight: "var(--lh-snug)",
          }}
        >
          {message}
        </span>
      ) : null}
    </div>
  );
}
