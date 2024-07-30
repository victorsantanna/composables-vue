<template>
  <nav>
    <router-link to="/">Composables</router-link> 
    <router-link to="/estrutura">Estrutura do Arquivo</router-link> 

    <div class="dropdown">
      <button class="dropbtn">Projetos</button>
      <div class="dropdown-content">
        <router-link to="/count">Contador</router-link>
        <router-link to="/cep">Busca Cep</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>

nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #06004F;
  color: aliceblue;
  padding: 20px;
  
}

nav a {
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-left: 20px;
  text-decoration: none;
}



.dropdown {
  position: relative;
  display: inline-block;
  margin-left: 20px; /* Espaço do dropdown em relação aos outros links */
}

.dropbtn {
  background-color: #06004F; /* Cor do botão do dropdown */
  color: aliceblue;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #06004F; /* Cor de fundo do conteúdo do dropdown */
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: rgb(205, 205, 205);
  padding: 12px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #0d0098; /* Cor de fundo ao passar o mouse sobre os itens do dropdown */
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #06004F; /* Cor do botão ao passar o mouse sobre o dropdown */
  font-size: 17px;
}

</style>