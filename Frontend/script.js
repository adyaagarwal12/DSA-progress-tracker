let total = 0;

let easy = 0;

let medium = 0;

let hard = 0;

let score = 0;

function addProblem() {

    let name =
    document.getElementById(
    "problemName").value;

    let diff =
    document.getElementById(
    "difficulty").value;

    if(name=="")
    return;

    total++;

    if(diff=="Easy") {

        easy++;

        score += 2;

    }

    else if(diff=="Medium") {

        medium++;

        score += 4;

    }

    else {

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

    `<button
    onclick=
    "deleteProblem(
    this,
    '${diff}')">

    Delete

    </button>`;

    document.getElementById(
    "problemName").value="";

}

function deleteProblem(
btn,diff) {

    let row =
    btn.parentNode.parentNode;

    row.remove();

    total--;

    if(diff=="Easy") {

        easy--;

        score -= 2;

    }

    else if(diff=="Medium") {

        medium--;

        score -= 4;

    }

    else {

        hard--;

        score -= 8;

    }

    updateDashboard();

}

function updateDashboard() {

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

}