const manipuladorDeErros = (rreq,res,next) => {
    res.status(err.status || 500).json({
        mensage:erro.mensage || "erro interno de servidor"
    })
}

module.exports = manipuladorDeErros;