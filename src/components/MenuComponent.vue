<template>
    
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/coches">Coches</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/empleadosdetalles">Empleados Detalles</router-link>
        </li>
        
        <li class="nav-item">
          <router-link to="/empleadosoficio">Empleados Oficio</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" 
          role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Oficios
          </a>
          <ul class="dropdown-menu">
            <li v-for="oficio in oficios" :key="oficio">
                <router-link 
                :to="'/empleadosoficio/' + oficio">
                    {{oficio}}
                </router-link>
            </li>
            
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>
<script>
import Global from './../Global'
import axios from 'axios'

export default {
    name : "MenuComponent",
    data(){
        return{
            oficios:[]
        }
    }, mounted(){
        var request = "/api/empleados/oficios";
        var url = Global.urlempleados + request;
        axios.get(url).then(response => {
                this.oficios = response.data
            });
    }
}
</script>

<style scoped>
    #menu li{
        display:inline;
        margin-right:  10px;
    }
</style>