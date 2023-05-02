export const CommingSoon = ({ customMessage }) => {
  return (
    <div>
      <div className="not-found">
        <img src="https://c.tenor.com/XYidKqUdCeMAAAAM/dog-running.gif" />
        <div className="message">{customMessage || "Comming soon..."}</div>
      </div>
    </div>
  );
};
