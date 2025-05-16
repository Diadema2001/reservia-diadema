<template>
  <div id="app">
    <div v-if="showLoginModal" class="fenetreModale">
      <div class="modal">
        <span class="fermer" @click="goHome">&times;</span>
        <form @submit.prevent="seConnecter">

          <div class="logo"><img src="/src/assets/images/logo/Reservia@3x.png" alt="logo reservia"></div>

          <h2>Connexion</h2>

          <label for="loginEmail">Email :</label>
          <input
            type="email"
            id="loginEmail"
            v-model="email"
            class="input1"
            required
          />

          <label for="loginPassword">Mot de passe :</label>
          <input
            type="password"
            id="loginPassword"
            v-model="password"
            class="input1"
            required
          />

          <p v-if="passwordError" class="message-erreur">
            {{ passwordError }}"
          </p>

          <div class="boutons">
            <button type="button" @click="goHome" class="bouton-annuler">
              Annuler
            </button>
            <button type="submit" class="bouton-connexion">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      showLoginModal: true,
    };
  },
  methods: {
    async seConnecter() {
      try {
        const response = await fetch("http://localhost:3000/api/connexion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });
        const data = await response.json();

        if (response.ok) {
          alert(data.message);
          //Rediriger ou sauvegarder l'utilisateur dans le site
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
        alert("Erreur lors de la connexion.");
      }
    },

    goHome() {
      this.$router.push('/');
    }
  },
  name: "Connexion",
  components: {
    Footer,
  },
};
</script>

<style scoped>
#app {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #eee;
  width: 400px;
  margin: auto;
  justify-content: center;
}

#app1 {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #eee;
  width: 400px;
  margin: auto;
  justify-content: center;
}

.fenetreModale {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 360px;
  text-align: left;
  position: relative;
}

.fermer {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

.input1 {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.boutons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.valider-inscription {
  margin-top: 15px;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 31%;
  flex-grow: 1;
}

.valider-inscription:hover {
  background: #0056b3;
}

.bouton-connexion {
  margin-top: 15px;
  padding: 10px;
  background: green;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 31%;
  flex-grow: 1;
}

.bouton-connexion:hover {
  background: darkgreen;
}

.reussite {
  margin: auto;
  text-align: center;
  color: green;
}

.message-erreur {
  color: red;
  font-size: 9px;
  margin: auto;
}

.bouton-annuler {
  margin-top: 15px;
  background: #bbb;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 31%;
  flex-grow: 1;
}

.bouton-annuler:hover {
  background: #999;
}
</style>
