export async function fetchWorkoutPlanHelper(filePath) {
  try {
    const data = await fetch(filePath);
    // const data = await fetch(
    //   "https://mocki.io/v1/ba99f198-a5e7-4ac5-a0ae-563e7992b35b"
    // );
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
}

// (async () => {
//   try {
//     const result = await fetchWorkoutPlanHelper("./src/mocks/workoutPlan.json");
//     console.log("JSON data:", result);
//   } catch (err) {
//     console.error("Error reading file:", err);
//   }
// })();

// fetchWorkoutPlanHelper("./src/mocks/workoutPlan.json")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
