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
      duration: '90s',
      preAllocatedVUs: 700,
      maxVUs: 2000,
    },
  },
};

export default function get() {
  const BASE_URL = 'http://localhost:3000';

  const responses = http.batch([ // test one at a time if rate is at 1000
    ['PUT', `${BASE_URL}/qa/questions/1/helpful`, null, { tags: { name: 'markQuestionHelpful' } }],
    ['PUT', `${BASE_URL}/qa/questions/1/report`, null, { tags: { name: 'reportQuestion' } }],
    ['PUT', `${BASE_URL}/qa/answers/1/helpful`, null, { tags: { name: 'markAnswerHelpful' } }],
    ['PUT', `${BASE_URL}/qa/answers/1/report`, null, { tags: { name: 'reportAnswer' } }]
  ]);

  for (let i = 0; i < responses.length; i++) {
    check(responses[i], {'status was 204': (r) => r.status === 204});
  }

  sleep(1);
};