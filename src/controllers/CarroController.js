const CarroService = require("../services/CarroService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", array: [] };

    let carros = await CarroService.buscarTodos();
    for (let i in carros) {
      json.array.push({
        id: carros[i].id,
        Titulo: carros[i].titulo,
        Descricao: carros[i].descricao,
        Img: carros[i].img,
        Url: carros[i].url,
      });
    }
    res.json(json);
  },
};
