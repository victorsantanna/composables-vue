<template>
    <div class="container">
        <div>
            <input v-model="cep" placeholder="Digite o CEP" />
            <button @click="getCepData">Buscar Cep</button>

        </div>
        <div>
            <div class="loading" v-if="loading">Loading...</div>
            <div v-if="error">{{ error }}</div>
            <div >
                <div v-if="cepData" class="secao-conteudo">
                    <p><strong>CEP:</strong> {{ cepData.cep }}</p>
                    <p><strong>Logradouro:</strong> {{ cepData.logradouro }}</p>
                    <p><strong>Bairro:</strong> {{ cepData.bairro }}</p>
                    <p><strong>Cidade:</strong> {{ cepData.localidade }}</p>
                    <p><strong>Estado:</strong> {{ cepData.uf }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCep } from '../composables/useCep';

const cep = ref('');
const { cepData, error, loading, fetchCepData } = useCep();

const getCepData = () => {
    fetchCepData(cep.value);
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

input{
    width: 300px;
    height: 40px;

}

button{
    height: 45px;
    width: 100px;
    background-color: #06004F;
    border: none;
    color: #fff;
    margin-left: 10px;
}

.secao-conteudo{
    width: 418px;
    height: 200px;
    border: 1px solid #06004F;
    margin: 10px;
    padding: 10px;
}
</style>