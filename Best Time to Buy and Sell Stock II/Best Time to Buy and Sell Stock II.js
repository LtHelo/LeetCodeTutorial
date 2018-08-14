/**
 * @param {number[]} prices
 * @return {number}
 */
let prices = [1,2,3,4,5]

let singleDayPrice = []
let singleDayPriceResult = []
let maxProfitResult = []
var maxProfit = function (prices) {
  for (let i = 0; i < prices.length - 1; i++) {
    prices.forEach((item, idx) => {
      if (idx <= i) {
        return
      } else {
        singleDayPrice.push(item - prices[i])
      }
    })
    singleDayPriceResult.push(singleDayPrice)
    singleDayPrice = []
  }
  singleDayPriceResult.forEach((item, itemIdx) => {
    item.forEach((ele, eleIdx) => {
      if (singleDayPriceResult[itemIdx + 2] !== undefined && singleDayPriceResult[itemIdx + 2][eleIdx] !== undefined) {
        if (ele + singleDayPriceResult[itemIdx + 2][eleIdx] > 0) {
          maxProfitResult.push(ele + singleDayPriceResult[itemIdx + 2][eleIdx])
        } else {
          maxProfitResult.push(0)
        }
      }
    })
  })
  maxProfitResult.sort((a, b) => a - b)
  return maxProfitResult[maxProfitResult.length - 1]
};
maxProfit(prices)
