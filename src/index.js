// import required dependencies
const express = require('express')

// use dependencies
const Route = express.Router()

// import required files
const jobs = require('./routes/jobs')
const company = require('./routes/company')
//const jobsUpdate = require('./routes/jobsUpdate')
//const jobsDelete = require('./routes/jobsDelete')
console.log('index')
// create used routes
Route
	.use('/jobs', jobs)
	.use('/company', company)
  	//.use('/jobs-update', jobsUpdate)
  	//.use('/jobs-delete', jobsDelete)

module.exports = Route
