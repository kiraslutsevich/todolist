export default function taskTemplate(task, ul) {
	const li = document.createElement('li');
	li.className = 'line';
	li.innerHTML = `
	<input type="checkbox" ${task.isDone ? 'checked' : ''}>
	<span class="todo-text" tabindex="0" ${task.isEditable ? 'contenteditable = "true"' : 'contenteditable = "false"'}> ${task.text}</span >
	<div class="btns">
		<button class="todo-pensil">
			<img src="./img/pensil.png" alt="pensil">
		</button>
		<button class="todo-trash">
			<img src="./img/trash.png" alt="trash">
		</button>
		`
	ul.prepend(li);
	li.id = task.id;
}