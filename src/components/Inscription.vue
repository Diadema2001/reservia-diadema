<template>
  <div id="app">
    <div v-if="showModal" class="fenetreModale">
      <div class="modal">
        <span class="fermer" @click="goHome">&times;</span>
        <form @submit.prevent="envoyerFormulaire">

          <div class="logo"><img src="/src/assets/images/logo/Reservia@3x.png" alt="logo reservia"></div>

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
            <button type="button" @click="goHome" class="bouton-annuler">
              Annuler
            </button>
            <button type="submit" class="valider-inscription">
              Enregistrer
            </button>
          </div>
          <router-link to="/connexion" class="bouton-connexion" @click="login">Vous avez déjà un compte ?</router-link
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
  name: "Inscription",
  components: {
    Footer,
  },
  data() {
    return {
      name: "",
      firstname: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      showModal: true,
      submitted: false,
      passwordError: "",
      loading: false
    };
  },
  watch: {
    // Vérifier si les mots de passe correspondent lors de la saisie
    confirmPassword(newVal) {
      this.validatePassword();
    },
    password(newVal) {
      this.validatePassword();
    }
  },
  methods: {
    validatePassword() {
      // Vérifier que les mots de passe correspondent
      if (this.password !== this.confirmPassword && this.confirmPassword !== "") {
        this.passwordError = "Les mots de passe ne correspondent pas";
        return false;
      } else if (this.password.length < 6 && this.password !== "") {
        this.passwordError = "Le mot de passe doit contenir au moins 6 caractères";
        return false;
      } else {
        this.passwordError = "";
        return true;
      }
    },
    validateForm() {
      // Validation de l'email avec regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        alert("Format d'email invalide");
        return false;
      }
      
      // Validation du numéro de téléphone
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(this.phone)) {
        alert("Le numéro de téléphone doit contenir 10 chiffres");
        return false;
      }
      
      // Vérification des mots de passe
      if (!this.validatePassword()) {
        return false;
      }
      
      return true;
    },
    async envoyerFormulaire() {
      if (!this.validateForm()) {
        return;
      }
      
      this.loading = true;
      
      const utilisateur = {
        name: this.name.trim(),
        firstname: this.firstname.trim(),
        phone: this.phone.trim(),
        email: this.email.trim().toLowerCase(),
        password: this.password,
        role: "client" // Définir le rôle par défaut
      };

      try {
        const response = await fetch("http://localhost:3000/api/inscription", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(utilisateur),
          credentials: "include" // Pour gérer les cookies de session
        });

        const data = await response.json();
        
        if (response.ok) {
          this.submitted = true;
          
          // Attendre 2 secondes avant de rediriger
          setTimeout(() => {
            // Stocker les informations de l'utilisateur dans le localStorage ou dans un store Vuex
            localStorage.setItem('user', JSON.stringify({
              id: data.userId,
              name: this.name,
              firstname: this.firstname,
              email: this.email,
              role: "client"
            }));
            
            // Rediriger vers la page d'accueil ou le tableau de bord
            this.$router.push('/');
          }, 2000);
        } else {
          // Gérer les erreurs retournées par l'API
          alert(data.message || "Erreur lors de l'inscription");
        }
      } catch (error) {
        console.error("Erreur:", error);
        alert("Erreur lors de la connexion au serveur. Veuillez réessayer plus tard.");
      } finally {
        this.loading = false;
      }
    },
    login() {
      this.$router.push('/connexion');
    },
    goHome() {
      this.$router.push('/');
    },
    resetForm() {
      this.name = "";
      this.firstname = "";
      this.phone = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.passwordError = "";
    }
  },
  mounted() {
    // Vérifiez si l'utilisateur est déjà connecté
    const user = localStorage.getItem('user');
    if (user) {
      this.$router.push('/');
    }
  }
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
  margin: auto;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  background: white;
  color: green;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 31%;
  flex-grow: 1;
}

.bouton-connexion:hover {
  font-weight: bold;
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
