/**
 * @param {number[]} prices
 * @return {number}
 */
let prices = [3,3,5,0,0,3,1,4]

var maxProfit = function (prices) {
  let singleDayPrice = []
  let singleDayPriceResult = []
  let maxProfitResult = []
  if (prices.length === 0 || prices.length === 1) {
    maxProfitResult.push(0)
  } else {
    for (let i = 0; i < prices.length - 1; i++) {
      prices.forEach((item, idx) => {
        if (idx <= i) {
          return
        } else {
          singleDayPrice.push({
            'before': item,
            'after': prices[i],
            'beforeIdx': idx,
            'afterIdx': i,
            'singlePriceValue': item - prices[i]
          })
           maxProfitResult.push(item - prices[i])
        }
      })
      singleDayPriceResult.push(singleDayPrice)
      singleDayPrice = []
    }

    singleDayPriceResult.forEach((ele, eleIdx) => {
      ele.forEach((item, itemIdx) => {
        for (let i = 0; i < singleDayPriceResult.length; i++) {
          if (singleDayPriceResult[item.beforeIdx + i + 1] !== undefined && item.beforeIdx !== true) {
            singleDayPriceResult[item.beforeIdx + i + 1].forEach((piece, pieceIdx) => {
              if (item.singlePriceValue + piece.singlePriceValue > 0) {
                maxProfitResult.push(item.singlePriceValue + piece.singlePriceValue)
              } else {
                maxProfitResult.push(item.singlePriceValue + piece.singlePriceValue)
                maxProfitResult.push(0)
              }
            })
          } else if (item.beforeIdx = prices.length - 1 && item.afterIdx == prices[0]) {
            maxProfitResult.push(prices[prices.length - 1] - prices[0])
            maxProfitResult.push(0)
          } else if (item.beforeIdx = prices.length - 1) {
            maxProfitResult.push(0)
          }
        }
      })
    })
  }
  maxProfitResult.sort((a, b) => a - b)
  console.log(maxProfitResult)
  return maxProfitResult[maxProfitResult.length - 1]
};
maxProfit(prices)


//在leetcodde跑了一下竟然失败了。
// 贪心算法，需要算出每种结果，从第一天买入开始，进行结果计算。
// singleDayPrice这个变量表示每天的穷举结果有多少
// singleDayPriceResult表示所有的结果一共有多少
// maxProfitResult最大收益
// 首先穷举所有的结果，因为，每天的价格是不一样的，所以最少两天有一个结果。
// 然后对有效的结果进行累加计算
//因为计算过程中需要去判断下标的位置，所以使用一个对象来标注

// [ { before: 1,
//   after: 6,
//   beforeIdx: 1,
//   afterIdx: 0,
//   singlePriceValue: -5 },
// { before: 3,
//   after: 6,
//   beforeIdx: 2,
//   afterIdx: 0,
//   singlePriceValue: -3 },
// { before: 2,
//   after: 6,
//   beforeIdx: 3,
//   afterIdx: 0,
//   singlePriceValue: -4 },
// { before: 4,
//   after: 6,
//   beforeIdx: 4,
//   afterIdx: 0,
//   singlePriceValue: -2 },
// { before: 7,
//   after: 6,
//   beforeIdx: 5,
//   afterIdx: 0,
//   singlePriceValue: 1 } ]
// [ { before: 3,
//   after: 1,
//   beforeIdx: 2,
//   afterIdx: 1,
//   singlePriceValue: 2 },
// { before: 2,
//   after: 1,
//   beforeIdx: 3,
//   afterIdx: 1,
//   singlePriceValue: 1 },
// { before: 4,
//   after: 1,
//   beforeIdx: 4,
//   afterIdx: 1,
//   singlePriceValue: 3 },
// { before: 7,
//   after: 1,
//   beforeIdx: 5,
//   afterIdx: 1,
//   singlePriceValue: 6 } ]
