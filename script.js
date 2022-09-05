
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    const country = parseFloat(document.getElementById('country').value);
    const wage = parseFloat(document.getElementById('wage').value);
    const amountLessDisplay = document.getElementById('sum');
    const potencialObject = document.getElementById('object');
    potencialObject.textContent ='';

    let amountLess = (country*wage)/100  
    amountLessDisplay.innerHTML = 'A man in your position could possibly be earning $'+ amountLess + ' more per year than you'
    let objectsAndCosts = {
        wine:['10', '$10 per bottle of wine'],
        rent:['900', '$900 per month of rent'],
        nikes:['80', '$80 worth of shoes'],
        internet:['50', '$60 worth of internt bills payed'],
        car:['5000', '$5000 worth car']
    }
    let atleastOneObject = false;
    Object.entries(objectsAndCosts).forEach(obj => {
        console.log(obj)
        const [key, [val, sentece]] = obj;
        if(amountLess > parseFloat(val)){
            if(!atleastOneObject){
                const newEle = document.createElement("h2");
                const newContent = document.createTextNode("You could buy:");
                newEle.appendChild(newContent);
                potencialObject.appendChild(newEle)
                atleastOneObject=true;
            }
            console.log(parseFloat(val))
            let amount = amountLess/parseFloat(val);
            amount = Math.round(amount);
            const newEle = document.createElement("h2");
            const newContent = document.createTextNode( amount + " of " + sentece);
            newEle.appendChild(newContent);
            potencialObject.appendChild(newEle)
        }
    });
})
