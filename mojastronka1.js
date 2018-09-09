function ChangeMain(lol){
  $("#main").fadeOut(0);
    if (lol=='DaneOsobowe'){
        let plik = "<ul>"+
            "<li class=\"points\" >Dane osobowe</li>"+
            "<hr><div class=\"container-fluid\" id=\"DaneOs\">"+
                  "<div class=\" row\">"+
                    "<div class=\"col-4\">"+
                      "<img id=\"profilowe\" src=\"PL.jpg\" alt=\"Przemas\">"+
                    "</div>"+
                    "<div class=\"col-8\">"+
                    "<table class=\"dane\">"+
                    "<tr>"+
                        "<td class=\"data\">Data urodzenia:</td>"+
                        "<td>21.10.1990r.</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td class=\"data\">e-mail:</td>"+
                        "<td><a  href=\"mailto:przemyslaw.liana@gmail.com\"><img id=\"gmail\" src=\"materiały/gmail.jpg\"></a></a></td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td class=\"data\">Numer telefonu:</td>"+
                        "<td>692 407 128</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>"+
                        "<div  class=\"footer1 container\">"+
                          "<div class=\"row\">"+
                            "<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">"+
                              "<ul class=\"list-unstyled list-inline social \">"+
                                "<li class=\"list-inline-item\"><a href=\"https://www.facebook.com/pszemek.liana\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>"+
                                "<li class=\"list-inline-item\"><a href=\"https://www.linkedin.com/in/przemek-liana-77639112b/\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a></li>"+
                                "<li class=\"list-inline-item\"><a href=\"https://github.com/lok007\" target=\"_blank\"><i class=\"fa fa-github-square\"></i></a></li>"+
                              "</ul>"+
                            "</div>"+
                            "</hr>"+
                          "</div>"+
                        "</div>"+
                        "</td>"+
                    "</tr>"+

                "</table>"+
                    "</div>"+
                  "</div>"+
                  "<div class=\"row\">"+
                  "<div class=\"col-12\"><iframe class=\"maps\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.0063418579166!2d18.60701595178057!3d54.39220298011432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd74c7d8e52335%3A0xa5968188761112c0!2s%C5%BBwirki+i+Wigury+3A%2C+Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1525012756412/\""+
                  "width=100%"+
                  "frameborder=\"0\""+
                  "style=\"border:0\""+
                  "allowfullscreen></iframe>"+
                  "</div>"+
                "</div>"+
              "</div>"+
                "<li class=\"points\">Wykształcenie</li>"+
                "<div class=\"skills container-fluid\" >"+
                "<div class=\"row\">"+
                "<div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8\">"+
                  "<table class=\"dane\">"+
                    "<tr>"+
                      "<td>2009-2015: </td>"+
                      "<td> Studia I i II stopnia, Politechnika Gdańska</td>"+
                    "</tr>"+
                    "<tr>"+
                      "<td>Kierunek:</td>"+
                      "<td>Budownictwo</td>"+
                    "</tr>"+
                    "<tr>"+
                      "<td>Katedra:</td>"+
                      "<td>Budownictwo Ogólne, ukończone z tytułem: Magister Inżynier</td>"+
                    "</tr>"+
                  "</table >"+
                  "</div>"+
                    "<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3\">"+
                      "<a href=\"https://pg.edu.pl/\" target=\"_blank\"><img  class=\"pg\" src=\"pg_logo_kolor.jpg\" alt=\"Politechnika Gdańska\"></a>"+
                    "</div>"+
                "</div>"+
            "</div>"+
            "<li id=\"skills\" class=\"points\">Umiejętności</li>"+
            "<div class=\"skills\">"+
            "<table class=\"dane\">"+
                "<ul>"+
                    "<tr><td>- Znajomość języków programowania: Javascript, HTML, CSS</td></tr>"+
                    "<tr><td>- Znajomość frameworków: React, Bootstrap, JQuery </td></tr>"+
                    "<tr><td>- uprawnienia do kierowania robotami budowlanymi bez ograniczneń w specjalności konstrukcyjno budowlanej</td></tr>"+
                    "<tr><td>- obsługa programów: AutoCAD, Robot Structural Analysis, SOFiSTiK, ABAQUS, Microsoft Office, Norma Pro</td></tr>"+
                    "<tr><td>- prawo jazdy kat. B </td></tr>"+
                    "<tr><td>- język angielski w stopniu komunikatywnym</td></tr>"+
                "</ul>"+
            "</table>"+
            "</div>"+
            "<br>"+
            "<li id=\"Hobby\" class=\"points\">Zainteresowania</li>"+
            "<div class=\"skills\">"+
            "<table class=\"dane\">"+
                "<ul>"+
                    "<tr><td>- Sporty zespołowe: piłka nożna, siatkówka, koszykówka</td></tr>"+
                    "<tr><td>- Ksiązki fantasy</td></tr>"+
                    "<tr><td>- Smocze łodzie <a href=\"https://www.facebook.com/PGSmokiPolnocy/?hc_ref=ARTIs2XSipG77-xfamg8H2doaN2U5OzvhQSr5S6JN-ms15Ec6-8INRg1Imd8Y29GG5c&fref=nf\" target=\"_blank\">PG Smoki Pólnocy</a></td></tr>"+
                "</ul>"+
            "</table>"+
            "</div>"+
            "<br>"+
        "<br>";
            document.getElementById("main").innerHTML = plik;
    }


    if (lol=='DoswZaw'){
        let plik = "<li id=\"DoswZaw\" class=\"points\">Doświadczenie zawodowe</li>"+
            "<hr>"+
            "<ul>"+
                "<li class=\"firms\"><a href=\"http://www.investkomfort.pl/\" target=\"_blank\"><img class=\"logo\" src=\"logo-invest-komfort.png\" alt=\"Invest Komfort\"></a></li>"+
                "<div class=\"container-fluid\" id=\"IKMenu\">"+
                    "<div class=\"row\">"+
                      "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">"+
                        "<a href=\"#containerIK\"  onclick=\"showIK('NoweKolibki')\" onmouseover=\"changeMid('NoweKolibki')\" onmouseleave=\"changeMid2('NoweKolibki')\"><img id=\"NoweKolibki\" class=\"medium\" src=\"NoweKolibki/slajd1.jpg\" alt=\"slajd1\"></a>"+
                      "</div>"+
                    "</div>"+
                "</div>"+
                "<hr>"+
                "<div class=\"container-fluid\" id=\"containerIK\"></div>"+
                "<button onclick=\"toggleIK()\"  id=\"rozwinIK\" class=\"btn btn-block btn-primary\"><i class=\"fa fa-info-circle\"></i> Szczegóły inwestycji</button>"+
                "<hr>"+
                "<li class=\"firms\"><a href=\"http://www.kamaro.info\" target=\"_blank\"><img class=\"logo\" src=\"Logo_Kamaro.jpg\" alt=\"Kamaro\"></a></li>"+
                "<div  class=\"container-fluid\" id=\"KamaroMenu\">"+
                  "<div class=\"row\">"+
                   "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerUsterki\" onclick=\"showUsterki('rycerska')\" onmouseover=\"changeMid('rycerska')\" onmouseleave=\"changeMid2('rycerska')\"><img id=\"rycerska\" class=\"medium\" src=\"rycerska/slajd1.jpg\" alt=\"slajd1\"></a></div>"+
                   "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerUsterki\" onclick=\"showUsterki('zlobek')\" onmouseover=\"changeMid('zlobek')\"  onmouseleave=\"changeMid2('zlobek')\"><img id=\"zlobek\" class=\"medium\" src=\"usterki/zlobek/slajd2.jpg\" alt=\"slajd2\"></a></div>"+
                   "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerUsterki\" onclick=\"showUsterki('straz')\" onmouseover=\"changeMid('straz')\"  onmouseleave=\"changeMid2('straz')\"><img id=\"straz\" class=\"medium\" src=\"usterki/straz/slajd1.jpg\" alt=\"slajd1\"></a></div>"+
                   "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerUsterki\" onclick=\"showUsterki('tuwima')\" onmouseover=\"changeMid('tuwima')\"  onmouseleave=\"changeMid2('tuwima')\"><img id=\"tuwima\" class=\"medium\" src=\"usterki/tuwima/slajd1.jpg\" alt=\"slajd1\"></a></div>"+
                   "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerUsterki\" onclick=\"showUsterki('eureka')\" onmouseover=\"changeMid('eureka')\"  onmouseleave=\"changeMid2('eureka')\"><img id=\"eureka\" class=\"medium\" src=\"eureka/slajd1.jpg\" alt=\"slajd1\"></a></div>"+
                   "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerUsterki\" onclick=\"showUsterki('KPRP')\" onmouseover=\"changeMid('KPRP')\"  onmouseleave=\"changeMid2('KPRP')\"><img id=\"KPRP\" class=\"medium\" src=\"KPRP/slajd1.jpg\" alt=\"slajd1\"></a></div>"+
                   "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerUsterki\" onclick=\"showUsterki('malbork')\" onmouseover=\"changeMid('malbork')\"  onmouseleave=\"changeMid2('malbork')\"><img id=\"malbork\" class=\"medium\" src=\"malbork/slajd1.jpg\" alt=\"slajd1\"></a></div>"+
                "</div>"+
                "</div>"+
   "<hr>"+
    "<div class=\"container-fluid\" id=\"containerUsterki\"></div>"+
    "<button onclick=\"toggleUsterki()\" id=\"rozwinUsterki\" class=\"btn btn-block btn-primary\"><i class=\"fa fa-info-circle\"></i> Szczegóły inwestycji</button>"+
    "<hr>"+
    "<li class=\"firms\"><a href=\"http://www.polswedprojekt.com/\" target=\"_blank\"><img class=\"logo\" src=\"logo_polswed.png\" alt=\"POL-SWED Projekt\"></a></b></li>"+
      "<div class=\"row\">"+
      "<div class=\"col-12\">"+
        "<div class=\"container-fluid\" id=\"PSMenu\">"+
        "<div class=\"row\">"+
            "<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\"><a href=\"#containerPS\" onclick=\"showPS('polswed')\" onmouseover=\"changeMid('polswed')\" onmouseleave=\"changeMid2('polswed')\"><img id=\"polswed\" class=\"medium\" src=\"polswed/slajd1.jpg\" alt=\"slajd1\"></a></div>"+
        "</div>"+
        "</div>"+
        "<hr>"+
        "<div class=\"row\">"+
        "<div class=\"col-12\">"+
        "<div class=\"container-fluid\" id=\"containerPS\"></div>"+
        "</div>"+
        "</div>"+
        "<button onclick=\"togglePS()\" id=\"rozwinPS\" class=\"btn btn-block btn-primary\"><i class=\"fa fa-info-circle\"></i> Szczegóły inwestycji</button>"+
        "<hr>"+
        "<li class=\"firms\"><b>Firma: <a href=\"https://www.arch-projekty.pl/stabilis-biuro-projektowe-tomasz-okroj_i15129\" target=\"_blank\">Tomasz Okrój Stabilis Biuro Projektowe</a></b></li>"+
        "<table class=\"dane \">"+
            "<tr>"+
                "<td class=\"data\">Maj 2014 - Lipiec 2015</td>"+
                "<td>Asystent projektanta</td>"+
            "</tr>"+
            "<tr>"+
                "<td class=\"data\"></td>"+
                "<td>Wykonywanie obliczeń w programie Robot Structural Analysis</td>"+
            "</tr>"+
            "<tr>"+
                "<td class=\"data\"></td>"+
                "<td>Wykonywanie rysunków w programie AutoCAD</td>"+
            "</tr>"+
        "</table>"+

    "</ul>"
        ;
            document.getElementById("main").innerHTML = plik;
    }

    if (lol=='frontend'){
        let plik =
        "<div  class=\"container-fluid\">"+
          "<div class='row'>"+
            "<div class=\"col-12 \"><p id=frontend class=\"points\">GRY:</p></div>"+
            "<hr>"+
            "<div class=\"col-6 col-sm-6 col-md-4 col-lg-3\"><div class=\" frameGames\"><a  href=\"szubienica/szubienica.html\" target=_blank>"+
            "<p class=\"gameFont\">WISIELEC</p><img class=\"games\"  src=\"szubienica/img/wisielec.jpg\" >"+
            "</a></div></div>"+
            "<div class=\"col-6 col-sm-6 col-md-4 col-lg-3\"><div class=\" frameGames\"><a  target=\"_blank\" href=\"memory witcher/gra.html\">"+
            "<p class=\"gameFont\">MEMORY WITCHER</p><img class=\"games\" src=\"memory witcher/img/witchermain.jpg\" >"+
            "</a></div></div>"+
            "<div class=\"col-6 col-sm-6 col-md-4 col-lg-3\"><div class=\" frameGames\"><a target=\"_blank\" href=\"memoryMarvel/gra.html\">"+
            "<p class=\"gameFont\">MEMORY MARVEL</p><img class=\"games\" src=\"memoryMarvel/img/marvelmain.jpg\" >"+
            "</a></div></div>"+
            "<div class=\"col-6 col-sm-6 col-md-4 col-lg-3\"><div class=\" frameGames\"><a target=\"_blank\" href=\"statki/battleship.html\">"+
            "<p class=\"gameFont\">STATKI</p><img class=\"games\" src=\"statki/board2.jpg\" >"+
            "</a></div></div>"+
          "</div>"+
        "</div>"+
        "<div  class=\"container-fluid\">"+
          "<div class='row'>"+
          "<hr>"+
            "<div class=\"col-12 \"><p class=\"points\">KSIĄŻKI:</p></div>"+
            "<div class=\"col-6 col-sm-4 col-md-3 col-lg-2\"><a href=\"http://ferrante.pl/books/html/book.pdf\" target=\"_blank\"><img  class=\"book\" src=\"materiały/pierwszastrona.png\" alt=\"\"></a></div>"+
            "<div class=\"col-6 col-sm-4 col-md-3 col-lg-2\"><a href=\"https://helion.pl/ksiazki/programowanie-w-javascript-rusz-glowa-eric-t-freeman-elisabeth-robson,prjsrg.htm#format/e\" target=\"_blank\"><img  class=\"book\" src=\"materiały/jsruszglowa.jpg\" alt=\"\"></a></div>"+
            "<div class=\"col-6 col-sm-4 col-md-3 col-lg-2\"><a href=\"https://helion.pl/ksiazki/javascript-i-jquery-interaktywne-strony-www-dla-kazdego-jon-duckett,jsqwdk.htm#format/d\" target=\"_blank\"><img  class=\"book\" src=\"materiały/js%20i%20jq.jpg\" alt=\"\"></a></div>"+
            "<div class=\"col-6 col-sm-4 col-md-3 col-lg-2\"><a href=\"https://helion.pl/ksiazki/html-i-css-zaprojektuj-i-zbuduj-witryne-www-podrecznik-front-end-developera-jon-duckett,htcsww.htm#format/d\" target=\"_blank\"><img  class=\"book\" src=\"materiały/html%20i%20css.jpg\" alt=\"\"></a></div>"+
          "</div>"+
          "</div>"+
          "</div>"+
          "<div  class=\"container-fluid\">"+
            "<div class='row'>"+
            "<div class=\"col-12 \"><p class=\"points\">STRONY INTERNETOWE I KURSY:</p></div>"+
            "<div class=\"col-4 col-sm-4 col-md-4 col-lg-3\"><a href=\"http://miroslawzelent.pl/kurs-javascript/skrypty-js-pierwszy-projekt/\" target=\"_blank\"><img  class=\"site\" src=\"materiały/zelent.png\" alt=\"\"></a></div>"+
            "<div class=\"col-4 col-sm-4 col-md-4 col-lg-3\"><a href=\"https://www.w3resource.com/javascript-exercises/\" target=\"_blank\"><img  class=\"site\" src=\"materiały/w3resource.png\" alt=\"\"></a></div>"+
            "<div class=\"col-4 col-sm-4 col-md-4 col-lg-3\"><a href=\"https://www.w3schools.com/js/\" target=\"_blank\"><img  class=\"site\" src=\"materiały/w3schools.png\" alt=\"\"></a></div>"+
            "<div class=\"col-4 col-sm-4 col-md-4 col-lg-3\"><a href=\"https://learn.freecodecamp.org/\" target=\"_blank\"><img  class=\"site\" src=\"materiały/Free-code-camp-banner.jpg\" alt=\"\"></a></div>"+
          "</div>"+
          "</div>"+
          "<div  class=\"container-fluid\">"+
            "<div class='row'>"+
            "<div class=\"col-12 \"><p class=\"points\">ZNAJOMOŚĆ:</p></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><a href=\"https://www.ubuntu.com/\" target=\"_blank\"><img  class=\"program\" src=\"materiały/linux.jpg\" alt=\"\"></a></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><a href=\"https://github.com/lok007\" target=\"_blank\"><img  class=\"program\" src=\"materiały/github.png\" alt=\"\"></a></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><a href=\"https://www.jetbrains.com/webstorm/\" target=\"_blank\"><img  class=\"program\" src=\"materiały/ws.jpg\" alt=\"\"></a></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><a href=\"https://atom.io/\" target=\"_blank\"><img  class=\"program\" src=\"materiały/atom.jpg\" alt=\"\"></a></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><img  class=\"program\" src=\"materiały/html.png\" alt=\"\"></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><img  class=\"program\" src=\"materiały/react.png\" alt=\"\"></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><img  class=\"program\" src=\"materiały/jquerry.png\" alt=\"\"></div>"+
            "<div class=\"col-4 col-sm-4 col-md-3 col-lg-2\"><img  class=\"program\" src=\"materiały/bootstrap.jpg\" alt=\"\"></div>"+
            "</div>"+
          "</div>";

            document.getElementById("main").innerHTML = plik;
    }

    $("#main").fadeIn(800);
}



function changeMid(bud){
    var plik = document.getElementById(bud);
    var x = plik.src;
    x = x.replace(".jpg",'prim.jpg');
    plik.src = x;
}

function changeMid2(bud){
    var plik = document.getElementById(bud);
    var x = plik.src;
    x = x.replace("prim.jpg",'.jpg');
    plik.src = x;
}


function ustawslajdEureka(numer){
    $("#sliderEureka").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"eureka/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderEureka").innerHTML = plik;
    $("#sliderEureka").fadeIn(800);

}

function ustawslajdNK(numer){
    $("#sliderNK").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"NoweKolibki/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderNK").innerHTML = plik;
    $("#sliderNK").fadeIn(800);

}

function ustawslajdTuwima(numer){
    $("#sliderTuwima").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"usterki/tuwima/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderTuwima").innerHTML = plik;
    $("#sliderTuwima").fadeIn(800);

}

function ustawslajdStraz(numer){
    $("#sliderStraz").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"usterki/straz/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderStraz").innerHTML = plik;
    $("#sliderStraz").fadeIn(800);

}

function ustawslajdKPRP(numer){
    $("#sliderKPRP").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"KPRP/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderKPRP").innerHTML = plik;
    $("#sliderKPRP").fadeIn(800);

}
function ustawslajdRycerska(numer){
    $("#sliderRycerska").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"rycerska/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderRycerska").innerHTML = plik;
    $("#sliderRycerska").fadeIn(800);

}

function ustawslajdMalbork(numer){
    $("#sliderMalbork").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"malbork/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderMalbork").innerHTML = plik;
    $("#sliderMalbork").fadeIn(800);

}

function ustawslajdPS(numer){
    $("#sliderPS").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"polswed/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderPS").innerHTML = plik;
    $("#sliderPS").fadeIn(800);

}

function ustawslajdZlobek(numer){
    if(numer==1){
        $("#sliderZlobek").fadeOut(0);
        var plik = "<iframe class=\"sliders\" src=\"https://www.youtube.com/embed/2u9O37tTQ-Y\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
        document.getElementById("sliderZlobek").innerHTML = plik;
        $("#sliderZlobek").fadeIn(800);}
    else {
        $("#sliderZlobek").fadeOut(0);
        var plik = "<img class =\"sliders\" src=\"usterki/zlobek/slajd" + numer + ".jpg\" />";
        document.getElementById("sliderZlobek").innerHTML = plik;
        $("#sliderZlobek").fadeIn(800);
    }
}


function toggleUsterki(){
        $("#containerUsterki").slideToggle('slow');
    };

function toggleIK(){
        $("#containerIK").slideToggle('slow');
    };

function togglePS(){
        $("#containerPS").slideToggle('slow');
    };


function nextPic(elementId, elementId2){
    var plik2 = document.getElementById(elementId2);
    var last = plik2.lastChild;
    var last1 = last.firstChild;;
    var lastsrc = last1.src
    var lastnr = lastsrc.slice(lastsrc.length-6, lastsrc.length-4);
    var plik = document.getElementById(elementId).firstChild;
    var x = plik.src;
    var y = x.slice(x.length-6, x.length-4);

    if (isNaN(y)){
        var y = x.slice(x.length-5, x.length-4);
    }
    else {var y = x.slice(x.length-6, x.length-4); }
    var n = Number(y);
    if(n==lastnr){
        n=0;
    }
    var z = n+1;
    x = x.replace(""+y+".jpg",""+z+".jpg");
    plik.src = x;
}

function previousPic(elementId, elementId2){
    var plik2 = document.getElementById(elementId2);
    var last = plik2.lastChild;
    var last1 = last.firstChild;
    var lastsrc = last1.src
    var lastnr = lastsrc.slice(lastsrc.length-6, lastsrc.length-4);
    var lastnr1 = Number(lastnr)+1;
    var plik = document.getElementById(elementId).firstChild;
    var x = plik.src;
    var y = x.slice(x.length-6, x.length-4);
    if (isNaN(y)){
        var y = x.slice(x.length-5, x.length-4);
    }
    else {var y = x.slice(x.length-6, x.length-4); }
    var n = Number(y);
    if(n==1){
        n=lastnr1;
    }
    var z = n-1;
    x = x.replace(""+y+".jpg",""+z+".jpg");
    plik.src = x;
}

function changeMid(bud){
    var plik = document.getElementById(bud);
    var x = plik.src;
    x = x.replace(".jpg",'prim.jpg');
    plik.src = x;
}




function showUsterki(bud){
    $("#containerUsterki").slideDown('slow');
    if (bud=='zlobek'){
        let plik =
            "<h4 class='text1'>Gmina Luzino-Budowa Żłobka w systemie Zaprojektuj i Wykonaj</h4>"+
            "<p class='text'><b> Zakres obowiązków: Obsługa usterkowa obiektu </b></p>"+
            "<div id='containerZlobek'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdZlobek(1)\"><img class=\"mini\" src=\"usterki/zlobek/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdZlobek(2)\"><img class=\"mini\" src=\"usterki/zlobek/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdZlobek(3)\"><img class=\"mini\" src=\"usterki/zlobek/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdZlobek(4)\"><img class=\"mini\" src=\"usterki/zlobek/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdZlobek(5)\"><img class=\"mini\" src=\"usterki/zlobek/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdZlobek(6)\"><img class=\"mini\" src=\"usterki/zlobek/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdZlobek(7)\"><img class=\"mini\" src=\"usterki/zlobek/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdZlobek(8)\"><img class=\"mini\" src=\"usterki/zlobek/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdZlobek(9)\"><img class=\"mini\" src=\"usterki/zlobek/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdZlobek(10)\"><img class=\"mini\" src=\"usterki/zlobek/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<div><img onclick='previousPic(\"sliderZlobek\", \"containerZlobek\")' class='cursor' src='left.png' alt='left'></div><div class=\"frameNK\"><div  id=\"sliderZlobek\" ><img class=\"sliders\" src=\"usterki/zlobek/slajd1.jpg\" alt=\"slajd1\"></div></div><div><img onclick='nextPic(\"sliderZlobek\", \"containerZlobek\")' class='cursor' src='right.png' alt='right'></div>"+
            "<div class='row'>"+
            "<div class=\"col-12 col-sm-12 col-md-12 col-lg-12\">"+
            "<iframe id='yt' class=\"sliders\" src=\"https://www.youtube.com/embed/2u9O37tTQ-Y\" frameborder=\"0\"" +
            " allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>"
            "</div>"+
            "</div>";
            document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='tuwima'){
        let plik =
            "<h4 class='text1'>Kamienica w Gdańsku, ul. Tuwima</h4>"+
            "<p class='text'>Obiekt został wybudowany w 1907r. wg projektu architekta Georga Froese. Posiada dwie kondygnacje nadziemne," +
            " użytkowe poddasze i jest w całości podpiwniczony. Kamienica została wybudowana w stylu klasycyzującym," +
            " z charakterystyczną trzykondygnacyjną werandą od frontu oraz bogatym wystrojem elewacji frontowej, wykonanym w drewnie. </p>"+
            "<p class='text'>W trakcie prac budynek został niemal w całości rozebrany z uwagi na duże zdewastowanie." +
            " Pozostawiona została  jedynie frontowa część z dekoracyjną elewacją, która poddana została zabiegom konserwatorskim." +
            " Obiekt został odtworzony z dokonaniem niewielkich korekt, wynikających z przyjętej funkcji budynku zamieszkania zbiorowego oraz z zapisów w planie dotyczących parkowania samochodów.</p>"+
            "<p class='text'><b> Zakres obowiązków: Obsługa usterkowa obiektu</b></p>"+
            "<div id='containerTuwima'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdTuwima(1)\"><img class=\"mini\" src=\"usterki/tuwima/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdTuwima(2)\"><img class=\"mini\" src=\"usterki/tuwima/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdTuwima(3)\"><img class=\"mini\" src=\"usterki/tuwima/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdTuwima(4)\"><img class=\"mini\" src=\"usterki/tuwima/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdTuwima(5)\"><img class=\"mini\" src=\"usterki/tuwima/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdTuwima(6)\"><img class=\"mini\" src=\"usterki/tuwima/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdTuwima(7)\"><img class=\"mini\" src=\"usterki/tuwima/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdTuwima(8)\"><img class=\"mini\" src=\"usterki/tuwima/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdTuwima(9)\"><img class=\"mini\" src=\"usterki/tuwima/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdTuwima(10)\"><img class=\"mini\" src=\"usterki/tuwima/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderTuwima\", \"containerTuwima\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderTuwima\" ><img class =\"sliders\" src=\"usterki/tuwima/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderTuwima\", \"containerTuwima\")' class='cursor' src='right.png' alt='right'>";
            document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='straz'){
        let plik =
            "<h4 class='text1'>Ochotnicza Straż Pożarna W Żukowie</h4>"+
            "<p class='text'> Wybudowany obiekt łączy trzy funkcje: Remiza Ochotniczej Straży Pożarnej, Pogotowie Ratunkowe oraz Centrum Zarządzania Kryzysowego.</p>"+
            "<p class='text'>Budynek jest dwukondygnacyjny z górującą ponad nim wieżą strażacką. Forma architektoniczna budynku jest prosta, spójna, minimalna i zarazem nowoczesna," +
            " dostosowana kolorystycznie do istniejącej zabudowy i czytelnej funkcji.</p>"+
            "<p class='text'>Obiekt wykonany jest w technologii tradycyjnej, murowanej o układzie zewnętrznych ścian konstrukcyjnych ze stropami żelbetowymi kanałowymi nad poziomem piwnicy," +
            " parteru oraz pięter, przykryty dachem dwuspadowym o konstrukcji drewnianej. Posadowienie na żelbetowych ławach i stopach fundamentowych pod ścianami i kominami.</p>"+
            "<p class='text'><b> Zakres obowiązków: Obsługa usterkowa obiektu </b></p>"+
            "<div id='containerStraz'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdStraz(1)\"><img class=\"mini\" src=\"usterki/straz/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdStraz(2)\"><img class=\"mini\" src=\"usterki/straz/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdStraz(3)\"><img class=\"mini\" src=\"usterki/straz/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdStraz(4)\"><img class=\"mini\" src=\"usterki/straz/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdStraz(5)\"><img class=\"mini\" src=\"usterki/straz/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdStraz(6)\"><img class=\"mini\" src=\"usterki/straz/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdStraz(7)\"><img class=\"mini\" src=\"usterki/straz/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdStraz(8)\"><img class=\"mini\" src=\"usterki/straz/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdStraz(9)\"><img class=\"mini\" src=\"usterki/straz/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdStraz(10)\"><img class=\"mini\" src=\"usterki/straz/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderStraz\", \"containerStraz\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderStraz\" ><img class =\"sliders\" src=\"usterki/straz/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderStraz\", \"containerStraz\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='eureka'){
        let plik =
            "<h4 class='text1'>Centrum Szkoleniowo-Rehabilitacyjne Eureka</h4>"+
            "<p class='text'>Remont obiektu o charakterze zabytkowym.</p>"+
            "<p class='text'>Centrum Szkoleniowo-Rehabilitacyjne „EUREKA” będzie pełniło funkcje szkoleniowo-konferencyjne, hotelowe, gastronomiczne z funkcją hotelową i rehabilitacyjne.\n" +
            "Obiekt o charakterze zabytkowym zyskał nowe oblicze i tym samym stanowić bedzie ozdobę pasa nadmorskiego..</p>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerEureka' class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdEureka(1)\"><img class=\"mini\" src=\"eureka/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdEureka(2)\"><img class=\"mini\" src=\"eureka/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdEureka(3)\"><img class=\"mini\" src=\"eureka/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdEureka(4)\"><img class=\"mini\" src=\"eureka/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdEureka(5)\"><img class=\"mini\" src=\"eureka/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdEureka(6)\"><img class=\"mini\" src=\"eureka/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdEureka(7)\"><img class=\"mini\" src=\"eureka/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdEureka(8)\"><img class=\"mini\" src=\"eureka/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdEureka(9)\"><img class=\"mini\" src=\"eureka/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdEureka(10)\"><img class=\"mini\" src=\"eureka/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdEureka(11)\"><img class=\"mini\" src=\"eureka/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdEureka(12)\"><img class=\"mini\" src=\"eureka/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdEureka(13)\"><img class=\"mini\" src=\"eureka/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdEureka(14)\"><img class=\"mini\" src=\"eureka/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderEureka\", \"containerEureka\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderEureka\" ><img class =\"sliders\" src=\"eureka/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderEureka\", \"containerEureka\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }

    if (bud=='KPRP'){
        let plik =
            "<h4 class='text1'>Remont wybranych pomieszczeń budynku Kancelarii Prezydenta RP</h4>"+
            "<p class='text'>Remont wybranych pomieszczeń budynku Kancelarii Prezydenta RP w zakresie aranżacji powierzchni biurowej parteru Biura Interwencyjnej Pomocy Prawnej, ul. Frascati 2, Warszawa.</p>"+
            "<p class='text'><b> Zakres obowiązków: Kierownik Robót </b></p>"+
            "<div id='containerKPRP'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdKPRP(1)\"><img class=\"mini\" src=\"KPRP/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdKPRP(2)\"><img class=\"mini\" src=\"KPRP/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdKPRP(3)\"><img class=\"mini\" src=\"KPRP/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdKPRP(4)\"><img class=\"mini\" src=\"KPRP/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdKPRP(5)\"><img class=\"mini\" src=\"KPRP/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdKPRP(6)\"><img class=\"mini\" src=\"KPRP/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdKPRP(7)\"><img class=\"mini\" src=\"KPRP/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdKPRP(8)\"><img class=\"mini\" src=\"KPRP/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdKPRP(9)\"><img class=\"mini\" src=\"KPRP/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdKPRP(10)\"><img class=\"mini\" src=\"KPRP/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdKPRP(11)\"><img class=\"mini\" src=\"KPRP/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdKPRP(12)\"><img class=\"mini\" src=\"KPRP/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdKPRP(13)\"><img class=\"mini\" src=\"KPRP/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdKPRP(14)\"><img class=\"mini\" src=\"KPRP/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "<span onclick=\"ustawslajdKPRP(15)\"><img class=\"mini\" src=\"KPRP/slajd15.jpg\" alt=\"slajd15\"></span>"+
            "<span onclick=\"ustawslajdKPRP(16)\"><img class=\"mini\" src=\"KPRP/slajd16.jpg\" alt=\"slajd16\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderKPRP\", \"containerKPRP\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderKPRP\" ><img class =\"sliders\" src=\"KPRP/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderKPRP\", \"containerKPRP\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }

    if (bud=='rycerska'){
        let plik =
            "<h4 class='text1'>Kamienica przy ul. Rycerskiej w Gdańsku</h4>"+
            "<p class='text'>Obiekt zabytkowy który powstał w latach siedemdziesiątych XVII. Prace remontowe obejmowały: </p>"+
            "<p class='text'>- wzmocnienie istaniejących elementów nośnych <br>- wykonanie wanny żelbetowej pod budynkiem w celu zwiększenia wysokości kondygnacji podziemnej <br>" +
            "- przemurowanie istniejących stropów Kleina, wzmocnienie elementów nośnych budynków różnymi technologiami <br>- wymiana konstrukcji dachu <br>- liczne prace konserwatorskie</p>"+
            "<p class='text'><b> Zakres obowiązków: Kierownik Robót</b></p>"+
            "<div id='containerRycerska'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdRycerska(1)\"><img class=\"mini\" src=\"rycerska/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdRycerska(2)\"><img class=\"mini\" src=\"rycerska/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdRycerska(3)\"><img class=\"mini\" src=\"rycerska/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdRycerska(4)\"><img class=\"mini\" src=\"rycerska/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdRycerska(5)\"><img class=\"mini\" src=\"rycerska/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdRycerska(6)\"><img class=\"mini\" src=\"rycerska/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdRycerska(7)\"><img class=\"mini\" src=\"rycerska/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdRycerska(8)\"><img class=\"mini\" src=\"rycerska/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdRycerska(9)\"><img class=\"mini\" src=\"rycerska/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdRycerska(10)\"><img class=\"mini\" src=\"rycerska/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdRycerska(11)\"><img class=\"mini\" src=\"rycerska/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdRycerska(12)\"><img class=\"mini\" src=\"rycerska/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdRycerska(13)\"><img class=\"mini\" src=\"rycerska/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdRycerska(14)\"><img class=\"mini\" src=\"rycerska/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "<span onclick=\"ustawslajdRycerska(15)\"><img class=\"mini\" src=\"rycerska/slajd15.jpg\" alt=\"slajd15\"></span>"+
            "<span onclick=\"ustawslajdRycerska(16)\"><img class=\"mini\" src=\"rycerska/slajd16.jpg\" alt=\"slajd16\"></span>"+
            "<span onclick=\"ustawslajdRycerska(17)\"><img class=\"mini\" src=\"rycerska/slajd17.jpg\" alt=\"slajd17\"></span>"+
            "<span onclick=\"ustawslajdRycerska(18)\"><img class=\"mini\" src=\"rycerska/slajd18.jpg\" alt=\"slajd18\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderRycerska\", \"containerRycerska\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderRycerska\" ><img class =\"sliders\" src=\"rycerska/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderRycerska\", \"containerRycerska\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='malbork'){
        let plik =
            "<h4 class='text1'>Gmina Malbork - Rozbudowa Szkoły</h4>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerMalbork'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdMalbork(1)\"><img class=\"mini\" src=\"malbork/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdMalbork(2)\"><img class=\"mini\" src=\"malbork/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdMalbork(3)\"><img class=\"mini\" src=\"malbork/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdMalbork(4)\"><img class=\"mini\" src=\"malbork/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdMalbork(5)\"><img class=\"mini\" src=\"malbork/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdMalbork(6)\"><img class=\"mini\" src=\"malbork/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdMalbork(7)\"><img class=\"mini\" src=\"malbork/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdMalbork(8)\"><img class=\"mini\" src=\"malbork/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdMalbork(9)\"><img class=\"mini\" src=\"malbork/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdMalbork(10)\"><img class=\"mini\" src=\"malbork/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdMalbork(11)\"><img class=\"mini\" src=\"malbork/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderMalbork\", \"containerMalbork\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderMalbork\" ><img class =\"sliders\" src=\"malbork/slajd1.jpg\" /></div></div><img  onclick='nextPic(\"sliderMalbork\", \"containerMalbork\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }
}

function showIK(bud){
    $("#containerIK").slideDown('slow');
    if (bud=='NoweKolibki'){
        let plik =
            "<h4 class='text1'>Osiedle mieszkaniowe 'Nowe Kolibki'</h4>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerNK'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdNK(1)\"><img class=\"mini\" src=\"NoweKolibki/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdNK(2)\"><img class=\"mini\" src=\"NoweKolibki/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdNK(3)\"><img class=\"mini\" src=\"NoweKolibki/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdNK(4)\"><img class=\"mini\" src=\"NoweKolibki/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdNK(5)\"><img class=\"mini\" src=\"NoweKolibki/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdNK(6)\"><img class=\"mini\" src=\"NoweKolibki/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdNK(7)\"><img class=\"mini\" src=\"NoweKolibki/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdNK(8)\"><img class=\"mini\" src=\"NoweKolibki/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdNK(9)\"><img class=\"mini\" src=\"NoweKolibki/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdNK(10)\"><img class=\"mini\" src=\"NoweKolibki/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderNK\", \"containerNK\")' class='cursor' src='left.png' alt='left'>"+
            "<div class=\"frameNK\"><div  id=\"sliderNK\" ><img class =\"sliders\" src=\"NoweKolibki/slajd1.jpg\" /></div>"+
            "</div><img onclick='nextPic(\"sliderNK\", \"containerNK\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerIK").innerHTML = plik;
    }
}
function showPS(bud){
    $("#containerPS").slideDown('slow');
    if (bud=='polswed'){
        let plik =
            "<h4 class='text1'>Centrum Handlowo-Usługowe, Gdańsk Chełm</h4>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerPolSwed'  class=\"img_containerPS\">"+
            "<span onclick=\"ustawslajdPS(1)\"><img class=\"mini\" src=\"polswed/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdPS(2)\"><img class=\"mini\" src=\"polswed/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdPS(3)\"><img class=\"mini\" src=\"polswed/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdPS(4)\"><img class=\"mini\" src=\"polswed/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdPS(5)\"><img class=\"mini\" src=\"polswed/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdPS(6)\"><img class=\"mini\" src=\"polswed/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdPS(7)\"><img class=\"mini\" src=\"polswed/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdPS(8)\"><img class=\"mini\" src=\"polswed/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdPS(9)\"><img class=\"mini\" src=\"polswed/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdPS(10)\"><img class=\"mini\" src=\"polswed/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdPS(11)\"><img class=\"mini\" src=\"polswed/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdPS(12)\"><img class=\"mini\" src=\"polswed/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdPS(13)\"><img class=\"mini\" src=\"polswed/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdPS(14)\"><img class=\"mini\" src=\"polswed/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "<span onclick=\"ustawslajdPS(15)\"><img class=\"mini\" src=\"polswed/slajd15.jpg\" alt=\"slajd15\"></span>"+
            "<span onclick=\"ustawslajdPS(16)\"><img class=\"mini\" src=\"polswed/slajd16.jpg\" alt=\"slajd16\"></span>"+
            "<span onclick=\"ustawslajdPS(17)\"><img class=\"mini\" src=\"polswed/slajd17.jpg\" alt=\"slajd17\"></span>"+
            "<span onclick=\"ustawslajdPS(18)\"><img class=\"mini\" src=\"polswed/slajd18.jpg\" alt=\"slajd18\"></span>"+
            "<span onclick=\"ustawslajdPS(19)\"><img class=\"mini\" src=\"polswed/slajd19.jpg\" alt=\"slajd19\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderPS\", \"containerPolSwed\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderPS\" ><img class =\"sliders\" src=\"polswed/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderPS\", \"containerPolSwed\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerPS").innerHTML = plik;
    }
}
