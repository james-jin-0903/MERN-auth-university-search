import axios from "axios";

// send news letter
export const sendNewsletters = (payload, history) => {
  axios
    .post("/api/newsletters/add", payload)
    .then(res => {
      history.push("/dashboard");
    })
    .catch(err => {
      history.push("/dashboard");
    });
};
