function PrimaryButton({
  as = "button",
  href,
  children,
  icon = null,
  variant = "yellow",
  className = "",
  type = "button",
  ...rest
}) {
  const isLink = as === "a" || Boolean(href);
  const Element = isLink ? "a" : as;

  const variants = {
    yellow:
      "bg-coolkies-yellow text-coolkies-dark shadow-card ring-1 ring-coolkies-gold/35 hover:bg-coolkies-yellowDark hover:ring-coolkies-gold/55",
    dark: "bg-coolkies-dark text-white hover:bg-[#1f2727]",
    light: "bg-white text-coolkies-dark hover:bg-[#f5f5f5]",
  };

  const resolvedClassName = [
    "inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold transition-all duration-300",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (Element === "a") {
    return (
      <a href={href} className={resolvedClassName} {...rest}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={resolvedClassName} {...rest}>
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default PrimaryButton;
