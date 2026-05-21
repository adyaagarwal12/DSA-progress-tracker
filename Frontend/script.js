let total = 0;

let easy = 0;

let medium = 0;

let hard = 0;

let score = 0;

let weekly = 0;

let biweekly = 0;

let bestRank = Infinity;



function addProblem(){

let name =
document.getElementById(
"problemName").value;

let diff =
document.getElementById(
"difficulty").value;

if(name=="")
return;

total++;

if(diff=="Easy"){

easy++;

score += 2;

}

else if(diff=="Medium"){

medium++;

score += 4;

}

else{

hard++;

score += 8;

}

updateDashboard();

let table =
document.getElementById(
"problemTable");

let row =
table.insertRow();

row.insertCell(0).innerHTML =
name;

row.insertCell(1).innerHTML =
diff;

row.insertCell(2).innerHTML =

`<button onclick=
"deleteProblem(
this,
'${diff}')">

Delete

</button>`;

document.getElementById(
"problemName").value="";

}



function deleteProblem(
btn,diff){

let row =
btn.parentNode.parentNode;

row.remove();

total--;

if(diff=="Easy"){

easy--;

score -= 2;

}

else if(diff=="Medium"){

medium--;

score -= 4;

}

else{

hard--;

score -= 8;

}

updateDashboard();

}





function addContest(){

let name =
document.getElementById(
"contestName").value;

let type =
document.getElementById(
"contestType").value;

let rank =
parseInt(
document.getElementById(
"contestRank").value);

let solved =
parseInt(
document.getElementById(
"contestSolved").value);

if(name=="")
return;



if(type=="Weekly")

weekly++;

else

biweekly++;



if(rank < bestRank)

bestRank = rank;



if(solved>=3)

score += 10;



updateDashboard();



let table =
document.getElementById(
"contestTable");

let row =
table.insertRow();

row.insertCell(0).innerHTML =
name;

row.insertCell(1).innerHTML =
type;

row.insertCell(2).innerHTML =
rank;

row.insertCell(3).innerHTML =
solved;

row.insertCell(4).innerHTML =

`<button onclick=
"deleteContest(
this,
'${type}',
${solved})">

Delete

</button>`;


document.getElementById(
"contestName").value="";

document.getElementById(
"contestRank").value="";

document.getElementById(
"contestSolved").value="";

}



function deleteContest(
btn,
type,
solved){

let row =
btn.parentNode.parentNode;

row.remove();



if(type=="Weekly")

weekly--;

else

biweekly--;



if(solved>=3)

score -= 10;



updateDashboard();

}



function updateDashboard(){


document.getElementById(
"total").innerHTML =
total;

document.getElementById(
"easyCount").innerHTML =
easy;

document.getElementById(
"mediumCount").innerHTML =
medium;

document.getElementById(
"hardCount").innerHTML =
hard;

document.getElementById(
"score").innerHTML =
score;

document.getElementById(
"weeklyCount").innerHTML =
weekly;

document.getElementById(
"biweeklyCount").innerHTML =
biweekly;

}let total = 0;

let easy = 0;

let medium = 0;

let hard = 0;

let score = 0;

let weekly = 0;

let biweekly = 0;

let bestRank = Infinity;



function addProblem(){

let name =
document.getElementById(
"problemName").value;

let diff =
document.getElementById(
"difficulty").value;

if(name=="")
return;

total++;

if(diff=="Easy"){

easy++;

score += 2;

}

else if(diff=="Medium"){

medium++;

score += 4;

}

else{

hard++;

score += 8;

}

updateDashboard();

let table =
document.getElementById(
"problemTable");

let row =
table.insertRow();

row.insertCell(0).innerHTML =
name;

row.insertCell(1).innerHTML =
diff;

row.insertCell(2).innerHTML =

`<button onclick=
"deleteProblem(
this,
'${diff}')">

Delete

</button>`;

document.getElementById(
"problemName").value="";

}



function deleteProblem(
btn,diff){

let row =
btn.parentNode.parentNode;

row.remove();

total--;

if(diff=="Easy"){

easy--;

score -= 2;

}

else if(diff=="Medium"){

medium--;

score -= 4;

}

else{

hard--;

score -= 8;

}

updateDashboard();

}





function addContest(){

let name =
document.getElementById(
"contestName").value;

let type =
document.getElementById(
"contestType").value;

let rank =
parseInt(
document.getElementById(
"contestRank").value);

let solved =
parseInt(
document.getElementById(
"contestSolved").value);

if(name=="")
return;



if(type=="Weekly")

weekly++;

else

biweekly++;



if(rank < bestRank)

bestRank = rank;



if(solved>=3)

score += 10;



updateDashboard();



let table =
document.getElementById(
"contestTable");

let row =
table.insertRow();

row.insertCell(0).innerHTML =
name;

row.insertCell(1).innerHTML =
type;

row.insertCell(2).innerHTML =
rank;

row.insertCell(3).innerHTML =
solved;

row.insertCell(4).innerHTML =

`<button onclick=
"deleteContest(
this,
'${type}',
${solved})">

Delete

</button>`;


document.getElementById(
"contestName").value="";

document.getElementById(
"contestRank").value="";

document.getElementById(
"contestSolved").value="";

}



function deleteContest(
btn,
type,
solved){

let row =
btn.parentNode.parentNode;

row.remove();



if(type=="Weekly")

weekly--;

else

biweekly--;



if(solved>=3)

score -= 10;



updateDashboard();

}



function updateDashboard(){


document.getElementById(
"total").innerHTML =
total;

document.getElementById(
"easyCount").innerHTML =
easy;

document.getElementById(
"mediumCount").innerHTML =
medium;

document.getElementById(
"hardCount").innerHTML =
hard;

document.getElementById(
"score").innerHTML =
score;

document.getElementById(
"weeklyCount").innerHTML =
weekly;

document.getElementById(
"biweeklyCount").innerHTML =
biweekly;

}