const videosRepository = require("../repositories/videosReposirory");

const videos = require("../models/Video");

class videsService { 
    encontrarTodos() {
        return videosRepository.encontrarTodos();
    }
    encontarComFiltro(filtros){ 
        let videosFiltrados = videosRepository.Encontrartodos() 
    }



}module.exports = new videsService();