[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/sage-otter-44/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/sage-otter-44/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# The World Today — Sunday, 22 November 2026

One image that sums up the world's news of Sunday 22 November 2026: 50 stories across 7 regions and 10 fields, drawn as a front page. Four big lead panels, twelve medium stories with their own illustrations, a numbered list of the rest, a world map with numbered pins, a timeline strip with real local times, and an itemised DATE CHECK that names the big stories deliberately left out because they broke on 19–21 November or are still to come.

Every story in the image happened, or was first reported, on 22 November 2026 in some time zone. Events from 19–21 November (the Shenzhen summit, the ICJ Myanmar ruling, the Estonia border decision, the Iran–Gulf strikes, the Nigeria boat sinking, the Peru quake, the Voyager 1 announcement, the UN killer-robots talks, the COP31 deadlock, the F1 pole) are listed in the DATE CHECK footer as excluded, along with not-yet events (the Las Vegas GP result, the G20 declaration, Jeddah flights resuming on 24 Nov, the Estonia closure on 1 Dec).

## The 50 stories

### Big stories
1. G20 opens in Johannesburg — first summit on African soil (Reuters / AFP) — CONFIRMED
2. Modi opens Nitish Setu, a new Ganga bridge in Bihar (NDTV) — CONFIRMED
3. India–New Zealand Test begins under windy skies, Wellington (Cricbuzz) — CONFIRMED
4. EU leaders meet on Ukraine on the eve of the G20 (growentix) — CLAIM

### Medium stories
5. US open to a Latin American UN chief, Waltz says (japako.pl)
6. Zelensky: more peace talks may come at the G20 (japako.pl) — CLAIM
7. UP police salute Owaisi — for the wrong judge (NDTV)
8. Pakistan minister invokes Mughal kings at SCO talks (The Times of India)
9. Ramayana: Part 1 — day 17 at the box office (The Times of India)
10. Chennai Book Fair 2027 set for Jan 16–18 (The Hindu)
11. Protests 'can cut sexual violence', study finds (Brisbane Times)
12. Naturopathy Day marked across India (pw.live)
13. Oil slides 3%+ as futures fall; crude at ₹7,842 a barrel (thedailyjagran)
14. ICMR: 100 tech transfers, 20 licences (thedailyjagran)
15. Liverpool host Man Utd at Anfield today (The Guardian)
16. Las Vegas GP tonight, Verstappen on pole (ESPN)

### 17–50 · The rest of the day
17. Hull v Brighton, Premier League (The Guardian)
18. Juventus v Venezia, Serie A (The Guardian)
19. AC Milan v Frosinone (The Guardian)
20. Atalanta v Inter tonight (The Guardian)
21. Athletic Bilbao v Espanyol (The Guardian)
22. Bologna v Udinese, Serie A (The Guardian)
23. Sassuolo v Genoa, Serie A (The Guardian)
24. G20: debt relief push (growentix)
25. G20: critical minerals deal eyed (growentix)
26. G20: disaster resilience (growentix)
27. Modi's 12th G20, 4th South Africa trip (growentix)
28. 'Empty chair' handover to the US (Glance)
29. Draft declaration agreed, no US (Glance)
30. EU budget 'very disappointing' — France (japako.pl)
31. Yemen: 193 Houthi killed, army says (japako.pl) — one-sided account
32. 'Pink Panther' to fight for Ukraine (japako.pl)
33. Saudis down Houthi missile (japako.pl)
34. Türkiye rejects Rohingya plan (japako.pl)
35. Gen Z activism sweeps Asia (japako.pl)
36. Nepal's Balendra Shah test (japako.pl)
37. Bahrain seeks UN action on Iran (japako.pl)
38. US dismisses Iran F-16 claim (japako.pl)
39. Denmark expels Russian attaché (schreinerei-gruber.eu)
40. Gaza aid vehicle strike kills 3 (schreinerei-gruber.eu) — one-sided account
41. Finland: Russia a NATO threat (japako.pl)
42. Brazil supercell storm (japako.pl)
43. Mexico networks disrupted (japako.pl)
44. US flight systems 'outdated' (japako.pl)
45. Cummins keeps captaincy (thedailyjagran)
46. US panel: China shaped Op Sindoor planning (Newsmriti)
47. KL Rahul's Test evolution (Cricbuzz)
48. Wellington wind test for India (pw.live)
49. Snooker: Advani wins opener (pw.live)
50. 42 nations at the G20 table (TAIDEN)

## How the program works

- `frontpage.svg` is the front page itself, drawn as one SVG: masthead, timeline strip, four lead panels, twelve medium panels, a world map with numbered pins, the 17–50 list, and the DATE CHECK footer. All illustrations are original drawn work.
- `page.html` shows the SVG at 1024×1024.
- `render.mjs` screenshots the page with headless Chromium (Playwright) into `entry.png`.
- `build.mjs` runs the render and verifies the PNG: magic bytes, exactly 1024×1024, at most 1 MiB.
- `main.ts` (Node 22, standard library only) copies `entry.png` to the output directory, checking the PNG magic bytes first. It runs twice with no network and both runs write identical bytes.

Build it: `node build.mjs`. Run the entry: `MAKEFUN_OUTPUT_DIR=out node main.ts`.
