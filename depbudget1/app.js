const reasonInput = document.querySelector("#reasoninput");
const amountInput = document.querySelector("#amountinput");
const deleteBtn = document.querySelector("#deletebtn");
const confirmBtn = document.querySelector("#addbtn");
const expensesList = document.querySelector("#renduForm");
const totalExpensesOutput = document.querySelector("#totalExpenses");
const alert = document.createElement("ion-alert");

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};
confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  //validation
  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    alert.header = "Valeur Invalide";
    alert.message = "Merci de rentrer une valeur valide";
    alert.buttons = ['ok'];

    document.body.appendChild(alert);
    return alert.present();
  }

  const elementList = document.createElement("ion-item");
  elementList.textContent = enteredReason + " : £" + enteredAmount;
//remplir list
  expensesList.appendChild(elementList);

  //calcul total expenses
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;

  clear();
});

//reinitialiser formulaire
deleteBtn.addEventListener("click", () => clear());
