const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAM9570qzjUBOxTrxnEBwkrzJpEAHXXW88SI9mSdAtuOJuILFY1NJLHHDcDg24xyCWNMbm9LWra9QYuvfAbPTZCkuuklhXG3EaesBLuUCRGYEm7NN3mJ8j1e7sjtMvWUirm3zgvUHvbn2Gske5qL4ZBXcEvh2XuulVekMksLa3QuaJmytvF4JsRdelD21UlPL5rsNZAg9b2Jqas4ZAAZD"

    // options to send requests
    const options = {
        host: "graph.facebook.com",
        path: "/v19.0/176435792210714/messages",
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
