let total = 0;
let easy = 0;
let medium = 0;
let hard = 0;
let score = 0;

let weekly = 0;
let biweekly = 0;


// LOAD SAVED DATA

window.onload = function () {

    let saved =
        localStorage.getItem(
            "dsaTracker"
        );

    if (saved) {

        let data =
            JSON.parse(saved);

        total = data.total;
        easy = data.easy;
        medium = data.medium;
        hard = data.hard;
        score = data.score;

        weekly = data.weekly;
        biweekly = data.biweekly;

        document.getElementById(
            "problemTable"
        ).innerHTML =
            data.problemTable;

        document.getElementById(
            "contestTable"
        ).innerHTML =
            data.contestTable;

        updateDashboard();

    }

};


// SAVE DATA

function saveData() {

    let data = {

        total,
        easy,
        medium,
        hard,
        score,

        weekly,
        biweekly,

        problemTable:

            document.getElementById(
                "problemTable"
            ).innerHTML,

        contestTable:

            document.getElementById(
                "contestTable"
            ).innerHTML

    };

    localStorage.setItem(

        "dsaTracker",

        JSON.stringify(data)

    );

}



// ADD PROBLEM

function addProblem() {

    let name =

        document.getElementById(
            "problemName"
        ).value;

    let diff =

        document.getElementById(
            "difficulty"
        ).value;


    if (name === "") {

        alert(
            "Enter problem name"
        );

        return;
    }


    total++;

    if (diff === "Easy") {

        easy++;

        score += 2;

    }

    else if (
        diff === "Medium"
    ) {

        medium++;

        score += 4;

    }

    else {

        hard++;

        score += 8;

    }


    let table =

        document.getElementById(
            "problemTable"
        );


    let row =
        table.insertRow();


    row.innerHTML =

        `<td>${name}</td>

<td>${diff}</td>

<td>

<button
onclick=
"deleteProblem(
this,
'${diff}'
)">

Delete

</button>

</td>`;


    document.getElementById(
        "problemName"
    ).value = "";


    updateDashboard();

    saveData();

}



// DELETE PROBLEM

function deleteProblem(
    btn,
    diff
) {

    btn.parentNode
        .parentNode
        .remove();


    total--;


    if (
        diff === "Easy"
    ) {

        easy--;

        score -= 2;

    }

    else if (
        diff === "Medium"
    ) {

        medium--;

        score -= 4;

    }

    else {

        hard--;

        score -= 8;

    }


    updateDashboard();

    saveData();

}



// ADD CONTEST

function addContest() {

    let name =

        document.getElementById(
            "contestName"
        ).value;


    let type =

        document.getElementById(
            "contestType"
        ).value;


    let rank =

        document.getElementById(
            "contestRank"
        ).value;


    let solved =

        document.getElementById(
            "contestSolved"
        ).value;


    if (name === "") {

        alert(
            "Enter contest"
        );

        return;

    }


    if (
        type === "Weekly"
    )

        weekly++;

    else

        biweekly++;


    let table =

        document.getElementById(
            "contestTable"
        );


    let row =
        table.insertRow();


    row.innerHTML =

        `<td>${name}</td>

<td>${type}</td>

<td>${rank}</td>

<td>${solved}</td>

<td>

<button

onclick=

"deleteContest(

this,

'${type}'

)">

Delete

</button>

</td>`;


    document.getElementById(
        "contestName"
    ).value = "";

    document.getElementById(
        "contestRank"
    ).value = "";

    document.getElementById(
        "contestSolved"
    ).value = "";


    updateDashboard();

    saveData();

}



// DELETE CONTEST

function deleteContest(
    btn,
    type
) {

    btn.parentNode
        .parentNode
        .remove();


    if (
        type === "Weekly"
    )

        weekly--;

    else

        biweekly--;


    updateDashboard();

    saveData();

}



// UPDATE DASHBOARD

function updateDashboard() {

    document.getElementById(
        "total"
    ).innerText =
        total;


    document.getElementById(
        "easyCount"
    ).innerText =
        easy;


    document.getElementById(
        "mediumCount"
    ).innerText =
        medium;


    document.getElementById(
        "hardCount"
    ).innerText =
        hard;


    document.getElementById(
        "score"
    ).innerText =
        score;


    document.getElementById(
        "weeklyCount"
    ).innerText =
        weekly;


    document.getElementById(
        "biweeklyCount"
    ).innerText =
        biweekly;

}