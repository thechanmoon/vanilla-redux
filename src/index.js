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
			return [{ text: action.text }, ...state]
<<<<<<< HEAD
		case DELETE_TODO:
			return state.filter((todo) => {
				console.log('DELETE+TODO : ', todo.id, action.id)
				return todo.id !== action.id
			})
=======
		case REMOVE_TODO:
			return []
>>>>>>> a0a4d88fac86814c4d6f03c1f63271973c42ee7c
		default:
			return state
	}
}

const renderDodoList = () => {
	const text = store.getState()
	ul.innerText = ''
	text.forEach((element, index) => {
		console.log(element)
		let li = document.createElement('li')
		let button = document.createElement('button')
		li.innerText = element.text
		li.id = 'li-' + index
<<<<<<< HEAD
		// console.log('li : ' + li)
		// console.log('li : ' + li.id)
=======
		console.log('li : ' + li)
		console.log('li : ' + li.id)
>>>>>>> a0a4d88fac86814c4d6f03c1f63271973c42ee7c
		button.innerText = 'Del'
		button.id = index
		button.addEventListener('click', removeButtonHandler)
		ul.appendChild(li)
		ul.appendChild(button)
	})
}

const store = createStore(reducer)
store.subscribe(renderDodoList)
const addText = (text) => {
	store.dispatch({ type: ADD_TODO, text: text })
}

<<<<<<< HEAD
const deleteTodo = (id) => {
	store.dispatch({ type: DELETE_TODO, id: id })
}

=======
>>>>>>> a0a4d88fac86814c4d6f03c1f63271973c42ee7c
const addButtonHandler = (e) => {
	e.preventDefault()
	let text = input.value
	input.value = ''
	addText(text)
}

const removeButtonHandler = (e) => {
	e.preventDefault()
<<<<<<< HEAD
	// console.log('removeButtonHandler', e, e.target, e.target.id)
	// // console.log('removeButtonHandler', )
	// const li = document.getElementById('li-' + e.target.id)
	// console.log(li)
	// e.target.remove()
	// li.remove()
	deleteTodo('li-' + e.target.id)
=======
	console.log('removeButtonHandler', e, e.target, e.target.id)
	// console.log('removeButtonHandler', )
	const li = document.getElementById('li-' + e.target.id)
	console.log(li)
	e.target.remove()
	li.remove()
>>>>>>> a0a4d88fac86814c4d6f03c1f63271973c42ee7c
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
