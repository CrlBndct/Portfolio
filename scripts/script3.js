let tech = document.getElementById("tech");
const stack = ["assets/html.jpg", "assets/css.jpg", "assets/javascript.jpg", 
               "assets/csharp.jpg", "assets/vscode.jpg", "assets/visualstudio.jpg", "assets/git.jpg", "assets/github.jpg"];

for(let x = 0; x < stack.length; x++){
    let newLi = document.createElement("li");
    newLi.innerHTML = "<img src = \""+ stack[x] +"\" alt = \"logo\">";

    tech.appendChild(newLi);
}