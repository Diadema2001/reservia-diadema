<template>
    <header>
        <div class="div1">
			<nav class="nav">
				<div class="logo"><img src="/src/assets/images/logo/Reservia@3x.png" alt="logo reservia"></div>
				<router-link to="/inscription" class="inscription">S'inscrire</router-link>
				<ul class="lien-navigation">
					<li class="li1"><a href="#hebergements">Hébergements</a></li>
					<li class="li2"><a href="#activites">Activités</a></li>
				</ul>
			</nav>

			<h1>Trouvez votre hébèrgement pour des vacances de rêve</h1>
			<p class="p1">En plein centre ville ou en pleine nature</p>
			<div class="search-container1">
				<div class="search-box">	
					<i class="fa-solid fa-location-dot"></i>
					<input type="text" class="search-input" placeholder="Marseille, France">
				</div>
				<button class="search-button">Rechercher</button>
			</div>
			<div class="search-container2">
				<div class="search-box">	
					<i class="fa-solid fa-location-dot"></i>
					<input type="text" class="search-input" placeholder="Marseille, France">
				</div>
				<button class="search-button1"><i class="fa-solid fa-magnifying-glass"></i></button>
			</div>
			<div class="filtres">
				<p class="p">Filtres</p>
				<div class="elements-filtres">
					<div class="icone"><i class="fa-solid fa-money-bill-wave"></i></div>
					<p class="option">Economique</p>
				</div>
				<div class="elements-filtres">
					<div class="icone"><i class="fa-solid fa-child-reaching"></i></div>
					<p class="option">Familial</p>
				</div>
				<div class="elements-filtres">
					<i class="fa-solid fa-heart"></i>
					<p class="option">Romantique</p>
				</div>
				<div class="elements-filtres">
					<div class="icone"><i class="fa-solid fa-dog"></i></div>
					<p class="option">Animaux autorisés</p>
				</div>
			</div>
			<div class="note">
				<i class="fa-solid fa-info"></i>
				<p class="texte">Plus de 500 logements sont disponibles dans cette ville</p>
			</div>
	    </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>