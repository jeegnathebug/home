var g = {};

window.onload = init;

function init() {
	g.modal = $('#modal');
	g.modalContent = $('.modal-content');

	$('#popupLink').on('click', showModal);
	$('#btnClose').on('click', showModal);
	g.modal.on('click', showModal);

	// Add year to footer
	$('#year').html(new Date().getFullYear());
}

function showModal(event) {
	event.stopPropagation();
	if (event.target.className !== 'modal-content') {
		g.modal.fadeToggle();
	}
}
