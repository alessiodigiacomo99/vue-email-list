/* Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato */
let app = new Vue({
    el: "#app",
    data:{
        numero: "",
        quadratone:[
            [
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                }
            ],
            [
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                }
            ],
            [
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                }
            ],
            [
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                }
            ],
            [
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                }
            ],
            [
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                },
                {
                    numero: "",
                    colore: ""
                }
            ],
        ]
    },
    methods:{
        randomNumber(index, indice){
            axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            .then(response => {
                this.numero = response.data.response;
                if (this.numero <= 5) {
                    this.quadratone[indice][index].colore = "giallo"
                }else{
                    this.quadratone[indice][index].colore = "verde"
                }
                this.quadratone[indice][index].numero = this.numero
            });
        }
    }
})