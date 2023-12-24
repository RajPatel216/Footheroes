var team1 = document.getElementById("t1");
var team2 = document.getElementById("t2");
var goal1 = document.getElementById("g1");
var goal2 = document.getElementById("g2");
var adbtn = document.getElementById("add");
var showbtn = document.getElementById("show");
var tb = document.getElementById("st");

var arr = [tb.innerHTML];

const objs = {
    tm1 : "",
    tm2 : "",
    g1 : "",
    g2: ""
};

function store(){
    objs.tm1 = team1.value;
    objs.tm2 = team2.value;
    objs.g1 = String(goal1.value);
    objs.g2 = String(goal2.value);

    console.log(objs);

    var temp;

    
    if(goal1.value > goal2.value){
        temp = `<tr>
    <th>${objs.tm1}</th>
    <th>${objs.g1}</th>
    <th>${objs.g2}</th>
    <th>${objs.tm2}</th>
    </tr>`
    }else if(goal1.value < goal2.value){
        temp = `<tr>
    <th>${objs.tm1}</th>
    <th>${objs.g1}</th>
    <th>${objs.g2}</th>
    <th>${objs.tm2}</th>
    </tr>`
    }
    
    arr.push(temp);
    localStorage.setItem("TeamData", JSON.stringify(arr));
    
    tb.innerHTML = JSON.parse(localStorage.getItem("TeamData"));


    // localStorage.setItem("Team1", objs.tm1);
    // localStorage.setItem("Team2", objs.tm2);
    // localStorage.setItem("Goal1", objs.g1);
    // localStorage.setItem("Goal2", objs.g2);
}

function show(){
    // objs.tm1 = team1.value;
    // objs.tm2 = team2.value;
    // objs.g1 = goal1.value;
    // objs.g2 = goal2.value;
    // console.log(objs);

    // var temp = `<tr>
    // <th>${objs.tm1}</th>
    // <th>${objs.g1}</th>
    // <th>${objs.g2}</th>
    // <th>${objs.tm2}</th>
    // </tr>`

    // arr.push(temp);
    // localStorage.setItem("TeamData", JSON.stringify(arr));
    tb.innerHTML = ""
    tb.innerHTML = JSON.parse(localStorage.getItem("TeamData"));

}


function cla(){
    localStorage.clear();
    tb.innerHTML = arr;
}

