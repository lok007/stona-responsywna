
var cards1 = ["antman.jpg", "bpanther.jpg", "bwidow.jpg", "camerica.jpg", "capmarvel.jpg", "dd.jpg", "deadpool.jpg", "drax.jpg", "gamora.jpg", "groot.jpg", "hawkeye.jpg", "hulk.jpg",
	"ironman.jpg", "loki.jpg", "rocket.jpg", "spiderman.jpg", "starlord.jpg", "strange.jpg", "thor.jpg", "wolverine.jpg","antman.jpg", "bpanther.jpg", "bwidow.jpg", "camerica.jpg", "capmarvel.jpg", "dd.jpg", "deadpool.jpg", "drax.jpg", "gamora.jpg", "groot.jpg", "hawkeye.jpg", "hulk.jpg",
    "ironman.jpg", "loki.jpg", "rocket.jpg", "spiderman.jpg", "starlord.jpg", "strange.jpg", "thor.jpg", "wolverine.jpg"];
var cards = [];

function CardsRandom() {
    for (i=0; i<40;i++) {

        var randomNr = Math.floor(Math.random() * cards1.length);
        cards.push(cards1[randomNr]);
        cards1.splice(randomNr, 1);
    }
}
CardsRandom();

console.log(cards)
//alert(cards[4]);

//console.log(cards);





var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');
var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');

var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');
var c18 = document.getElementById('c18');
var c19 = document.getElementById('c19');
var c20 = document.getElementById('c20');
var c21 = document.getElementById('c21');
var c22 = document.getElementById('c22');
var c23 = document.getElementById('c23');

var c24 = document.getElementById('c24');
var c25 = document.getElementById('c25');
var c26 = document.getElementById('c26');
var c27 = document.getElementById('c27');
var c28 = document.getElementById('c28');
var c29 = document.getElementById('c29');
var c30 = document.getElementById('c30');
var c31 = document.getElementById('c31');

var c32 = document.getElementById('c32');
var c33 = document.getElementById('c33');
var c34 = document.getElementById('c34');
var c35 = document.getElementById('c35');
var c36 = document.getElementById('c36');
var c37 = document.getElementById('c37');
var c38 = document.getElementById('c38');
var c39 = document.getElementById('c39');


c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });
c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });
c12.addEventListener("click", function() { revealCard(12); });
c13.addEventListener("click", function() { revealCard(13); });
c14.addEventListener("click", function() { revealCard(14); });
c15.addEventListener("click", function() { revealCard(15); });

c16.addEventListener("click", function() { revealCard(16); });
c17.addEventListener("click", function() { revealCard(17); });
c18.addEventListener("click", function() { revealCard(18); });
c19.addEventListener("click", function() { revealCard(19); });
c20.addEventListener("click", function() { revealCard(20); });
c21.addEventListener("click", function() { revealCard(21); });
c22.addEventListener("click", function() { revealCard(22); });
c23.addEventListener("click", function() { revealCard(23); });

c24.addEventListener("click", function() { revealCard(24); });
c25.addEventListener("click", function() { revealCard(25); });
c26.addEventListener("click", function() { revealCard(26); });
c27.addEventListener("click", function() { revealCard(27); });
c28.addEventListener("click", function() { revealCard(28); });
c29.addEventListener("click", function() { revealCard(29); });
c30.addEventListener("click", function() { revealCard(30); });
c31.addEventListener("click", function() { revealCard(31); });

c32.addEventListener("click", function() { revealCard(32); });
c33.addEventListener("click", function() { revealCard(33); });
c34.addEventListener("click", function() { revealCard(34); });
c35.addEventListener("click", function() { revealCard(35); });
c36.addEventListener("click", function() { revealCard(36); });
c37.addEventListener("click", function() { revealCard(37); });
c38.addEventListener("click", function() { revealCard(38); });
c39.addEventListener("click", function() { revealCard(39); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 20;
var checked = 0;

function revealCard(nr)
{
	var opacityValue = $('#c'+nr).css('opacity');
	
	//alert('Opacity: '+opacityValue);
	
	if (opacityValue != 0 && lock == false)
	{
		lock = true;
		
		//alert(nr);
	
		var obraz = "url(img/marvel/" + cards[nr] + ")";
		
		$('#c'+nr).css('background-image', obraz);
		$('#c'+nr).addClass('cardA');
		$('#c'+nr).removeClass('card');
		
		if(oneVisible == false)
		{
			//first card
			
			oneVisible = true;
			visible_nr = nr;
			lock = false;
		}
		else
		{
			//second card
			
			if(cards[visible_nr] == cards[nr] && visible_nr != nr)
			{
				//alert("para");
				checked = checked +1;
				setTimeout(function() { hide2Cards(nr, visible_nr) }, 750);
				addHero(obraz,checked);
				
			}
			else
			{
				//alert("pudło");
				
				setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);
			}
			
			turnCounter++;
			$('.score').html('Turn counter: '+turnCounter);
			oneVisible = false;
		}
		
	}
	
}



//function addHero(obraz) {
//    var src1 = obraz.substring(4,obraz.length-1);
//	var hero_name = obraz.substring(15,obraz.length-5)
//		hero_name = hero_name.toUpperCase();
//    var node = document.getElementById("heros");
//    var DOM_img = document.createElement("img");
//		DOM_img.src = src1;
//		DOM_img.classList.add('checked');
//	var	DOM_text = document.createElement("p");
//	var t = document.createTextNode(""+hero_name);
//		DOM_text.appendChild(t);
//    	DOM_text.classList.add('hero_names');
//    	node.appendChild(DOM_img);
//    	node.appendChild(DOM_text);
//}


function addHero(obraz, checked){
    var src1 = obraz.substring(4,obraz.length-1);
    var hero_name = obraz.substring(15,obraz.length-5);
	var td = document.getElementById("ch"+checked);
	var DOM_a=document.createElement("a");
	DOM_a.href =""+ heros_link[hero_name];
    hero_name = hero_name.toUpperCase();
	DOM_a.target="_blank";
    var DOM_img = document.createElement("img");
    DOM_img.src = src1;
    DOM_img.classList.add('checked');
    var	DOM_text = document.createElement("p");
	var t = document.createTextNode(""+hero_name);
    DOM_text.classList.add('hero_names');
	DOM_text.appendChild(t);
	td.appendChild(DOM_a);
    DOM_a.appendChild(DOM_img);
    DOM_a.appendChild(DOM_text);
    td.setAttribute("class","tdShowed");

}


var heros_link = {
    antman: "http://marvel.com/characters/2/ant-man",
	bpanther: "http://marvel.com/characters/5/black_panther",
	bwidow: "http://marvel.com/characters/6/black_widow" ,
	camerica: "http://marvel.com/characters/8/captain_america" ,
	capmarvel:"http://marvel.com/characters/9/captain_marvel",
	dd: "http://marvel.com/characters/11/daredevil",
	deadpool: "http://marvel.com/characters/12/deadpool" ,
	drax: "http://marvel.com/characters/15/drax",
	gamora: "http://marvel.com/characters/20/gamora",
	groot: "http://marvel.com/characters/866/groot",
	hawkeye:"http://marvel.com/characters/23/hawkeye",
	hulk:"http://marvel.com/characters/25/hulk",
	ironman:"http://marvel.com/characters/29/iron_man",
	loki:"http://marvel.com/characters/33/loki",
	rocket:"http://marvel.com/characters/47/rocket_raccoon",
	spiderman:"http://marvel.com/characters/54/spider-man",
	starlord:"http://marvel.com/characters/56/star-lord",
	strange: "http://marvel.com/characters/14/doctor_strange",
	thor: "http://marvel.com/characters/60/thor",
	wolverine: "http://marvel.com/characters/66/wolverine",
}


function hide2Cards(nr1, nr2)
{
	$('#c'+nr1).css('opacity', '0');
	$('#c'+nr2).css('opacity', '0');
	
	pairsLeft--;
	
	if(pairsLeft == 0)
	{
		$('.board').html('<h1>You win!<br>Done in '+turnCounter+' turns</h1>');
	}
	
	lock = false;
}

function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/marvel/marvel.png)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');	

	$('#c'+nr2).css('background-image', 'url(img/marvel/marvel.png)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');
	
	lock = false;
}

