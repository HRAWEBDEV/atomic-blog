import { faker } from '@faker-js/faker';

function createRandomPost() {
 return {
  title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
  body: faker.hacker.phrase(),
 };
}

export { createRandomPost };
