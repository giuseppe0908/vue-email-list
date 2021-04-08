var app = new Vue({
  el: '#root',
  data: {
    array_email: [],
    boolean: false,
  },
  methods: {
    genera: function () {

      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            console.log(response.data.response),
            this.array_email.push(response.data.response) ;
            if (this.array_email.length == 9) {
              this.boolean = true;
            }
          });
       }


    },

  }
});
