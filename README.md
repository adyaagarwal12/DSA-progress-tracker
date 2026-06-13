# DSA Progress Tracker

A personal DSA tracking application built using **C++ Object-Oriented Programming (OOP)** and later enhanced with an interactive **HTML, CSS, and JavaScript frontend dashboard**.

The project helps users track solved DSA problems, monitor difficulty-wise progress, maintain contest records, calculate scores automatically, and visualize performance through analytics charts.

---

# Project Overview

This project was developed in two stages:

## Version 1: Console-Based Application (C++)

The initial version was implemented as a terminal-based application to demonstrate and practice Object-Oriented Programming concepts in C++.

Features included:

- Adding coding problems
- Deleting coding problems
- Viewing statistics
- Difficulty-wise tracking
- File handling for data storage
- Progress monitoring through terminal output

This version focuses primarily on backend logic and OOP implementation.

---

## Version 2: Frontend Dashboard

The project was later extended with a browser-based dashboard using HTML, CSS, and JavaScript.

The frontend provides a more user-friendly interface while preserving the original tracking functionality.

Additional features include:

- Interactive dashboard
- Difficulty analytics chart
- Contest tracker
- Persistent data storage using Local Storage
- Dynamic score calculation

---

# Features

## Problem Tracking

Users can:

- Add solved DSA problems
- Categorize problems as:
  - Easy
  - Medium
  - Hard
- Delete existing problems
- View all tracked problems in a table

---

## Score System

The project automatically calculates scores based on problem difficulty.

| Difficulty | Points |
|------------|----------|
| Easy | +2 |
| Medium | +4 |
| Hard | +8 |

When a problem is deleted, the corresponding score is deducted automatically.

---

## Dashboard Statistics

The dashboard displays:

- Total Problems Solved
- Easy Problems Solved
- Medium Problems Solved
- Hard Problems Solved
- Total Score
- Weekly Contest Count
- Biweekly Contest Count

All values update automatically whenever records are added or deleted.

---

## Contest Tracker

The application also tracks coding contests.

Users can store:

- Contest Name
- Contest Type
- Rank
- Number of Solved Questions

Supported contest categories:

- Weekly Contest
- Biweekly Contest

Contest counts are automatically reflected in the dashboard.

---

## Difficulty Analytics

A graphical analytics section is implemented using **Chart.js**.

The chart displays:

- Easy Problems Distribution
- Medium Problems Distribution
- Hard Problems Distribution

The chart updates automatically whenever the problem list changes.

---

## Data Persistence

The frontend version uses Browser Local Storage.

Stored data includes:

- Problems list
- Contest records
- Dashboard statistics
- Difficulty counts
- Score

Data remains available even after refreshing or reopening the browser.

---

# Object-Oriented Programming Concepts Used

The console version demonstrates several important OOP concepts:

## Classes and Objects

Custom classes are used for:

- Problem Management
- Tracker Management

## Encapsulation

Data members and functions are grouped together within classes.

## Abstraction

Complex tracking functionality is hidden behind simple interfaces.

## Modularity

The application is divided into multiple files for better maintainability.

Files include:

- Problem.h
- Tracker.h
- Tracker.cpp
- main.cpp

---

# Technologies Used

## Backend

- C++
- Object-Oriented Programming
- File Handling
- STL

## Frontend

- HTML5
- CSS3
- JavaScript
- Chart.js
- Browser Local Storage

---

# Project Structure

```text
DSA-progress-tracker
│
├── Frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Problem.h
├── Tracker.h
├── Tracker.cpp
├── main.cpp
├── problems.txt
└── README.md
```

---

# How to Run

## Console Version

Compile and run:

```bash
g++ main.cpp Tracker.cpp -o tracker
./tracker
```

---

## Frontend Version

Open:

```text
Frontend/index.html
```

or run using VS Code Live Server.

---

# Screenshots

## Dashboard

Add dashboard screenshot here.

Example:

```md
![Dashboard](screenshots/dashboard.png)
```

---

## Difficulty Analytics

Add analytics screenshot here.

Example:

```md
![Analytics](screenshots/analytics.png)
```

---

## Contest Tracker

Add contest tracker screenshot here.

Example:

```md
![Contest Tracker](screenshots/contest.png)
```

---

# Future Improvements

Possible enhancements:

- Search Problems
- Edit Existing Problems
- Dark Mode
- Authentication System
- Database Integration
- LeetCode API Integration
- Monthly Progress Reports
- Streak Tracking
- Topic-wise Analytics

---

# Learning Outcomes

Through this project I gained hands-on experience with:

- Object-Oriented Programming
- Class Design
- File Handling
- Frontend Development
- JavaScript DOM Manipulation
- Local Storage
- Data Visualization
- Git & GitHub Workflow
- Project Structuring

---

# Author

**Adya Agarwal**

GitHub: https://github.com/adyaagarwal12

---

If you found this project interesting, feel free to star the repository.
