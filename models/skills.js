const skills = require("../controllers/skills");

const newSkills = [
    {skill: 'Node', type: 'Runtime Environment' },
    {skill: 'Express', type: 'Web-Framework'},
    {skill: 'MongoDb', type: 'DataBase' }
]

function getAll(){
    return newSkills
}

function getOne(skill){
   return newSkills.find(skill => skill.skill === skill)
   
}

function deleteOne(skill) {
    // All properties attached to req.params are strings!
    // Find the index based on the id of the todo object
    const idx = newSkills.findIndex(skill => skill.skill === skill);
    newSkills.splice(idx, 1);
  }



  function create(skill) {
    skill.type = 'new skill'

    newSkills.push(skill)
  }

module.exports = {
    getAll,
    getOne,
    delete: deleteOne,
    create
}

