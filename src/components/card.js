 //DATA
 import topics from './mocks/data/js';
 import articles from './mocks/data.js';
 console.log(articles);
 console.log(data);
 console.log(topics);

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
 
  //Elements
  const cardDiv = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const cardImgDiv = document.createElement('div');
  const cardImg = document.createElement('img');
  const authorName = document.createElement('span');

  //Classes
  cardDiv.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  cardImgDiv.classList.add('img-container');

  //Appending Elements
  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(cardImgDiv);
  author.appendChild(authorName);
  cardImgDiv.appendChild(cardImg);

  //Content - Unsure about how to select article topic
  headline.textContent = articles[`${this.article}`]["headline"];
  cardImg.setAttribute('src', articles[`${this.article}`]["authorPhoto"]);
  authorName.textContent = articles[`${this.article}`]["authorName"];

  //Event Listener
cardDiv.addEventListener('click', () => {
  console.log(headline);
})
}



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  //Selector 
  const cardContainer = documents.querySelector('.card-container');
  const articleElements = articles.map(element => {
    return Card(element);
  })
  articleElements.forEach(artElem => {
    cardContainer.appendChild(articleElements);
  })
}

export { Card, cardAppender }
