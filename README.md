# StudentHub: Accessible HTML5 Framework

## Project Overview
This project focuses on developing a static HTML5 framework for the **StudentHub** portal, consisting of 11+ interconnected pages [1, 2]. The primary goal was to create a clean, linked, and **accessibility-ready** UI structure using semantic HTML5 elements [1].

## Features
### 1. Semantic HTML5 Structure
Every page utilizes semantic tags to ensure a clear content hierarchy, including:
*   `<header>` and `<footer>` for consistent branding [1, 3].
*   `<nav>` for the main navigation and breadcrumbs [1, 4].
*   `<main>` to encapsulate the unique content of each page [1, 3].
*   `<section>` and `<article>` for organized content delivery [1].

### 2. Accessibility & Intermediate Extensions
To meet the "Advanced/Intermediate Extension" requirements, the following features were implemented:
*   **Skip-to-Content Link:** A keyboard-accessible link allowing users to bypass the navigation menu [1, 5, 6].
*   **Breadcrumb Navigation:** Provides users with a clear path of their current location within the portal [1, 4, 7].
*   **Accessible Forms:** All input fields on the Login and Registration pages include proper `<label>` tags for screen readers [1, 3].
*   **ARIA Labels:** Used on navigation elements to enhance compatibility with assistive technologies [1].

### 3. Responsive & Animated Design
*   **Intermediate CSS:** Uses CSS variables for theme management and Flexbox for a responsive navigation menu [4-6].
*   **Animations:** The Location page features a smooth `fadeInUp` entrance animation for the campus map [7, 8].

## Included Pages
1.  **Home.html** - Portal landing page.
2.  **About.html** - Information about the platform.
3.  **Location.html** - Interactive animated campus map.
4.  **Admin.html** - Administrative dashboard skeleton.
5.  **Dashboard.html** - Student-specific overview.
6.  **Events.html** - Campus event listings.
7.  **FAQ.html** - Frequently asked questions with `<details>` tags.
8.  **Feedback.html** - Student feedback form.
9.  **Contact.html** - Support and contact information.
10. **Login/Register.html** - User authentication forms.

## Tools Used
*   **VS Code** for development [1].
*   **HTML5 & CSS3** for structure and styling [1].
*   **Google Maps API** for the location embed.

## How to View
Simply open `Home.html` in any modern web browser to begin navigating the portal.
