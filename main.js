console.groupCollapsed("js");

// DOM 文件物件模式
// 文件.透過 ID 搜尋元素("元素名稱").插入 HTML = "文字訊息";
document.getElementById("box1").innerHTML = "hello";

// 變數 variable
// 用於儲存資料
// 資料類型
var a = 10;      // 整數
var b = 1.5;     // 浮點數
var c = "文字"   // 字串
var d = true;    // 布林值 true or false

console.log(a);

// 運算子
// 數學 加減乘除餘 + - * / %

//程式內的 = 指定符號
// = 右邊先執行在指定給左邊
a = a / 2;

console.log(a);

var e = 7;

e = e**2;

console.log(e);

//指定運算子，適用於+ - * / %

var num1 = 10;
//num1 = num1 + 5;
num1 += 5;
console.log("指定運算子:"+num1);

// 自訂函式(方法) function、method
// 語法:
//函式 函式名稱 (參數1，參數2，...){程式內容}
function functionA() {
    console.log("函式");
}
// 需要呼叫才會執行
functionA();

function add(number) {
    number += 10;
    console.log("加10="+number);
}

add(10);
add(100);

function mul(a, b) {
    console.log("相乘="+(a* b));
}

mul(10, 10);

//物件 { 物件資料名稱:物件資料值}
var car = {
    brand: "BWM",
    cc: 2000,
    color:"gold",
    drive: function(){
        console.log("開車中");
    }
}

console.log("汽車的牌子:"+ car.brand);
car.drive();

// 練習事件

var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("點擊");
}

box2.onmouseenter = () => {
    console.log("滑入");
}

box2.onmouseleave = () => {
    console.log("滑出");
}

//陣列 Array

//本來
var numberA = 10;
var numberB = 100;
var numberC = 40;
//陣列
var numberObject = {
    A: 10,
    B: 100,
    C: 40
}

//陣列資料[0, 1, 2, 3]
var numbers = [10, 100, 40, 9];

console.log("陣列第三筆資料:" + numbers[2]);

numbers[0] = 999;

console.log("陣列第一筆資料:"+numbers[0]);

console.log("陣列的數量:"+numbers.length);

//比較運算子 > < >= <= == !=
//w3school-js comparisons
var testA = 100;
var testB = 50;

console.log(testA != testB);

// == 與 === 的差異
var testC = 7;
var testD = "7";

console.log("== 的結果：" + (testC == testD));   // 比較值
console.log("=== 的結果：" + (testC === testD)); // 比較值與類型

// 邏輯運算子
var testE = true;

console.log("顛倒：" + !testE);

// 並且 &&
// 只要有一個 false 結果就是 false
console.log(true && true);          // t
console.log(true && false);         // f
console.log(false && true);         // f
console.log(false && false);        // f

// 或者 ||
// 只要有一個 true 結果就是 true
console.log(true || true);          // t
console.log(true || false);         // t
console.log(false || true);         // t
console.log(false || false);        // f