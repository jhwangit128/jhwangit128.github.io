// console.log($)
$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()
    const userInput = $('input[type="text"]').val()


    $.ajax({
      url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInput,
    }).then(
        (data) => {
          $('#name').append(data[0,2].drinks)
          $('#recipes').html(data.ingredients)
          // $('#tags').html(data.strIngredient)
          console.log(data.drinks)
        },
        (error) => {
        console.log(error)
      })
  })
})
