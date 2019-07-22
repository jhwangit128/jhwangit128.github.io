// console.log($)
// ================
// MAIN PAGE
// ================
$(() => {
  // hide them all!
  // $('#search').hide()
  $('.wrapper').hide()
  // $('.carousel-container').hide()

  // BUTTON
 $('.wrapper-close').on('click', () => {
   $('.search-result-modal').hide()
   $('.carousel-container').show()
 })

  // ================
  // DRINK TRACKER
  // ================

  // DRINK TRACKER BUTTON
  $('#tracker-btn').on('click', (event) => {
    $('#tracker-modal').show()
    $('.carousel-container').hide()
  })

  $('#tracker-close').on('click', () => {
    $('#tracker-modal').hide()
    $('.carousel-container').show()
  })

  $('#save-drinks-close').on('click', () => {
    $('.save-drinks-modal').hide()
  })

  // BACKGROUND COLOR CHANGES WHEN CERTAIN NUM OF BUTTON CLICKED
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
  // IMAGE CAROUSEL
  // ================

    $.ajax({
        url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'

      }).then(
      (data) => {

        const $random = data.drinks
        for(let j = 0; j < $random.length; j++){
        const $imagesRan = $random[j].strDrinkThumb
        const $imgThumbRan = $('<img>').attr("src" , $imagesRan).attr('id', 'imgRan' + j).addClass('imageRan')
        $('#img-carousel').append($imgThumbRan)
        // console.log($imgThumbRan)

        // ================
        // IMAGE CAROUSEL
        // ================
        let currentImgIndex = 0

        let $currentImg = $('#img-carousel').children('img').eq(0)

        let numOfImages = 50
        // console.log($currentImg)
        const $next = $('.next')
        const $previous = $('.previous')

        $next.on('click', () => {
          $currentImg.hide()

          if(currentImgIndex < 50) {
            currentImgIndex++
          } else {
            currentImgIndex = 0
          }

          $currentImg = $('#img-carousel').children().eq(currentImgIndex)
          $currentImg.show()
        })

        $previous.on('click', () => {
          $currentImg.hide()

          if (currentImgIndex > 0) {
            currentImgIndex--
          } else {
            currentImgIndex = 50
          }

          $currentImg = $('#img-carousel').children().eq(currentImgIndex)
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

    $.ajax({
        url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInput,
        type: "GET",
        dataType: 'json',
      }).then(
      (data) => {

        const $data = data.drinks
        const $ul = $('<ul>')
        const $li = $('<li>')
        const $nameUl = $('<ul>')
        const $recipeUl = $('<ul>')
        const $imgUl = $('<ul>')
        const $imgLi = $('<li>')
        const $ingredientUl = $('<ul>')
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
        // add name button
        const $nameBtn = $('<button>').text($name).attr('id', 'name' + i).addClass('nameBtn')
        $li.append($nameBtn)
        $ul.append($li)
        $('#name').append($ul)
        // add h1 name
        const $nameLi = $('<li>').text($nameAlone).css({'font-size' : '20px', 'font-weight' : 'bolder', 'font-family' : 'Fredoka One'})
        $nameUl.append($nameLi)
        $('#nameAlone').append($nameUl)
        // recipe content
        const $recipeLi = $('<li>').text("RECIPE:   " + $recipe)
        $recipeUl.append($recipeLi)
        $('#recipe').append($recipeUl)
        // images
        const $imgThumb = $('<img>').attr("src" , $images).attr('id', 'img' + i).addClass('image')
        $imgLi.append($imgThumb)
        $imgUl.append($imgLi)
        $('.imgs').append($imgUl)

        // ingredients
        const $ingredientLi = $('<li>').text("INGREDIENTS:   " + $ingredients).attr('id', 'ingredients' + i).addClass('ingredients')
        $ingredientUl.append($ingredientLi)
        $('#ingredients').append($ingredientUl)

          //buttons for each drinks
          $('.save').on('click',() => {
            $('#recipe:visible').clone().appendTo('.saved-recipe')
            $('.save-recipe').children().not(':first').remove()
            $('.save-recipe').hide()
          })

          $('#save-it').on('click', () => {
            $('.save-drinks-modal').show()

          })

          $nameBtn.on('click', () => {
            $nameLi.slideToggle()
            $recipeLi.slideToggle()
            $ingredientLi.slideToggle()
            $imgThumb.slideToggle()
          })
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
