// Check if Device uses dark mode as default
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Dark Mode Icon
const darkModeSvg = `
<span class="sr-only">Dark Mode</span>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="currentColor">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>`;

// Light Mode Icon
const lightModeSvg = `
<span class="sr-only">Light Mode</span>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1"
  stroke-linecap="round"
  stroke-linejoin="round">
  <circle cx="12" cy="12" r="5" />
  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
</svg>
`;

// On The Document loading completely, it ensures the website uses dark mode if the system's default theme is Dark Mode
document.addEventListener("DOMContentLoaded", () => {
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  }
});

// Targets the Theme toggler Element
const themeToggler = document.querySelector(".theme-toggle");

// Ensures the Theme toggler uses the dark mode icon when the system's default theme is Dark Mode
if (isDarkMode && themeToggler) {
  themeToggler.innerHTML = lightModeSvg;
}

if (themeToggler) {
  themeToggler.addEventListener("click", () => {
    // Checks if the current mode is dark and switches to light mode on change or vice-versa.
    if (document.documentElement.classList.contains("dark")) {
      themeToggler.innerHTML = darkModeSvg;
    } else {
      themeToggler.innerHTML = lightModeSvg;
    }

    document.documentElement.classList.toggle("dark");
  });
}

// Targets the Profile Image Element
const profileImage = document.querySelector(".profile-image");

if (profileImage) {
  // On Clicking the Profile Image, it should open a new tab displaying the full picture
  profileImage.addEventListener("click", () => {
    window.open(`${window.location.origin}/alu-photo.jpeg`);
  });
}

// This is a list of Experiences
const experiences = [
  {
    company: "Topship Africa",
    role: "Software Engineer",
    location: "Lagos, Nigeria",
    timeFrame: "Apr 2022 - Present",
    tags: ["Full Stack", "Backend Heavy"],
    bullets: [
      `Successfully advanced from a junior frontend engineer to a Full Stack role, managing both backend
and frontend tasks.`,
      `Pioneered the conception and execution of cutting-edge Global Shipping Software, leading to a
remarkable 30% surge in shipment booking adoption.`,
      `Led the development of critical features, including the shipment booking flow, multiple shipment
booking flow, and logistics service provider flow, resulting in a 30% improvement in overall process
efficiency.`,
      `Resolved complex issues, such as integrating with SOAP APIs and creating complex algorithms for
generating postal codes for our API partners, leading to a 20% reduction in errors.`,
      `Continuously engineer and refine systems to seamlessly manage Weight discrepancy fees, delivering
a seamless shipping experience for customers who shop from international stores. Achieved an
outstanding 50% reduction in ongoing customer- reported issues related to technical issues in the
past year.`,
    ],
    link: "https://www.linkedin.com/company/topshipafrica/",
  },
  {
    company: "Keza Africa",
    role: "Head of Engineering",
    location: "Lagos, Nigeria",
    timeFrame: "Aug 2022 - May 2023",
    tags: ["Full Stack", "Team Lead"],
    bullets: [
      `Spearheaded the growth of Keza Africa’s engineering department, driving innovation and efficiency
in making smartphones easily accessible and affordable across Africa.`,
      `Orchestrated the development and implementation of Keza’s V2, simplifying the process of
purchasing smartphones and enabling customers to pay in installments, resulting in a significant
increase in smartphone accessibility.`,
      `Directed the engineering team in creating a streamlined and user-friendly smartphone purchasing
experience, ensuring that customers can pay for their desired phones seamlessly through our
complex integrations.`,
      `Enhanced the performance of the engineering team by addressing weaknesses and leveraging their
strengths to successfully develop Keza's v2.`,
    ],
    link: "https://www.linkedin.com/company/kezaafrica/",
  },
  {
    company: "Keza Africa",
    role: "Founding Engineer",
    location: "Lagos, Nigeria",
    timeFrame: "Jan 2022 - Aug 2022",
    tags: ["Full Stack", "Beginner's Luck"],
    bullets: [
      `Developed the Minimum Viable Product (MVP) within the agreed three-month timeframe, exceeding
expectations, and attracting significant user engagement and prompting funding.`,
      `Implemented Agile methodologies, resulting in a 30% increase in project delivery efficiency.`,
      `Spearheaded initiatives to optimize codebase, leading to a 20% reduction in software bugs.`,
      `Collaborated with stakeholders to define technical requirements, ensuring alignment with business
objectives.`,
    ],
    link: "https://www.linkedin.com/company/kezaafrica/",
  },
  {
    company: "Zeddpay",
    role: "Frontend Engineer",
    location: "Lagos, Nigeria",
    timeFrame: "Oct 2021 - Apr 2022",
    tags: ["Frontend", "Frontend Logic"],
    bullets: [
      `Part of the team that built the first public beta, a web app, which gained over 1,000 users on launch.`,
      `Responsible for front-end logic, functionality, state management, and user flows, ensuring a
seamless and intuitive user experience.`,
      `Implemented performance optimizations, resulting in a 25% reduction in page load times`,
    ],
    link: "https://www.linkedin.com/company/zeddpay/",
  },
];

// Targets the experience list element
const experienceList = document.querySelector(".experiences");

if (experienceList) {
  // Each Experience is added into the experience list element, each experience comes in as an element with it's up-to-date content!
  experiences.forEach(experience => {
    experienceList.insertAdjacentHTML(
      "beforeend",
      `<div class="experience-card">
          <div class="experience-header">
            <div>
              <div class="experience-company">${experience.company}</div>
              <div class="experience-title">${experience.role}</div>
              <div class="experience-location">${experience.location}</div>
            </div>
            <div class="experience-date">${experience.timeFrame}</div>
          </div>
          <div class="experience-details">
            <div class="experience-highlights">
            ${experience.tags
              .map(tag => `<span class="highlight">${tag}</span>`)
              .join("")}
            </div>
            <ul>
            ${experience.bullets.map(bullet => `<li>${bullet}</li>`).join("")}
            </ul>
            <div class="experience-links">
              <a href="${experience.link}">View Company</a>
            </div>
          </div>
        </div>`
    );
  });
}

// Targets all elements with the class name `.experience-header`
const experienceHeaders = document.querySelectorAll(".experience-header");

// Targets all elements with the class name `.experience-details`
const experienceDetailItems = document.querySelectorAll(".experience-details");

if (experienceHeaders && experienceDetailItems) {
  experienceHeaders.forEach(header => {
    header.addEventListener("click", () => {
      // The next element sibiling is the experience-details element.
      const details = header.nextElementSibling;

      // Checks if the sibilng is active
      const isActive = details.classList.contains("active");

      // This closes all currently open experience detail elements
      experienceDetailItems.forEach(detail => {
        return detail.classList.remove("active");
      });

      // This opens the clicked experience in case it wasn't already open
      if (!isActive) {
        details.classList.add("active");
      }
    });
  });
}

// This is a list of schools attended by me.
const schools = [
  {
    company: "African Leadership University",
    role: "Bsc, Software Engineering",
    location: "Kigali, Rwanda",
    timeFrame: "May 2024 - Present",
  },
  {
    company: "Golden Foremost College",
    role: "High School, Science",
    location: "Lagos, Nigeria",
    timeFrame: "Oct 2014 - Dec 2020",
  },
];

// Targets the Education section
const education = document.querySelector(".education");

if (education) {
  // This is a for each array method that goes through each school object in the schools array and inserts a HTML design including the school's information.
  schools.forEach(school => {
    education.insertAdjacentHTML(
      "beforeend",
      `<div class="experience-card">
          <div class="experience-header">
            <div>
              <div class="experience-company">${school.company}</div>
              <div class="experience-title">${school.role}</div>
              <div class="experience-location">${school.location}</div>
            </div>
            <div class="experience-date">${school.timeFrame}</div>
          </div>
        </div>`
    );
  });
}

// This is a list of my skills, copied from my actual Resume file and was to lazt to split in an array. 🌚
const skills = `React.js | MongoDB | Express.js | Node.js | Next.js | GraphQL | Nest.js | TypeScript | Python | Go |
WordPress | React Native | PostgreSQL | Data Structures & Algorithms | Git | GitHub | Postman |
Firebase | Docker | SQL | JIRA | Bootstrap | JavaScript | CSS (Cascading Style Sheets) | HTML |
Storybook | Search Engine Optimization (SEO) | Team Management | Project Management |
Adaptability | Problem solving | Communication and Innovation.`;

// Targets the skills grid area
const skillGrid = document.querySelector(".skills-grid");

if (skillGrid) {
  // Because skills is a string and not an array, it is first converted to an array by splitting into based on the separator in the text.
  // It then goes through a for each loop which populates the skill grid area.
  skills.split("|").forEach(skill => {
    skillGrid.insertAdjacentHTML(
      "beforeend",
      `<div class="skill-card">
          <div>${skill.trim()}</div>
          <div class="skill-level">
            <div class="skill-level-fill" style="transform: scaleX(1)"></div>
          </div>
        </div>`
    );
  });
}

// This is an intersection observer repsonsible for delaying element movements until it is displayed in the screen by the user.
// It will be used to animate the skill bars as the user scrolls down the page
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      // Checks when the entry is now in view of the user
      if (entry.isIntersecting) {
        // It sets the scale X (Horizontal growth) factor of the element to 1, a smooth transition is expected!
        entry.target.style.transform = "scaleX(1)";
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// Targets all elements with the class name `.skill-level-fill`
const skillLevels = document.querySelectorAll(".skill-level-fill");

if (skillLevels) {
  skillLevels.forEach(level => {
    // On each level, the scale X factor of the level is set to zero, waiting to be observed by the screen
    level.style.transform = "scaleX(0)";

    // The Level is added to the intersection observer
    observer.observe(level);
  });
}
