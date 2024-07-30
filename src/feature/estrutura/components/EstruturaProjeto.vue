<template>
    <div class="container">
        <div>
            <img loading="lazy" src="../../../assets/img/estrutura.png" alt="" :style="{ transform: `translateY(${position}px)` }">
        </div>
        <div class="conteudo">
            <h2>Estrutura do Composition API</h2>
            <p>Embora a ordem exata possa ser adaptada para atender às necessidades de seu projeto ou equipe,<br>
                é crucial que a ordem escolhida seja mantida de forma consistente em toda a sua base de código.</p>
            <ul>
                <li>Inicializando: código para configurar a lógica de inicialização.</li>
                <li>Refs: Código para referências reativas.</li>
                <li>Computado: código para propriedades computadas.</li>
                <li>Métodos: Funções e métodos que serão utilizados.</li>
                <li>Lifecycle Hooks:como onMounted, onUnmounted etc.</li>
                <li>Watch</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { useMovimentoImagem } from '../../home/composables/useMovimentoImagem';
export default {
    setup() {
        const { position } = useMovimentoImagem();
        return {
            position
        };
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 100px;
}

img {
    width: 350px;
    margin-top: 20px;
}

li {
    padding: 10px;
    font-size: 16px;
}

.conteudo{
    margin-top: 5px;
    padding: 5px;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
</style>