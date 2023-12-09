const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAxmAZC3npGQBO8jqMuGRZC7VyZBWppcfuWr42pHSlBbnmpO77xDEPL14LsoP0pYepqAg9uwodAZAxor8VU7KgVZCZAvvC0PRWcQac0N8lWYP58nqgrt5FRuqYj52BnLgN1ZArzVjztXOq48PIhrfZA0JWn30JcXpLpbDtamLUMZBN1TvXZCiuivfAx4jDwu3OotZCTyvqADXOTpLNTHm9bjvgZD"

    // options to send requests
    const options = {
        host: "graph.facebook.com",
        path: "/v18.0/176435792210714/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN
        }
    }

    // Configure a request
    const req = http.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d)
        })
    })
    req.on("error", error => {
        console.error(error)
    })
    req.write(data)
    req.end()
}

module.exports = {
    SendMessageWhatsApp
}
