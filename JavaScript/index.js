let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "hellothere",
    "email": "hellothere@edu.xamk.di",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "edu.xamk.di",
    "reason": "invalid_mx",
    "mx_found": false,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  }

submitBtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    console.log("Clicked!!!")
    resultcontainer.innerHTML = `<img width="125px" src="./Images/loading.svg" alt="Loading gif">`
    let key = "ema_live_oNq9dTaq2fbUgBRhH2UeNFNHJAcSRhOT1YhVUZkA"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch (url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)){
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}:${result[key]}</div>`
        }
    

}
console.log(str)
resultcontainer.innerHTML = str
})


