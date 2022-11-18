const calculadora = {
    display: document.querySelector('.display'),

    digitar(){

    },

    apagar(){
        this.display.value = this.display.value.slice(0,-1)
    },
    
    limpar(){
        this.display.value = ''
    },

    resultado(){
        try{
            if(!this.display.value){
                this.display.value = ''
            } else{
                this.display.value = eval(this.display.value)
            }

        }catch{
            alert('ERRO: Isso não é um número.')
            this.display.value = ''
        }
    },

    inicia(){
        document.addEventListener('click', (e)=>{
            const el = e.target

            if (el.classList.contains('btn-num')){
                this.display.value += el.innerText
            }
            if (el.classList.contains('btn-delete')){
                this.apagar()
            }
            if (el.classList.contains('btn-clear')){
                this.limpar()
            }
            if (el.classList.contains('btn-equals')){
                this.resultado()
            }
            document.addEventListener('keypress',(e)=>{
                if(e.keyCode == 13){
                    this.resultado()
                }
            })
        })
    }
}
calculadora.inicia()