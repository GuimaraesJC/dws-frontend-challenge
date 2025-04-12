# DWS Front-End Challenge by Jean Guimarães

## Description

The proposed challenge was to develop a blog using only React (without frameworks like Next.js or Gatsby) and without relying on pre-built styling libraries such as Material UI or TailwindCSS. The goal was to achieve a pixel-perfect implementation that closely matches the provided reference design, while also ensuring the platform is fully responsive across different screen sizes.

## Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- NPM

After cloning the project and navigating to the root folder, run the following commands:

```
npm install
```

```
npm run dev
```

The web application runs in the browser at http://localhost:5173.

## Stack of Choice

- React (TypeScript) – Bootstrapped with Vite, without using frameworks like Next.js or Gatsby.
- CSS Modules – Pure CSS was used to better showcase my Front-End development skills.
- React Query – Manages data fetching, caching, and validation.
- Zustand – Handles global state for user interactions and post filtering.
- Axios – Used for making HTTP requests.

## Features

### Responsiviness 

Ensures that all pages are fully responsive, providing an optimal viewing experience across desktop, tablet, and smartphone devices.

### 404 Page (Front-End)

Handles navigation for non-existent pages in the router, displaying a user-friendly error message and offering clear options to navigate back to the homepage.

## Room for improvement

Due to time constraints, I wasn’t able to fully implement the post filtering feature. However, the initial setup has been started using the global store, and it remains a work in progress that can be further discussed in the next stage of the process. Additionally, the search input in the top bar is currently non-functional, but it is planned as part of the filtering feature and can also be integrated via the global store.

There are also opportunities to improve the positioning and behavior of certain UI elements. For example, the sort filter on the main page’s post list could benefit from layout adjustments, and the dropdown filters could have better sizing behavior when multiple options are selected.

For the sort filter specifically, one possible enhancement would be to create a custom hook that detects screen size and dynamically shortens the text (e.g., "Newest first" / "Oldest first") to avoid line breaks on very small screens.

From a technical perspective, using frameworks like Next.js, Gatsby, or even React Router v7 would allow for Static Site Generation, significantly improving SEO and overall performance.

Unit tests could also be added for key components such as the filter logic and the filtered post list. These tests were not implemented initially due to time constraints.

Finally, accessibility improvements, such as adding ARIA attributes and supporting full keyboard navigation, would complement the use of semantic HTML and contribute to a more inclusive and accessible user experience.