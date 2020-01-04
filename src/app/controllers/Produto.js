const Cad = require('../models/tblProduto')

module.exports = {
    async Get(req, res){
       
       return Cad.find({})
        .then(produto => {
            if(produto.length){
                return res.status(200).json(produto) 
            }else{
                return res.status(404).send('Nenhum produto encontrado')
            }
            
        })
        .catch(err => { 
            if(err){
                console.log('Erro ao listar produtos: ' + err)
                return res.status(500).json({error: 'Ocorreu um erro ao listar os produtos.'})
            }
        })

    },
    async Post(req, res){
        const { nome, quantidade } = req.body
        
        await Cad.create({
            Nome: nome,
            Quantidade: quantidade,
        })
        .then(produto => {
            produto.save()
            return res.send('Inserido com sucesso')
        })
        .catch(err => {
            if(err){
                console.log('Erro ao inserir produtos: ' + err)
                return res.status(500).json({error: 'Ocorreu um erro ao inserir os produtos.'})
            }
        })
        
 
    },

    async Update(req, res){
        const { _id, nome, quantidade } = req.body;
        
        await Cad.findOneAndUpdate({_id: _id,}, { Quantidade: quantidade, Nome: nome})
        .then(produto => {
            // a variavel 'produto', é o produto antigo, para pegar o novo é so digitar
            // await Cad.find({_id: _id, Nome: nome, Quantidade: quantidade})
            // com isso, você vai realizar outra consulta passando os parametros que foram utilizados para fazer o update
            return res.send('Alterado com sucesso')
        })
        .catch(err => {
            if(err){
                console.log('Erro ao alterar produtos: ' + err)
                return res.status(500).json({error: 'Ocorreu um erro ao alterar os produtos.'})
            }
        })
    },

    async Delete(req, res){
        const { _id } = req.body;
        await Cad.deleteOne({_id}) // passa o id e é excluido do banco
        .then(() => {
            return res.send('Deletado com sucesso')
        })
        .catch(err => {
            if(err){
                console.log('Erro ao deletar produtos: ' + err)
                return res.status(500).json({error: 'Ocorreu um erro ao deletar os produtos.'})
            }
        })

        
    }
}