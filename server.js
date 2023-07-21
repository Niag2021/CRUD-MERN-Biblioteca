const express = require('express')
const colors = require('colors'); 

const app = express()
const PORT = process.env.PORT || 3500 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.bgBlue));