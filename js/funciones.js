$(document).on('ready',inicio);

function inicio()
{
	$('#licenciatura').on('click',licenciatura);
	$('#abierto').on('click',abierto);
	$('#maestrias').on('click',maestrias);
	$('#doctorado').on('click',doctorado);
	$('#menu').on('click',menu);
	$('#plataforma').on('click',plataforma);
}

function licenciatura()
{
	$('ul.subMenuLicenciatura').toggle('slow');
}

function abierto()
{
	
	$('ul.subMenuAbierto').toggle('slow');
}

function maestrias()
{
	$('ul.subMenuMaestrias').toggle('slow');
}
function doctorado()
{
	$('ul.subMenuDoctorado').toggle('slow');
	
}

function menu()
{
	$('header nav').toggle('slow');
}

function plataforma()
{
	$('ul.subMenuPlataforma').toggle('slow');
}