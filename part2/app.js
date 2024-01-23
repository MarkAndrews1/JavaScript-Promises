//1.
    $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
    .then(data => {
        card = data.cards[0]
        console.log(`${card.value} of ${card.suit}`)
    })

//2.
    $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
    .then(data => {
        firstCard = data.cards[0]
        let deckId = data.deck_id
        return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
    }).then(data => {
        let secCard = data.cards[0]
        console.log(`${firstCard.value} of ${firstCard.suit}`)
        console.log(`${secCard.value} of ${secCard.suit}`)
    })

//3.
    let deckId= null;

    $.getJSON("https://deckofcardsapi.com/api/deck/new/draw/")
    .then(data => {
        deckId = data.deck_id
        $('button').show()
    })

    $('button').on('click', function(){
        $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`).then(data => {
           let cardImg = data.cards[0].image
           $('#card-area').append(
            $('<img>',{
                src: cardImg
            })
           )
           if (data.remaining === 0 ) $('button').remove()
         })
    })