import { ref, watchEffect } from 'vue';

export function useMovimentoImagem() {
  const position = ref(0);
  const direction = ref(1);

  watchEffect(() => {
    const interval = setInterval(() => {
      if (position.value >= 10) {
        direction.value = -1;
      } else if (position.value <= -10) {
        direction.value = 1;
      }
      position.value += direction.value;
    }, 100); 
    
    return () => clearInterval(interval);
  });

  return {
    position
  };
}