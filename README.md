# StudentHub Portal

**Semester-long student campus portal** built with HTML5, CSS3, and JavaScript.

Covers **Practical 1 → Practical 5** (project initiation through registration form validation).

---

## 1. Project Overview (Practical 1)

### Problem Scope
Students need a single place to manage academics (attendance, timetable, assignments), campus life (events, clubs, announcements), and account tasks (register, login, profile). StudentHub is a **static frontend portal** that demonstrates semantic structure, responsive design, interactivity, and robust client-side validation before any backend is added.

### User Roles
| Role | Access |
|------|--------|
| **Guest** | Home, About, Events (public), FAQ, Contact, Register, Login |
| **Student** | Dashboard, Attendance, Timetable, Assignments, Study Materials, Profile, Notifications, Feedback |
| **Admin** | Admin panel (user overview, pending approvals, logs) |

### Key Modules
1. **Authentication** – Register, Login  
2. **Academics** – Attendance, Timetable, Assignments, Study Materials  
3. **Campus Life** – Events, Clubs, Announcements, Campus Services  
4. **Communication** – Notifications, Contact, Feedback, FAQ  
5. **Account** – Profile, Dashboard  
6. **Admin** – User management overview  

### Pages (20+)
| # | Page | Purpose |
|---|------|---------|
| 1 | Home.html | Landing / portal entry |
| 2 | About.html | About StudentHub |
| 3 | Register.html | Student registration (Practical 5) |
| 4 | Login.html | Student login |
| 5 | Dashboard.html | Student overview |
| 6 | Attendance.html | Attendance records |
| 7 | Timetable.html | Class schedule |
| 8 | Assignments.html | Assignment list |
| 9 | StudyMaterials.html | Notes & resources |
| 10 | Events.html | Campus events |
| 11 | Clubs.html | Clubs & communities |
| 12 | Announcements.html | Official notices |
| 13 | CampusServices.html | Campus services |
| 14 | Notifications.html | User notifications |
| 15 | Profile.html | Student profile |
| 16 | FAQ.html | Frequently asked questions |
| 17 | Contact.html | Contact & support |
| 18 | Feedback.html | Feedback form |
| 19 | Location.html | Campus location / map |
| 20 | Admin.html | Admin control center |

### Navigation Flow
```
Guest → Home → Register / Login
              ↓
Student → Dashboard → Academics / Campus Life / Profile
Admin   → Admin panel (from restricted nav)
```

All pages share a consistent header (logo + nav + Login/Register), breadcrumb, and footer. Relative links (e.g. `href="Dashboard.html"`) manage navigation.

### Folder Structure
```
StudentHub/
├── Home.html
├── About.html
├── Register.html
├── Login.html
├── Dashboard.html
├── Attendance.html
├── Timetable.html
├── Assignments.html
├── StudyMaterials.html
├── Events.html
├── Clubs.html
├── Announcements.html
├── CampusServices.html
├── Notifications.html
├── Profile.html
├── FAQ.html
├── Contact.html
├── Feedback.html
├── Location.html
├── Admin.html
├── style.css          # Global styles + dark mode
├── register.js        # Registration validation (Practical 5)
├── darkmode.js        # Theme switcher + localStorage (Practical 4)
├── docs/
│   ├── REQUIREMENTS.md
│   └── SITEMAP.md
└── README.md
```

### Git / GitHub Workflow
1. Create repo: `StudentHub` on GitHub.  
2. After each practical:  
   ```bash
   git add .
   git commit -m "Practical N: <short description>"
   git push origin main
   ```
3. Keep commits small and meaningful (e.g. `Practical 5: registration form + regex validation`).

---

## 2. Practical Mapping

| Practical | Focus | Status in this project |
|-----------|--------|-------------------------|
| **1** | Initiation, requirements, sitemap, README, structure | ✅ README + docs/ |
| **2** | Semantic HTML5 + accessibility (header, nav, main, section, footer, skip-link, labels) | ✅ All pages |
| **3** | Responsive UI (Flexbox/Grid, media queries; Bootstrap on some pages) | ✅ |
| **4** | DOM, events, hamburger, modal, FAQ accordion, notification banner, dark mode + localStorage | ✅ |
| **5** | Registration form, HTML5 inputs, regex validation, password strength, errors near fields | ✅ Register.html + register.js |

---

## 3. How to Run

1. Unzip the project folder.  
2. Open `Home.html` in any modern browser (Chrome / Firefox / Edge).  
3. No server required for static pages.  
4. For local testing of forms, keep `register.js` and `darkmode.js` in the same folder as the HTML files.

---

## 4. Registration Form (Practical 5)

**Fields validated with Regular Expressions:**
- Full name (letters + spaces)
- Email
- Mobile (Indian 10-digit, starts with 6–9)
- Course & Year (required selects)
- Gender (radio)
- Password (min 8, upper, lower, digit, special)
- Confirm password (match)
- Terms acceptance (checkbox)

**Features:**
- Errors shown next to each field  
- Password strength meter (Weak / Medium / Strong)  
- Real-time validation on input/blur/change  
- Accessible labels, `aria-describedby`, `role="alert"`  
- Success modal on valid submit  

---

## 5. Accessibility Highlights

- Skip-to-content link on pages  
- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`  
- Breadcrumbs with `aria-current="page"`  
- Form labels associated with inputs  
- Keyboard-friendly modals (Escape to close, focus management)  
- Dark mode preference stored in `localStorage`  

---

## 6. Tools Used

- VS Code  
- HTML5, CSS3 (Flexbox, Grid, media queries)  
- JavaScript ES6  
- Bootstrap 5 (selected pages: Home, FAQ, etc.)  
- Browser DevTools (responsive mode + accessibility checks)  
- Git / GitHub (recommended workflow above)  

---

## 7. Post-Lab Submission Checklist

- [ ] Functional requirements (see `docs/REQUIREMENTS.md`)  
- [ ] Sitemap (see `docs/SITEMAP.md`)  
- [ ] Wireframe screenshots (create in Figma/Draw.io from sitemap)  
- [ ] GitHub repository link  
- [ ] This README.md  
- [ ] Validation test screenshots (valid + invalid registration inputs)  

---

© 2026 StudentHub – Academic frontend project
