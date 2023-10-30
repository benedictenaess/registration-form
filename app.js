const form = document.querySelector('.form');
const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const pasword = document.querySelector('#pasword')
const paswordConfirm = document.querySelector('#pasword-confirm')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const btn = document.querySelector('button')


form.addEventListener('submit', e =>{
	e.preventDefault();
	console.log('firstname', firstName.value)
	console.log('lastname', lastName.value)
	console.log('number', number.value)
	console.log('email', email.value)
	console.log('pasword', pasword.value)
	console.log('pasword confirm', paswordConfirm.value)
})

//TODO: lag en popup, apend info to parent element 


// let formData = {}
// const inputs = [firstName,lastName,number,email,pasword,paswordConfirm]
// for (let input of inputs) {
// 	input.addEventListener('input', e=>{
// 		formData[e.target.name] = e.target.value;
// 	})
// }

