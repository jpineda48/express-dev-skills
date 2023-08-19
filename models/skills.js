const newSkills = [
    {skill: 'Node', Type: 'Runtime Environment' },
    {skill: 'Express', Type: 'Web-Framework'},
    {skill: 'MongoDb', Type: 'DataBase' }
]

function getAll(){
    return newSkills
}

function getOne(skill){
   return newSkills.find(skill => newSkills.skill === skill)
}

module.exports = {
    getAll,
    getOne
}