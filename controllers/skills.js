const Skills = require('../models/skills')

// function index(req, res) {
//     res.render('skills/index', {
//         skills: skills.getAll()
//     })
// }

function index(req, res) {
    res.render('index', {
        title: 'Student Skills', skills: Skills.getAll()
    })
}
function show(req,res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.skill)
        }
    )
}
function deleteSkill(req, res) {
    Skills.delete(req.params.skill);
    res.redirect('/');

    
  }
  function newSkill(req, res) {
    res.render('skills/new', {title: 'New'});
  }

  function create(req, res){
    Skills.create(req.body)
    console.log(req.body)

    res.redirect('/')

  }
module.exports = {
    index,
    show,
    delete: deleteSkill,
    new: newSkill,
    create
}