var Fila = null
function onSubmit() {
        let DataForm = Leer()
        if (Fila == null){
            InsertarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
    }
}
function Leer() {
    let DataForm = {}
    DataForm["nom"] = document.getElementById("nom").value
    DataForm["marc"] = document.getElementById("marc").value
    DataForm["med"] = document.getElementById("med").value
    DataForm["ing"] = document.getElementById("ing").value
    DataForm["venc"] = document.getElementById("venc").value
    return DataForm
}
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.nom
    columna2 = Fila.insertCell(1).innerHTML = data.marc
    columna3 = Fila.insertCell(2).innerHTML = data.med
    columna4 = Fila.insertCell(3).innerHTML = data.ing
    columna5 = Fila.insertCell(4).innerHTML = data.venc
    columna6 = Fila.insertCell(5).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                               <input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("nom").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("nom").value = ""
    document.getElementById("marc").value = ""
    document.getElementById("med").value = ""
    document.getElementById("ing").value = ""
    document.getElementById("venc").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("nom").value = Fila.cells[0].innerHTML
    document.getElementById("marc").value = Fila.cells[1].innerHTML
    document.getElementById("med").value = Fila.cells[2].innerHTML
    document.getElementById("ing").value = Fila.cells[3].innerHTML
    document.getElementById("venc").value = Fila.cells[4].innerHTML
}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.nom
    Fila.cells[1].innerHTML = DataForm.marc
    Fila.cells[2].innerHTML = DataForm.med
    Fila.cells[3].innerHTML = DataForm.ing
    Fila.cells[4].innerHTML = DataForm.venc
    document.getElementById("nom").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
