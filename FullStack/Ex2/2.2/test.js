function generateTable() {
    const number = document.getElementById('number').value;
    const tableContainer = document.getElementById('tableContainer');
    
    tableContainer.innerHTML = '';

    if (number === '' || isNaN(number)) {
        tableContainer.innerHTML = '<p style="color: red;">Please enter a valid number.</p>';
        return;
    }

    let table = '<table>';
    table += '<tr><th>Multiplication</th><th>Result</th></tr>';

    for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${number} × ${i}</td><td>${number * i}</td></tr>`;
    }

    table += '</table>';
    tableContainer.innerHTML = table;
}