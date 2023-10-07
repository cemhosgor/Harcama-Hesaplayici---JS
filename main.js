const fiyatInput = document.getElementById('fiyat');
const harcamaInput = document.getElementById('harcama');
const eklemeBtn = document.getElementById('eklemeBtn');
const liste = document.querySelector(".liste")
const payCheckbox = document.getElementById("odeme")
const toplamSpan = document.getElementById("toplam")
eklemeBtn.addEventListener('click', addExpense);



liste.addEventListener("click",handleClick)

let expenses = []

function updateToplam(){
    var toplam = expenses.reduce((toplam,fiyat)=> toplam + fiyat,0);
    toplamSpan.innerText = toplam;
}
console.log(expenses)
function addExpense(event) {
  event.preventDefault();

 
  if (!fiyatInput.value || !harcamaInput.value) {
    alert('Lütfen boş alanları doldurunuz');
    return;
  }

  
  const itemBox = document.createElement('div');
  itemBox.classList.add('item');

  if (payCheckbox.checked) {
    itemBox.classList.add('odendi');
  }

  
  itemBox.innerHTML = `
       <h1>
           ${harcamaInput.value}
       </h1>
       <h2>
           ${fiyatInput.value}
       </h2>
       <div class="buttons"> 
           <img id="edit" src="/images/pay.png" alt="">
           <img id="delete" src="/images/delete.png" alt="">
       </div>
  `;
  
  liste.appendChild(itemBox);

  
  if(!payCheckbox.checked){
    expenses.push(Number(fiyatInput.value));
  }

  updateToplam()
  
  fiyatInput.value = '';
  harcamaInput.value = '';
}




function handleClick(e){
    const element = e.target

    if(e.target.id == "delete"){
      const harcama = element.parentElement.parentElement;
      
      harcama.remove();
      
      const cikarilacak = harcama.querySelector('h2').innerText;
     
      expenses.push(-Number(cikarilacak));
      updateToplam()
    }
}