const db = require('../database/models')
const { Sequelize, Op } = require("sequelize");

module.exports = {
    turn : (req, res) => res.render('turns'),
    service : (req, res) => {
        db.Dog_Breed.findAll({
            include : ['pets']
        }
        
        )
        .then((dog) => {
            return res.send(dog)
            res.render('servicesProof', {
                dog
            })
        })
        
    }
}