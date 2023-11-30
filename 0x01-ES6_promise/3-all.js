import { createUser, uploadPhoto } from 'utils.js';

export default function handleProfileSignup() {
  const promises = Promise.all([createUser(), uploadPhoto()]);
  return promises.then((result) => {
    console.log(`${result[1].body} ${result[0].firstName} ${result[0].lastName}`);
  })
    .catch(() => {
      console.log('log Signup system offline');
    });
}
