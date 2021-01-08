/* Genera 10 mail tramite api e stampale in una lista
Usate Vue e Axios.
La richiesta AJAX per gli indirizzi email inviatela al seguente link:
https://flynn.boolean.careers/exercises/api/random/mail
La lista di email va stampata a schermo nella pagina html. */
let app = new Vue({
    el: "#app",
    data:{
        emailList : [],
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                this.emailList.push(response.data.response);
            })
            
        }
    }
})