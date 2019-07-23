// console.log($)
// ================
// MAIN PAGE
// ================
$(() => {
  // hide API data modal
  $('.wrapper').hide()

  // BUTTONS
  // API data modal close
 $('.wrapper-close').on('click', () => {
   $('.search-result-modal').hide()
   $('.carousel-container').show()
 })
  // tracker open button
  $('#tracker-btn').on('click', (event) => {
    $('#tracker-modal').show()
    $('.carousel-container').hide()
  })
  // tracker close button
  $('#tracker-close').on('click', () => {
    $('#tracker-modal').hide()
    $('.carousel-container').show()
  })
// saved name & recipe modal open button
  $('#save-it').on('click', () => {
    $('.save-drinks-modal').show()
  })
  // saved name & recipe modal close button
  $('#save-drinks-close').on('click', () => {
    $('.save-drinks-modal').hide()
  })

  // ================
  // DRINK TRACKER
  // ================

  // BACKGROUND COLOR CHANGES WHEN CERTAIN NUM OF BUTTON CLICKED
  // count 5, 10, and 20
  // COME BACK: more complex UI

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

  // ================
  // AJAX CALL
  // ================

  // fetch the data of random drinks
  $.ajax({
      url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'

    }).then(
    (data) => {
      // looping through images that go inside of the carousel
      const $random = data.drinks
      for(let j = 0; j < $random.length; j++){
      const $imagesRan = $random[j].strDrinkThumb
      const $imgThumbRan = $('<img>').attr("src" , $imagesRan).attr('id', 'imgRan' + j).addClass('imageRan')
      $('#img-carousel').append($imgThumbRan)
      // console.log($imgThumbRan)

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
    }

    },
    (error) => {
    console.log(error)

  })

  // ====================
  // ====== SEARCH ======
  // ====================


  $('#main-btn').on('click', (event) => {
    event.preventDefault()

    $('#name-only').hide()
    $('#name').empty()
    $('.search-result-modal').show()
    $('.wrapper').show()
    $('.carousel-container').hide()

    const userInput = $('input[type="text"]').val()
    // fetch the data of all the drinks that user types in
    $.ajax({
        url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInput,
        type: "GET",
        dataType: 'json',
      }).then(
      (data) => {

        const $data = data.drinks
        // name button
        const $ul = $('<ul>')
        const $li = $('<li>')
        // name
        const $nameUl = $('<ul>')
        // recipe
        const $recipeUl = $('<ul>')
        // image
        const $imgUl = $('<ul>')
        const $imgLi = $('<li>')
        // ingredient
        const $ingredientUl = $('<ul>')
        // for loop to get drink's names, recipes, ingredients, and images based on user input
        for(let i = 0; i < $data.length; i++){
        const $name = $data[i].strDrink
        const $nameAlone = $data[i].strDrink
        const $recipe = $data[i].strInstructions
        const $ingredient1 = $data[i].strIngredient1
        const $ingredient2 = $data[i].strIngredient2
        const $ingredient3 = $data[i].strIngredient3
        const $ingredient4 = $data[i].strIngredient4
        const $ingredient5 = $data[i].strIngredient5
        const $ingredients = [$ingredient1, $ingredient2, $ingredient3, $ingredient4, $ingredient5]
        const $images = $data[i].strDrinkThumb
        // console.log($data)
        // add name button to a div
        const $nameBtn = $('<button>').text($name).attr('id', 'name' + i).addClass('nameBtn')
        $li.append($nameBtn)
        $ul.append($li)
        $('#name').append($ul)
        // add name to a div
        const $nameLi = $('<li>').text($nameAlone).css({'font-size' : '30px', 'font-weight' : 'bolder', 'font-family' : 'Fredoka One'})
        $nameUl.append($nameLi)
        $('#nameAlone').append($nameUl)
        // add recipe to a div
        const $recipeLi = $('<li>').text("RECIPE:   " + $recipe)
        $recipeUl.append($recipeLi)
        $('#recipe').append($recipeUl)
        // add images to a div
        const $imgThumb = $('<img>').attr("src" , $images).attr('id', 'img' + i).addClass('image')
        $imgLi.append($imgThumb)
        $imgUl.append($imgLi)
        $('.imgs').append($imgUl)
        // add ingredients to a div
        const $ingredientLi = $('<li>').text("INGREDIENTS:   " + $ingredients).attr('id', 'ingredients' + i).addClass('ingredients')
        $ingredientUl.append($ingredientLi)
        $('#ingredients').append($ingredientUl)

          // if user clicks save button, clone all contents
          $('.save').on('click',() => {
            $('#recipe:visible').clone().appendTo('.saved-recipe')
            $('#nameAlone:visible').clone().appendTo('.saved-name')
            $('.saved-recipe').children().not(':first').remove()
            $('.saved-name').children().not(':first').remove()
          })
          // if user clicks saved recipe button on top of the page, show saved recipe modal.
          $('#save-it').on('click', () => {
            $('.save-drinks-modal').show()
          })
          // if user clicks drink's name button, show all contents
          $nameBtn.on('click', () => {
            $nameLi.slideToggle()
            $recipeLi.slideToggle()
            $ingredientLi.slideToggle()
            $imgThumb.slideToggle()
          })
        // all the contents are hidden before clicked
        $nameLi.css('display','none')
        $recipeLi.css('display','none')
        $ingredientLi.css('display', 'none')
        $imgThumb.css('display','none')

      }

      },
      (error) => {
      console.log(error)

    })
  })
})
