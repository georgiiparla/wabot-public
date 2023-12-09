const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAxmAZC3npGQBOz2pzQyZBMIHPFRiYzgvRAkRGgKdIYXr9ZCd0JklCCoAwNz6XUfzZCQXFhowkwOJi7sWy9nUjbUtaUdIsZAxVjm5IZAp1vNFthOZBZAisDtHJqZCSTLZBHcvV5tuHaCihyc22GR2r2IsDcOXtgxkRp5TjXCscp4fFLPPXRf858FqGxsrfDlvqqZB3ZCPU5APzbnCBugOJiFK9AZD"

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
