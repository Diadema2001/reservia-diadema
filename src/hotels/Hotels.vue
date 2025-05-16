<template>
    <div v-for="hotel in hotels" :key="hotel.id">
        <h3>{{ hotel.nom }}</h3>
        <input type="number" v-model="hotel.prix" @change="updateHotel(hotel)" />
        <input type="number" step="0.1" max="5" min="0" v-model="hotel.note" @change="updateHotel(hotel)" />
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return{
                hotels: [],
            };
        },
        async mounted() {
            const response = await axios.get('http://localhost:3000/api/hotels');
            this.hotels = response.data;
        },
        methods: {
            async updateHotel(hotel) {
                await axios.put('http://localhost:3000/api/hotels/${hotel.id}', {
                    prix: hotel.prix,
                    note: hotel.note
                });
            }
        }
    };
</script>