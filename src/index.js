import { createStore } from 'redux'

const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

const reducer = (state = [], action) => {
	console.log(action)
	// return state
	switch (action.type) {
		case ADD_TODO:
			return [{ text: action.text }, ...state]
		case REMOVE_TODO:
			return []
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
		console.log('li : ' + li)
		console.log('li : ' + li.id)
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

const addButtonHandler = (e) => {
	e.preventDefault()
	let text = input.value
	input.value = ''
	addText(text)
}

const removeButtonHandler = (e) => {
	e.preventDefault()
	console.log('removeButtonHandler', e, e.target, e.target.id)
	// console.log('removeButtonHandler', )
	const li = document.getElementById('li-' + e.target.id)
	console.log(li)
	e.target.remove()
	li.remove()
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
