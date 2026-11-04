const pageTitleTranslations = {
  en: {
    pageTitleStoreLocation: "Store Location - Techubster",
    pageTitleTrackOrder: "Track Order - Techubster",
    pageTitleHelp: "Help - Techubster",
  },
  vi: {
    pageTitleStoreLocation: "Địa điểm cửa hàng - Techubster",
    pageTitleTrackOrder: "Theo dõi đơn hàng - Techubster",
    pageTitleHelp: "Trợ giúp - Techubster",
  },
};

function updatePageTitle(language) {
  const titleKey =
    document.querySelector("[data-i18n-title]")?.dataset.i18nTitle;
  const translatedTitle = pageTitleTranslations[language]?.[titleKey];

  if (translatedTitle) {
    document.title = translatedTitle;
  }
}

function closeDetailsOnOutsideClick(selectors) {
  const dropdownSelector = selectors.join(", ");

  document.addEventListener("click", (event) => {
    document.querySelectorAll("details[open]").forEach((dropdown) => {
      if (
        dropdown.matches(dropdownSelector) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.open = false;
      }
    });
  });
}

closeDetailsOnOutsideClick([".topnav-switcher", ".site-header__categories"]);

document.addEventListener("techubster:languagechange", (event) => {
  updatePageTitle(event.detail.language);
});

const initialLanguage = localStorage.getItem("techubster.language");
updatePageTitle(
  Object.hasOwn(pageTitleTranslations, initialLanguage)
    ? initialLanguage
    : "en",
);

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header__content">
          <a class="header__brand" href="/" aria-label="Techubster home">
            <img src="/assets/images/logo/techubster__logo-removebg-preview%20%282%29.png" alt="">
            <span>Techubster</span>
          </a>

          <details class="header__categories">
            <summary>
              <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
              <span>Category</span>
              <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </summary>
            <div class="header__category-menu">
              <button type="button">New arrivals</button>
              <button type="button">Clothing</button>
              <button type="button">Accessories</button>
            </div>
          </details>

          <div class="header__search" role="search">
            <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
            <input type="search" aria-label="Search products" placeholder="Search products...">
            <button type="button" aria-label="Search">
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>

          <div class="header__actions">
            <button class="header__notification" type="button" aria-label="Notifications">
              <i class="fa-regular fa-bell" aria-hidden="true"></i>
              <span aria-hidden="true"></span>
            </button>
            <button class="header__utility" type="button" aria-label="Wishlist">
              <i class="fa-regular fa-heart" aria-hidden="true"></i>
            </button>
            <button class="header__utility" type="button" aria-label="Cart">
              <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
            </button>
            <button class="header__avatar" type="button" aria-label="Your profile">
              <img src="/assets/images/logo/avatars.jpg" alt="">
            </button>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);

class SiteTopNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav id="topnav">
            <div class="topnav-content">
                <div class="topnav-list">
                    <a href="/pages/shop/storelocation.html" class="topnav-items">
                        <i class="fa-solid fa-map-location-dot"></i>
                        <span data-i18n="storeLocation">
                            Store Location
                        </span>
                    </a>
                    <div class="topnav-items">
                        <i class="fa-solid fa-download"></i>
                        <span data-i18n="downloadApp" style="user-select: none !important;">
                            Download App
                        </span>
                        <div class="topnav_qr">
                            <img src="/assets/images/download_app/qr_code.png" alt="">
                            <div class="topnav_qr-download">
                                <a href="https://appstore.com/" class="download__link">
                                    <img src="/assets/images/download_app/appstore.png" alt="" class="download__img">
                                </a>
                                <a href="https://googleplay.com/" class="download__link">
                                    <img src="/assets/images/download_app/googleplay.png" alt="" class="download__img">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="topnav-items topnav-items--no-hover">
                        <span class="topnav-items--no-pointer" data-i18n="connects">Connects</span>
                        <div class="social_link">
                            <a href="https://facebook.com/" class="social_image">
                                <img src="/assets/icons/facebook-icon.svg" alt="">
                            </a>
                            <a href="https://instagram.com/" class="social_image">
                                <img src="/assets/icons/instagram-icon.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="topnav-list">
                    <details class="topnav-items topnav-switcher topnav-item--language">
                        <summary class="topnav-switcher-toggle" aria-label="Change language">
                            <span data-current-language>EN</span>
                            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                        </summary>
                        <div class="topnav-switcher-menu">
                            <button type="button" data-language-option="en">English</button>
                            <button type="button" data-language-option="vi">Tiếng Việt</button>
                        </div>
                    </details>
                    <details class="topnav-items topnav-switcher topnav-item--currency">
                        <summary class="topnav-switcher-toggle" aria-label="Change currency">
                            <span data-current-currency>VND</span>
                            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                        </summary>
                        <div class="topnav-switcher-menu">
                            <button type="button" data-currency-option="VND">VND</button>
                            <button type="button" data-currency-option="USD">USD</button>
                        </div>
                    </details>
                    <a href="/pages/shop/trackorder.html" class="topnav-items">
                        <i class="fa-regular fa-truck"></i>
                        <span data-i18n="trackOrder">
                            Track Order
                        </span>
                    </a>
                    <a href="/pages/shop/help-page.html" class="topnav-items">
                        <i class="fa-regular fa-circle-question"></i>
                        <span data-i18n="help">
                            Help
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    `;
  }
}

customElements.define("site-topnav", SiteTopNav);
