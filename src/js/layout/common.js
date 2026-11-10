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

closeDetailsOnOutsideClick([".topnav-switcher", ".header__categories"]);

document.addEventListener("techubster:languagechange", (event) => {
  updatePageTitle(event.detail.language);
});

const initialLanguage = localStorage.getItem("techubster.language");
updatePageTitle(
  Object.hasOwn(pageTitleTranslations, initialLanguage)
    ? initialLanguage
    : "en",
);

const headerCategories = [
  {
    name: "Điện thoại, Tablet",
    icon: "fa-mobile-screen-button",
    groups: [
      {
        title: "Thương hiệu",
        items: [
          "iPhone",
          "Samsung",
          "Xiaomi",
          "OPPO",
          "vivo",
          "realme",
          "Google Pixel",
        ],
      },
      {
        title: "Điện thoại",
        items: [
          "Điện thoại cao cấp",
          "Điện thoại Android",
          "Điện thoại màn hình gập",
          "Điện thoại gaming",
        ],
      },
      {
        title: "Máy tính bảng",
        items: ["iPad", "Samsung Galaxy Tab", "Xiaomi Pad", "Máy tính bảng Android"],
      },
    ],
  },
  {
    name: "Laptop",
    icon: "fa-laptop",
    groups: [
      {
        title: "Thương hiệu",
        items: [
          "MacBook",
          "Laptop ASUS",
          "Laptop Acer",
          "Laptop Dell",
          "Laptop HP",
          "Laptop Lenovo",
          "Laptop MSI",
          "Laptop Microsoft Surface",
        ],
      },
      {
        title: "Nhu cầu",
        items: [
          "Laptop văn phòng",
          "Laptop gaming",
          "Laptop đồ họa",
          "Laptop học tập",
        ],
      },
    ],
  },
  {
    name: "Âm thanh, Mic thu âm",
    icon: "fa-headphones",
    groups: [
      {
        title: "Thiết bị âm thanh",
        items: [
          "Tai nghe Bluetooth",
          "Tai nghe chụp tai",
          "Loa Bluetooth",
          "Loa karaoke",
          "Soundbar",
        ],
      },
      {
        title: "Thương hiệu",
        items: ["Sony", "JBL", "Bose", "Marshall", "Apple", "Samsung"],
      },
      {
        title: "Thu âm, Mic",
        items: ["Micro không dây", "Micro thu âm", "Micro cài áo", "Audio interface"],
      },
    ],
  },
  {
    name: "Đồng hồ, Camera",
    icon: "fa-clock",
    groups: [
      {
        title: "Đồng hồ",
        items: [
          "Apple Watch",
          "Samsung Galaxy Watch",
          "Đồng hồ Garmin",
          "Đồng hồ thông minh",
        ],
      },
      {
        title: "Camera",
        items: [
          "Camera an ninh",
          "Camera hành trình",
          "Camera kỹ thuật số",
          "Camera gia đình",
        ],
      },
    ],
  },
  {
    name: "Đồ gia dụng, Làm đẹp",
    icon: "fa-house",
    groups: [
      {
        title: "Gia dụng",
        items: [
          "Robot hút bụi",
          "Máy hút bụi",
          "Máy lọc không khí",
          "Máy lọc nước",
          "Nồi chiên không dầu",
          "Nồi cơm điện",
        ],
      },
      {
        title: "Chăm sóc cá nhân",
        items: [
          "Máy sấy tóc",
          "Máy tạo kiểu tóc",
          "Máy cạo râu",
          "Bàn chải điện",
        ],
      },
    ],
  },
  {
    name: "Phụ kiện",
    icon: "fa-plug",
    groups: [
      {
        title: "Phụ kiện điện thoại",
        items: [
          "Củ sạc, cáp sạc",
          "Sạc dự phòng",
          "Ốp lưng",
          "Miếng dán màn hình",
          "Giá đỡ điện thoại",
          "Cáp chuyển đổi",
        ],
      },
      {
        title: "Phụ kiện khác",
        items: [
          "Phụ kiện Apple",
          "Chuột, bàn phím",
          "Webcam",
          "Phụ kiện tiện ích",
        ],
      },
    ],
  },
  {
    name: "PC, Màn hình, Máy in",
    icon: "fa-desktop",
    groups: [
      {
        title: "Máy tính",
        items: [
          "PC gaming",
          "PC văn phòng",
          "PC đồ họa",
          "Linh kiện máy tính",
        ],
      },
      {
        title: "Thiết bị",
        items: [
          "Màn hình gaming",
          "Màn hình văn phòng",
          "Máy in",
          "Chuột, bàn phím",
        ],
      },
    ],
  },
  {
    name: "Tivi, Điện máy",
    icon: "fa-tv",
    groups: [
      {
        title: "Tivi",
        items: [
          "Smart TV",
          "Google TV",
          "Tivi Samsung",
          "Tivi Sony",
          "Tivi Xiaomi",
        ],
      },
      {
        title: "Điện máy",
        items: [
          "Tủ lạnh",
          "Máy giặt",
          "Máy sấy quần áo",
          "Điều hòa",
          "Máy lọc không khí",
        ],
      },
    ],
  },
  {
    name: "Thu cũ đổi mới",
    icon: "fa-arrows-rotate",
    groups: [
      {
        title: "Thu cũ lên đời",
        items: ["Thu cũ điện thoại", "Thu cũ máy tính bảng", "Thu cũ laptop"],
      },
    ],
  },
  {
    name: "Hàng cũ",
    icon: "fa-box-open",
    groups: [
      {
        title: "Sản phẩm đã qua sử dụng",
        items: [
          "Điện thoại cũ",
          "Máy tính bảng cũ",
          "Laptop cũ",
          "Phụ kiện cũ",
        ],
      },
    ],
  },
  {
    name: "Khuyến mãi",
    icon: "fa-tags",
    groups: [
      {
        title: "Ưu đãi nổi bật",
        items: [
          "Khuyến mãi điện thoại",
          "Khuyến mãi laptop",
          "Khuyến mãi phụ kiện",
          "Sản phẩm giảm giá",
        ],
      },
    ],
  },
  {
    name: "Tin công nghệ",
    icon: "fa-newspaper",
    groups: [
      {
        title: "Khám phá",
        items: [
          "Tin công nghệ mới",
          "Đánh giá sản phẩm",
          "Tư vấn chọn mua",
          "Thủ thuật",
        ],
      },
    ],
  },
];

const manufacturerLogos = {
  iPhone: "/assets/icons/fontawesome/svgs-full/brands/apple.svg",
  iPad: "/assets/icons/fontawesome/svgs-full/brands/apple.svg",
  MacBook: "/assets/icons/fontawesome/svgs-full/brands/apple.svg",
  Apple: "/assets/icons/fontawesome/svgs-full/brands/apple.svg",
  "Google Pixel": "/assets/icons/fontawesome/svgs-full/brands/google.svg",
  "Google TV": "/assets/icons/fontawesome/svgs-full/brands/google.svg",
  "Laptop Microsoft Surface":
    "/assets/icons/fontawesome/svgs-full/brands/microsoft.svg",
};

function renderCategoryLink(item) {
  const logo = manufacturerLogos[item];

  return `
    <a href="/">
      ${logo ? `<img class="header__manufacturer-logo" src="${logo}" alt="" aria-hidden="true">` : ""}
      <span>${item}</span>
    </a>
  `;
}

function renderCategoryMenu() {
  const categories = headerCategories
    .map(
      ({ name, icon }, index) => `
        <div
          class="header__category-row${index === 0 ? " is-active" : ""}"
          data-category-index="${index}"
          aria-expanded="${index === 0}"
        >
          <a
            class="header__category-item"
            id="header-category-${index}"
            href="/"
            aria-controls="header-category-panel-${index}"
          >
            <i class="fa-solid ${icon}" aria-hidden="true"></i>
            <span>${name}</span>
          </a>
          <button
            class="header__category-expand"
            type="button"
            aria-label="Xem danh mục ${name}"
            aria-controls="header-category-panel-${index}"
            aria-expanded="${index === 0}"
          >
            <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      `,
    )
    .join("");

  const panels = headerCategories
    .map(
      ({ name, groups }, index) => `
        <section
          class="header__category-panel"
          id="header-category-panel-${index}"
          aria-labelledby="header-category-${index}"
          ${index === 0 ? "" : "hidden"}
        >
          <button class="header__category-back" type="button">
            <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
            <span>Tất cả danh mục</span>
          </button>
          <h2><a class="header__category-title-link" href="/">${name}</a></h2>
          <div class="header__category-groups">
            ${groups
              .map(
                ({ title, items }) => `
                  <section class="header__category-group">
                    <h3>${title}</h3>
                    <div class="header__category-links">
                      ${items.map(renderCategoryLink).join("")}
                    </div>
                  </section>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  return `
    <div class="header__category-menu">
      <nav class="header__category-list" aria-label="Danh mục sản phẩm">
        ${categories}
      </nav>
      <div class="header__category-submenu">
        ${panels}
      </div>
    </div>
  `;
}

function setActiveCategory(menu, categoryIndex) {
  menu.querySelectorAll(".header__category-row").forEach((row) => {
    const isActive = row.dataset.categoryIndex === categoryIndex;
    row.classList.toggle("is-active", isActive);
    row.setAttribute("aria-expanded", String(isActive));
    row
      .querySelector(".header__category-expand")
      .setAttribute("aria-expanded", String(isActive));
  });

  menu.querySelectorAll(".header__category-panel").forEach((panel) => {
    panel.hidden = panel.id !== `header-category-panel-${categoryIndex}`;
  });
}

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
            <summary class="header__categories-toggle">
              <i class="fa-solid fa-table-cells-large" aria-hidden="true"></i>
              <span>Danh mục</span>
              <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </summary>
            ${renderCategoryMenu()}
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

    const categoryMenu = this.querySelector(".header__category-menu");
    categoryMenu.addEventListener("pointerover", (event) => {
      const item = event.target.closest("[data-category-index]");
      if (item) {
        setActiveCategory(categoryMenu, item.dataset.categoryIndex);
      }
    });
    categoryMenu.addEventListener("focusin", (event) => {
      const item = event.target.closest("[data-category-index]");
      if (item) {
        setActiveCategory(categoryMenu, item.dataset.categoryIndex);
      }
    });
    categoryMenu.addEventListener("click", (event) => {
      const backButton = event.target.closest(".header__category-back");
      if (backButton) {
        categoryMenu.classList.remove("is-submenu-open");
        categoryMenu.querySelector(".header__category-item")?.focus();
        return;
      }

      const item = event.target.closest("[data-category-index]");
      if (item) {
        setActiveCategory(categoryMenu, item.dataset.categoryIndex);
        if (window.matchMedia("(max-width: 760px)").matches) {
          categoryMenu.classList.add("is-submenu-open");
        }
      }
    });
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
