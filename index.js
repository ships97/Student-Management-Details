let details = JSON.parse(localStorage.getItem("Students")) || [];
console.log(details);

function Student(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = b;
} 

function submitDetails(e){
    e.preventDefault();
    let form = document.getElementById("student");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s = new Student(name,course,unit,image,batch);
    details.push(s);
    // console.log(details);
    form.name.value = "";
    form.course.value = "";
    form.unit.value = "";
    form.image.value = "";
    form.batch.value = "";
    localStorage.setItem("Students",JSON.stringify(details));
}

function display(){
    let batch = [0,0,0];
    for(let i=0;i<details.length;i++){
        if(details[i].batch=="web17"){
            batch[0]++;
        }
        else if(details[i].batch=="web16"){
            batch[1]++;
        }
        else if(details[i].batch=="web15"){
            batch[2]++;
        }
    }
    let span = document.querySelectorAll("span");
    for(let i=0;i<span.length;i++){
        span[i].innerText = batch[i];
    }
}
display();

