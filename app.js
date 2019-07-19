// console.log($)
// ================
// MAIN PAGE
// ================
$(() => {
  // hide them all!
  $('#search').hide()
  $('#tracker').hide()
  $('.menu').hide()

  // BUTTONS
  $('#dropdown').on ('click', (event) => {
    $('.menu').slideToggle();
    $('#search').show()
  })

  // ================
  // DRINK TRACKER
  // ================
  const $openTrackerBtn = $('#tracker-btn')
  const $tracker = $('#tracker')
  const $closeBtn = $('#tracker-close')

  // DRINK TRACKER BUTTON
  $openTrackerBtn.on('click', (event) => {
    $tracker.show()
  })

  $closeBtn.on('click', () => {
    $tracker.hide()
  })




  // ================
  // IMAGE CAROUSEL
  // ================
  // let currentImgIndex = 0
  //
  // let $currentImg = $('.carousel-images').children().eq(currentImgIndex)
  //
  // let numOfImages = $('.carousel-images').children().length - 1
  //
  // const $next = $('.next')
  // const $previous = $('.previous')
  //
  // $next.on('click', () => {
  //
  //   $currentImg.hide()
  //   // check if the currentImgIndex is less than the amount of images we have
  //   if(currentImgIndex < numOfImages) {
  //     // increment current image index
  //     currentImgIndex++
  //   } else { // if the currentImgIndex > the amount of images we have
  //     // reset the currentImgIndex to 0, so we cycle back
  //     currentImgIndex = 0
  //   }
  //   // change the currentImg
  //   $currentImg = $('.carousel-images').children().eq(currentImgIndex)
  //   // show the new currentImg
  //   $currentImg.show()
  // })
  //
  // // previous button
  // $previous.on('click', () => {
  //   // hide the current image
  //   $currentImg.hide()
  //   // check if the currentImgIndex > 0
  //   if (currentImgIndex > 0) {
  //     // decrement the current image index
  //     currentImgIndex--
  //   } else { // if the currentImgIndex < 0, reset the currentImgIndex to the numOfImages
  //     currentImgIndex = numOfImages
  //   }
  //   // change the currentImg
  //   $currentImg = $('.carousel-images').children().eq(currentImgIndex)
  //   // show the new currentImg
  //   $currentImg.show()
  // })
  // ================
  // SEARCH BAR
  // ================
  $('#main-btn').on('click', (event) => {
    event.preventDefault()
    $('#name').empty();
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
        const $recipeUl = $('<ul>')
        const $imgUl = $('<ul>')
        const $imgLi = $('<li>')
        const $ingreUl = $('<ul>')
        const $ingreLi = $('<li>')
        for(let i = 0; i < $data.length; i++){
        const $name = $data[i].strDrink
        const $recipe = $data[i].strInstructions
        const $ingredient1 = $data[i].strIngredient1
        const $ingredient2 = $data[i].strIngredient2
        const $ingredient3 = $data[i].strIngredient3
        const $ingredient4 = $data[i].strIngredient4
        const $ingredient5 = $data[i].strIngredient5
        const $ingredients = [$ingredient1, $ingredient2, $ingredient3, $ingredient4, $ingredient5]

        const $images = $data[i].strDrinkThumb
        // const $li = $('<li>').text($name)
        const $nameBtn = $('<button>').text($name).attr('id', 'name' + i).addClass('nameBtn')
        // const $liName = $li.attr('id','name' + i)
        $li.append($nameBtn)
        $ul.append($li)
        $('#name').append($ul)
        // recipe content
        const $recipeLi = $('<li>').text($recipe)
        $recipeUl.append($recipeLi)
        $('#recipe').append($recipeUl)
        // images
        const $imgThumb = $('<img>').attr("src" , $images).attr('id', 'img' + i).addClass('image')
        $imgLi.append($imgThumb)
        $imgUl.append($imgLi)
        $('.imgs').append($imgUl)

        // ingredients
        const $ingreBtn = $('<button>').text($ingredients).attr('id', 'ingredients' + i).addClass('ingreBtn')
        $ingreLi.append($ingreBtn)
        $ingreUl.append($ingreLi)
        $('#ingredients').append($ingreUl)

        console.log($ingredients)
          //buttons for each drinks
          $nameBtn.on('click', () => {
            $recipeLi.toggle()
            $ingreBtn.toggle()
            $imgThumb.toggle()
          })
        $recipeLi.css('display','none')
        $ingreBtn.css('display', 'none')
        $imgThumb.css('display','none')

      }

      },
      (error) => {
      console.log(error)

  })
})
})
