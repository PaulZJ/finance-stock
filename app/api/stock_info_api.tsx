import axios from 'axios';

const apiStockInfoUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=603108.SHH&outputsize=compact&apikey=TEJK7L2L9FD6FUJZ"

 const fetchSingleStock = async () => {
    try{
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await axios.get(apiStockInfoUrl, {
            headers: headers,
        })
        // const jsonData = JSON.parse("")
        // const jsonData = JSON.parse(JSON.stringify(response.data))
        fetch('./mock.txt')
        .then((response) => response.json())
        .then((json) => {

            // console.log(json['Time Series (Daily)'])
            return json['Time Series (Daily)']
        })
        // return jsonData['Time Series (Daily)']
    }catch(error) {
        console.log("api error", error)
    }
}

export { fetchSingleStock }