<!-- file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc -->

# Drink Recipe Database

This app allows users to search for Drink & Cocktail recipes from around the world and save any recipe they wish.
It also has a drink tracker which users can keep track of how many number of days they've been drinking and if they have been drinking too much, there is a warning alert box pops up. I included an image carousel for the users to look through images of randomly picked drinks.

# API

TheCocktailDB https://www.thecocktaildb.com/

# TECHNOLOGIES USED

HTML
CSS
JQuery
AJAX

# APPROACH TAKEN

I wanted to add something that I've learned from this program as much as possible. (From FOR LOOP to Ajax)

Image Carousel

      // ================
      // IMAGE CAROUSEL
      // ================
      // an image that user sees at first has index of 0
      let currentImgIndex = 0
      let $currentImg = $('#img-carousel').children('img').eq(0)
      // 50 images will appear in the carousel
      let numOfImages = 50
      // console.log($currentImg)
      // next & previous button
      const $next = $('.next')
      const $previous = $('.previous')
      // click the next button and current image is hidden
      $next.on('click', () => {
        $currentImg.hide()
        // if current image has the index less than 50, then show the images one by one
        if(currentImgIndex < 50) {
          currentImgIndex++
        } else {
          // if the current image has the index bigger than 50, then reset the index to 0, cycle back
          currentImgIndex = 0
        }
        // changing the current image
        $currentImg = $('#img-carousel').children().eq(currentImgIndex)
        // show it
        $currentImg.show()
      })
      // previous button
      $previous.on('click', () => {
        // current image is hidden
        $currentImg.hide()
        // if the index of current image is bigger than the amount of images
        if (currentImgIndex > 0) {
          // increment current image index
          currentImgIndex--
          // if the index of current image is less than the amount of images, reset the index to 0 and cycle back
        } else {
          currentImgIndex = 50
        }
        // change the current image
        $currentImg = $('#img-carousel').children().eq(currentImgIndex)
        // show it
        $currentImg.show()
      })
    
    
Drink Tracker
      
        let count = 0;
  const $clickers = $('.clicker')
  $clickers.on('click', () => {
    $(event.currentTarget).addClass('clicked')
      count = count +1
        if(count === 5) {
          alert("Having fun?")
          $(event.currentTarget).css('background-color', '#FF3366')
        } else if (count === 10){
          alert("Slow down!")
          $(event.currentTarget).css('background-color', '#FF3366')
        } else if (count === 20){
          alert("You need help!")
          $(event.currentTarget).css('background-color', '#FF3366')
        }
  })
        

# LINK TO MY LIVE SITE

http://jhwangit128.github.io

# UNSOLVED PROBLEMS

I want to develop this app so that user can have more option to choose from in the drink tracker section. Instead of number of days, users can add daily drink consumption (how many cups or bottles).
I did user testing with my roommate at the end and I realized that instead of using image carousel with buttons, it would be much easier for the users to just swipe them.(mobile version)
