import { CommingSoon } from "@components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "src/context";
import { useBreakout, useLocalStorage } from "../../hooks";

import "./index.scss";
import Calendar from "./components/Messengers";

export const HomePage = () => {
  const { t } = useContext(AppContext);
  const [loggedInTimeLeft, setLoggedInTimeLeft] = useLocalStorage(
    "loggedInTimeLeft",
    0
  );
  const [wrong, setWrong] = useState(false);
  const [pass, setPass] = useState("");
  useEffect(() => {
    if (Number(loggedInTimeLeft) > 0)
      setLoggedInTimeLeft(Number(loggedInTimeLeft) - 1);
  }, []);
  if (!localStorage.getItem("lateMessageUser"))
    return (
      <div className="home-page">
        <div>This site is only for Vy & Nam , get out!</div>
      </div>
    );
  return (
    <div className="home-page">
      {Number(loggedInTimeLeft) <= 0 ? (
        <div className="login">
          <div>
            Prove u are{" "}
            {localStorage.getItem("lateMessageUser") === "N"
              ? "nklm 🦊"
              : "Irene 🦈"}
            :
          </div>
          <form
            className="form"
            onSubmit={() => {
              if (pass === localStorage.getItem("lateMessagePassword")) {
                setLoggedInTimeLeft(5);
              }
            }}
          >
            <input
              className="password-input"
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <button type="submit" className="submit-button">
              {" "}
              {">"}{" "}
            </button>
          </form>
          {wrong && <div>Hmm, are you sleeping, Irene?</div>}
          <div style={{ color: "#fff" }}>
            If somehow u find this message, just want you to know I love u
          </div>
        </div>
      ) : (
        <Calendar />
      )}
    </div>
  );
};
