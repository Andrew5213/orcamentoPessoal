class Despesa{
    constructor(ano,dia,mes,tipo,descricao,valor) {
        this.ano=ano
        this.dia=dia
        this.mes=mes
        this.tipo=tipo
        this.descricao=descricao
        this.valor=valor

    }
    validarDados(){
        for(let i in this){
            if (this[i]==undefined || this[i]=='' || this[i]==null){
                return false
            }
            return true
        }
}
}
class Bd{
    constructor() {
        let id =localStorage.getItem('id')
        if(id===null){
            localStorage.setItem('id',0)
        }
    }
    getProximoItem(){
        let proximoId= localStorage.getItem('id')
        return parseInt(proximoId)+1
    }
     gravar(d){

         let id = this.getProximoItem()
         localStorage.setItem(id,JSON.stringify(d))

         localStorage.setItem('id',id)
    }


}
let bd = new Bd();
function cadastrarDispesas(){
   let ano = document.getElementById('ano').value
    let dia = document.getElementById('dia').value
    let mes=document.getElementById('mes').value
    let tipo=document.getElementById('tipo').value
    let descricao=document.getElementById('descricao').value
    let valor=document.getElementById('valor').value
   let despesa = new Despesa(ano,dia,mes,tipo,descricao,valor)
    if(despesa.validarDados()){
        console.log('dados validos')
        $('sucessoGravacao').modal('show')
    }else {
        //console.log('dados invalidos ')
        $('#erroGravacao').modal('show')
    }
    bd.gravar(despesa)






}