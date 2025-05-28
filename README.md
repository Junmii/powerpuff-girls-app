# The Powerpuff Girls
Author: Joy Krabbe

This project is an assessement for a Frontend Developer role

## Starting up the project

First, download all the necessary npm packages:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page!

## Testing the project

If you want to run the tests:

```bash
npm run test
```

## General info

This project was created with Next.js 15, SCSS (or SaSS) and uses SSR. For the tests I used Jest.

The pages are fully responsive and work on phones, tablets and laptops/desktops.

## Pages

This website has a homepage, episodes page and detail pages per episode. 

## Components

I created two components in this project,

**EpisodeItem** and **NavigationBar**:

### EpisodeItem

This is a simple reusable component that shows the image of the episode and the title. It also functions as a link/button to the page that matches the episode clicked on!
This component is to be used when you want to show a visual representation of the episode that leads to the corresponding page.

### NavigationBar

This is the navigation bar of the website. This component provides the navigation across the main pages of the website.
This component is to be used when you need a navigation bar on a website :).

## Other packages used

Aside from the basics I also installed Isomorphic Dompurify (to make sure we don't have anyone injecting code on the site!)
