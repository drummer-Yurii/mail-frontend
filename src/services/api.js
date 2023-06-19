export function sendMail (data) {
    return fetch("https://vue-api.kzteams.ru/mail", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json;charset=utf-8",
        },
        body: JSON.stringify(data),
    }).then(res => res.ok ? res.json() : res.json().then((data) => {
        throw Error(data.message)
    }))
}