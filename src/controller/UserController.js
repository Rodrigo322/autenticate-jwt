const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;


    await User.create({ name, email, password })

    return res.json({name, email})
  },

  async index(req, res) {
    const users = await User.findAll()

    res.json(users)
  },

  async delete(req, res) {
    const { id } = req.params

    const user = await User.findOne({ where: { id } })

    if(!user) {
      return res.json({massage: 'user not found'})
    }

    await user.destroy({ where: { id } })
    
    return res.send()
  }

}