const Stock = require('../models/stock');
const UserStock = require('../models/user_stock');



async function addStock(data) {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            const resp = await Stock.saveStock(data)
            resolve(resp);
        } catch (err) {
            console.log(err);
            reject(err)
        }
    })



}

function fetchAllStocks() {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            const resp = await Stock.fetchAllStocks()
            resolve(resp);
        } catch (err) {
            console.log(err);
            reject(err)
        }
    })
}

async function buyStock(username,data) {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            const resp = await UserStock.buyStock(username,data);
            resolve(resp);
        } catch (err) {
            console.log(err);
            reject(err)
        }
    })



}




module.exports = { fetchAllStocks, addStock, buyStock }