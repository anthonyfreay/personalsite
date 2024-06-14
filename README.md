# personalSite 📸

Personal portfolio website to showcase frontend skillset and photography. This portfolio website is image-focused.

## Table of Contents 📖 <!-- omit in toc -->
- [personalSite 📸](#personalsite-)
  - [Usage 🫡](#usage-)
    - [Live Demo 🖥️](#live-demo-️)
    - [Navigation 📍](#navigation-)
    - [Work Portfolio 💼](#work-portfolio-)
    - [Contact 📧](#contact-)
  - [Technologies Used 🧑🏽‍💻](#technologies-used-)
  - [Installation 🛠️](#installation-️)
  - [Build 🧱](#build-)
  - [Deployment 🚚](#deployment-)
    - [Local Deployment 📦](#local-deployment-)
    - [Production Deployment 🚀](#production-deployment-)
      - [Pre-requisite](#pre-requisite)
  - [Project Structure 🩻](#project-structure-)
  - [Contributing 👨🏽‍🤝‍👨🏾](#contributing-)
  - [Credits 👏🏼](#credits-)
    - [Core Dependencies](#core-dependencies)
    - [Development Dependencies](#development-dependencies)
  - [License 👩🏽‍⚖️](#license-️)


## Usage 🫡

### Live Demo 🖥️
View the deployed portfolio website at https://anthonyfreay.com.

### Navigation 📍

The landing page offers social media links, resume, and buttons to access work and contact sections.
    
A top navigation bar provides access to `Home`, `Work`, `Prints` (external), and `Contact`.
    
A secondary navigation bar appears on the Work page and gallery pages displaying specific photo galleries and Contact.

### Work Portfolio 💼

The `/work` page showcases your photography categorized by style (`Live`, `People`, `Events`, etc.).
    
Within the individual galleries, lower-resolution thumbnails link to high-resolution lightbox versions.
    
Lightbox navigation allows you to browse pictures and exit using the `"x"` button or clicking the background.

### Contact 📧

Displays profile picture, brief bio, and a professional contact form.

## Technologies Used 🧑🏽‍💻

- ReactJS
- HTML
- CSS
- GH-Pages via npm

## Installation 🛠️

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Build 🧱

Build a production version of 

## Deployment 🚚

### Local Deployment 📦

Run `npm start` to start the development server. This opens your React app in the browser (http://localhost:3000) with hot reloading and error messages in the console.

### Production Deployment 🚀

Deploy your React app to GitHub Pages using `npm run deploy`. This script builds your app and pushes the contents of the build directory to GitHub Pages.

#### Pre-requisite

Ensure you have the gh-pages package installed (`npm install gh-pages`).

## Project Structure 🩻

Describe the structure of your project, including the directory layout and organization of files.

````
public/
├── apparel/
├── bw/
├── cars/
├── covers/
├── events/
├── favicon_io/
├── live/
├── me/
├── people/
├── places/
├── posters/
├── 404.html
├── anthony_freay_resume.pdf
├── favicon.ico
├── index.html
└── robots.txt

src/
├── Components/
│   ├── Pages/
│   │   ├── Apparel/
│   │   ├── BlackWhite/
│   │   ├── Cars/
│   │   ├── Contact/
│   │   ├── Events/
│   │   ├── Home/
│   │   ├── People/
│   │   ├── Places/
│   │   ├── Posters/
│   │   ├── Resume/
│   │   └── Work/
│   ├── Util/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Icons/
│   │   ├── ImageGallery/
│   │   ├── Lightbox/
│   │   ├── MasonryImageGallery/
│   │   ├── Navbar/
│   │   └── PageHeader/
├── App.css
├── App.jsx
├── index.css
├── index.js
├── README.md
├── .gitignore
├── package.json
└── package-lock.json


````

## Contributing 👨🏽‍🤝‍👨🏾

If you'd like to contribute to this project, please follow these guidelines.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## Credits 👏🏼

This project uses the following third-party libraries:

### Core Dependencies

- **@formspree/react**: ^2.5.1
- **@testing-library/jest-dom**: ^5.17.0
- **@testing-library/react**: ^13.4.0
- **@testing-library/user-event**: ^13.5.0
- **bootstrap**: ^5.3.2
- **react**: ^18.2.0
- **react-bootstrap**: ^2.9.1
- **react-dom**: ^18.2.0
- **react-ga4**: ^2.1.0
- **react-helmet-async**: ^2.0.5
- **react-icons**: ^4.12.0
- **react-lazy-load-image-component**: ^1.6.0
- **react-masonry-css**: ^1.0.16
- **react-router-dom**: ^6.20.1
- **react-scripts**: ^5.0.1
- **web-vitals**: ^2.1.4
- **yet-another-react-lightbox**: ^3.15.6

### Development Dependencies

- **@babel/plugin-proposal-private-property-in-object**: ^7.21.11
- **gh-pages**: ^6.1.1


## License 👩🏽‍⚖️

This project's source code is licensed under the [MIT License](LICENSE). 

However, all photographic assets, including images in the `public/` directory and any other visual media contained within the project, are copyrighted and may not be used without explicit permission.