const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAxmAZC3npGQBOxSxTf7HUt1oaQoocdeuRV1bnME04t0YtByZCHFig2WzPIscXuBAsEZBnCxoElRJbIGiuZA5iS8UapABtsBRFUT2pkO7jXv3pv9KFUhTw3BVBgQX0E1lHeDELikXqLYu4ciV89tVMSKXz9qmusejGN4AgkuyhrapMV06FdNOK4xetklZCwYfw83qm82YhB1GkhVI4TZAcZAuyZBZBMxvZCdCXjCwZD"

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
