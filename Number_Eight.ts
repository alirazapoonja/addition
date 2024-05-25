import inquirer from "inquirer";
const song1 = await inquirer.prompt ({
    name: "num1",
    type: "number",
    message: "kindly enter your first no:"
});
const input2 = await inquirer.prompt ({
    name: "num2",
    type: "number",
    message: "kindly enter your second no:"
});

let total : number = song1.num1 * input2.num2
console.log(total);








