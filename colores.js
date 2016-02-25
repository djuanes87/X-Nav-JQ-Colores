window.onload = function() {
	function changeColor(e) {
		//editcolor.style.background = e.target.value;
		document.getElementById("color").style.background = e.target.value;
	};

	var color = document.getElementById("codigo");
	var editcolor = document.getElementById("color");
  color.addEventListener('input', changeColor, false);
}
