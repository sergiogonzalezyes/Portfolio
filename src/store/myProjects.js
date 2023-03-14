import { defineStore } from 'pinia'

export const useMyProjects = defineStore('myProjects', {
  state: () => ({
    projects: [
      {
        title: 'Vue Weather API App',
        description: 'This is a simple weather app that uses the OpenWeatherMap API to display the current weather for a given city.',
        githubUrl: 'https://github.com/sergiogonzalezyes/weather-vue',
        liveUrl: 'https://weather-vue-coral.vercel.app/',
        category: 'web-design',
      },
      {
        title: 'Superhero Villain API App',
        description: 'This project leverages the power of https://superheroapi.com/ to fetch data about the requested superheroes and villains, and presents their details to the user.',
        githubUrl: 'https://github.com/sergiogonzalezyes/SuperheroVillain-API-App',
        liveUrl: '',
        category: 'web-design',
      },
      {
        title: 'Project 3',
        description: 'This is my second project.',
        githubUrl: 'https://github.com/username/project2',
        liveUrl: 'https://example.com/project2',
        category: 'database-design',
      },
      {
        title: 'Project 4',
        description: 'This is my second project.',
        githubUrl: 'https://github.com/username/project2',
        liveUrl: 'https://example.com/project2',
        category: 'photography',
      }
      // Add more projects here as needed
    ],
  }),
})
