//Original code (Don't touch)
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//New code

//Add red text paragraph
const redContent = document.createElement('p');
redContent.textContent = "Hey I'm read!";
redContent.style.color = 'red';
container.appendChild(redContent);

//Add blue header
const blueContent = document.createElement('h3');
blueContent.textContent = "I'm a blue h3!";
blueContent.style.color = "blue";
container.appendChild(blueContent);

//Create black/pink div with children
const innerContainer = document.createElement('div');
innerContainer.style.borderStyle = "solid";
innerContainer.style.borderColor = "black";
innerContainer.style.backgroundColor = "pink";
//Create div children
//Add div header
const divHeader = document.createElement('h1');
divHeader.textContent = "I'm in a div";
innerContainer.appendChild(divHeader);
//Add div paragraph
const divParagraph = document.createElement('p');
divParagraph.textContent = "ME TOO!";
innerContainer.appendChild(divParagraph);

//Add the div and children
container.appendChild(innerContainer);