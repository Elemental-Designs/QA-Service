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

  const questionParams = {
    body: 'Can you get discounts for this item???',
    name: 'jeromieeee',
    email: 'jeromieee@email.com',
    product_id: 1,
  };

  const answerParams = {
    body: 'No discounts are available at this time sorry',
    name: 'jeromieeee',
    email: 'jeromieee@email.com',
    photos: ['url1', 'supercoolurl2', 'url234324234234'],
  };

  const responses = http.batch([
    ['POST', `${BASE_URL}/qa/questions`, questionParams, null],
    // ['POST', `${BASE_URL}/qa/questions/1/answers`, answerParams, null]
  ]);

  for (let i = 0; i < responses.length; i++) {
    check(responses[i], { 'status was 201': (r) => r.status === 201 });
  }

  sleep(1);
}
