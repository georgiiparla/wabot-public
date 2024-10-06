const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = ""

    // options to send requests
    const options = {
        host: "graph.facebook.com",
        path: "/v18.0/172669552602437/messages",
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
