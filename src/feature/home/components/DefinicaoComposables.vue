<template>
    <div class="container">
        <div class="secao-imagem tilt-in-bottom-1">
            <img src="../../../assets/img/pergunta-composables.png" alt="">
        </div>
        <div class="secao-conteudo">
            <h2>Composables</h2>
            <div class="secao-rolagem">
                <strong>
                    <p> &diams; O que são composables?</p>
                </strong>
                <p>Composables são funções reutilizáveis que encapsulam lógica de estado e comportamento.<br>
                    Eles são uma das principais funcionalidades introduzidas com a Composition API no Vue 3.<br>
                    A ideia principal é extrair e reutilizar lógica entre componentes, promovendo um código mais<br>
                    modular e de fácil manutenção.</p>
                <strong>
                    <p> &diams; Quando usar?</p>
                </strong>
                <p>Use composables quando você precisar:<br><br>
                    <strong>Reutilizar Lógica:</strong> Para extrair e compartilhar lógica reativa entre múltiplos
                    componentes.
                    <strong>Organizar Código:</strong> Para manter o código do componente mais limpo e organizado,
                    separando a lógica de
                    negócios da lógica de apresentação.<br>
                    <strong>Manter a Legibilidade:</strong> Para melhorar a legibilidade e a manutenção do código,
                    especialmente em
                    componentes grandes ou complexos.
                </p>
                <strong>
                    <p> &diams; Pontos positivos e Negativos</p>
                </strong>
                <p>Positivos: <br>
                <ul>
                    <li> Reutilização de código</li>
                    <li> Organização e Modularidade</li>
                    <li> Testabilidade (isolada)</li>
                </ul>
                <br>
                Negativos: <br>
                <ul>
                    <li> Gerenciamento de Estado</li>
                    <li> Dependências Implícitas</li>
                    <li> Perfomancce </li>
                </ul>
                </p>
            </div>

        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.container {
    display: flex;
    align-content: center;
    margin: 20px;
    gap: 30px;
}


img {
    width: 500px;
    height: auto;

}

.secao-rolagem {
    max-height: 250px;
    overflow-y: auto;
    padding-right: 10px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
    background-color: #fcfcfc;
}

.tilt-in-bottom-1 {
    -webkit-animation: tilt-in-bottom-1 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: tilt-in-bottom-1 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes tilt-in-bottom-1 {
  0% {
    -webkit-transform: rotateY(30deg) translateY(300px) skewY(-30deg);
            transform: rotateY(30deg) translateY(300px) skewY(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-bottom-1 {
  0% {
    -webkit-transform: rotateY(30deg) translateY(300px) skewY(-30deg);
            transform: rotateY(30deg) translateY(300px) skewY(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
}
</style>