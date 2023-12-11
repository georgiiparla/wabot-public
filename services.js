const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAxmAZC3npGQBO3MlBRlWb3CjaO3sgBue7KhVrSyf96OJJDuZCFYXdfFSx7u4IMZB26gTOyfNZA4rapxBBc5mwrgSZCli39xFKm12C8MHnwE8e0xcWZBMZASwEiTgUeGp9ctdfRZCYpYrgSWB92Pa2f2PdZCHYxlHImlsZCzmj9K4uRPrRdI3AqvL3ArRNUZCLfN5bGW722kP5NgoazQsmZAdZCQZD"

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
