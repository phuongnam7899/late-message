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
  const noUser =
    localStorage.getItem("lateMessageUser") !== "V" &&
    localStorage.getItem("lateMessageUser") !== "NN";
  return (
    <div className="home-page">
      <img
        src="https://lh3.googleusercontent.com/pw/AJFCJaWFhDR2hIuha-zZNniqUUm-3Y21xbppUPiMj1lrFAQ86PHGgN1ioALp7fJP5qpFZRW4Bd4FCpuoceK_uun1M8v-6O5N7N3tveos7BxS1K_30PXTy1yeg85k8qNdM9VCJ4injmccw2T_70gOZmbyLgI32w=w1774-h893-s-no"
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          width: "30px",
        }}
      />
      {!noUser && Number(loggedInTimeLeft) <= 0 ? (
        <div className="login">
          <div>
            Prove u are{" "}
            {localStorage.getItem("lateMessageUser") === "NN"
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
        <Calendar noUser={noUser} />
      )}
    </div>
  );
};
