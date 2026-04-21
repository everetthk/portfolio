const profile = {
  name: 'Everett Tsang',
  title: 'EVERETT',
  intro:
    'Hi there, thanks for visiting!',
  blurb:
    'I’m a backend software engineer and USC alum (Fight On! ✌🏻) with four years of experience at Badger Meter. I focus on building reliable, scalable systems that support impactful, customer-facing products. I’m especially interested in how thoughtful engineering can enable more meaningful and human-centered interactions within technology. In my current role, I work on improving development processes and delivering robust solutions that create real value for users. Outside of work, you’ll find me climbing at gyms around San Francisco, recording music, or listening to Switched On Pop. I recently earned my lead certification in belay and climbing 🧗‍♂️ Feel free to reach out if you’d like to connect—whether it’s about emerging technologies, music trends, or swapping recommendations for great climbing spots. Cheers! 🚀',
  availability: 'AAA',
};

const featuredProjects = [
  {
    name: 'This Site',
    category: 'Portfolio',
    description:
      'A dashboard concept for turning scattered notes and tasks into a single weekly planning ritual.',
    stack: ['React', 'Vite', 'JSX'],
    href: '#',
  }
  // ,
  // {
  //   name: 'Signal Studio',
  //   category: 'Design System',
  //   description:
  //     'A reusable UI kit focused on bold editorial layouts, rich surfaces, and motion that feels intentional.',
  //   stack: ['React', 'Storybook', 'CSS'],
  //   href: '#',
  // },
  // {
  //   name: 'Field Notes',
  //   category: 'Content Platform',
  //   description:
  //     'A lightweight writing site for essays, project retrospectives, and experiments that deserve more context.',
  //   stack: ['Vite', 'MDX', 'Netlify'],
  //   href: '#',
  // },
];
const featureProjectsLen = featuredProjects.length;

const links = [
  { label: 'GitHub', value: '@everetthk', href: 'https://github.com/everetthk' },
  { label: 'LinkedIn', value: 'Your profile', href: 'https://www.linkedin.com/in/everett-tsang123' },
  { label: 'Email', value: 'everetthk@gmail.com', href: 'mailto:everetthk@gmail.com' },
  { label: 'Resume', value: 'Add your PDF', href: '#' },
];

const nowItems = [
  'Building out a personal corner of the internet that feels more like a studio than a resume.',
  'Turning project writeups into short, visual case studies with enough detail to show how you think.',
  'Experimenting with smooth, editorial-inspired interfaces that still load fast on mobile.',
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="site-parallax" aria-hidden="true">
        <img src="/images/closertothesun.jpg" alt="" className="parallax-bg parallax-back" />
      </div>
      <div className="page-noise" />

      <header className="hero">
        <nav className="topbar">
          <p className="brand">{profile.name}</p>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#now">Now</a>
            <a href="#links">Links</a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Personal site starter</p>
            <h1>{profile.title}</h1>
            <p className="hero-intro">{profile.intro}</p>
            <p className="hero-blurb">{profile.blurb}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects
              </a>
              <a className="button button-secondary" href="#links">
                Add your links
              </a>
            </div>
          </section>

          <aside className="hero-panel">
            <p className="panel-label">Quick profile</p>
            <h2>{profile.name}</h2>
            <p>{profile.availability}</p>

            <div className="stats-grid">
              <article>
                <strong>{featureProjectsLen<10? `0${featureProjectsLen}` : featureProjectsLen}</strong>
                <span>Starter projects</span>
              </article>
              <article>
                <strong>01</strong>
                <span>Custom homepage</span>
              </article>
              <article>
                <strong>∞</strong>
                <span>Ways to personalize it</span>
              </article>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="projects">
          <SectionHeading
            eyebrow="Featured work"
            title="Start with projects that tell a story"
            copy="Use these cards for portfolio highlights, product experiments, client work, or anything else you want people to explore first."
          />

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.name}>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={project.href}>Project link</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="now">
          <div className="now-panel">
            <SectionHeading
              eyebrow="Current focus"
              title="Share what you are exploring right now"
              copy="A now page style section makes the site feel active, personal, and easier to update than a full case study."
            />

            <div className="now-list">
              {nowItems.map((item) => (
                <article className="now-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="quote-panel">
            <p className="panel-label">Why this starter exists</p>
            <blockquote>
              A personal site should feel like an invitation into your work, not a generic landing page with your name pasted on top.
            </blockquote>
          </aside>
        </section>

        <section className="section" id="links">
          <SectionHeading
            eyebrow="Contact points"
            title="Give visitors a simple path to reach you"
            copy="Keep the important links in one place so people can move from curiosity to contact without friction."
          />

          <div className="links-list">
            {links.map((link) => (
              <a className="link-row" href={link.href} key={link.label}>
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
