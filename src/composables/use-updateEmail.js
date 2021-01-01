import axios from "axios";

let useUpdateEmail = email => {
  axios.put(`http://localhost:3000/emails/${email.id}`, email);
};

export default useUpdateEmail;
