import "./index.scss";

const VerticleTineLineItem = ({ time, title, content, place, image }) => {
  return (
    <div className="item">
      <img
        src={
          image ||
          "https://upload.wikimedia.org/wikipedia/vi/5/5f/Original_Doge_meme.jpg"
        }
      />
      <div className="dot"></div>
      <div className="description">
        <div className="time">{time}</div>
        <div className="place">{place}</div>
        <div className="title">{title}</div>
        {content.map((item) => (
          <li className="content"> {item}</li>
        ))}
      </div>
    </div>
  );
};

const events = [
  {
    time: "07/08/1999",
    content: [
      "Named as my head direction when borned",
      "Only lived with parent for ~5 years",
      "Quite good at Math and English, won some small prizes, but do not find learning Math fun at all",
      "Rarely talked to any friends, teachers or even family menbers. Enjoyed being alone",
    ],
    title: "Join the amazing world unconsciously",
    place: "Doan Hung Town, Phu Tho",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHuBS7AWtrXF1fBx51C5FlJQ-4x__lqIgi5ugg59cp2sZuzD5_vwhV4fMvAHV_ZUDJXs&usqp=CAU",
  },
  {
    time: "2011",
    place: "Vinh Yen City, Vinh Phuc",
    title: "Relocate to live with uncle and aunt",
    content: [
      "Same life as the previous episode, only change the characters names and faces",
    ],
    image:
      "https://media.makeameme.org/created/repeat-repeat-repeat-5984a6.jpg",
  },
  {
    time: "2013",
    place: "Odessa, Ukraine",
    title: "Relocate to  live with parent",
    content: [
      "Spent 2 month to learn the basic of language, then other 4 month to live with the an indigenous family to learn the communication skill and start go to school",
      "Totally impressed by the teaching style here, few boring theory, many experiment and praticing sessions",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8B_t4b83I5EupOE8-fTfu3KRRaX_-DQ-6dljenQdZCWuvtkCCb0SyP5IPoVLO_pWWhgkgodPgwLj0GnJTej5IQwfNZRH326VY-q8lfh64dAzw8BopHtMMCHHzcDdNe457jkoZSx0IzgDEDOD7ctFnqIpQ=w1195-h893-no?authuser=0",
  },
  {
    time: "2014",
    place: "Vinh Yen City, Vinh Phuc",
    title: "Back to Vietnam with father",
    content: ["Same passive life"],
    image: "https://media.makeameme.org/created/oh-no-not-6bc4c7.jpg",
  },
  {
    time: "2015",
    place: "Hanoi",
    title: "Some significant changes in life",
    content: [
      "A huge family incident",
      "The most meaningful things at this stage was getting some good friends",
      "Approached to books and they became my cups of tea",
      "Registered to some programming courses because of the interest in create helpful things",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8DP_W-vX1SXNV0lZwj5o4FVZqV9QbWbC_6fCUugayhK5Z2vdeKfvR168Xm8dFFXtsUdLJdOOfETtlph6sVvY_3lmWwKjYn3xZNvBMvJdbWDUvaNlKMmtN96gJUS6z279F0dBR9RionX5mhxdfxIIf3hwA=w1024-h683-no?authuser=0",
  },
  {
    time: "2019",
    place: "Hanoi",
    title: "Start the college student life",
    content: [
      "Seperated from parent to live in the campus (although my house is not too far from it)",
      "Got some new friends",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Ai579b2LPwflWrg9_Jn1Jau10dcIwsbnlojc0tU_7vT-lgKzRvPNnZbmu5BP2XKsoKFAiVTWL_Km8eJrvgE1w0Q08nEpYtLe3dm_RimCS_6NYOzwUJz_8v7c0omnXCzreBwXQcp0WsRtSyYioR37SeDw=w753-h893-no?authuser=0",
  },
  {
    time: "7/2019",
    place: "Hanoi",
    title: "Start getting back the tuition fees",
    content: [
      "Got the first freelance job as a mentor in a coding boocamp for children",
      "Got 2 part-time jobs: as a mentor (and then teacher) in programming classes; and member of R&D team to develop the curriculum for programming courses",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8ATI6z5d9JDpAL87nFiIN1cMgbkPsKUzwBBZhbNlraP7Wt0GFpU8XlCoKJMJEJM4NMW_tAW4rHDpY4svrJUzOSeWVN9XBVoletMBzNKGKFDScIjX3nDbsiA1dEawA9eNVUGP5egtYEgYn_yz0_1PexL-Q=w950-h893-no?authuser=0",
  },
  {
    time: "12/2019",
    place: "Hanoi",
    title: "Join the first club in the university",
    content: [
      "It was also the first generation of that club, need to build everything from scratch",
      "Getting more friends and also first love",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8COpKoukIQHra7wf7Z3olBlz4vOdCb_Fiiw4gYHdyyuCHWMcD5OK5d2tRoCImM3Aik1h6diqOib80VIDFcgh4wtN29lK0ep6HdIjuTyTIqtr7XSoyPK777Z4P5UGTAvjhLgQgl6KexWDJG66xyiOiiIbw=w960-h706-no?authuser=0",
  },
  {
    time: "12/2019",
    place: "Hanoi",
    title: "Keep forcing myself talking with more people",
    content: ["Took a course on Business English, got some new friends"],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Cn0dLK55asFhU8eQpBjXofkhrsRQ4eknWfaET_G87ZSuBuEZvc2p4AXRzdpjhKGXATTEVfLPUajP7VS9xQXhDyPRLX_37LSogc9fT7DouxNFIc01AMRXDdLpMk9YAVLy8s1kWRT0_5bmZpoo8InIUMkg=s893-no?authuser=0",
  },
  {
    time: "2020",
    place: "Hanoi",
    title: "Made biggest decision of this age",
    content: [
      "Dropped out of university because realized the career that want to follow: a product manager",
      "Rented a flat to live alone",
      "Start with position that I can do best that time - a developer, then make some slowly transition: UI/UX designer, then fresher Product Owner. Each step come closer to the goal",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Bcwq8eD8e5EM55ceFjj37cYhgK-8EWaAaHkHJ7c9Xf0ocgDSAOZU1fhUQLG2y4LrGzY1Gr099KtiSsRuvQs4Bp4KroldBMYwC25jxWO8WUFp5RezbT1AEfSL3P-yOb0TlhbVZjImJQZPPO2z0jyXe2CQ=w1588-h893-no?authuser=0",
  },
  {
    time: "5/2022",
    place: "Hanoi",
    title: "Quit old job to start new one",
    content: [
      "For personal reason, need to quit the company from which I learned the most to back to be a developer",
      "Developed new skill of automation testing",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8AU3Hc7dcUQCV_hRlRxXghBX38iueFryEbcWvAmadxJxH0-nPSO9PiZjKrsm65ouVZR5LSrKrW7WXUQOfLEomLXar3elBXlL-HrdjjPV0bU24mA5PZAFObAJSUkB-zSrsgOaKhVaygAtSRb96MLrO3wLw=w898-h893-no?authuser=0",
  },
  {
    time: "1/2023",
    place: "Ho Chi Minh City",
    title: "Brand new adventure",
    content: [
      "Luckily have change for a Product Management Trainee",
      "First time to be in a environment that full of excellent individuals",
      "First time to work in a product that serves millions of people",
    ],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8AcLfLEJO4uUgTZruUDfAOnWzudU6fNjIfOqCywWX-MbvJ8H11uM2vpC23oQtRMKgNjjBIgKh7nc_czII3aG2nfWgnJ_acRN9m_G_DHSMYTlygXgm-rTkxgQsEG0-GMjbAGbtlfqI55dRUMBPXJfk8ARw=w1099-h893-no?authuser=0",
  },
  {
    time: "At some point in the future",
    place: "Somewhere in the universe",
    title: "Something will happen",
    content: [],
    image:
      "https://lh3.googleusercontent.com/pw/AMWts8Am4J7x0tIgPo740MvvDu-vQcbVDH7WXP5av6Q8W6D7jIB_irgysVEyF6SJQPCWIRH2JjAX1_msYlENEt2S8Li4SiB7N1uDkhvA6sfyZqgZFXh5Qmevgl3uIWZPfzQOKB9M8qK37vVSn-RdB-_v7s45-Q=s620-no?authuser=0",
  },
];

export const VerticleTineLine = (props) => {
  return (
    <div className="verticle-time-line-container">
      <div className="line-layer"></div>
      <div className="items-layer">
        {events.map((event) => (
          <VerticleTineLineItem {...event} />
        ))}
      </div>
    </div>
  );
};
