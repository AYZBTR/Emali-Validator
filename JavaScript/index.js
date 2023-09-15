let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "iamaayush",
    "email": "iamaayush@edu.xamk.fi",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "edu.xamk.fi",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true

}

let str = ``
for (key of Object.keys(result)){
    str = str + `<div>${key}:${result[key]}</div>`

}
console.log(str)
resultcontainer.innerHTML = str
