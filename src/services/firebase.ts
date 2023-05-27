// import { initializeApp, getFirestore } from 'firebase/app';

// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);

export async function saveProgress(userId: number, progress: string) {
  // const database = getFirestore(app);
  // database
  //   .ref(`users/${userId}`)
  //   .set({
  //     progress,
  //   })
  //   .then(() => {
  //     console.log("Data was successfully written to the database.")
  //   })
  //   .catch((error) => {
  //     console.log("Error writing data to the database: " + error)
  //   })
}

export async function readProgress(userId: number) {
  // const database = firebase.database()
  // database
  //   .ref(`users/${userId}`)
  //   .once("value")
  //   .then((snapshot) => {
  //     const data = snapshot.val()
  //     console.log("Data read from the database:", data)
  //   })
  //   .catch((error) => {
  //     console.log("Error reading data from the database: " + error)
  //   })
}
