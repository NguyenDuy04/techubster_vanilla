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

// Đăng ký thẻ tùy chỉnh <site-header>
customElements.define("site-topnav", SiteTopNav);
