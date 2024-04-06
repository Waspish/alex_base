function submitData(e) {
	/* Для работы с формой и вывода результата */
	e.preventDefault()
	const formData = new FormData(e.target)
	const formProps = Object.fromEntries(formData)
	const res = calculate(formProps.sum, formProps.day, formProps.percent, formProps.isCapital)
	document.querySelector('.result').innerHTML = `Ваш доход: ${res} руб`
}

function calculate(sum, day, percent, isCapital) {
	if (isCapital === 'no') {
		return (sum * (day / 365) * percent) / 100
	} else {
		return sum * (1 + percent / 100) ** (day / 365) - sum
	}
}
