// ! 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)

// let gun = 1;
// let saat = 12;
// let deqiqe = 30;
// let saniye = 45;

// const colors = ["red", "blue", "green", "orange", "purple"];

// for (let i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`, `color: ${colors[i]}`);
//   }, i * 1000);
// }

// ! 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.


// let students = [
//     { name: "Hesen", age: 22, mark: 84 },
//     { name: "Eli", age: 28, mark: 95 },
//     { name: "Ehmed", age: 27, mark: 74 },
//     { name: "Muslum", age: 14, mark: 87 }
// ];


// let searchedName = prompt("Telebenin adini daxil edin:");

// let foundStudent = students.find(student => student.name === searchedName);

// if (foundStudent) {
//     console.log("Axtarilan Telebe:" + foundStudent.name);
//     console.log(foundStudent);
// } else {
//     console.log("Axtarilan Telebe Tapilmadi!");
// }

// ! 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:

// let input = prompt("Bir Soz daxil edin:");
// let len = input.length;

// for (let i = 0; i < len; i++) {
//     console.log(input.slice(0, len - i));
// }

// for (let i = 1; i < len; i++) {
//     console.log(input.slice(0, i));
// }



