

// let str = "     salom   adwa wa  a wa w aw ";


// let str2 = "malikolmk"


// console.log(str.length);


// console.log(str.trim())
// console.log(str.trimStart)
// console.log(str.trimEnd());

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase().trim());


// console.log(str.indexOf("wa"));
// console.log(str.lastIndexOf("wa"));


// console.log(str.includes("salom"));

// console.log(str.slice(1,5));

// console.log(str.replace("salom" , "Qalesan"));

// console.log(str + str2);
// console.log(str.concat(str2));




let ism = prompt("ismingizni kiritinig")
let soso = prompt("salom " + ism + " siz ismingizni hariflarini katta yoki kichik qilasizmi?? 1)Katta 2) kichik")

if(soso === "1"){
    alert(ism.toUpperCase())
}
if(soso === "2"){
    alert(ism.toLocaleLowerCase())
}

else{
    alert("Bunday raqamcha mavjud emasss !!!!!!")
}


let joja = confirm(ism + " ismingizni neja harifligini bilishni hoxlaysizmi?")

alert("rahmat")
   
   

