(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".mission-card[data-category]");
  filters.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filters.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle("is-active", active);
        filter.setAttribute("aria-pressed", String(active));
      });
      cards.forEach(card => {
        const categories = card.dataset.category.split(" ");
        card.hidden = selected !== "all" && !categories.includes(selected);
      });
    });
  });

  const currentSectionLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  if ("IntersectionObserver" in window && currentSectionLinks.length) {
    const sections = [...currentSectionLinks]
      .map(link => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentSectionLinks.forEach(link => {
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        }
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach(section => observer.observe(section));
  }
})();