import "./index.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="social-medias">
        <a
          href="https://github.com/phuongnam7899"
          target="_blank"
          rel="noreferrer"
          className="media-item"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ph%C6%B0%C6%A1ng-nam-nguy%E1%BB%85n-96740317b"
          rel="noreferrer"
          target="_blank"
          className="media-item"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/namkhonglanman/"
          rel="noreferrer"
          target="_blank"
          className="media-item"
        >
          <i className="fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="copyright">
        <i className="far fa-copyright"></i> 2022 nklm{" "}
        <span className="version">v1.2.0</span>
      </div>
    </footer>
  );
};
