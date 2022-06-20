const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const users = require("../data/users.json");
const { validationResult } = require("express-validator");

/* const leerUsuarios = () => {
    fs.readFileSync(path.resolve(__dirname, "..", "data", "users.json"),JSON.parse(users, null, 3),
    "utf-8"
  );
}  */
module.exports = {
    register: (req, res) => res.render("users/register"),

    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let { name, email, password } = req.body;
            let lastID = users.length !== 0 ? users[users.length - 1].id : 0;

            let newUser = {
                id: +lastID + 1,
                rol: "user",
                name: name.trim(),
                email: email,
                password: bcryptjs.hashSync(password, 10),
                avatar : req.file ? req.file.filename : "gato-mambru.jpg"
            };

            users.push(newUser);

            fs.writeFileSync(
                path.resolve(__dirname, "..", "data", "users.json"),
                JSON.stringify(users, null, 3),
                "utf-8"
            );

            return res.redirect("/");
        } else {
            return res.render("users/register", {
                old: req.body,
                errores: errors.mapped(),
            });
        }
    },

    login: (req, res) => res.render("users/login"),

    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { rol, name, email, avatar } = users.find(
                (usuario) => usuario.email === req.body.email
            );

            req.session.userLogin = {
                email,
                rol,
                name,
                avatar
            };

            res.locals.userLogin = req.session.userLogin;

            if (req.body.recordarme) {
                res.cookie("tambienLadramos", req.session.userLogin, {
                    maxAge: 1000 * 60 * 2,
                });
            }

            return res.redirect("/users/profile");
        } else {
            res.render("users/login", {
                errors: errors.mapped(),
                old: req.body,
            });
        }
    },

    //posible raiz del problema de que no funcione en la vista

    logout: (req, res) => {
        req.session.destroy();

        if (req.session && req.session.userLogin.rol === "user") {
            res.cookie("usertambienLadramos", null, { maxAge: -1 });
            return res.redirect("/");
        } else {
            res.cookie("adminLogueado", null, { maxAge: -1 });
            return res.redirect("/");
        }
    },

    profile: (req, res) => {
        const usersRead = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));
        const userProfile = usersRead.find(
            (user) => user.email === req.session.userLogin.email
        );
        return res.render("users/profile", {
            userProfile
        });
    },

    editProfile : (req, res) => {
        const {id} = req.params;
        const userEdit = users.find((user) => user.id === +id)
        const {name, email, avatar} = userEdit;

        return res.render("users/editProfile", {
            id,
            name,
            email,
            avatar
        });

    },

    updateProfile: (req, res) => { 
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const {id} = req.params;
            const { email, name, avatar } = req.body;

            const usuariosModificados = users.map((user) => {
            if (user.id === id) {
            let usuarioModificado = {
                ...user,
                name : name.trim(),
                email : email.trim(),
                avatar : req.file ? req.file.originalname : user.avatar
            };
        
            if (req.file) {
                if (fs.existsSync(path.resolve(__dirname, "..", "public", "images", 'avatars', user.avatar)) 
                    && user.avatar !== 'perro-informatico.png') {
                fs.unlinkSync(
                    path.resolve(__dirname, "..", "public", "images", 'avatars', user.avatar)
                );
                }
            }
            return usuarioModificado;
            }
            return user;
        });

        fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "users.json"),
            JSON.stringify(usuariosModificados, null, 3),
            "utf-8"
        );

        req.session.userLogin = {
            ...req.session.userLogin,
            name
        }

        return res.redirect("/");
        }else{
            console.log(errors);
            return res.render("users/editProfile", {
                user : req.body,
                errors : errors.mapped()
            });
        }

  },

    storeUser: (req, res) => {
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.render("register", {
                errorMsg: errores.mapped(),
            });
        }
    },
};
