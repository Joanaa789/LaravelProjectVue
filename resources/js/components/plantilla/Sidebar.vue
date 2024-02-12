<template>
 <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">
      <img :src="ruta + '/img/adminLTELogo.png'" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Sistema de Reacciones </span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="ruta + '/img/avatar.png'" class="img-circle elevation-2" alt="Flankin Hervas">
        </div>
        <div class="info">
          <a href="#" class="d-block">Flankin Hervas</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
              with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <router-link class="nav-link active" :to="'/'">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>

          <li class="nav-header">OPERACIONES</li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/pedidos'">
                <i class="fa-solid fa-cash-register"></i>
              <p>
                PEDIDOS
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/cliente'">
              <i class="nav-icon fas fa-user-friends"></i>
              <p>
                Clientes
              </p>
            </router-link>
          </li>
          <li class="nav-header">CONFIFURACION</li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/categoria'">
              <i class="nav-icon fas fa-sitemap"></i>
              <p>Categorias</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/producto'">
              <i class="nav-icon fas fa-sitemap"></i>
              <p>Productos</p>
            </router-link>
          </li>
          <li class="nav-header">ADMINISTRACION</li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/usuarios'">
              <i class="nav-icon fas fa-users"></i>
              <p class="text">Usuario</p>
            </router-link>
          </li>
          <li class="nav-item">
        <router-link class="nav-link" :to="'/rol'">
              <i class="nav-icon fas fa-unlock-alt"></i>
              <p>Roles</p>
        </router-link>
          </li>
          <li class="nav-item"> 
            <router-link class="nav-link" :to="'/permiso'">
              <i class="nav-icon fas fa-key"></i>
              <p>Permisos</p>
            </router-link>
          </li>
          <li class="nav-header">REPORTES</li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/pedidos'">
              <i class="nav-icon fas fa-sitemap"></i>
              <p>Pedidos</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default{
props: ['ruta']
}
</script>