export const Footer = () => {
  const address = "https://github.com/KonradBauer";
  const name = "Konrad Bauer";

  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <a href={address} target="_blank" rel="noopener noreferrer">
            <span className="font-semibold link-hover">{name}</span>
          </a>
        </p>
      </aside>
    </footer>
  );
};
