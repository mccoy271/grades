const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {A: 0, B: 0, C: 0, D: 0, F: 0}

for ( let i = 0; i < scores.length; i++){
    var grade = scores[i];

    switch(true){
        case(scores[i] >= 91):
        grades["A"] +=1;
        break;
        case(scores[i] >= 81):
        grades["B"] +=1;
        break;
        case(scores[i] >= 71):
        grades["C"] +=1;
        break;
        case(scores[i] >= 61):
        grades["D"] +=1;
        break;
        case(scores[i] <= 60):
        grades["F"] +=1;
    }
}
/**How Many Of Each Grade */
for (let typesOfGrades in grades){
    console.log(`${typesOfGrades} = ${grades[typesOfGrades]}`);
}
/**Lowest Score */
scores.sort(function(a, b){return a - b});

console.log("Lowest Score = ", scores[0]);

/* Highest Score */
scores.sort(function(a, b){return b - a});

console.log("Highest Score = ", scores[0]);

/* Most Common Grade */
var currentGradeCount = 0;
var highestGrade = [];
var newGradeCount = 100;
var leastFrequent = [];


for (var x in grades) {
   if(grades[x] > currentGradeCount) {
       highestGrade = [x];
       currentGradeCount = grades[x];
   } else if(grades[x] === currentGradeCount) {
        highestGrade.push(x);
   }
   if(grades[x] < newGradeCount){
       leastFrequent = [x];
       newGradeCount = grades[x];;
   } else if(grades[x] === newGradeCount){
       leastFrequent.push(x);
   }
}
console.log("The most frequent grade is ", highestGrade);
console.log("The least frequent grade is ", leastFrequent);

