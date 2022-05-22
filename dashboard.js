let data = JSON.parse(localStorage.getItem("Students")) || [];
console.log(data);

let trash = JSON.parse(localStorage.getItem("trash")) || [];
console.log(trash);

let box1 = document.querySelector("#box");
data.map(function(e,index){
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = e.image;

    let name = document.createElement("h2");
    name.innerText = e.name;

    let course = document.createElement("h3");
    course.innerText = e.course;

    let unit = document.createElement("h3")
    unit.innerText = e.unit;

    let batch = document.createElement("h3");
    batch.innerText = e.batch;

    let button = document.createElement("button");
    button.setAttribute("id","remove");
    button.innerText = "Remove";
    button.addEventListener("click",function(){
        data.splice(index,1);
        alert("Student delete");
        trash.push(e);
        localStorage.setItem("trash",JSON.stringify(trash));
        localStorage.setItem("Students",JSON.stringify(data))
        window.location.reload(); 
    });

    div.append(image,name,course,unit,batch,button);
    box.append(div);
})

function display(){
    let batch = [0,0,0];
    for(let i=0;i<data.length;i++){
        if(data[i].batch=="web17"){
            batch[0]++;
        }
        else if(data[i].batch=="web16"){
            batch[1]++;
        }
        else if(data[i].batch=="web15"){
            batch[2]++;
        }
    }
    let span = document.querySelectorAll("span");
    for(let i=0;i<span.length;i++){
        span[i].innerText = batch[i];
    }
}
display();



