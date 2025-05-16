<template>
    <div>
		<Header />
		<Body />
		<Footer />
	</div>
</template>

 <script>
	import Header from './Header.vue'
	import Body from './Body.vue'
	import Footer from './Footer.vue'
    export default{
        name: 'Home',
		components: {
			Header, 
			Body,
			Footer
		},
		mounted() {
			fetch('${import.meta.env.VITE_API_URL}/home')
				.then(res => res.json())
				.then(data => {
					console.log(data.message)
				})
		}
    }
</script>