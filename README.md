# Shotto Barber Studio PWA

Full static barber shop demo for Fidelis Developer.

## Included
- Responsive Bootstrap 5 layout for mobile, tablet, desktop and large screens
- Font Awesome icons
- SweetAlert2
- AOS animations
- Swiper gallery
- PWA manifest + service worker + install prompt
- Online images only
- Services and demo prices
- Secure booking form + contact form
- Client-side grooming AI assistant
- WhatsApp / phone / email shortcuts
- 404 and offline pages
- Google Apps Script secure email handler

## Developer
Fidelis Developer
Email: shottofidelis2@gmail.com
WhatsApp: 0629 628 637

## Google endpoint
`assets/js/config.js` currently contains the same Apps Script `/exec` URL used by the Shotto school demo. To make both projects work from that one endpoint, replace the live Apps Script code with `google-apps-script/Code.gs` from this project and deploy it as a new version. The unified script still supports the existing school `admission` and `contact` forms.

## Run locally
Use a local web server instead of double-clicking HTML, for example:
`python -m http.server 8080`
Then open `http://localhost:8080`.


## v1.1 Afro update
- Added Afro Taper Fade, Afro Shape & Line-Up, High Top Fade and Curly/Afro Texture Finish.
- Added Afro Styles gallery filter and extra online hairstyle photos.
- Replaced gallery image URLs that were not loading.
- Added automatic online-image fallback so broken remote photos no longer leave black/broken image cards.
- Updated booking dropdown, AI assistant and Google Apps Script service validation.
