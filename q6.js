

let david = 80;
let vinoth = 77;
let divya = 88;
let ishitha = 95;
let thomas = 68;


let average = ((david + vinoth + divya + ishitha + thomas) / 5);
switch(true) {
    case average > 90:
        alert('the grade is A')
        break
    case average > 80:
        alert('the grade is B')
        break
    case average > 70:
        alert('the grade is C')
        break
    case average > 60:
        alert('the grade is D')
        break
    default:
        alert('the grade is F')
}