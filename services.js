const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAxmAZC3npGQBO6sY8DsZBFTH1nINWRyD0HRM0bZCapZBTNsatXOBLSK3mhhVClVtmBgXeLVxsz8GRxCMI9y303JvnKq3I0SJQxrv6VP5sYNPSqr8HZB5e3bf6NLZB8EevvGNHvYhQxAZCzoOhyko0rNmZB5Ie3bbQZB1CKkxbVrsqyQQE07kQEYWA6YXoQGxNXsk"

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
