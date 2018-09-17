function Chamada(){
	alert('Botão clicado.');
}

function click_Eat(){
	document.getElementById('menu_eat').style.display = 'block';
	document.getElementById('menu_drink').style.display = 'none';
}

function click_Drink(){
	document.getElementById('menu_drink').style.display = 'block';
	document.getElementById('menu_eat').style.display = 'none';
}