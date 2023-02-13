#!/usr/bin/node
/*
script that prints all characters of a Star Wars movie:
The first argument is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name by line in the same order of the list “characters” in the /films/ response
You must use the Star wars API
You must use the module request
*/

const request = require('request');
const movieID = process.argv.slice(2);
const endpoint = 'https://swapi-api.hbtn.io/api/films/' + movieID;

function makeRequest (array, index) {
  if (index === array.length) {
    return;
  }

  request(array[index], (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.parse(body).name);
      makeRequest(array, index + 1);
    }
  });
}

request(endpoint, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const chrList = JSON.parse(body).characters;
    makeRequest(chrList, 0);
  }
});
