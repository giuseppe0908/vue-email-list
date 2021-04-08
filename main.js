var app = new Vue({
  el: '#root',
  data: {
    email: "",
    array_email: [],
  },
  methods: {
    genera: function () {
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            console.log(response.data.response),
            this.array_email.push(response.data.response) ;
          });
       }

    },

  }
});
