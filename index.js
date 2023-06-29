var image1 = document.getElementById('image');
    let i = 0;

function changeImage(){
    i++;

    if(i % 3 == 0){
        image1.src = 'Image/photo1.jpg';
    }else if(i % 2 == 0){
        image1.src = 'Image/photo2.jpg';
    }else{
        image1.src = 'Image/photo3.jpg';
    }
}

var change = document.getElementById("red_white");
var logochange = document.getElementById("rclogo");

change.onclick = function(){
    document.body.classList.toggle("redwhite");

    if(document.body.classList.contains("redwhite")){
        change.src = "Image/theme.png";
        logochange.src = "Image/logo1.png";
    }else{
        change.src = "Image/theme1.png";
        logochange.src = "Image/logo.jpg"
    }
}

let ii = 0;

//WHAT IS CODE RED
 function ShowMe(){
    ii++
    if(ii % 2 == 1){
        var xml = new XMLHttpRequest();
    xml.open('GET', 'what.xml', false);
    xml.send();
    var xmlData = xml.responseText;
    document.getElementById("tigashow1").innerHTML = xmlData;
    document.getElementById("tigashow1").style.display = "flex"
    }else{
        document.getElementById("tigashow1").style.display="none"; 
    }


}

//WHAT MADE CODE RED
let i1 = 0;
function ShowMe1(){
i1++
    if(i1 % 2 == 1){
        var xml = new XMLHttpRequest();
    xml.open('GET', 'whatmade.xml', false);
    xml.send();
    var xmlData = xml.responseText;
    document.getElementById("tigashow").innerHTML = xmlData;
    document.getElementById("tigashow").style.display = "flex"
    }else{
        document.getElementById("tigashow").style.display="none"; 
    }

}
//OBJECTIVES OF CODE RED
let i2 = 0;
function ShowMe3(){
i2++
    if(i2 % 2 == 1){
        var xml = new XMLHttpRequest();
    xml.open('GET', 'objectives.xml', false);
    xml.send();
    var xmlData = xml.responseText;
    document.getElementById("tigashow3").innerHTML = xmlData;
    document.getElementById("tigashow3").style.display = "flex"
    document.getElementById("tigashow3").style.alignItems= "center"
    }else{
        document.getElementById("tigashow3").style.display="none"; 
    }
}
let i3 = 0;
    function ShowMe2(){
        i3++
            if(i3 % 2 == 1){
                var xml = new XMLHttpRequest();
            xml.open('GET', 'wemade.xml', false);
            xml.send();
            var xmlData = xml.responseText;
            document.getElementById("tigashow2").innerHTML = xmlData;
            document.getElementById("tigashow2").style.display = "block";
            }else{
                document.getElementById("tigashow2").style.display="none"; 
            }

    }


    var image2 = document.getElementById('image2');
    let index = 0;

function changeImage1(){
    index++;

    if(index % 3 == 0){
        image2.src = 'Image/info1.jpg';
    }else if(index % 2 == 0){
        image2.src = 'Image/info2.jpg';
    }else{
        image2.src = 'Image/info3.jpg';
    }
}
