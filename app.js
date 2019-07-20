// console.log($)
// ================
// MAIN PAGE
// ================
$(() => {
  // hide them all!
  $('.wrapper').hide()



  // =====================
  // MAIN BUTTON CAROUSEL
  // =====================
  let currentBtnIndex = 0
  let $currentBtn = $('.text-carousel').children().eq(currentBtnIndex)
  let numOfBtn = $('.text-carousel').children().length - 1

  const $next = $('.next')
  const $previous = $('.previous')
  //next btn
  $next.on('click', () => {
    $currentBtn.hide()

    if(currentBtnIndex < numOfBtn) {
      currentBtnIndex++
    } else {
      currentBtnIndex = 0
    }
    $currentBtn = $('.text-carousel').children().eq(currentBtnIndex)

    $currentBtn.show()
  })

  //prev btn
  $previous.on('click', () => {
    $currentBtn.hide()

    if(currentBtnIndex > 0) {
      currentBtnIndex--
    } else {
      currnetBtnIndex = numOfBtn
    }

    $currentBtn = $('.text-carousel').children().eq(currentBtnIndex)

    $currentBtn.show()

  })

  // BUTTONS

  $('#non-alcoholic').on('click', () => {
    $('#header').hide()
  })

  // ================
  // DRINK TRACKER
  // ================

  // DRINK TRACKER BUTTON
  $('#tracker-btn').on('click', (event) => {
    $('#tracker-modal').show()
  })

  $('#tracker-close').on('click', () => {
    $('#tracker-modal').hide()
  })
  // selecting calendar box
  $trackerBox = $('.days').eq(0)
  $trackerBox.on('click', () => {
    $trackerBox.css("background", 'red')

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
  // $('#non-alcoholic').on('click', (event) => {
  //   // event.preventDefault()
  //   // $('#name').empty();
  //   // const userInput = $('input[type="text"]').val()
  //
  //   $.ajax({
  //       url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
  //       type: "GET",
  //       dataType: 'json',
  //     }).then(
  //     (data) => {
  //
  //       const $dataNonAlco = data.drinks
  //       const $imgUlNa = $('<ul>')
  //       const $imgLiNa= $('<li>')
  //       for(let j = 0; j < $dataNonAlco.length; j++){
  //       const $imagesNa = $dataNonAlco[j].strDrinkThumb
  //       const $imgThumbNa = $('<img>').attr("src" , $imagesNa).attr('id', 'imgNa' + j).addClass('imageNa')
  //       $imgLiNa.append($imgThumbNa)
  //       $imgUlNa.append($imgLiNa)
  //       $('.search-images').append($imgUlNa)
  //       console.log($dataNonAlco)
  //       //   $nameBtn.on('click', () => {
  //       //     $recipeLi.toggle()
  //       //     $ingreBtn.toggle()
  //       //     $imgThumb.toggle()
  //       //   })
  //       // $recipeLi.css('display','none')
  //       // $ingreBtn.css('display', 'none')
  //       // $imgThumb.css('display','none')
  //
  //     }
  //
  //     },
  //     (error) => {
  //     console.log(error)
  //
  //   })
  // })

  $('#main-btn').on('click', (event) => {
    event.preventDefault()
    $('#name').empty()
    $('.header').hide()
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
        const $ingredientUl = $('<ul>')
        for(let i = 0; i < $data.length; i++){
        const $name = $data[i].strDrink
        const $recipe = $data[i].strInstructions
        const $ingredient1 = $data[i].strIngredient1
        const $ingredient2 = $data[i].strIngredient2
        const $ingredient3 = $data[i].strIngredient3
        const $ingredient4 = $data[i].strIngredient4
        const $ingredient5 = $data[i].strIngredient5
        const $ingredients = [$ingredient1, $ingredient2, $ingredient3, $ingredient4, $ingredient5]


        console.log($data)

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
        const $ingredientLi = $('<li>').text($ingredients).attr('id', 'ingredients' + i).addClass('ingredients')
        $ingredientUl.append($ingredientLi)
        $('#ingredients').append($ingredientUl)

        console.log($ingredients)
          //buttons for each drinks
          $nameBtn.on('click', () => {
            $recipeLi.toggle()
            $ingredientLi.toggle()
            $imgThumb.toggle()
          })
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
