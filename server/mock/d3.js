const Mock = require('mockjs')

const barData = Mock.mock({
	status: 'ok',	
	'data|5-10': [{
		name: '@cname'
	}]
})


module.exports = [
	app => {
		app.post('/getBarData', (req, res) => {
			req.send(barData)
		})
	}
]