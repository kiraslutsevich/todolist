let data = []

const saveData = (data) => localStorage.setItem('taskArr', JSON.stringify(data))
const getData = (key = 'taskArr') => data = JSON.parse(localStorage.getItem(key))


if (localStorage.getItem('taskArr')) {
	getData()
}

export { data, saveData, getData }