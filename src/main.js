import "@/styles/index.scss";
import featuresTabs from "./functions/featuresTabs";
import mobileFeaturesTabs from "./functions/mobileFeaturesTabs";

window.onload = function() {
  document.getElementById('preloader').style.display = 'none';
}

featuresTabs();
mobileFeaturesTabs();
