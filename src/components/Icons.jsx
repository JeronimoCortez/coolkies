export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.04 2A9.94 9.94 0 003.4 16.86L2 22l5.3-1.38A10 10 0 1012.04 2zm5.87 14.1c-.25.72-1.46 1.38-2.02 1.47-.52.08-1.17.11-1.9-.12-.44-.14-.99-.32-1.71-.63-3.02-1.3-4.99-4.35-5.14-4.55-.15-.2-1.23-1.64-1.23-3.13 0-1.5.79-2.24 1.06-2.55.28-.31.61-.39.82-.39h.59c.19 0 .44-.07.69.54.25.6.84 2.08.91 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.39-.46.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.74-.86.94-1.15.2-.29.39-.24.66-.15.27.09 1.72.81 2.02.95.3.15.49.22.56.35.07.12.07.72-.18 1.44z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 22s7-5.74 7-12a7 7 0 10-14 0c0 6.26 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 4h4l2 5-2 2a15 15 0 006 6l2-2 5 2v4a2 2 0 01-2.18 2A18 18 0 013 6.18 2 2 0 015 4z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

export function StarRating() {
  return (
    <div className="flex gap-1 text-coolkies-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg
          key={idx}
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3l2.75 5.58 6.16.9-4.45 4.33 1.05 6.13L12 17.03 6.49 19.94l1.05-6.13L3.09 9.48l6.16-.9L12 3z" />
        </svg>
      ))}
    </div>
  );
}
