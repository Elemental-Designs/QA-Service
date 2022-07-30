// require("dotenv").config();
// const mongoose = require("mongoose");

// mongoose.connect(`mongodb://localhost:27017/${process.env.QA_MONGODB}`);

// const qaSchema = new mongoose.Schema(
//   {
//     product _id : unique,
//     question: [{
//       question_id : Integer,
//       questions_body: String,
//       question_date: date,
//       akser_name: String,
//       asker_email: String,
//       question helpfulness: Integer,
//       reported: boolean,
//       answers: [{
//         answer_id: Integer.
//         body: String,
//         answer_name: String,
//         answer_email: String,
//         helpfulness: Integer,
//         reported: Boolean
//         photos: [{
//           id: Integer,
//           url: String
//         }]
//       }]
//     }]
//   }
// );

// const qa = new mongoose.model('Product', qaSchema);

// module.exports = {qa};