<template>
  <div id="app">
    <div v-if="showModal" class="fenetreModale">
      <div class="modal">
        <span class="fermer" @click="closeModal">&times;</span>
        <form @submit.prevent="submitForm">
          <h2>Inscription</h2>

          <label for="name">Nom :</label>
          <input type="text" id="name" v-model="name" class="input1" required />

          <label for="firstname">Prénom :</label>
          <input
            type="text"
            id="firstname"
            v-model="firstname"
            class="input1"
            required
          />

          <label for="phone">Téléphone :</label>
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="input1"
            required
            pattern="^[0-9]{10}$"
          />

          <label for="email">E-mail :</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="input1"
            required
          />

          <label for="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="input1"
            required
          />

          <label for="confirmPassword">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="input1"
            required
          />

          <p v-if="passwordError" class="message-erreur">
            {{ passwordError }}"
          </p>

          <div class="boutons">
            <button type="button" @click="resetForm" class="bouton-annuler">
              Annuler
            </button>
            <button type="submit" class="valider-inscription">
              Enregistrer
            </button>
          </div>
          <router-link to="/connexion" class="bouton-connexion" @click="login"
            >Vous avez déjà un compte ?</router-link
          >
        </form>
      </div>
      <p v-if="submitted" class="reussite">Inscritption réussie</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  data() {
    return {
      name: "",
      firstname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      showModal: true,
    };
  },
  methods: {
    async envoyerFormulaire() {
      const utilisateur = {
        name: this.name,
        firstname: this.firstname,
        phone: this.phone,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await fetch("http://localhost:3000/api/inscription", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(utilisateur),
        });

        const data = await response.json();
        alert(data.message);
      } catch (error) {
        alert("Erreur lors de l'envoi du formulaire");
      }
    },
  },
  name: "Inscription",
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
