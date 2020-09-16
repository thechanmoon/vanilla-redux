import { createStore } from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

const reducer = (state = [], action) => {
	console.log(action)
	// return state
	switch (action.type) {
		case ADD_TODO:
			return [{ text: action.text, id: Date.now() }, ...state]
		case DELETE_TODO:
			// return state.filter((todo) => {
			// 	console.log('DELETE+TODO : ', todo.id, action.id)
			// 	return todo.id.toString() !== action.id
			// })
			return state.filter((todo) => todo.id !== parseInt(action.id))
		// return state.filter((todo) => todo.id.toString() !== action.id)
		default:
			return state
	}
}

const renderDodoList = () => {
	const text = store.getState()
	ul.innerText = ''
	text.forEach((element) => {
		console.log(element)
		let li = document.createElement('li')
		let button = document.createElement('button')
		li.innerText = element.text
		// li.id = 'li-' + index
		// console.log('li : ' + li)
		// console.log('li : ' + li.id)
		button.innerText = 'DEL'
		button.id = element.id
		button.addEventListener('click', removeButtonHandler)
		li.appendChild(button)
		ul.appendChild(li)
	})
}

const store = createStore(reducer)
store.subscribe(renderDodoList)

const addTodo = (text) => {
	return { type: ADD_TODO, text: text }
}

const deleteTodo = (id) => {
	return { type: DELETE_TODO, id: id }
}

const dispatchAddTodo = (text) => {
	store.dispatch(addTodo(text))
}

const dispatchDeleteTodo = (id) => {
	store.dispatch(deleteTodo(id))
}

const addButtonHandler = (e) => {
	e.preventDefault()
	let text = input.value
	input.value = ''
	dispatchAddTodo(text)
}

const removeButtonHandler = (e) => {
	e.preventDefault()
	// console.log('removeButtonHandler', e, e.target, e.target.id)
	// // console.log('removeButtonHandler', )
	// const li = document.getElementById('li-' + e.target.id)
	// console.log(li)
	// e.target.remove()
	// li.remove()
	dispatchDeleteTodo(e.target.id)
}

form.addEventListener('submit', addButtonHandler)
console.log(store)
// const add = document.getElementById('add')
// const minus = document.getElementById('minus')
// const number = document.querySelector('span')

// let count = 0

// number.innerText = count

// const updateText = () => {
// 	number.innerText = count
// }

// const handleAdd = () => {
// 	// console.log('handleadd')
// 	count++
// 	updateText()
// }
// const handleMinus = () => {
// 	count--
// 	updateText()
// }

// add.addEventListener('click', handleAdd)
// minus.addEventListener('click', handleMinus)
