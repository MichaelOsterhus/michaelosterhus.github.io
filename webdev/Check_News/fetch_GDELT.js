
const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=artificial+intelligence&mode=artlist&timespan=1M&format=json&_=${Date.now()}`;


const sourcecountry = 'United States'; // Specify the source country (e.g. USA for Reuters)
const language = 'English'; // Specify the language (e.g. EN for English)
const num = 6; // Maximum number of articles to fetch
const Reutersurl = `https://api.gdeltproject.org/api/v2/doc/doc?query=%22Trump%22%20sourcecountry:US%20sourcelang:English%20near5:%22wall%20border%22%20domainis:nytimes.com&format=json`;

fetch(Reutersurl)
    .then(response => response.json())
    .then(Reutersdata => {
      console.log(Reutersdata)
    })
    .catch(error => console.error(error));


// JavaScript
const searchBtn = document.getElementById('searchBtn');
const newsfeed = document.getElementById('newsfeed');
let country
let domain
const filtersForm = document.querySelector('#filters form');
filtersForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    country = document.querySelector('#country').value;
    domain = document.querySelector('#domain').value;
    // Pass country and domain values to GDELT query
    // ...
});


//code for search function
searchBtn.addEventListener('click', () => {
  const query = document.getElementById('news').value;
  const gdeltBaseUrl = 'https://api.gdeltproject.org/api/v2/doc/doc';
  // const queryURL = `https://api.gdeltproject.org/api/v2/doc/doc?query=${query}&mode=artlist&timespan=1M&format=json`;
  const queryURL = `${gdeltBaseUrl}?query=${query}&mode=artlist&format=json&sort=datedesc&${country ? `sourcecountry:${country}&` : ''}${domain ? `domainis:${domain}&` : ''}`;

  console.log(queryURL)
  // Clear existing newsfeed content
  newsfeed.innerHTML = '';

  fetch(queryURL)
    .then(response => response.json())
    .then(data => {
      data.articles.forEach(story => {
        const link = document.createElement('a');
        const title = story.title;
        const lang = story.language;
        const img = story.socialimage;

        link.setAttribute('href', story.url);
        link.innerHTML = `<div class="newspost"><h3>${title}</h3>
        <div style="width: 80px; height: 60px; background-image: url(${img}); background-size: cover;
        background-repeat: no-repeat; "></div><h3>${title}</h3><span>${lang}</span></div>`;
        newsfeed.appendChild(link);
      });
      
    })
    .catch(error => console.error(error));
});

//code for intial news fetch
// const trans = async (story) => {
 const trans = (story) => { 
  const link = document.createElement('a');
  const title = story.title;
  const lang = story.language;
  // const img = await cropImage(story.socialimage);
  const img = story.socialimage
  const source = story.domain

  
  link.setAttribute('href', story.url);
  link.innerHTML = `<div class="newspost">
  <img src="${img}"><div class="post-title"><h3>${title}</h3></div><span class="lang">${lang}</span><span class="source">${source}</span></div>`;
  newsfeed.appendChild(link);
};

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach((story) => trans(story))
    console.log(data)
  })
  .catch(error => console.error(error));



  //Code below is pasted from Chat

// const cropImage = async (imgUrl) => {
//   const crop = await smartcrop.crop(imgUrl, {width: 300, height: 200});
//   const canvas = document.createElement('canvas');
//   canvas.width = 300;
//   canvas.height = 200;
//   const ctx = canvas.getContext('2d');
//   ctx.drawImage(imgUrl, crop.topCrop.x, crop.topCrop.y, crop.topCrop.width, crop.topCrop.height, 0, 0, 300, 200);
//   return canvas.toDataURL();
// };



// Example usage
// const story = {
//   title: "Lorem Ipsum",
//   language: "English",
//   socialimage: "https://example.com/image.jpg",
//   url: "https://example.com"
// };

// trans(story);


// const newsfeed = document.getElementById('newsfeed');

// const trans = (story) => {
//   // Create a new div element to hold the link and subheading
//   const div = document.createElement('div');

//   // Translate the title and add it as a subheading
//   translate(story.title, { to: 'en' }).then(res => {
//     const subheading = document.createElement('h2');
//     subheading.innerText = res.text;
//     div.appendChild(subheading);
//   }).catch(err => {
//     console.error(err);
//   });

//   // Create a link element for the original title
//   const link = document.createElement('a');
//   link.setAttribute('href', story.url);
//   link.innerHTML = `<h1>${story.title}</h1>`;
//   div.appendChild(link);

//   // Translate the description and add it as a paragraph
//   translate(story.description, { to: 'en' }).then(res => {
//     const paragraph = document.createElement('p');
//     paragraph.innerText = res.text;
//     div.appendChild(paragraph);
//   }).catch(err => {
//     console.error(err);
//   });

//   // Add the div to the newsfeed
//   newsfeed.appendChild(div);
// }

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     data.articles.forEach((story) => trans(story));
//     console.log(data);
//   })
//   .catch(error => console.error(error));

