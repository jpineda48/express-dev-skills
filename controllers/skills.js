const skills = require('../models/skills')

// function index(req, res) {
//     res.render('skills/index', {
//         skills: skills.getAll()
//     })
// }

function index(req, res) {
    res.render('index', {
        title: 'Student Skills', skills: skills.getAll()
    })
}
function show (req,res) {
    res.render('skills/show', {
        skill: skills.getOne(req.params.skill)
    })
}

module.exports = {
    index,
    show
}