import { useEffect } from "react";

function useAnchorOffset(offset = 88) {
  useEffect(() => {
    const onLinkClick = (event) => {
      const target = event.target.closest("a[href^='#']");
      if (!target) {
        return;
      }

      const hash = target.getAttribute("href");
      const destination = hash ? document.querySelector(hash) : null;
      if (!destination) {
        return;
      }

      event.preventDefault();
      const top = destination.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", onLinkClick);
    return () => document.removeEventListener("click", onLinkClick);
  }, [offset]);
}

export default useAnchorOffset;
