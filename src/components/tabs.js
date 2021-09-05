

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
// DATA
import topics from './mocks/data.js';
console.log(topics);
//Elements
const topicsDiv = document.createElement('div');
const topicsContent = document.createElement('div');

//Classes
topicsDiv.classList.add('topics');
topicsContent.classList.add('tabs');

//Appending Elements
topicsDiv.appendChild(topicsContent)

//Content
topicsContent.textContent = `${topics}`
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  //Selector
  const tabsContainer = document.querySelector('.tabs-container');

  //Mapping
  const tabElements = topics.map(topic => {
    return Tabs(topic);
  })
  
  //Looping
  tabElements.forEach(tab => {
    tabsContainer.appendChild(tabElements)
  })

}

export { Tabs, tabsAppender }
