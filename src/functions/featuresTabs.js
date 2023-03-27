export default function featuresTabs() {
  const TRANSLATE_COEF = 300;

  const buttonsGroup = document.querySelector('[data-group="tabs"]');
  const slider = document.querySelector('[data-group="features"]');

  const buttons = Array.from(
    document.querySelectorAll("button[data-content-id]")
  );
  const features = Array.from(document.querySelectorAll("[id*=feature]"));

  let previousActiveButton = buttons.find((btn) =>
    btn.classList.contains("active")
  );

  const featuresMap = new Map(
    buttons.reduce((acc, btn) => {
      return [
        ...acc,
        [
          btn,
          features.findIndex((ftr) => ftr.id.includes(btn.dataset.contentId)) -
            1,
        ],
      ];
    }, [])
  );

  function tabOnClickHandler(e) {
    const { target } = e;
    if (
      target.closest("button[data-content-id]") &&
      !target.classList.contains("active")
    ) {
      previousActiveButton.classList.remove("active");
      target.classList.add("active");
      previousActiveButton = target;
      slider.style.translate = `0 -${
        featuresMap.get(target) * TRANSLATE_COEF
      }px`;
    }
  }

  buttonsGroup.addEventListener("click", tabOnClickHandler);

  return () => {
    buttonsGroup.removeEventListener("click", tabOnClickHandler);
  };
}
