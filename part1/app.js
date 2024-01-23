//1.
    let numFact;
    $.getJSON("http://numbersapi.com/8?json", res => {
        numFact = res
        console.log(numFact)
    })

//2.
    let nums = [4,5,2,67];
    $.getJSON(`http://numbersapi.com/${nums}?json`, res => {
        console.log(res)
    })

//3.
    Promise.all(
        Array.from({length:4}, () => {
            return $.getJSON("http://numbersapi.com/4?json")
        })
    ).then(fact => {
        fact.forEach(data => $("h1").append(`<h4>${data.text}</h4>`))
    })