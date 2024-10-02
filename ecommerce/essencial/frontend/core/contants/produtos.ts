import Produto from "../produto/Produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Notebook Gamer Acer Nitro 5',
        descricao: 'O Acer Nitro 5 é um notebook gamer poderoso, ideal para jogos',
        marca: 'Acer',
        modelo: 'AN515-54-58CL',
        imagem: 'http',
        nota: 4.5,
        videoReview: 'https',
        tags: ['Baixou'],
        precoBase: 6499.99,
        precoPromocional: 5999.99,
        menorPreco: 4850.9,
        maiorPreco: 9800.8,
        precoMedio: 6503.7,
        especificacoes: {
            destaque: 'NVIDIA GeForce RTX 2060',
            Processador: 'Intel Core i5-9300H',
            Memória: '16GB DDR4',
            Armazenamento: '512GB SSD',
            'Placa de Video': 'NVIDIA GeForce RTX 2060',
            Tela: '15.6 polegadas Full HD',
            Peso: '2.5Kg',
        },
    },
]

export default produtos;