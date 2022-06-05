 const fs = require('fs')
 
//aun no funciona en la vista

 const modelUsers = {
     fileName: './data/users.json',

     getData: function () {
         return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
     },

     generatedId: function () {
        let allUsers = this.findAll();
        let lastUsers = allUsers.pop();
        if (lastUsers) {
            return lastUsers.id + 1
        }
        return 1
     },

     findAll: function () {
         return this.getData();
     },

     findByPk: function (id) {
         let allUsers = this.findAll();
         let userFound = allUsers.find(oneUser => oneUser.id === id)
         return userFound;
     },

     findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound;
    },

     create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generatedId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ''));
        return newUser
     },

     delete: function (id) {
        let allUsers = this.findAll();
        let finalUser = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, ' '));
        return true;
     }
 }

module.exports = modelUsers;