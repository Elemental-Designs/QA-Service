import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 1 },
    // { duration: '30s', target: 10 },
    // { duration: '30s', target: 100 },
    // { duration: '30s', target: 1000 }
  ]
};
// error rate should be < 1% or 0%
// latency measured by duration --- less than 50ms

// create index nameit on tablename using hash (coulmn name)
CREATE INDEX idx_photos_id ON photos(id);

export default function get() {
  const BASE_URL = 'http://localhost:3000';

  const responses = http.batch([
    ['PUT', `${BASE_URL}/qa/questions`, null, { tags: { name: 'GetQuestions' } }],
    ['PUT', `${BASE_URL}/qa/questions/1/answers`, null, { tags: { name: 'GetAnswers' } }]
  ]);

  check(response, {'status was 200': (r) => r.status === 204});
  sleep(1);
};