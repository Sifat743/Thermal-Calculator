# Thermal — solar storage calculator

A responsive, dependency-free web app based on **HVAC TES Calculator 2PM 22 OCT.xlsx**. Open `index.html` in a browser. No installation, account, API key or Excel is needed.

## Use it

1. Enter solar exposure, collector area and efficiency. Optionally enter thermal demand.
2. Choose a storage material, temperature range and storage duration.
3. Choose insulation, ambient temperature and allowed heat loss.
4. Choose the enclosure shape and wall materials. Open advanced controls to change material properties and design assumptions.

Results update immediately. Download a CSV including inputs, material properties, results and model notes. Use **View full calculation → Print / Save PDF** for a printable summary. Inputs are saved in this browser's local storage when available. **Reset inputs** restores workbook defaults.

Daily data accepts up to 5,000 non-negative numeric values per series, separated by commas, semicolons, spaces or new lines. Do not include dates, headings or thousands separators. Bulk demand takes priority over single-day demand, which takes priority over available solar energy. Bulk exposure takes priority over single-day exposure. Missing demand means use solar; a demand of zero remains zero.

## Publish on GitHub Pages

1. Create a repository on GitHub, for example `thermal-storage-calculator`.
2. Upload the contents of this folder to the repository root, with `index.html` at the top level. Include `app.js`, `calculator.js`, `data.js`, `styles.css` and `.nojekyll`.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**.
5. GitHub shows the website address in the Pages settings when deployment finishes.

On iPad, open the published HTTPS address in Safari once while online. Wait a moment for the first load to finish, then tap **Share → Add to Home Screen → Add**. Open the Home Screen app once while still online so Safari finishes saving it. From then on it runs offline, including its calculations and saved inputs. iPad Safari does not run a JavaScript calculator directly from an `.html` file in the Files app, so the one-time HTTPS step is required.

This package has not been uploaded to a GitHub account or published.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Calculation basis

- Solar: exposure × area × efficiency / 100 / 3.6, in kWh/day (ASE!C8:C11).
- Storage: daily energy × storage days; mass = energy × 3,600 / effective capacity. Capacity is specific heat × temperature band, plus latent heat for PCM (SS and values). PCM melting points must be strictly inside the temperature band.
- Insulation: equivalent cube area = 6 × volume^(2/3). Thickness = k × area × hot-side-to-ambient temperature difference × hours / (1,000 × allowed energy loss), in metres (valfIns!L11:L23). Published curves use the next upper tested temperature. Formula insulation uses the workbook's manufacturer equation.
- Enclosure: selected-shape volumes, uniform closed walls, bending/deflection/membrane screening, and the workbook's 21 iterations including wall and insulation self-weight (valInOuSt!AS32:BB52). Convergence tolerance is 0.000001 m.
- Material values and their source links are retained in `data.js`. Existing custom workbook entries are retained; their inclusion is not validation of their properties.

The app adds explicit input validation for efficiency, negative daily data, non-finite numbers and missing properties. These checks can reject inputs that the original workbook would partially accept. It uses the workbook's summary solar calculation, not the bulk helper columns J:L, whose headings and repeated conversions are inconsistent. Editing insulation conductivity deliberately switches to a fixed custom design value. Missing insulation density blocks enclosure quantities while retaining valid thermal results.

The workbook's engineering limitations are preserved: reference properties may not apply at operating temperature; insulation service limits can be unknown; equivalent-cube thermal sizing requires separate verification for other geometries. Wall quantities are preliminary screening, not pressure-vessel or fabrication approval. Supports, buckling, welds, thermal restraint, local loads, containment and fire design are not resolved by this calculator.

## Development and validation

Plain HTML, CSS and JavaScript. There are no third-party runtime dependencies or external fonts. Calculations and input persistence run locally; the app sends no inputs to a server.

Run `node test.cjs` to compare all 15 numeric Simple summary outputs against the source workbook's saved results, and exercise shapes, PCM, bulk precedence, custom insulation, missing properties and invalid-input boundaries. The tests passed during creation. JavaScript syntax checks also passed. Embedded browser preview was unavailable due to a local connection timeout, so browser layout and interaction QA remain unverified.

The original workbook is not included or modified.
