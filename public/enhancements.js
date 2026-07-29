(() => {
  document.documentElement.classList.add("js-enabled");

  const body = document.body;
  const header = document.querySelector(".site-header");
  const menu = document.querySelector("[data-main-nav]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuBackdrop = document.querySelector("[data-menu-backdrop]");
  const mobileMenu = window.matchMedia("(max-width: 1020px)");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const scrollBehavior = reducedMotion ? "auto" : "smooth";

  const syncMenuAccessibility = () => {
    if (!menu) return;
    const isOpen = menu.classList.contains("is-open");
    if (mobileMenu.matches) {
      menu.inert = !isOpen;
      menu.setAttribute("aria-hidden", String(!isOpen));
    } else {
      menu.inert = false;
      menu.removeAttribute("aria-hidden");
    }
  };

  const closeMenu = (restoreFocus = true) => {
    menu?.classList.remove("is-open");
    body.classList.remove("menu-is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
    syncMenuAccessibility();
    if (restoreFocus && mobileMenu.matches) menuToggle?.focus();
  };

  const openMenu = () => {
    menu?.classList.add("is-open");
    body.classList.add("menu-is-open");
    menuToggle?.setAttribute("aria-expanded", "true");
    menuToggle?.setAttribute("aria-label", "Fechar menu");
    syncMenuAccessibility();
    menu?.querySelector("a")?.focus();
  };

  menuToggle?.addEventListener("click", () => {
    const shouldOpen = !menu?.classList.contains("is-open");
    if (shouldOpen) openMenu();
    else closeMenu();
  });

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  menuBackdrop?.addEventListener("click", () => closeMenu());
  mobileMenu.addEventListener("change", () => {
    closeMenu(false);
    syncMenuAccessibility();
  });
  syncMenuAccessibility();

  document.addEventListener("keydown", (event) => {
    if (!menu?.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== "Tab") return;

    const links = Array.from(menu.querySelectorAll("a"));
    const firstLink = links[0];
    const lastLink = links[links.length - 1];
    const active = document.activeElement;

    if (
      (event.shiftKey && active === firstLink) ||
      (!event.shiftKey && active === lastLink)
    ) {
      event.preventDefault();
      menuToggle?.focus();
    } else if (active === menuToggle) {
      event.preventDefault();
      (event.shiftKey ? lastLink : firstLink)?.focus();
    }
  });

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealItems = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  const productCards = Array.from(
    document.querySelectorAll("[data-product-card]")
  );
  const filterControls = Array.from(
    document.querySelectorAll("[data-product-filter]")
  );

  const setProductFilter = (filter, shouldScroll) => {
    const visibleCards = [];
    productCards.forEach((card) => {
      const categories = (card.dataset.productCategories || "").split(" ");
      const isIndustrial = !categories.includes("agricultura");
      const matches =
        filter === "todos" ||
        (filter === "industriais" && isIndustrial) ||
        categories.includes(filter);
      card.hidden = !matches;
      card.classList.remove("is-last-visible");
      if (matches) visibleCards.push(card);
    });
    if (visibleCards.length % 2 === 1) {
      visibleCards[visibleCards.length - 1]?.classList.add("is-last-visible");
    }

    document
      .querySelectorAll(".product-filters [data-product-filter]")
      .forEach((button) => {
        const isActive = button.dataset.productFilter === filter;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

    document
      .querySelectorAll(".product-family[data-product-filter]")
      .forEach((button) => {
        const isActive = button.dataset.productFilter === filter;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

    if (shouldScroll) {
      document
        .querySelector("#produtos")
        ?.scrollIntoView({ behavior: scrollBehavior });
    }
  };

  filterControls.forEach((control) => {
    control.addEventListener("click", () => {
      const productTarget = control.dataset.productTarget;
      setProductFilter(
        control.dataset.productFilter || "todos",
        control.hasAttribute("data-scroll-products") && !productTarget
      );
      if (productTarget) {
        document.querySelector("#product-" + productTarget)?.scrollIntoView({
          behavior: scrollBehavior,
          block: "center"
        });
      }
    });
  });

  const solutionResult = document.querySelector("[data-solution-result]");
  const resultName = solutionResult?.querySelector(
    "[data-solution-result-name]"
  );
  const recommendationButton = solutionResult?.querySelector(
    "[data-show-recommendation]"
  );
  const interestSelect = document.querySelector('select[name="interest"]');

  const solutionChoices = Array.from(
    document.querySelectorAll("[data-solution-option]")
  );
  const selectSolution = (option) => {
    solutionChoices.forEach((item) => {
      const isSelected = item === option;
      item.classList.toggle("is-selected", isSelected);
      item.setAttribute("aria-checked", String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
    });

    if (resultName) {
      resultName.textContent = option.dataset.solutionName || "";
    }
    if (recommendationButton) {
      recommendationButton.dataset.category =
        option.dataset.solutionCategory || "";
      recommendationButton.dataset.product =
        option.dataset.solutionProduct || "";
      recommendationButton.dataset.interest =
        option.dataset.solutionInterest || "";
    }
  };

  solutionChoices.forEach((option, index) => {
    option.addEventListener("click", () => selectSolution(option));
    option.addEventListener("keydown", (event) => {
      let nextIndex = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (index + 1) % solutionChoices.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (index - 1 + solutionChoices.length) % solutionChoices.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = solutionChoices.length - 1;
      } else {
        return;
      }
      event.preventDefault();
      const nextOption = solutionChoices[nextIndex];
      selectSolution(nextOption);
      nextOption?.focus();
    });
  });

  recommendationButton?.addEventListener("click", () => {
    const category = recommendationButton.dataset.category || "todos";
    const product = recommendationButton.dataset.product || "";
    setProductFilter(category, false);
    if (interestSelect && recommendationButton.dataset.interest) {
      interestSelect.value = recommendationButton.dataset.interest;
    }
    document.querySelector("#product-" + product)?.scrollIntoView({
      behavior: scrollBehavior,
      block: "center"
    });
  });

  const leadForm = document.querySelector("[data-lead-form]");
  const leadSubmit = document.querySelector("[data-lead-submit]");

  const openLeadInWhatsApp = () => {
    if (!leadForm || !leadForm.reportValidity()) return;

    const data = new FormData(leadForm);
    const selectedOption = interestSelect?.selectedOptions?.[0];
    const whatsappNumber =
      selectedOption?.dataset.whatsapp || "553131917444";
    const message = [
      "Olá, equipe Biocarbo!",
      "",
      "Gostaria de conversar sobre: " +
        (data.get("interest") || "Orientação técnica"),
      "Nome: " + (data.get("name") || ""),
      "Empresa: " + (data.get("company") || "Não informada"),
      "Cidade/UF: " + (data.get("state") || "Não informada"),
      "Contato: " + (data.get("contact") || ""),
      "Detalhes: " + (data.get("details") || "Não informados")
    ].join("\n");
    window.open(
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  leadForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    openLeadInWhatsApp();
  });
  leadSubmit?.addEventListener("click", openLeadInWhatsApp);

  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: element.dataset.track,
        product: element.dataset.trackProduct || undefined
      });
    });
  });
})();
