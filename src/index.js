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
			return [action.text, ...state]
		case REMOVE_TODO:
			return []
		default:
			return state
	}
}
const store = createStore(reducer)
form.addEventListener('submit', (e) => {
	e.preventDefault()
	let li = document.createElement('li')
	let value = input.value
	li.innerText = value
	input.value = ''
	ul.appendChild(li)
	store.dispatch({ type: ADD_TODO, text: value })
})
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
