//Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

//global array for todo obj: JSON.parse; localStorage'ki string ifadeyi arraye(js objesine) cevirir.  GET yapılırken JSON.parse kullanılmalı.
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//load event vs. DomContentLoaded
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  //get TodoList from localStorage and load to UI
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};
//form => submit event vs. button => click event
//form kullanıldıgında enter tusu otomatik olarak calısır.
//input submit eventi; formdaki bilgileri locale yada baska bir sayfaya gönderirken tüm formu gönderir. sayfayı yeniler. bunu engellemek için "addBtn.addEventListener("click", (e) => {e.preventDefault();}" fonksiyonu kullanılır. bu sekilde submit eventi calısmaz ve buton normal bir buton gibi calışır. (28.satır)

// form.addEventListener("submit", ()=>{})

addBtn.addEventListener("click", (e) => {
    //prevent form submit
    e.preventDefault();
    //?user input control: bos mu diye kontrol edildi
    if (todoInput.value.trim() === "") {
      alert("Please, enter new todo text!");
      return; //? return kullandıgım için else e gerek kalmadı.
    }
    // else{
    //     alert("continue");
    // 
}
    const currentDateTime = new Date().toLocaleString();
  //continue func.
  //?obje tanımladım
  const newTodo = {
    id: new Date().getMilliseconds(), //unique id with ms of now
    completed: false, //status
    //userInput
    text: `"${currentDateTime}": ${todoInput.value}`,
  };

  //? objeyi createTodo fonksiyonuna gönderdim

  createTodo(newTodo);

  createTodo(newTodo);

  //UPDATE TODO array
  todoList.push(newTodo);
  //?localStorage todoList Update; listeyi güncelledim
  //localStorage vs. SessionStorage vs. Cookies: intervi sorusu

  //!!!!!!!!stringify!!!!!!!!! SET yapılırken JSON.stringify kullanılmalı.(JSON.PARCEnin tersini yapıyor)
  localStorage.setItem("todoList", JSON.stringify(todoList));
  //?güncel listeyi localStorageye attım.
  //event.target vs. event.currentTarget: intervi sorusu

  //? formu resetledim.
  e.target.closest("form").reset();
  //? saati p içine yazdırmak için bir degişkene atadım.
});
//? bu fonksiyonu global tanımlamamın nedeni daha sonra da kullanacagım.
const createTodo = (newTodo) => {
    //todo item creation
    //alert("item was added");
    //obj. dest. (ES6 => JS'e kazandırılan yapılar??)
    const { id, completed, text } = newTodo;
  
    //create li
    const li = document.createElement("li");
    li.setAttribute("id", id);
  
    //add class with completed(status)
    completed ? li.classList.add("checked") : "";
  
    //create check icon
    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-check");
    //append vs. appendChild: append(), appendChild()'den Farklı Olarak Aynı Anda Birden Çok Düğüm Nesnesi(Node Objects) Eklememize İzin Verir
    li.append(icon);
  
    //create item text
    const p = document.createElement("p");
    p.innerText = text;
  
    li.appendChild(p);