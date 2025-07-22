# Holiday Card Project

A lightweight, fun holiday card project built with Astro. This project displays a grid of interactive holiday-themed cards that can be flipped to reveal activities or messages.

## Features

- Responsive grid layout of holiday cards
- Click to flip cards and reveal content
- Cards remember their state using `localStorage`
- Snowflake animation for festive atmosphere
- Background music with autoplay and loop
- Light styling with hover effects and card flipping animations

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Kevin-Spring/merrymerry.git
cd MERRYMERRY
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:3000` to see the app.

This project was built using Node v22.17.1 (npm v10.9.2), see if downloading those versions resolve the issue.

## Usage

- Click on a card to flip it and reveal its content.
- Cards can only be opened if the current date is on or past the card number (to prevent cheating).
- The state of opened cards persists on reload via localStorage.
- Enjoy the background music and festive snow animation.

## Project Structure

- `src/components` – Astro components such as `Card`, `Snowflake`, and `Layout`.
- `public/scripts` – JavaScript files that handle card flipping logic.
- `public/images` – Background images and assets.
- `src/pages` – Astro pages like the main `index.astro`.

## Customization

- To change card content, modify the array of cards in `data/chistmasCard.js`.
- Background music is located in `public/audio/songs.mp3`; replace with your own track if desired.
- Snowflake count and animation speed can be adjusted in the `Snowflake` component.

---

Happy Holidays! 🎄🎅✨
