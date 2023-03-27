export default function mobileFeaturesTabs() {
  const buttonsGroup = document.querySelector('[data-group="mobile-tabs"]');

  function tabOnClickHandler(e) {
    const { target } = e;
    if (target.closest("[data-selector='tab-button']")) {
      const tabGroup = target.closest("[data-selector='tab-group']");
      tabGroup.classList.toggle("active");
    }
  }

  buttonsGroup.addEventListener("click", tabOnClickHandler);

  return () => {
    buttonsGroup.removeEventListener("click", tabOnClickHandler);
  };
}
