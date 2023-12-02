import { uploadPhoto, createUser } from './utils.js'; // eslint-disable-line

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return {
    photo,
    user,
  };
}
