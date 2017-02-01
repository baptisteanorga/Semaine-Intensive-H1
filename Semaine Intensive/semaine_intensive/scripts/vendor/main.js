document.querySelector(".produit_1").onclick = function() {
	if (window.getComputedStyle(document.querySelector('.txt_produit_1')).display=='none'){
		document.querySelector(".txt_produit_1").style.display="block";
		document.querySelector(".txt_produit_2").style.display="none";
		document.querySelector(".txt_produit_3").style.display="none";
		document.querySelector(".txt_produit_4").style.display="none";
		document.querySelector(".txt_produit_5").style.display="none";
		document.querySelector(".txt_produit_6").style.display="none";
		document.querySelector(".txt_produit_7").style.display="none";
		document.querySelector(".txt_produit_8").style.display="none";
		document.querySelector(".txt_produit_9").style.display="none";
	} else {
		document.querySelector(".txt_produit_1").style.display="none";
	}
}