const mongoose = require('mongoose');


const UserStockSchema = mongoose.Schema({
    username: {
        type: String
    },
    stock: {
        type: Array
    }
});

const UserStock = mongoose.model("user_stock", UserStockSchema);

function buyStock(username, data) {
    // check the usernaem from the request
    // Fetch all stocks which user has from user_stocks
    // Fetch user details to get the amount user has
    // if sufficient balance, find the stock and update the quantity

    return new Promise((resolve, reject) => {

        UserStock.find({ username: username }).then(value => {
            // console.log(value);
            if (value.length === 0) {
                const userStock = new UserStock({
                    username: username,
                    stock: [{
                        "name": data.stockName,
                        "quantity": data.quantity
                    }]
                });
                userStock.save().then(value => {
                    console.log(value);
                    resolve(value);
                }, err => {
                    reject(err);
                });
            } else {
                // Yet to do        
                var duplicateStocks = userArray.filter((userDB) => userDB.username === user.username)



                resolve(value)


            }

        }, err => {
            reject(err);
        })
        // stock.save().then(value => {
        //     console.log(value);
        //     resolve(value);
        // }, err => {
        //     reject(err);
        // })
    })

}

function sellStock() {

}


module.exports = { UserStock, buyStock };