window.addEventListener("load", init);
 
var todos = [];
 
function init()
{
	var add = document.querySelector("#add");
	add.addEventListener("click", addTodo);
}
 
function addTodo(event)
{
	if(document.querySelector("#todo").value === "") return;
	var li = 
	{
		index: todos.length + 1,
		value: document.querySelector("#todo").value
	};
	todos.push(li);
	displayTodos(li);
}
 
function displayTodos(li)
{
    var node = document.createElement("li");  
    node.classList.add("col-md-12","tarea");   
    node.id = "todo"+li.index;
	var textnode = document.createTextNode(li.value);    
	node.appendChild(textnode);   
	document.querySelector("#todoList").appendChild(node); 
	document.querySelector("#todo").value = "";
	var deleteButton = createButton(li);
    node.appendChild(deleteButton);
}
 
function createButton(li){
	var todo = document.createElement("input");
    todo.type = "button";
    todo.style.float = "right";
    todo.value = "Eliminar";
    todo.style.marginTop = "-7px";
    todo.classList.add("removeTodo", "btn", "btn-danger");
    todo.onclick = function() 
    { 
        var toDelete = document.querySelector('#todo'+li.index);
		toDelete.parentNode.removeChild(toDelete);
    };
    return todo;
}