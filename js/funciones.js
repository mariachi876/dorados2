$(document).on('ready',inicio);

function inicio()
{
	$('#licenciatura').on('click',licenciatura);
}

function licenciatura()
{
	$('ul.subMenuLicenciatura').toggle('slow');
}