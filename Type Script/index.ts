import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const sleep = ()=>{
  return new Promise((res)=>{
      setTimeout(res ,2000);
  })
}

async function welcom() {
    let rainbowTitle = chalkAnimation.rainbow(`Lets start calculation`);//Start
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.green`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
`)
}

await welcom();
async function askQuestion() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: chalk.green("Which Operation you want to perform? :"),
      choices: ["Addition","Subtraction","Division","Multiplication"]
    },
    {
      type:"number",
      name: "num1",
      message:chalk.green("Enter your first number: ")
    },
    {
      type:"number",
      name: "num2",
      message: chalk.green("Enter Second Number: ")
    }
  ]);
  
    if (answer.operator == "Addition"){
      console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1+answer.num2}`));
    }
    else if (answer.operator == "Subtraction"){
      console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1-answer.num2}`));
    }
    else if (answer.operator == "Division"){
      console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1/answer.num2}`));
    }
    else if (answer.operator == "Multiplication"){
      console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1*answer.num2}`));
    }
    
  
}

// askQuestion();

async function stratAgain() {
  do
  {
      await askQuestion();
      var again = inquirer
      .prompt({
        type:"input",
        name:"restart",
        message:chalk.green("Do you want to continue ? Press Y or N: ")
     
      })
  }
  while ((await again).restart == `Y` || (await again).restart == `y` || (await again).restart == `Yes` || (await again).restart == `yes`);
}

stratAgain();