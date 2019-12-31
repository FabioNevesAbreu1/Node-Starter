const Cad = require('../models/tblProduto')

module.exports = {
    async Get(req, res){
        
        var retorno = await Cad.find({})// pega todas os itens da tabela tblProduto
        console.log(retorno)
        res.send(retorno)

    },
    async Post(req, res){
        const { nome, quantidade } = req.body
        console.log(nome + quantidade)
        const Insert = await Cad.create({
            Nome: nome,
            Quantidade: quantidade,
        });
        Insert.save()
        return res.send('Inserido com sucesso')
 
    },

    async Update(req, res){
        const { _id, nome, quantidade } = req.body;
        
        await Cad.findOneAndUpdate({_id: _id,}, { Quantidade: quantidade, Nome: nome})

        return res.send('Alterado com sucesso')
    },
    async Delete(req, res){
        const { _id } = req.body;
        await Cad.deleteOne({_id}) // passa o id e é excluido do banco

        return res.send('Deletado com sucesso')
    }
}