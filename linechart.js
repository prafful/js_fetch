
var chartCtx = document.getElementById("chartbtc")

function loadChart(){
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            var prices = data.prices
            console.log(prices)
            var labelVariable = prices.map((t)=>{
                return new Date(t[0]).toLocaleDateString()   
            })
            var valueVariable = prices.map((p)=>{
                return p[1]
            })
            console.log(valueVariable);
            

            new Chart(chartCtx, {
                type:"line",
                data:{
                    labels:labelVariable,
                    datasets:[{
                        label:"Bitcoin Price",
                        data: valueVariable,
                        borderWidth:2
                    }]
                }
            })
            
        })
}