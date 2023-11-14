export const Footer = () => {
  const address = "https://github.com/KonradBauer";
  const name = "Konrad Bauer";
  const target = "_blank";
  const rel = "noopener noreferrer";
  const copyright = "Copyright © 2023 - All right reserved by";

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          {copyright}
          <a href={address} target={target} rel={rel}>
            <span className="font-semibold link-hover">{name}</span>
          </a>
        </p>
      </aside>
    </footer>
  );
};
