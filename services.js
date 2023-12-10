const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAxmAZC3npGQBO2ZAUbfHyLs9n9pNi3wn8Hlf1DBloagOjeFTKskgXnrL4tfxSQedDr9ywEmfRNYLW2MDJifZBZBbeGDYoozEYYR9KsPdQyAYqS2b4zExa30trAWf7siQn0AYtLawJN39nzE94ZBerGBrIcHK4ZAVbrhWlZCFKK2qYjpYG09gzcj9KqVH4otHJmq3hcq6iphAZAWbg0RY4AZD"

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
