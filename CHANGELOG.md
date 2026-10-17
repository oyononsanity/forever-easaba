# Changelog — 2026-10-17 update
- Replaced the welcome heart SVG fill with an animated HTML5 Canvas heart using the requested parametric equation and love phrases in 20 languages.
- Added a GSAP ScrollTrigger cinematic flight sequence: cloud layers, aircraft approach, airplane-window portal, cabin reveal, and boarding pass landing on a seat. A reduced-motion/static fallback is included.
- Refined the Lalbagh → Skyfall Restaurant route illustration with a glowing route, animated route marker, city-detail accents, and Google Maps directions link.
- The route artwork is illustrative, not turn-by-turn navigation.
- Added standalone demos under `demos/` for the heart Canvas and cinematic flight transition.

# Changelog — polish and stability pass
- Passcode is no longer readable in source (hashed). Page cannot scroll while locked.
- Closing message now sits at the very end, after the "Open When…" letters. Removed the unused hello screen.
- Scratch card works with touch, pen and mouse (pointer events), with double-click reveal as a fallback.
- Fireworks no longer start duplicate loops. Safari blur fallbacks added. Dynamic-viewport height on hero/lock.
- New sections: "Us, So Far" live counter and "Small Promises". Scroll progress bar and back-to-top button.
- Images resized and recompressed (8.2 MB → 5.8 MB); unused file removed. Script loads deferred.
- Missing music files now show a clear message instead of failing silently.

# Changelog — redesign pass
- Welcome: heart animation removed. After the passcode, "hello Kashshaf" is written across a black screen, then the site opens.
- First screen is only the photograph. "Until November 18" moved into the new "Until November 18 / Us, So Far" section (progress rings + a 26 Jan → 18 Nov line).
- The separate boarding-pass section is gone. The full pass now lands on the seat at the end of the flight sequence (scratch it while the scene is pinned).
- "A Little Journey Together": new map with four stops, a live-directions button and replay.
- "Our Special Song": one quiet card with cover, vinyl peek, waveform, progress and play.
- Letter: the paper unfolds on open and folds back into the envelope on close (same steps in reverse).
- Dead heart / countdown / old song CSS removed; new styles live in sections.css.

## Dreamy romantic update (2026-10-18)
- Fixed the “A Little Journey Together” route section to use a centered, full-bleed background image with a soft dark/lavender overlay; adjusted the heading to ivory-pink for contrast.
- Added a responsive four-image dreamy memory carousel using existing project assets, with keyboard arrows, previous/next controls, dots, and swipe navigation.
- Added two cinematic quote chapters with original general quotes; no new personal memories were invented.
- Reworked the featured music layout into a left-side player and right-side lyrics panel, with responsive stacking on smaller screens.
- Added timestamp-based lyric highlighting and auto-scrolling support through `CONFIG.featuredLyrics`. The lyrics list remains empty until the owner supplies lyrics and timestamps/audio for alignment.
- Preserved the earlier countdown, bg-1, eyes section, and cinematic flight changes.
- Validation: JavaScript syntax check passed; HTML parser found no unmatched tags; all referenced `images/` assets exist. A live browser visual test was not available in this environment.
