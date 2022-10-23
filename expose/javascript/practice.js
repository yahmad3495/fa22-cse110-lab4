let student = {
    greeting: function() { console.log("Hello"); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
}

function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

//student.greeting();
//console.log(student['Favorite Teacher'].name);
//console.log(student.courseLoad[2]);
printNums();
