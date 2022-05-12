export default function showModalWindow(where, arr, saveData, showTasks) {
	const modalWindow = document.createElement('div');
	modalWindow.className = 'modal-window';
	modalWindow.innerHTML = `
	<div class="content">
<div class="text-block">Вы уверены? Отменить будет невозможно.</div>
<div class="modal-window__btns">
<button class="yes">Да</button>
<button class="no">Нет</button>
</div>
</div>
`
	where.append(modalWindow);

	const btnYes = modalWindow.querySelector('.yes');
	btnYes.addEventListener('click', clear);

	const btnNo = modalWindow.querySelector('.no');
	btnNo.addEventListener('click', removeModalWindow);

	function removeModalWindow() {
		modalWindow.remove()
	}

	function clear() {
		removeModalWindow()
		arr = [];
		saveData(arr)
		showTasks(arr)
	}
}
