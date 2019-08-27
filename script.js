var selectedRow = null

function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
}

function readFormData() {
    var formData = {};
    formData["INPUT"] = document.getElementById("INPUT").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("DATA").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.INPUT;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("INPUT").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("INPUT").value = selectedRow.cells[0].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.INPUT;
}

function onDelete(td) {
        row = td.parentElement.parentElement;
 //        row1=td.parentElement;
   //      document.getElementById("para").innerHTML=row1.nodeName;
        document.getElementById("DATA").deleteRow(row.rowIndex);
        resetForm();
}
