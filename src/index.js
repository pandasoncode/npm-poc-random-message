const messages = [
    "oscar",
    "fernando",
    "norma",
    "cesar",
    "patrick",
    "astrid",
    "andrea",
    "manuel",
    "carolina",
    "paulina",
    "marta",
]

const randomMessage = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message);
}

module.exports = { randomMessage }