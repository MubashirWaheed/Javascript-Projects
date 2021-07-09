class Calculator{
    // Every time an object is created constructor runs at the start.
    constructor(currentOperandTextElement, previousOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    appendNumber(number){
        if(this.currentOperand.includes(".") && number===".")return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    choseOperation(operation){
        if(this.currentOperand === "") return;
        this.operation = operation;
        this.previousOperand = this.currentOperand.toString() + this.operation.toString();
        this.currentOperand = "";
        
    }

    updateDisplay(){
        this.currentOperandTextElement.innerHTML = this.currentOperand;
        this.previousOperandTextElement.innerHTML = this.previousOperand;
    }

    compute(){
        if(this.currentOperand ==="" || this.previousOperand === "")return;
        // if()
        let computation;
        let currentOperand = parseFloat(this.currentOperand);
        let previousOperand = parseFloat(this.previousOperand);
        switch (this.operation){
            case "+":
                computation = previousOperand + currentOperand;
                console.log(computation);
                break;
            case "-":
                computation = previousOperand  - currentOperand;
                break;
            case "*":
                computation =  previousOperand  * currentOperand;
                break;
            case "÷":
                computation = previousOperand / currentOperand;       
        }
        this.currentOperand = computation;
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.slice(0,-1);
    }
}

const numbersButton = document.querySelectorAll("[data-number]");
const operationsButton =document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

// Instanciating 
const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);

numbersButton.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay();
    })
})

operationsButton.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.choseOperation(button.innerHTML);
        calculator.updateDisplay();
    } )
})
equalsButton.addEventListener("click", ()=>{
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener("click", ()=>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", ()=>{
    calculator.delete();
    calculator.updateDisplay();
})