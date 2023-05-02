import { collection, query, where, getDocs } from "firebase/firestore";
import { firebaseFirestore } from "../firebase";

const firestoreCollections = {
  lateMessages: "lateMessages",
};

export class LateMessages {
  constructor({ content, month, year, date, time, owner }) {
    this.content = content;
    this.createdAt = createdAt;
    this.owner = owner;
    this.month = month;
    this.year = year;
    this.date = date;
    this.time = time;
  }
}

// async function fetchMessagesByMonth(month) {
//   const articleQuery = query(
//     collection(firebaseFirestore, firestoreCollections.articles),
//     where("month", "==", month)
//   );
//   const querySnapshot = await getDocs(articleQuery);

//   const fetchedData = [];
//   querySnapshot.forEach((doc) => {
//     fetchedData.push({
//       id: doc.id,
//       ...doc.data(),
//     });
//   });

//   const foundArticle = fetchedData[0];
//   return foundArticle ? new FirestoreArticle(foundArticle) : undefined;
// }
