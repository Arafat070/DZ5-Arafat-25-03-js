const currencySom = document.querySelector('#som')
const currencyUsd = document.querySelector('#usd')
const currencyEur = document.querySelector('#eur')

// DRY => Don't Repeat yourself

const convert = (elem, target1, target2,  isTrue) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isTrue) {
                target1.value = (elem.value / response.usdSom).toFixed(2)
                target2.value = (elem.value / response.eurSom).toFixed(2)
            } else if(isTrue === null){
                target1.value = (elem.value * response.eurSom).toFixed(2)
                target2.value = (elem.value * response.usdSom).toFixed(2)
            }else {
                target1.value = (elem.value * response.usdSom).toFixed(2)
                target2.value = (elem.value * response.eurSom).toFixed(2)
            }
            if(elem.value === ''){
                target1.value = ''
                target2.value = ''
            }
        }
    }
}

convert(currencySom, currencyUsd, currencyEur,true)
convert(currencyEur,currencySom,currencyUsd, null)
convert(currencyUsd,currencySom,currencyEur,false)


