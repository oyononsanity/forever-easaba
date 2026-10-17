# Forever Kashshaf

## Run the website
1. Extract the ZIP and open the extracted folder.
2. Run a local server from that folder, for example `python -m http.server 8000`.
3. Open `http://localhost:8000`.

A local server is recommended. GSAP and ScrollTrigger are loaded from CDN, so the scroll-pinned flight sequence needs internet access. If the CDN is unavailable, a lightweight fallback remains.

## Standalone demos
- `demos/heart-love-canvas.html` — Canvas heart using `x = 16 sin³(t)`, `y = -(13 cos(t) - 5 cos(2t) - 2 cos(3t) - cos(4t))` with love phrases in 20 languages.
- `demos/cinematic-flight-transition.html` — GSAP + ScrollTrigger cloud/airplane/window/cabin/boarding-pass demo.

Open either demo in a modern browser. The flight demo needs an internet connection for GSAP CDN scripts.

## Route note
The Lalbagh → Skyfall Restaurant route illustration is decorative and does not calculate exact roads, traffic, or travel time. Use the Google Maps directions link for live routing.

## Testing note
Static JavaScript syntax and HTML structure checks are performed, but real-device Safari/iOS, media playback, and scroll-pin behaviour should still be tested in browsers.
