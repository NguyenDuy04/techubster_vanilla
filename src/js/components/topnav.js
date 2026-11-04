const translations = {
  en: {
    storeLocation: "Store Location",
    downloadApp: "Download App",
    connects: "Connects",
    trackOrder: "Track Order",
    help: "Help",
    changeLanguage: "Change language",
    changeCurrency: "Change currency",
  },
  vi: {
    storeLocation: "Địa điểm cửa hàng",
    downloadApp: "Tải ứng dụng",
    connects: "Kết nối",
    trackOrder: "Theo dõi đơn hàng",
    help: "Trợ giúp",
    changeLanguage: "Đổi ngôn ngữ",
    changeCurrency: "Đổi tiền tệ",
  },
};

const currencies = ["VND", "USD"];
const languageControl = document.querySelector("[data-current-language]");
const currencyControl = document.querySelector("[data-current-currency]");

function setLanguage(language) {
  document.documentElement.lang = language;
  languageControl.textContent = language.toUpperCase();
  languageControl
    .closest("summary")
    .setAttribute("aria-label", translations[language].changeLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });

  document.querySelectorAll("[data-language-option]").forEach((option) => {
    option.setAttribute(
      "aria-pressed",
      String(option.dataset.languageOption === language),
    );
  });
}

function setCurrency(currency) {
  currencyControl.textContent = currency;
  document.documentElement.dataset.currency = currency;
  currencyControl
    .closest("summary")
    .setAttribute(
      "aria-label",
      translations[document.documentElement.lang].changeCurrency,
    );

  document.querySelectorAll("[data-currency-option]").forEach((option) => {
    option.setAttribute(
      "aria-pressed",
      String(option.dataset.currencyOption === currency),
    );
  });
}

const savedLanguage = localStorage.getItem("techubster.language");
const savedCurrency = localStorage.getItem("techubster.currency");

setLanguage(Object.hasOwn(translations, savedLanguage) ? savedLanguage : "en");
setCurrency(currencies.includes(savedCurrency) ? savedCurrency : "VND");

document.addEventListener("click", (event) => {
  document.querySelectorAll(".topnav-switcher[open]").forEach((switcher) => {
    if (!switcher.contains(event.target)) {
      switcher.open = false;
    }
  });
});

document.addEventListener("click", (event) => {
  const option = event.target.closest(
    "[data-language-option], [data-currency-option]",
  );
  if (!option) {
    return;
  }

  if (option.matches("[data-language-option]")) {
    const language = option.dataset.languageOption;
    localStorage.setItem("techubster.language", language);
    setLanguage(language);
  } else {
    const currency = option.dataset.currencyOption;
    localStorage.setItem("techubster.currency", currency);
    setCurrency(currency);
  }

  option.closest("details").open = false;
});
