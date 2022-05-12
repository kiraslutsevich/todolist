import taskTemplate from "./components/Task.js";
import { data, saveData } from "./data.js";
import showModalWindow from "./components/ModalWindow.js";

const ul = document.querySelector('.todos');
const input = document.querySelector('input[type=text]');
const addBtn = document.querySelector('.add-btn');
const btnClear = document.querySelector('.clear');
const todo = document.querySelector('#todo');
let selectTasks = document.querySelector('select')

let taskArr = [...data]
taskArr.length > 0 && showTasks()


function addToTaskArr() {
	taskArr.push({
		text: input.value,
		id: Date.now(),
		isDone: false,
		isEditable: false,
	})
	saveData(taskArr)
	showTasks()
}
addBtn.addEventListener('click', () => input.value && addToTaskArr())

function showTasks(arr = taskArr) {
	let currentArr;
	switch (selectTasks.value) {
		case 'active':
			currentArr = arr.filter(task => task.isDone == false);
			break;
		case 'done':
			currentArr = arr.filter(task => task.isDone == true);
			break;
		default:
			currentArr = arr;
			break;
	}
	ul.innerHTML = '';
	currentArr.forEach(task => taskTemplate(task, ul));
	input.value = '';
	input.focus();

	const deleteBtns = ul.querySelectorAll('.todo-trash');
	deleteBtns.forEach(item => item.addEventListener('click', (e) => deleteTask(e.target.closest('.line').id)));

	const editBtns = ul.querySelectorAll('.todo-pensil');
	editBtns.forEach(item => item.addEventListener('click', (e) => editTask(e.target.closest('.line'))));

	let chek = ul.querySelectorAll('input[type=checkbox]');
	chek.forEach(item => item.addEventListener('change', (e) => changeState(e.target.closest('.line').id)));
}

function deleteTask(id) {
	taskArr = taskArr.filter(item => item.id != id);
	saveData(taskArr)
	showTasks()
}

function editTask(li) {
	const span = li.querySelector('span');
	span.setAttribute('contenteditable', true);
	span.focus();
	span.addEventListener('blur', () => editTextOfTask(li.id, span))
}

function editTextOfTask(id, span) {
	taskArr.map(item => (item.id == id) ? item.text = span.textContent : item)
	saveData(taskArr)
}


function changeState(id) {
	taskArr.map(item => (item.id == id) ? item.isDone = !item.isDone : item);
	saveData(taskArr)
	showTasks()
}
selectTasks.addEventListener('change', () => showTasks())

btnClear.addEventListener('click', () => taskArr.length && showModalWindow(todo, taskArr, saveData, showTasks))

