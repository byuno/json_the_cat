const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi2.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  if (error) {
    console.log("The was an error with the request", error);
    process.exit(1);
  }

  //console.log("response", response);
  //console.log("body", body);
  const data = JSON.parse(body);
  
  //console.log('when jibberish is entered', data)
  // console.log('typeof', typeof data)
  
  //If an breed can't be found...
  if (data.length === 0) {
    console.log("Cat breed not found. Please try again.");
  } else {
    //prints out the breed description...
    const breedDescription = data[0].description;
    console.log(breedDescription);
  }
});