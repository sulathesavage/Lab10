// Task 1
let lab1 = [5, 5, 0, 0, 5, 0, 10]
let lab2 = [5, 5, 5, 5, 4, 5, 10]
let lab3 = [5, 9, 10, 15]
let lab45 = [10, 5, 5, 5, 5, 5, 8, 10, 10, 10, 0]
let lab6 = [5, 5, 10, 5, 5, 10]
let lab8 = [5, 10, 10, 10, 5]
let quiz1 = [24]

// Task 2
let sum1 = 0
for (let i = 0; i<lab1.length; i++) {
    sum1 += lab1[i];
}
let A1 = sum1
console.log(A1)

let sum2 = 0
for (let i = 0; i<lab2.length; i++) {
    sum2 += lab2[i];
}
let A2 = sum2
console.log(A2)

let sum3 = 0
for (let i = 0; i<lab3.length; i++) {
    sum3 += lab3[i];
}
let A3 = sum3
console.log(A3)

let sum45 = 0
for (let i = 0; i<lab45.length; i++) {
    sum45 += lab45[i];
}
let A45 = sum45
console.log(A45)

let sum6 = 0
for (let i = 0; i<lab6.length; i++) {
    sum6 += lab6[i];
}
let A6 = sum6
console.log(A6)

let sum8 = 0
for (let i = 0; i<lab8.length; i++) {
    sum8 += lab8[i];
}
let A8 = sum8
console.log(A8)

let sumquiz1 = 0
for (let i = 0; i<quiz1.length; i++) {
    sumquiz1 += quiz1[i];
}
B1 = sumquiz1
console.log(B1)

// Task 3
let lab_results = [A1, A2, A3, A45, A6, A8]
function get_sum(lab_results) {
    let sumlabs = 0
    for (let i = 0; i<lab_results.length; i++) {
        sumlabs += lab_results[i];
    }
    const result =
          {
              lab1,
              lab2,
              lab3,
              lab45,
              lab6,
              lab8,
              quiz1,
              sumlabs
          }
    return result
}
console.log(get_sum(lab_results))   

// Task 4
function main(lab1, lab2, lab3, lab45, lab6, lab8, quiz1) {
    let overall = (get_sum(lab_results)) * 60/280 + B1 
    let object = overall
    const resul = 
    {
        object 
    }
    return resul

}
console.log(main())



