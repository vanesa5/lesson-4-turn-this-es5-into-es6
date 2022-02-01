// convert to arrow function with implicit return with no parameters
export function getRandom() {
  return Math.random();
}

//  convert to arrow function with implicit return with one parameter
export function getRandomBelow(max) {
  return Math.floor(Math.random() * max);
}

//  convert to arrow function with implicit return with two parameters
export function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//  convert to arrow function with implicit return of an object
export function getEmptyProfile() {
  return {
    name: "",
    email: "",
    imageUrl: ""
  };
}

//  convert to arrow function with an explicit return
export function makeNewProfile(name, email, imageUrl) {
  const profile = {};
  profile.name = name;
  profile.email = email;
  profile.imageUrl = imageUrl;
  return profile;
}
