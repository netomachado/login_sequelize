
const { User }= require('../database/models');
const bcrypt = require('bcrypt');


const UserController = {

cadastrar: async(req, res) =>{
     const { nome, email, senha } = req.body;
          
     const senha_crypto = bcrypt.hashSync(senha, 10);

     const usuario = await User.create({ nome, email, senha_crypto});
     req.session.usuario = usuario;
     
     return res.redirect('/dispositivos');
 },
 
logar: async(req, res)=> {
     const { email, senha }= req.body;
    
     const usuario = await User.findOne({
         where: { email }}
     );
     

     if (!usuario){
         return res.redirect('/cadastro')
     };

     const senhaValida = bcrypt.compareSync( senha, usuario.dataValues.senha_crypto);
    

     if(!senhaValida){
         return res.redirect('/login?error=dados_errados')
     };
     req.session.usuario = usuario;
     return res.redirect('/dispositivos');
 },

};



module.exports = UserController;
