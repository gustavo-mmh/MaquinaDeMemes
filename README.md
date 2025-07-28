# 🎨 Máquina de Memes

Este projeto é uma aplicação web simples e divertida que permite aos usuários criar seus próprios memes personalizados. Com uma interface intuitiva, você pode selecionar uma imagem (incluindo uma coleção de bandeiras de países), adicionar textos superiores e inferiores, e baixar seu meme pronto para compartilhar\!

## ✨ Funcionalidades

  * **Geração de Memes:** ✍️ Adicione facilmente textos na parte superior e inferior de qualquer imagem para criar seu meme.
  * **Seleção de Imagens:** 🖼️ Escolha entre um conjunto de imagens pré-carregadas, incluindo bandeiras de diversos países, ou faça upload da sua própria imagem.
  * **Exportação de Imagem:** 💾 Salve o meme gerado como um arquivo de imagem diretamente para o seu dispositivo.
  * **Personalização de Texto:** Ajuste a cor e o tamanho do texto para que ele se adapte perfeitamente ao seu meme.

## 🚀 Demonstração ao Vivo

Você pode ver este projeto funcionando no GitHub Pages através do link: [Maquina De Memes](https://gustavo-mmh.github.io/MaquinaDeMemes)

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza um stack de desenvolvimento web clássico e leve:

  * **HTML5:** Para estruturação e conteúdo da página web.
  * **CSS3:** Para estilização e responsividade da interface.
  * **JavaScript (Vanilla JS):** Para toda a lógica interativa e manipulação do DOM.
  * **`html2canvas.js`:** Uma biblioteca JavaScript para renderizar elementos HTML para um canvas, possibilitando a exportação das imagens geradas.
  * **Font Awesome:** Para ícones na interface do usuário.

## 📂 Estrutura do Projeto

A organização dos arquivos do projeto é a seguinte:

```
├── assets/                     # Contém todos os arquivos de mídia e estilos
│   ├── css/                    # Folhas de estilo CSS (reset.css, style.css) 🎨
│   ├── images/                 # Imagens padrão e coleção de bandeiras 🖼️
│   │   ├── flags/              # Imagens das bandeiras de países
│   │   └── ...                 # Outras imagens padrão (default_765x625.png)
│   └── js/                     # Arquivos JavaScript
│       ├── flags.json          # Dados das bandeiras para seleção 🌍
│       ├── html2canvas.js      # Biblioteca para exportação de HTML para imagem 📸
│       └── scripts.js          # Lógica principal da aplicação
├── index.html                  # Página principal da aplicação web 📄
└── README.md                   # Documentação do projeto (este arquivo) 📖
```

## 🚀 Como Começar

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

  * Um navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd maquinadememes
    ```

2.  **Abra no Navegador:**
    Simplesmente abra o arquivo `index.html` em seu navegador web. Não é necessário nenhum servidor local ou ambiente de desenvolvimento complexo.

    ```bash
    # Exemplo no Linux/macOS
    open index.html

    # Exemplo no Windows
    start index.html
    ```

## ▶️ Como Usar

1.  Abra o arquivo `index.html` no seu navegador.
2.  **Selecione uma Imagem:** Escolha uma imagem da galeria de bandeiras ou utilize as imagens padrão.
3.  **Adicione Texto:** Digite seu texto desejado nos campos "Texto Superior" e "Texto Inferior".
4.  **Personalize:** Mude as cores do texto e os tamanhos da fonte conforme sua preferência.
5.  **Gere e Baixe:** Clique no botão "Gerar Meme" para criar e baixar sua imagem personalizada.

## ⚖️ Licença

Este projeto é de código aberto e está disponível sob a licença [MIT](https://opensource.org/licenses/MIT) (conforme a biblioteca html2canvas).
