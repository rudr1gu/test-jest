class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: "savana", tamanhoTotal: 10, animaisExistentes: "3 macacos" },
            { numero: 2, bioma: "floresta", tamanhoTotal: 5, animaisExistentes: "vazio" },
            { numero: 3, bioma: "savana e rio", tamanhoTotal: 7, animaisExistentes: "1 gazela" },
            { numero: 4, bioma: "rio", tamanhoTotal: 8, animaisExistentes: "vazio" },
            { numero: 5, bioma: "savana", tamanhoTotal: 9, animaisExistentes: "1 leão" }
        ];

        this.especiesValidas = {
            LEAO: { tamanho: 3, biomas: ["savana"] },
            LEOPARDO: { tamanho: 2, biomas: ["savana"] },
            CROCODILO: { tamanho: 3, biomas: ["rio"] },
            MACACO: { tamanho: 1, biomas: ["savana", "floresta"] },
            GAZELA: { tamanho: 2, biomas: ["savana"] },
            HIPOPOTAMO: { tamanho: 4, biomas: ["savana", "rio"] }
        };
    }

    analisaRecintos(animal, quantidade) {
        if (!this.especiesValidas[animal]) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }

        const especie = this.especiesValidas[animal];
        const tamanhoNecessario = especie.tamanho * quantidade;
        const recintosViaveis = [];

        for (const recinto of this.recintos) {
            const espacoOcupado = this.verificarEspacoOcupado(recinto);
            const tamanhoDisponivel = recinto.tamanhoTotal - espacoOcupado;

            if (especie.biomas.some(bioma => recinto.bioma.includes(bioma))) {
                if (tamanhoDisponivel >= tamanhoNecessario) {
                    recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${tamanhoDisponivel} total: ${recinto.tamanhoTotal})`);
                }
            }
        }

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: null };
        }

        return { erro: null, recintosViaveis };
    }

    verificarEspacoOcupado(recinto) {
        if (recinto.animaisExistentes === "vazio") return 0;

        const animaisExistentes = recinto.animaisExistentes.split(' ');
        const quantidadeExistente = parseInt(animaisExistentes[0]);
        const especieExistente = animaisExistentes[1].toUpperCase(); // Garantir que a espécie esteja em maiúsculas

        const especiesValidas = {
            LEAO: 3,
            MACACO: 1,
            GAZELA: 2,
        };

        return (especiesValidas[especieExistente] || 0) * quantidadeExistente;
    }
}

export { RecintosZoo as RecintosZoo };