const dip = require("../src/index");

// dip.stock.symbols.getStockList().then((data)=>{
//     console.log(data);
// });

// dip.stock.symbols.getBoards("600005").then((data)=>{
//     console.log(JSON.stringify(data));
// });

// dip.stock.trading.getWeekHis("sh600005").then((data)=>{
//     console.log(data);
// });

// dip.stock.trading.getDailyHis("17","sh000001").then((data)=>{
//     console.log(JSON.stringify(data));
// });
    
// dip.stock.trading.getMin("sh600026").then((data)=>{
//     console.log(JSON.stringify(data));
// });
// dip.stock.symbols.getStockIssue("000725").then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.symbols.getIndustryList().then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.symbols.getConceptList().then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.symbols.getAreaList().then((data)=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.index.getComponents("BK0447").then(data=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.finance.getGuideLine("000651","2018").then(data=>{
//     console.log(JSON.stringify(data));
// })
// dip.stock.finance.getBalanceSheet("000651","2019","general").then(data=>{
//     console.log(JSON.stringify(data));
// })
dip.stock.finance.getCashFlowStatment("600030","2019","security").then(data=>{
    console.log(JSON.stringify(data));
})
