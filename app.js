// console.log($)
// main page
$(() => {
  $('#search').hide()
  $('#recipe').hide()
  $('#ingredients').hide()

  $('#dropdown').on ('click', (event) => {
    $('.menu').slideToggle();
    $('#search').show()
      // window.location.href = "https://www.tutorialrepublic.com/";

  })
  // search bar result
  $('#main-btn').on('click', (event) => {
    event.preventDefault()
    $('#name').empty();
    const userInput = $('input[type="text"]').val()



    $.ajax({
        url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInput,
        type: "GET",
        // data: 0[{strDrink:""}],
        dataType: 'json',
      }).then(
      (data) => {

        const $data = data.drinks
        const $ul = $('<ul>')
        const $li = $('<li>')
        for(let i = 0; i < $data.length; i++){
        const $name = $data[i].strDrink
        const $recipe = $data[i].strInstructions
        const $ingredients = $data[i].strIngredient1 + '' + $data[i].strIngredient2 + '' + $data[i].strIngredient3 + '' + $data[i].strIngredient4
        // const $li = $('<li>').text($name)
        const $nameBtn = $('<button>').text($name).attr('id', 'name' + i)
        // const $liName = $li.attr('id','name' + i)
        $li.append($nameBtn)
        $ul.append($li)
        $('#name').append($ul)
        $('#recipe').text($recipe)
        $('#ingredients').text($ingredients)
        console.log($name)

        }


      },
      (error) => {
      console.log(error)
    })
  })
  $('#dropdown').on ('click', (event) => {
    $('.menu').slideToggle();
    $('#search').show()
      // window.location.href = "https://www.tutorialrepublic.com/";

  })

})

//drag drop but using jqueryUI So useless!!!
// const dragAndDrop = () => {
//   $( "#drag1" ).draggable();
//   $( "#drop1" ).droppable({
//     drop: function( event, ui ) {
//       $( this )
//         .addClass( "ui-state-highlight" )
//         .find( "p" )
//           .html( "Dropped!" );
//     }
//   });
// }

// let wordlist = [
//   "LADIES' NIGHT",
//   "NON ALCOHOLIC",
//   "I NEED A LITTLE SWEETNESS",
//   "GAME NIGHT",
//   "I'M ON A DIET",
//   "DATE NIGHT",
// ]
