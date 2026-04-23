export function initHeader() {
  const CLOSE_DELAY = 150;
  const mobileMQ = window.matchMedia("(max-width: 767px)");
  const isMobile = () => mobileMQ.matches;

  const megaItems = document.querySelectorAll(".has-mega");

  megaItems.forEach((item) => {
    const button = item.querySelector(":scope > button");
    const menu = item.querySelector(":scope > .mega-menu");
    if (!button || !menu) return;

    let closeTimer = null;

    const open = () => {
      clearTimeout(closeTimer);
      if (menu.hasAttribute("hidden")) menu.removeAttribute("hidden");
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    };

    const close = () => {
      item.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
      setTimeout(() => {
        if (!item.classList.contains("open") && !isMobile())
          menu.setAttribute("hidden", "");
      }, 200);
    };

    const scheduleClose = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(close, CLOSE_DELAY);
    };

    item.addEventListener("mouseenter", () => {
      if (!isMobile()) open();
    });
    item.addEventListener("mouseleave", () => {
      if (!isMobile()) scheduleClose();
    });

    button.addEventListener("focus", () => {
      if (!isMobile()) open();
    });
    item.addEventListener("focusout", (e) => {
      if (!isMobile() && !item.contains(e.relatedTarget)) scheduleClose();
    });

    button.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = item.classList.contains("open");
      if (isOpen) close();
      else open();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && item.classList.contains("open") && !isMobile()) {
        close();
        button.focus();
      }
    });
  });

  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".nav-mobile-close");
  const nav = document.querySelector(".primary-nav");

  const openMenu = () => {
    document.body.classList.add("menu-open");
    if (hamburger) hamburger.setAttribute("aria-expanded", "true");
    const firstFocusable = nav && nav.querySelector("a, button");
    if (firstFocusable) firstFocusable.focus({ preventScroll: true });
  };

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    if (hamburger) {
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.focus({ preventScroll: true });
    }
  };

  if (hamburger) {
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.addEventListener("click", openMenu);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  mobileMQ.addEventListener("change", (e) => {
    if (!e.matches && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  if (nav) {
    nav.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link || !isMobile()) return;
      if (link.getAttribute("href") && link.getAttribute("href") !== "#") {
        closeMenu();
      }
    });
  }
}
