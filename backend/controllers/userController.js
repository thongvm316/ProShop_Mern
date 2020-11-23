import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const authUser = asyncHandler(async(req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    res.send({email, password})
})

export { authUser }