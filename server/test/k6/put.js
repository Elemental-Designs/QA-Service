import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1 },
    { duration: '30s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 1000 }
  ]
};

export default function get() {
  const BASE_URL = 'http://localhost:3000';

  const responses = http.batch([
    ['GET', `${BASE_URL}/qa/questions`, null, { tags: { name: 'GetQuestions' } }],
    ['GET', `${BASE_URL}/qa/questions/1/answers`, null, { tags: { name: 'GetAnswers' } }]
  ]);

  check(res, {'status was 200': (r) => r.status === 200});
  sleep(1);
};