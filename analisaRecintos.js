


function encontrarRecintosViaveis(recintos, novoAnimal, quantidade) {
    
}

// Dados iniciais 
const animaisDisponiveis = {
    LEAO: new Animal('LEAO', 3, ['savana']),
    LEOPARDO: new Animal('LEOPARDO', 2, ['savana']),
    CROCODILO: new Animal('CROCODILO',3,['rio']),
    MACADO: new Animal('MACACO', 1, ['savana ou floresta']),
    GAZELA: new Animal('GAZELA', 2, ['savana']),
    HIPOPOTAMO: new Animal('HIPOPOTAMO', 4, ['savana ou rio'])

};

const recintos = [
    new Recinto(1, 'savana', 10, [animaisDisponiveis.MACACO, animaisDisponiveis.MACACO, animaisDisponiveis.MACACO]),
    new Recinto(2, 'savana', 15, [animaisDisponiveis.LEAO, animaisDisponiveis.LEOPARDO, animaisDisponiveis.GAZELA]),
    new Recinto(3, 'rio', 8, [animaisDisponiveis.CROCODILO, animaisDisponiveis.HIPOPOTAMO]),
    new Recinto(4, 'floresta', 5, [animaisDisponiveis.MACACO])
];

// Entrada do usuário
const [novoAnimalStr, quantidadeStr] = prompt("Digite o tipo e quantidade de animal (separados por espaço): ").split(' ');
const novoAnimal = animaisDisponiveis[novoAnimalStr.toUpperCase()];
const quantidade = parseInt(quantidadeStr);

// Processamento e saída
if (!novoAnimal) {
    console.log({ erro: "Animal inválido" });
} else if (quantidade <= 0) {
    console.log({ erro: "Quantidade inválida" });
} else {
    const recintosViaveis = encontrarRecintosViaveis(recintos, novoAnimal, quantidade);
    if (recintosViaveis.length === 0) {
        console.log({ erro: "Não há recinto viável" });
    } else {
        console.log({ recintosViaveis });
    }
}