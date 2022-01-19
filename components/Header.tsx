import clsx from "clsx";

export const Header = () => {
  return (
    <header className={clsx('flex', 'flex-col', 'gap-1')}>
      <h1>Kieran Allen</h1>
      <h2>Frontend Developer</h2>
      <h3>London, United Kingdom</h3>
      <nav>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kieran-allen"
        >
          GitHub
        </a>
        <span> / </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kieran-allen-96655559/"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
};
