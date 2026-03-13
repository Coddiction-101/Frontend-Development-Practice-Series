# Day 01 – Feature Grid Section

A responsive **feature grid UI component** built using **HTML and CSS Grid** as part of my *Frontend Development Practice Series*.

This project focuses on improving **layout design, component structure, and responsive UI development**.

---

### Live Demo ::  [View Live Project](https://01-grid-layout.netlify.app/)

## Preview

![Feature Grid UI](https://github.com/Coddiction-101/Frontend-Development-Practice-Series/blob/main/day_01_FeatureGrid/GridLayout_01.png)

---

## What I Practiced

* CSS Grid layout for structured UI components
* Creating reusable **card components**
* Implementing **responsive design with media queries**
* Using **CSS variables for color management**
* Adding small **hover micro-interactions**

---

## Interesting Challenge

Handling the **last two cards in the grid layout**.

Instead of leaving empty space, I stretched the cards across the grid to maintain a balanced layout.

```css
.card:nth-child(4),
.card:nth-child(5) {
  grid-column: span 3;
}
```

---

## Tech Stack

* HTML5
* CSS3
* CSS Grid
* Responsive Design

---

## Project Goal

The goal of this practice is to **strengthen frontend layout skills** by recreating UI components and improving them beyond the reference design.

---

## Part of

This project is part of the **Frontend Development Practice Series**, where I build UI components daily to improve my frontend skills.

Main repository:
Frontend Development Practice Series

