const internalWeight = document.getElementById('internalWeight');
const externalWeight = document.getElementById('externalWeight');
const internalWeightSpan = document.getElementById('internalWeightSpan');
const externalWeightSpan = document.getElementById('externalWeightSpan');
internalWeight.addEventListener('input', updateWeights);
externalWeight.addEventListener('input', updateWeights);

function updateWeights() {
    internalWeightSpan.textContent = internalWeight.value + '%';
    externalWeightSpan.textContent = (100 - internalWeight.value) + '%';
    externalWeight.value = 100 - internalWeight.value; 
}
function setPresetWeights(internal, external) {
    internalWeight.value = internal;
    externalWeight.value = external;
    updateWeights(); 
}
function calculateTotalMarks() {
    const internalMarks = parseFloat(document.getElementById('internalMarks').value);
    const externalMarks = parseFloat(document.getElementById('externalMarks').value);
    
    if (isNaN(internalMarks) || isNaN(externalMarks) || internalMarks < 0 || externalMarks < 0 || internalMarks > 100 || externalMarks > 100) {
        document.getElementById('result').textContent = 'Please enter valid marks between 0 and 100.';
        return;
    }

    const internalWeightValue = parseFloat(internalWeight.value) / 100;
    const externalWeightValue = parseFloat(externalWeight.value) / 100;

    const totalMarks = (internalMarks * internalWeightValue) + (externalMarks * externalWeightValue);
    
    document.getElementById('result').textContent = 'Total Marks: ' + totalMarks.toFixed(2);
}
updateWeights();