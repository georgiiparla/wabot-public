const http = require("https")

function SendMessageWhatsApp(data) {
    var TOKEN = "EAAxmAZC3npGQBO8DzxmM6aFtycJNrblnxfkBzR2H39OBL19SlqcRZBX006Ae81pcjR72LmyHbsxT7DUxHgvepJZCVk2H1EZBZA4WQA4wGkln3FdfobnjSeoptXJ6NHlY397yooK6jMBWZCc86FlwLy00j9ICbcKC7rE6ZAY7wKWRJ9yTbSjjXXvmGzjsTseui8S91p23tFOspT0ZCrZB0YR5UmsuWEZChzGZAZB8XW1iWTsZD"

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
