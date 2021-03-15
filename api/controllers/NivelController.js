const database = require('../models');

class NivelController {
    // FUNCIONANDO    
    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        };

    };
    // FUNCIONANDO
    static async pegaUmNivel(req, res) {
        const { id } = req.params;

        try {
            const umNivel = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async criaNivel(req, res) {
        const criaNivel = req.body;

        try {
            const novoNivelCriado = await database.Niveis.create(criaNivel);
            return res.status(200).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async atualizaNivel(req, res) {
        const novasInfo = req.body;
        const { id } = req.params;

        try {
            await database.Niveis.update(novasInfo, { where: { id: Number(id) } });
            const nivelAtualizado = await database.Niveis.findOne({ where: { id: Number(id) } });
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    // FUNCIONANDO
    static async apagaNivel(req, res) {
        const { id } = req.params;

        try {
            await database.Niveis.destroy({
                where: { id: Number(id) }
            });
            return res.status(200).json({ message: `O ID ${id} foi deletado com sucesso!` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
};


module.exports = NivelController