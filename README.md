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

Due to time constraints, I wasn’t able to fully implement the post filtering feature. However, I began setting it up within the global store, and it remains a work in progress that can be further discussed in the next stage of the process.

There is also room for improvement in the positioning of certain UI elements, for example, the sort filter on the main page's post list, as well as the sizing of the dropdown filters when multiple options are selected.

From a technical perspective, one possible enhancement would be to adopt frameworks such as Next.js, Gatsby, or even React Router v7 to enable Static Site Generation. This would provide a more SEO-friendly setup and improve performance.