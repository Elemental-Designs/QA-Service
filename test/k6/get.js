import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  discardResponseBodies: true,
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  scenarios: {
    contacts: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '60s',
      preAllocatedVUs: 700,
      maxVUs: 2000,
    },
  },
};

export default function get() {
  const BASE_URL = 'http://localhost:3000';

  const responses = http.batch([
    ['GET', `${BASE_URL}/qa/questions/?product_id=1`, null, { tags: { name: 'getQuestions' } }],
    ['GET', `${BASE_URL}/qa/questions/3/answers`, null, { tags: { name: 'getAnswers' } }]
  ]);

  for (let i = 0; i < responses.length; i++) {
    check(responses[0], {'status was 200': (r) => r.status === 200});
  }

  sleep(1);
};