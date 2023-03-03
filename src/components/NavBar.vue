<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn >
            <v-icon color="green" left class="mr-2">fas fa-signature</v-icon>Sergio Gonzalez
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="scroll('home')" class="text-white">Home</v-btn>
        <v-btn text @click="scroll('about')" class="text-green">About</v-btn>
        <v-btn text @click="scroll('portfolio')" class="text-green">Portfolio</v-btn>
        <v-btn text @click="scroll('services')" class="text-green">Services</v-btn>
        <v-btn text @click="scroll('page')" class="text-green">Page</v-btn>
        <v-btn text @click="scroll('biog')" class="text-green">Biog</v-btn>
        <v-btn text @click="scroll('contact')" class="text-green">Contact</v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        methods: {
            scroll(refName) {
                const element = document.getElementById(refName)
                element.scrollIntoView({ behavior: 'smooth' })

            }
        }
    }
</script>

<style>

</style>