# 📬 Day 6 — Newsletter / Subscribe Section UI

> Part of my **Frontend Development Practice Series** — one UI component built daily using HTML, CSS, and vanilla JavaScript.

---

## 🖼️ Preview

![Newsletter UI Preview](https://github.com/Coddiction-101/Frontend-Development-Practice-Series/blob/main/day_6_NewsletterSection/reference.png)

---

## 📌 About This Project

A fully responsive **Newsletter Subscribe Section** built from scratch by analyzing a reference design and reconstructing it component by component — focusing on layout decisions, visual hierarchy, and clean code structure.

No frameworks. No libraries. Just HTML, CSS, and JavaScript.

---

## ✨ Features

- ⚡ Two-column card layout using **CSS Grid**
- 🎨 Layered **radial gradient blob** background on the right panel
- 🔤 Serif + sans-serif **font pairing** (Playfair Display + Inter)
- 🧊 **Frosted glass** input field using `backdrop-filter`
- ✅ **Email validation** with regex check
- 🔒 **Checkbox guard** — blocks submit if terms not accepted
- 💬 **Shake animation** on invalid form submission
- 🎉 **Success state** — smooth fade + confirmation message
- 📱 **Fully responsive** — stacks to single column on mobile

---

## 🧱 Component Breakdown

```
NewsletterSection
├── Card (CSS Grid — 2 columns)
│   ├── LeftPanel
│   │   ├── HeadlineBlock      → h1 + subtitle paragraph
│   │   ├── HR Divider
│   │   └── FeatureGrid        → ul > li × 6 (icon + semantic text)
│   │
│   └── RightPanel             → layered radial-gradient background
│       ├── Subscribe Heading
│       ├── EmailInputGroup    → input + button (Flexbox)
│       └── TermsCheckbox      → label > checkbox + fine print
```

---

## 🛠️ Built With

| Tool | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Grid, Flexbox, gradients, animations |
| Vanilla JS | Form validation, success state |
| [Remix Icons](https://remixicon.com/) | Feature list icons |
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Serif headings |
| [Inter](https://fonts.google.com/specimen/Inter) | Body + input text |
| [Montserrat](https://fonts.google.com/specimen/Montserrat) | Base UI font |

---

## 📐 Layout Decisions

### Why CSS Grid for the card?
Two equal columns with `grid-template-columns: 1fr 1fr` — clean, no math, collapses naturally to one column on mobile via a single media query.

### Why `ul > li` for features?
Feature items are semantically a **list of benefits** — screen readers announce "list of 6 items", which improves accessibility over plain `div`s.

### Why `border-right` on the left panel for the divider?
Simpler than adding a dedicated divider element. The vertical line is just a visual boundary — using a border keeps the HTML clean.

### Why `align-items: flex-start` on feature items?
Pins the icon to the top line of text. If the text wraps to two lines, the icon doesn't awkwardly center — it stays anchored to the first line.

---

## ⚙️ JavaScript Features

### Email Validation
```js
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### Shake Animation on Error
Dynamically adds a `.shake` CSS class, then removes it after the animation ends using the `animationend` event — no `setTimeout` hacks.

### Success State
Fades out the input group and terms label, then swaps the heading to *"You're in! 🎉"* and injects a confirmation message — all without reloading the page.

---

## 📁 File Structure

```
day-06-newsletter/
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## 🚀 How to Run

No build tools needed. Just open in your browser:

```bash
# Clone the full practice series repo
git clone https://github.com/your-username/frontend-practice-series.git

# Navigate to this project
cd frontend-practice-series/day-06-newsletter

# Open in browser
open index.html
```

Or simply drag `index.html` into any browser window.

---

## 📚 What I Learned

- How to **analyze a design** before writing a single line of code — breaking it into layout zones, components, and visual decisions
- The difference between `align-items: center` vs `flex-start` on multi-line flex children
- How `overflow: hidden` on the card clips gradient blobs to the border radius
- Using `backdrop-filter: blur()` for frosted glass inputs
- Layering multiple `radial-gradient()` values to replicate an organic blob effect
- Semantic HTML choices — `ul/li` for lists, `label` wrapping checkboxes, `button` for interactive icons
- `accent-color` for native-styled checkboxes without custom CSS hacks

---

## 🗓️ Practice Series Progress

| Day | Component | Status |
|---|---|---|
| Day 1 | Pricing Cards | ✅ Done |
| Day 2 | Login UI (toggle + validation) | ✅ Done |
| Day 3 | Pricing UI Variant | ✅ Done |
| Day 4 | Hero Section | ✅ Done |
| Day 5 | Feature Section | ✅ Done |
| **Day 6** | **Newsletter / Subscribe Section** | ✅ **Done** |
| Day 7 | Coming soon... | 🔜 |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
