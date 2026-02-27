function SectionHeader({ title, subtitle, light = false }) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <h2
        className={`font-display text-3xl tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-coolkies-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base sm:text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

export default SectionHeader;
