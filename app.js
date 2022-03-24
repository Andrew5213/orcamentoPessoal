class Despesa{
    constructor(ano,dia,mes,tipo,descricao,valor) {
        this.ano
        this.dia
        this.mes
        this.tipo
        this.descricao
        this.valor
    }
}
function cadastrarDispesas(){
   let ano = document.getElementById('ano').value
    let dia = document.getElementById('dia').value
    let mes=document.getElementById('mes').value
    let tipo=document.getElementById('tipo').value
    let descricao=document.getElementById('descricao').value
    let valor=document.getElementById('valor').value
   let despesa = new Despesa(ano,dia,mes,tipo,descricao,valor)
    console.log(despesa)






}