const naoEncontrado = (req,res,next) => {
    req.status(404).json({
        mensagem:"urso não encontrado",
        caminho:req.originalURl
    })
};
module.exports = naoEncontrado;