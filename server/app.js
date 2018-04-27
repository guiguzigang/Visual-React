const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 8001
const mock_path = `${__dirname}/routes`
const mock_data = []

const walk = path => {
	fs.readdirSync(path).forEach( file => {
		const newPath = [path, file].join('/')
		const stat = fs.statSync(newPath)
		if(stat.isFile()) {
			if (/(.*)\.(js)/.test(file)) {
	  			mock_data.push(...require(newPath))
			}
		} else if(stat.isDirectory()) {
			walk(newPath)
		}
	})
}
walk(mock_path)

mock_data.forEach( item => {
	item(app)
})

app.listen(PORT)
console.log(`app running at port ${PORT}`)