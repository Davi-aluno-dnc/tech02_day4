class Medicamento{
    constructor(){
        this.id = 1;
    }

    Adicionar(){
        let medicamento = this.lerDados()
    }

    lerDados(){
        let medicamento = {}

        medicamento.id = this.id;
        medicamento.nomeMedicamento = document.getElementById('medNome')
        medicamento.qtdMedicamento = document.getElementById('medQtd')
        medicamento.precoMedicamento = document.getElementById('medPrec')
        medicamento.medClassMedicamento = document.getElementById('medClass')    
        
        return medicamento
    }


}

var medicamento = new Medicamento();