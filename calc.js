var ekran = document.querySelector('.ekran')
var soni = 0
var soni2=0

document.querySelectorAll('td').forEach(function(td){
    td.addEventListener('click',function(e){
        var item = e.target.innerText
        //let s = ekran.value;
        if(item == "+" || item == "-" || item == "*" || item == "/" ){
            soni=0
        }
        
        if((ekran.value[0] == "*" || ekran.value[0] == "/")){
            ekran.value = ""
        }
        if(item == "C") {
            ekran.value = ""
        }
        else if ((ekran.value[ekran.value.length-1] =="-" && (item == "-" || item == "+" || item == "*" || item == "/")) || (ekran.value[ekran.value.length-1] =="+" && (item == "-" || item == "+" || item == "*" || item == "/")) || (ekran.value[ekran.value.length-1] =="*" && (item == "-" || item == "+" || item == "*" || item == "/")) || (ekran.value[ekran.value.length-1] =="/" && (item == "-" || item == "+" || item == "*" || item == "/"))){
            //ekran.value[ekran.value.length-1]=item
            ekran.value = ekran.value.slice(0,ekran.value.length-1)+item
            soni2 += 1
        }   
        else if(item == "R") {
            ekran.value = ekran.value.slice(0,ekran.value.length-1)
        }
        else if (ekran.value[0] =="0" ) {
            ekran.value = ""
            //ekran.value += item
        }
        else if (ekran.value =="" && item == ".") {
            ekran.value =""
        }
        else if (item == "." && soni == 0){
            soni += 1
            ekran.value += item 
        }
        else if (item == "." && soni !=0){
            item = ""
        }
        else if(item == "="){
            ekran.value = eval(ekran.value)
            soni2=0
        }
        else {
            ekran.value += item 
        }
    })
})