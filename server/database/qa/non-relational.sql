{
  product _id : unique,
  question: [{
    question_id : Integer,
    questions_body: String,
    question_date: date,
    akser_name: String,
    asker_email: String,
    question helpfulness: Integer,
    reported: boolean,
    answers: [{
      answer_id: Integer.
      body: String,
      answer_name: String,
      answer_email: String,
      helpfulness: Integer,
      reported: Boolean
      photos: [{
        id: Integer,
        url: String
      }]
    }]
  }]
}