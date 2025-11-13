import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useSectionNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const scrollNow = () => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      const onHome = location.pathname === "/";
      const hasScrolled = onHome && scrollNow();

      if (!hasScrolled) {
        sessionStorage.setItem("pending-scroll", sectionId);
        if (!onHome) {
          navigate("/");
        } else {
          requestAnimationFrame(scrollNow);
        }
      }
    },
    [location.pathname, navigate]
  );

  return scrollToSection;
}
