
// Numbers

let data;

data = Number("3");
data = parseInt("5");
data = parseFloat("6.7");
data = parseInt("5k");      //5 yazdırır.
data = parseInt("k5");      //nan yazdırır.
data = isNaN("k5");         //true yazdırır. DÖnüştürülemez.
data = isNaN("5");          //false yazdırır. DÖnüştürülebilir.

var numb = 29.23879239874;
data = numb.toPrecision(5); //soldan itibaren 5 basamağı alır.
data = numb.toFixed(3);     //virgülden sonra 3 basamağı alır.

data = Math.PI;             //pi sayısını alır. 
data = Math.round(data);    //sayıyı yuvarlar.
data = Math.ceil(3.1);      //sayıyı yukarı yuvarlar.
data = Math.floor(3.9);     //aşağı yuvarlar.
data = Math.pow(2,6);       //üs alma.
data = Math.sqrt(25);       //karekök alma.
data = Math.abs(-50)        //mutlak değer alma.
data = Math.min(3,23,6,343,45,2,45);
data = Math.max(3,23,6,343,45,2,45);
data = Math.random()        //0-1 arası random değer.
data = Math.random()*10     //0-10 arası.
data = Math.round(Math.random()*100+1)   //ondalıksız, 1-101 arası bir değer.





console.log(data);
console.log(typeof data);