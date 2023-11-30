import {createUser, uploadPhoto} from 'utils.js';
export default function handleProfileSignup() {
  return Promise.all(createUser(), uploadPhoto()).then((result) => {
    console.log(`${result.body} ${result.firstName} ${result.lastName}`);
  })
    .catch(() => {
      console.log('log Signup system offline');
    });
}
