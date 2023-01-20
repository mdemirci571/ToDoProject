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

