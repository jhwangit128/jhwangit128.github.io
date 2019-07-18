// console.log($)
$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()
    const userInput = $('input[type="text"]').val()


    $.ajax({
        url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ userInput,
        type: "GET",
        // data: 0[{strDrink:""}],
        dataType: 'json',
      }).then(
      (data) => {
        const $data = data.drinks
        const $name = $data[0].strDrink
        const $recipe = $data[0].strInstructions
        const $ingredients = $data[0].strIngredient1 + '' + $data[0].strIngredient2 + '' + $data[0].strIngredient3 + '' + $data[0].strIngredient4
        $('#name').text($name)
        $('#recipe').text($recipe)
        $('#ingredients').text($ingredients)
        // $('#tags').html(data.strIngredient)
        console.log($data)
      },
      (error) => {
      console.log(error)
    })
})
})
