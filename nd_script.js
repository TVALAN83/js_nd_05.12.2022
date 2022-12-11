console.log ('hello world!!!');


// 05.12.2022



// 0.

let myAge;
myAge = 18;
console.log(myAge);

// 1.

let user = 'Petras'; let age = 36;
console.log(user, age);

// 2.

let my_age = 28;
console.log (my_age);

// 3.

let setp1 = 'Pirmas žingsnis';
console.log (setp1);

//4. (klausimas)

{const block_Size = 14 + 25;
    console.log (block_Size);
}



//.5 (klausimas)

const block_width = 100;
console.log (block_width);


//6. backstick kabutės ``

{let userAge = 36;
let userInfo = `Vartotojo amžius: ${userAge}`;
console.log (userInfo);
} 

//7. INFINITY, o ne NaN
let userHeight = 180 / 0 ;
console.log (userHeight);

//.8 undefined ,o ne Null

let userName;
console.log (typeof userName);

//9. number

let userSize = "45" / "8";
console.log (typeof userSize);

//1.1 a)

let my_Age = 39; 
let height_me = 188; 
let foot_size = 44;

console.log (my_Age, height_me, foot_size);
//1.2 a)

const _name = 'Tomas'; 
const _surname = 'Valancauskas'; 
let proffesion = "Programmer";

console.log (_name, _surname, proffesion);

//2.1 a)

let vienas = 1;
let du = 2;
let trys = 3;
console.log(vienas + du + trys);


//2.2 a)

const vardas = 'vardenis'; 
const pavarde = 'pavardenis'; 
let profesija = 'programuotojas';

console.log (vardas + ' '+ pavarde + ' ' + `profesija yra ${profesija}`);

//3 a) `indikuokite kintamąjį (let), skirtą išsaugoti vartotojo akių spalvą`

const face = {eyeColor :"blue"};
console.log (face.eyeColor);

let eyeColor;

eyeColor ="blue";

//3 b)

const person_info = {
    _user:"Tomas", user_Name:"Nickname"
}
console.log (person_info._user, person_info.user_Name);

//3 c)

const user_Name = "John";
console.log(user_Name);

//3 d)

console.log (person_info._user === user_Name);

//3 e)

console.log(`Hello, ${user_Name}`);
// console.log('Hello, '+ user_Name);

console.log('--------------------------------');
//06.12.2022

// 1 variantas (atsakymas 13)

console.log(+'35' + -"22");

// 2 variantas
console.log(Number('35') * Number ("22"));

// 3 variantas

console.log(+'558' > 22);

// 4 variantas. Ar atspausdins 1, su šia sąlyga? Neatspausdins,nes usersCounter++ yra 0+1 = 1;

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

// Kuris variantas teisingas?
// 1 variantas Melas!, nes if sąlyga yra False.

if(1==="1"){
    console.log('Tiesa!');
}
    else{
        console.log('Melas!');
    }

//2 variantas Tiesa!, nes sąlyga yra teisinga ir užeina į if bloką su Tiesa!

    if(5=="5"){
        console.log('Tiesa!');
    }
        else{
            console.log('Melas!');
        }

//3 variantas Tiesa!, nes pirma sąlyga su 0 yra FALSE, o antra sąlyga yra " " (su tarpu tarp kabučių) yra True, todėl užeina ir gaunamas atsakymas Tiesa!

if(0){
    console.log('Melas!');
}
    else if (" "){
        console.log('Tiesa!');
    }

//INCREMENTS ++x/--x ir x--/x++
//1 variantas Atsakymas 11

let x = 5;
x += 2 + x++;
x--;
console.log(x);

//2 variantas atsakymas 22

let y = 20;
y++;
++y;
console.log(y);

//3 variantas atsakymas 13 . k = 6, nes ++k. z= 6 + (6+1) = 13.

let k = 5;
let z = 20;
k = ++k;
z = --z;
z = k + ++k;
console.log(z);

console.log('-----------------------------------------');
//Funkcijų kūrimas
// 1 UŽDAVINYS - sukurti funkciją, kuriai būtų perduodamas vienas parametras skaičius, kuris padidinamas vienetu ir grąžnamas rezultatas. Atsakymas 1, 10, -1.

function skaicius (sk){
sk += 1;
return sk;
}
console.log(skaicius(0));
console.log(skaicius(9));
console.log(skaicius(-2));

console.log('-----------------------------------------');

//2 UŽDAVINYS - Sukurti funkciją, kuriai būtų perduodamas vienas parametras skaičius (valandos) ir konvertuotų valandas į sekundes, bei grąžintų rezultatą. Atsakymas 7200, 36000, 86400.

function laikas (val){
    val = val * (60 ** 2);
    return val;
}
console.log(laikas(2));
console.log(laikas(10));
console.log(laikas(24));

console.log('-----------------------------------------');

//3 UŽDAVINYS - Sukurti funkciją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. Apskaičiuoti ir grąžinti bendrą surinktą komandos taškų skaičių. Atsakymas 6, 11.

function lenta (one, two, three){
one = one * 1;
two = two * 2;
three = three *3;
return one + two + three;
}
console.log(lenta(1, 1, 1));
console.log(lenta(2, 3, 1));

console.log('-----------------------------------------');


//4 UŽDAVINYS - parašykite funkciją, kuri apskaičiuotų trikampio plotą. Perduodami parametrai trikampio aukštinė (h) ir trikampio pagrindas (b). Funkcija grąžina trikampio plotą. Atsakymas 3, 500.

function plotas (h, b){
    return (h * b) / 2 ;
}
console.log(plotas(2,3));
console.log(plotas(20,50));

console.log('-----------------------------------------');

//5 UŽDAVINYS - parašykite funkciją, kuriai būtų paduodami 2 parametrai, skaičiai, ir funkcija grąžintų TRUE jei dviejų skaičių suma yra mažiau arba lygu 100 ir false jei daugiau už 100. Prie [else] sąlyga nebesirašo kaip ši (sk3 > 100), nebent [else if].

function tikrinimas (sk_1, sk_2){
    let sk3 = sk_1 + sk_2;
 if (sk3 <= 100) {
    return 'True';
 }
 return 'False';
 
}
 
console.log(tikrinimas(22,15));
console.log(tikrinimas(83,34));
console.log(tikrinimas(3,77));


console.log('-----------------------------------------');

//6 UŽDAVINYS - sukurti funkciją, kuri nustatytų ar du paduodami argumentai yra lygūs. Grąžiname true arba false.
// else (x1 !== x2) - šios sąlygos galima neberašyti, nes automatiškai ji prisitaiko, nes if (x1 === x2) sąlyga užfiksuota.

function palyginimas (x1, x2){
if (x1 === x2){
    return 'True';
}else (x1 !== x2)
{ return 'False';
}
}
console.log(palyginimas(4, 8));
console.log(palyginimas(2, 2));
console.log(palyginimas(2, "2"));

console.log('-----------------------------------------');

//7 UŽDAVINYS - sukurkite funkciją, kuri paskaičiuotų bendrą ūkininko gyvulių kojų skaičių. Ūkininkas pateikia tris parametrus. Pirmas parametras vištų skaičius, antras - karvių skaičius, trečias - paršelių skaičius ūkyje. Funkcija grąžina bendrą kojų skaičių.

function gyvuliai (vista, karve, kiaule){
    vista = vista * 2;
    karve = karve * 4;
    kiaule = kiaule * 4;
    return vista + karve + kiaule;
}
console.log(gyvuliai(2, 1, 1));

console.log('-----------------------------------------');

//8 UŽDAVINYS - sukurti funkciją, kuri nustatytų, kuris iš paduodamų parametrų (n1, n2) yra didesnis. Jei n1 didesnis grąžintų tekstą "n1 skaičius didesnis", jei n2 "n2 skaičius didesnis". Jei skaičiai lygūs grąžintų "n1 lygus n2". [else if(n1 == n2)] - šis tikrinimas nebereikalingas, nes arba <, arba >, kitas galimas variantas akivaizdžiai =. 

function compare (n1, n2){
if(n1 > n2){
    return `${n1} skaičius didesnis `;
}else if(n1 < n2){
    return `${n2} skaičius didesnis `;
}
    return `${n1} lygus ${n2} `;
}

console.log(compare(3, 2));
console.log(compare(2, 7));
console.log(compare(9, 9));

console.log('-----------------------------------------');

//07.12.2022 
console.log('-----------------------------------------');
console.log('-----------------------------------------');

//1 UŽDAVINYS - Sukurti funkciją, kuri gautų du parametrus (a,b). Funkcija grąžina 10 jei vienas iš skaičių = 10 arba tų skaičių suma = 10.

function numSum (a, b){
    if(a + b === 10){
        return 10;
    }else if(a === 10){
        return 10
    }else if(b === 10){
        return 10
    }
}
console.log(numSum(10, 9));
console.log(numSum(2, 10));
console.log(numSum(2, 8));

//2 UŽDAVINYS - Sukurti funkciją, kuri gauna vieną parametrą skaičių (n) ir jei skaičius dalinasi iš 100, grąžina TRUE, priešinfu atveju FALSE.

function part(n){
    if(n % 100 == 0){
        return `$(n) is even`;
    }
    return `$(n) is odd`;
}

console.log(part(100));
console.log(part(1));
console.log(part(1000));

//3 UŽDAVINYS - Sukurk funkciją, kuri patikrintų ar asmuo turi leidimą ir ar asmuo yra vyresnis nei 18 metų. Abi sąlygos būtinos, kad grąžintų TRUE, priešingu atveju grąžina FALSE.

function inspect (_age_, boo){
if(_age_ === 18 && boo === true){
    return 'true';
}
return 'false'
}

console.log(inspect(12, false));
console.log(inspect(23, true));
console.log(inspect(18, true));

console.log('-----------------------------------------');

//4 UŽDAVINYS - Sukurti funkciją, kuri gauna du parametrus (n, m) skaičius kaip stringą pvz "2" ir "5". Juos susumuoja ir grąžina taip pat stringą.


function _num_(n, m){
sum = +n + +m;
// sum = sum.toString(); Sutrumpinimas  kur Return
return sum.toString();
}
console.log(typeof _num_('2', '9'));
console.log(_num_('', ''));
console.log(_num_('2', ''));
console.log(_num_('-5', '3'));

console.log('-----------------------------------------');

//5 UŽDAVINYS - Sukurti funkciją, kuri gauna vieną parametrą skaičių (n) ir grąžina neigiamą skaičių, jei skaičius neigiamas nieko nedaro, grąžina tą patį neigiamą skaičių.


function return_ (n){
    if(n >0 ){n = -n};
    {
        return n;
    }
}
console.log(return_(-2));
console.log(return_(7));
console.log(return_(-15));

//6 UŽDAVINYS - Kavos puodelių skaičiuotuvas. 6 nusiperki, 7 nemokamas. Sukurti funkciją, kuri apskaičiuotų kiek kavos puodelių iš viso pirkėjas gaus.

//1-as variantas

function cups(n){
 let x = Math.floor(n / 6);
  if(n >= 2){
 return (x + n);
}
else if (x = 1){
    return ++n;
}
}
console.log(cups(7));
console.log(cups(13));
console.log(cups(18));
console.log(cups(6));

console.log('-----------------------------------------');

// 2-as variantas

let kv1 = 6;
    console.log(Math.floor(kv1 / 6)+kv1); //Ats.: 7
 let kv2 = 7;
    console.log(Math.floor(kv2 / 6)+kv2); // Ats.:8

console.log('-----------------------------------------');



//7 UŽDAVINYS - Parašyti funkciją, kuri tikrintų ar paduodamo string'o ilgis yra lyginis skaičius ar ne. Grąžintų atsakymą tekstu lyginis / nelyginis.

function text_ (word){
    if (word.length % 2 == 0){
    return `${word} yra lyginis`;
   }
  return `${word} yra nelyginis`;
}
console.log(text_('figura'));
console.log(text_('batas'));
console.log(text_('figura '));

// console.log('-----------------------------------------');













