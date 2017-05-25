var ejsExcel = require("ejsExcel");
var fs = require("fs");
//获得Excel模板的buffer对象
var exlBuf = fs.readFileSync("./temp.xlsx");

//数据源
var data = [{ "table_name": "现金报表", "date": '2014-04-09' }]
    //用数据源(对象)data渲染Excel模板
ejsExcel.renderExcelCb(exlBuf, data, function(err, exlBuf2) {
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFileSync("./report2.xlsx", exlBuf2);
    console.log("生成report2.xlsx");
});