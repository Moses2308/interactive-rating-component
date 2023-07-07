# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/images/screenshot.jpg)

### Links

- Live Site URL: [Netlify](https://loquacious-dusk-d88cc9.netlify.app/)

## My process

I took a mobile first approach. First I set the foundational html, then I started on the css. For the css worked using a top down approach, changing the html when needed.
Since I haven't styled a form before, the radio inputs gave me a hard time at the beginning.
To overcome this obstacle, I looked for examples online and studied them. Once I understood the principle behind it, I was able to implement a solution for it.
I left the JS for last, and it also gave me trouble because it was my first time practically using the DOM. After some google searches, I was able to form a solution for determining what radio input was
selected and the value associated with it. The rest of the JS logic came pretty easily snd I wrapped up the project by styling the thank you card.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this project, I learned how to style forms. Specifically, I learned how to work with radio inputs. It was tricky at first as I was trying to style the default radio button at first, but
learning to use the lable to add custom styles was eye opening.
Also getting more practice with dataset and data attributes was great. I recently learned about them and actually applying felt like a good experience.

```css
.rating-card input[type="radio"] {
  opacity: 0;
  position: absolute;
}
```

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputButtons.forEach((element) => {
    if (element.checked === true) {
      const ratingValue = element.dataset.rating;
      submittedForm.querySelector(".customer-rating").textContent = ratingValue;
    }
  });

  openForm.style.display = "none";
  submittedForm.style.display = "grid";
});
```

### Continued development

Although I feel proud of finding a solution to the challenges I encountered, I would like to keep learning to find methods that are potentially simpler or more effective.
I would like to continue practicing my workflow. As this is my first challange after a long time away, I feel like my workflow was a bit scattered and it shows in the readability of my code.
I would like to revisit this challange to address any issues that might be might be pointed out to me.

### Useful resources

- [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - Although I had a general understanding of CSS Grid from CSS Garden, this guide helped as a reference, but it also deepend my understanding of what is happening.
- [Codepen](https://codepen.io) - This was an amazing resource. It provided me with examples of other people's projects. I was able to analyze the methods other people implemented and allow it to influence my own.

## Author

- Frontend Mentor - [@Moses2308](https://www.frontendmentor.io/profile/Moses2308)
- Dev - (https://dev.to/moses2308)
