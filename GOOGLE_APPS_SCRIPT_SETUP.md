# Google Apps Script Setup — Shotto Barber Studio

The project is already configured to use your existing Apps Script URL.

## Recommended: one endpoint for School + Barber
1. Open your existing Google Apps Script project.
2. Replace the live `Code.gs` with `google-apps-script/Code.gs` from this ZIP.
3. Save.
4. Go to **Deploy → Manage deployments → Edit**.
5. Choose **New version**.
6. Keep **Execute as: Me** and **Who has access: Anyone**.
7. Deploy.
8. Keep the same `/exec` URL.

The included script is unified:
- Missing `site_id` defaults to `shotto-school`, so the existing school website remains compatible.
- `site_id=shotto-barber` accepts `booking` and `contact`.
- Rate limiting, honeypot protection, duplicate protection, validation and responsive email templates are included.

## If you prefer a separate Google Apps Script project
Deploy `Code.gs` as a new Web App, copy its `/exec` URL, and replace `googleWebAppUrl` in `assets/js/config.js`.
