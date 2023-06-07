import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import dayjs from "dayjs";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firebaseFirestore } from "src/firebase";
import _ from "lodash";
import { log } from "@craco/craco/lib/logger";

const Calendar = ({ noUser }) => {
  // Initialize state with current date
  const [date, setDate] = useState(new Date());
  const [allMessages, setAllMessages] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [messagesToShow, setMessagesToShow] = useState([]);

  useEffect(() => {
    const selectedDate = dayjs(date);
    const now = dayjs();
    const currentUser = localStorage.getItem("lateMessageUser") || "V";
    const messagesInMonth = _.filter(allMessages, (item) => {
      const isPreviousMonth = now.month() > item.month;
      console.log(now.month());
      console.log(item.month);

      const canSee = noUser
        ? isPreviousMonth
        : isPreviousMonth || item.owner === currentUser;
      return (
        item.year === selectedDate.year() &&
        item.month === selectedDate.month() &&
        canSee
      );
    });
    const sortedMessages = _.orderBy(
      messagesInMonth,
      ["date", "time"],
      ["asc", "asc"]
    );

    setMessagesToShow(sortedMessages);
  }, [allMessages, date]);
  const inputRef = useRef();
  const addComment = async (commentContent) => {
    const now = dayjs();
    const collectionRef = collection(firebaseFirestore, "lateMessages");
    addDoc(collectionRef, {
      content: commentContent,
      owner: localStorage.getItem("lateMessageUser") || "V",
      date: now.date(),
      month: now.month(),
      year: now.year(),
      time: now.format("HH:mm"),
    });
  };
  const handleClickAddComment = () => {
    if (commentContent) {
      const now = dayjs();

      addComment(commentContent);
      setAllMessages([
        ...allMessages,
        {
          content: commentContent,
          owner: localStorage.getItem("lateMessageUser") || "V",
          date: now.date(),
          month: now.month(),
          year: now.year(),
          time: now.format("HH:mm"),
        },
      ]);
      setCommentContent("");
      inputRef.current.innerText = "";
    }
  };

  const getAllDocuments = async (collectionName) => {
    const querySnapshot = await getDocs(
      collection(firebaseFirestore, collectionName)
    );
    const documents = querySnapshot.docs.map((doc) => doc.data());
    return documents;
  };

  const fetchMessages = async () => {
    const all = await getAllDocuments("lateMessages");
    setAllMessages(all);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Event handler for clicking "Previous" button
  const handlePrevious = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // Event handler for clicking "Next" button
  const handleNext = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // Create array of day names to display at the top of the calendar
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create array of weeks and days to display on the calendar
  const weeks = [];
  let currentWeek = [];
  let currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
  let daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // Fill in any leading days from previous month
  for (let i = 0; i < currentDate.getDay(); i++) {
    currentWeek.push(null);
  }

  // Fill in days for current month
  for (let i = 1; i <= daysInMonth; i++) {
    currentWeek.push(i);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Fill in any trailing days from next month
  if (currentWeek.length > 0) {
    for (let i = currentWeek.length; i < 7; i++) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  // Render the calendar UI
  return (
    <div className="calendar">
      <div className="header">
        <button className="previous" onClick={handlePrevious}>
          &lt;
        </button>
        <span className="month">
          {date.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
        <button className="next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="messages">
        {messagesToShow.map((item, index) => {
          return (
            <>
              {(index === 0 ||
                item.date !== messagesToShow[index - 1].date) && (
                <div className="date-divider">
                  <div className="text">
                    {item.date}/{item.month + 1}
                  </div>
                </div>
              )}
              <div
                className={`message ${
                  item.owner ===
                  (localStorage.getItem("lateMessageUser") || "V")
                    ? "me"
                    : "other"
                }`}
              >
                <div className="content">{item.content}</div>
                <div className="time">{item.time}</div>
              </div>
            </>
          );
        })}
      </div>
      <div className="add-comment">
        <div
          onInput={(e) => {
            setCommentContent(e.target.innerText);
          }}
          ref={inputRef}
          html={commentContent}
          contentEditable
          className="comment-input"
        />

        <button onClick={handleClickAddComment}>Send</button>
      </div>
    </div>
  );
};

export default Calendar;
