import { ref } from 'vue';

export function useCep(){
    const cepData = ref(null);

    const error = ref(null);
    const loading = ref(null);

    const fetchCepData = async (cep) => {
        loading.value = true;
        error.value = null;
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if(!response.ok){
                throw new Error('Errou ao buscar o CEP!');
            }
            cepData.value = await response.json();
        } catch (e) {
            error.value = e;

        }finally{
            loading.value =false;
        }
    };
    return{
        cepData,
        error,
        loading,
        fetchCepData
    };
}