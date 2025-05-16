# MarQHR - Teste Técnico

Este repositório contém um projeto desenvolvido como parte de um teste técnico para a MarQHR, utilizando React com Vite. O objetivo foi criar um sistema de gerenciamento de benefícios que inclui a classificação de despesas em categorias e o cálculo do saldo restante por categoria. Abaixo, detalho o desenvolvimento, minha contribuição manual e os momentos em que utilizei IA para superar desafios.

## Funcionalidades Implementadas

- **Classificação de Benefício**: Uma função que recebe uma descrição (ex.: "farmácia") e retorna a categoria correspondente (ex.: "Saúde") com base em palavras-chave pré-definidas (Alimentação, Saúde, Transporte, Cultura, Outros).
- **Cálculo de Saldo Disponível**: Uma função que calcula o saldo restante por categoria, começando com um valor inicial de R$ 1.000 por categoria e subtraindo os valores das transações registradas.
- **Interface de Usuário**: Uma interface React que permite:
  - Classificar despesas digitando uma descrição.
  - Registrar transações com valor e exibir a lista de transações.
  - Mostrar o saldo restante por categoria em tempo real.
- **Estilização**: Estilos CSS para criar uma interface visualmente clara, com ajustes para responsividade.

## Estrutura do Projeto

- `src/utils/benefits.js`: Contém as funções `classifyBenefit` e `calculateRemainingBalance`.
- `src/App.jsx`: Componente principal com a lógica de estado e renderização da interface.
- `src/App.css`: Arquivo de estilos para a interface.
- `README.md`: Este arquivo de documentação.
- `.gitignore`: Configuração para ignorar arquivos como `node_modules`.

## Desenvolvimento

### Passo a Passo
1. **Inicialização do Projeto**:
   - Criei o projeto React usando Vite com o `npm create vite@latest .`, escolhendo React e JavaScript. Configurei o repositório Git e fiz o commit inicial.
2. **Implementação das Funções**:
   - Desenvolvi a função `classifyBenefit` em `benefits.js`, usando loops e condicionais para verificar palavras-chave. Adicionei mais alguns termos às categorias.
   - Implementei a função `calculateRemainingBalance`, calculando o saldo com base em transações. (Utilizei a IA Claude para auxiliar na optimização da lógica com js.)
3. **Interface e Estilização**:
   - Criei a interface em `App.jsx`, usando `useState` para gerenciar estados e renderizar transações e saldos.
   - Adicionei os estilos iniciais em `App.css` manualmente, definindo o layout básico.
4. **Ajustes e Desafios**:
   - Enfrentei dificuldade para centralizar o layout no navegador, que inicialmente ficava alinhado à esquerda. Tentei ajustar o CSS manualmente, mas não consegui resolver.
   - Houve um pouco de dificuldae na tentativa de centralizar o conteúdo `display: block` e `align-items: center`, que foram aplicadas e ajustadas  na tentativa de centralizar o layout.
   - Ajustei a responsividade manualmente com media queries, com suporte da IA para validar a estrutura.
5. **Documentação**:
   - Este `README.md` foi criado com ajuda da IA para organizar o conteúdo, mas os detalhes do meu processo foram adicionados por mim.
6. **Adicionais**:
  - Ouve uma tentativa da minha parte em tentar criar um background animado, onde no plano de fundo ficariam as letras que compõem "MarQ HR" flutuando, enquanto colidiam com os limites     da tela, porém após tentativas que tiveram sucesso apenas parcial, optei pela simplicidade funcional.
    
## Tecnologias Utilizadas
- **React**: Biblioteca para criar a interface.
- **Vite**: Ferramenta para configuração rápida do projeto.
- **JavaScript**: Linguagem principal.
- **CSS**: Para estilização.
- **Git**: Para controle de versão e envio ao GitHub.
- **Grok 3**: Para auxílio na formatação de texto desse README.md
-**Claude**: Para auxílio na optimização da lógica de função em JS.

## Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/Sornasz/marq-teste1.git
2. Entre na pasta do projeto pelo cmd utilizando o caminho até marq-teste1
    cd (caminho-até) marq-teste1
3. Instale as dependências
    npm install
4. Inicie o Projeto
   npm run dev
5. Acesse o link do localhost que o Vite disponibiliza (geralmente http://localhost:5173) no navegador. Após isso, você poderá utilizar o projeto.
