import less from "less"

const testMe = function(lessInput, expected) {

	less.render(lessInput)
		.then( (output) => {
			console.log(expected)
			console.log(output.css)
		},
		(error) => {
			console.log('error:', error)
		})
}

export {testMe}