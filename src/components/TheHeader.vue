<template>
  <header id="nav-bg">
    <div class="container">
      <router-link to="/">
        <h1 id="brand">Boo<span>kia</span> </h1>
      </router-link>
      <nav>
        <ul>
          <li>
            <router-link to="/">Hjem</router-link>
          </li>
          <li>
            <router-link to="/bokhylle">Bokhylle</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
  }

  #nav-bg {
    transition: 1s ease-out;
    background-color: #fff;
  }

  #brand {
    font-size: 1.65rem;
    font-family: 'Inter', sans-serif;
  }

  h1 span {
    font-weight: 300;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin: 0;
    margin-left: 40px;
  }

  a {
    text-decoration: none;
    color: #141111;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 1px;
    padding: 20px 20px;
    border-radius: 50px;
    transition: .2s ease;
  }

  li a:hover {
    color: #171313;
    text-decoration: underline solid #F9C74F 8px;
  }
</style>