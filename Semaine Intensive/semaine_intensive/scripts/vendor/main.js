/***LIEUX DATES****/
document.querySelector(".mai").onclick = function () {
	if (window.getComputedStyle(document.querySelector('.dates_mai')).display=='none') 
	{
		document.querySelector(".dates_mai").style.display="block";
		document.querySelector(".dates_juin").style.display="none";
		document.querySelector(".dates_juillet").style.display="none";
	} else{
		document.querySelector(".dates_mai").style.display="none";
	}
}	
document.querySelector(".juin").onclick = function () {
	if (window.getComputedStyle(document.querySelector('.dates_juin')).display=='none') 
	{
		document.querySelector(".dates_juin").style.display="block";
		document.querySelector(".dates_mai").style.display="none";
		document.querySelector(".dates_juillet").style.display="none";
	} else{
		document.querySelector(".dates_juin").style.display="none";
	}
}	
document.querySelector(".juillet").onclick = function () {
	if (window.getComputedStyle(document.querySelector('.dates_juillet')).display=='none') 
	{
		document.querySelector(".dates_juillet").style.display="block";
		document.querySelector(".dates_juin").style.display="none";
		document.querySelector(".dates_mai").style.display="none";
	} else{
		document.querySelector(".dates_juillet").style.display="none";
	}
}	
