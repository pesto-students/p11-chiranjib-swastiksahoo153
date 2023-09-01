// import OpenAI from "openai";
// import axios from "axios";

// const OPENAI_API_KEY = "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";

// const openai = new OpenAI({
//   apiKey: OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// async function GiftRecommendationFetcher(age, gender, hobbies) {
//   try {
//     const chatCompletion = await openai.chat.completions.create({
//       messages: [{ role: "user", content: "Say this is a test" }],
//       model: "gpt-3.5-turbo",
//     });
//     return { result: chatCompletion };
//   } catch (error) {
//     return error;
//   }
// }

// const GiftRecommendationFetcher = async () => {
//   const response = await axios.post(
//     "https://api.openai.com/v1/completions",
//     {
//       prompt: `Hi`,
//       model: "text-davinci-003",
//       max_tokens: 50,
//       n: 1,
//       stop: ".",
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${OPENAI_API_KEY}`,
//       },
//     }
//   );

//   return response.data.choices[0].text;
// };

async function GiftRecommendationFetcher(age, gender, hobbies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = ["Basketball", "Football", "Guitar", "Flute"];
      resolve(result);
    }, 5000);
  });
}

export default GiftRecommendationFetcher;
