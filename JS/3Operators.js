
let data;
const a = 30;
const b = 10;
let c = 15;
let d = 8


// 1. Aritmetik Operatörler 

data = a+b;
data = a-b;
data = a*b;
data = a/b;
// data = a++;     //a const olduğu için işlem hata verir.
data = c++;     //c'nin asıl değerini yazdırır, daha sonra arttırır. Değişiklik c için de gerçekleşir. 
data = ++c;     //değeri arttırıp yazdırır.
data = d--;
data = --d;
data = a%b;     // mod alma


// 2. Atama Operatörleri

data = a;
data += b;
data -= d;
data *= b;
data /= d;
data %= data;


// 3. Karşılaştırma Operatörleri

data = a==b;    //eşitlik sorgular.
data = d==d;
data = 5==="5";     //=== ile hem sayılar hem türler karşılaştırılır. false verir.
data = 5=="5";      //== ile sadece sayılar karşılaştırılır. true verir.
data = a!=b;
data = a!==b;       //türleri de karşılaştırdı.
data = a<b;
data = b>d;
data = c>=d;
data = 5<="5";


// 4. Mantıksal Operatörler

data = (a<b) && (c>d);
data = (a<b) || (c>d);
data = !(a>b)   //not operatörü



console.log("data: "+ data);
console.log("type of data: " + typeof data);
console.log("c: " + c);
console.log("d: " + d);


