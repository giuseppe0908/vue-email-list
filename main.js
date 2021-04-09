var app = new Vue({
  el: '#root',
  data: {
    array_email: [],
  },
  // methods: {
  //   genera: function () {
  //     this.array_email=[];
  //     for (let i = 0; i < 10; i++) {
  //       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  //         .then((response) => {
  //           console.log(response.data.response),
  //           this.array_email.push(response.data.response) ;
  //         });
  //      }
  //   },
    mounted(){
      // this.array_email=[];
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            // console.log(response.data.response),
            this.array_email.push(response.data.response) ;
          });
       }
    }


});
