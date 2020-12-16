const app = Vue.createApp({
  data() {
    return {
      books: [{
          title: 'name of the wind',
          author: 'patrick rothfuss'
        },
        {
          title: 'the way of kings',
          author: 'brandon sanderson'
        },
        {
          title: 'the final empire',
          author: 'brandon sanderson'
        }
      ],
      showBooks: true,
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  }
})

app.mount('#app')