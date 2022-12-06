import inquirer from "inquirer";

 inquirer.prompt([
    {

      name: "num1",
      type: "number",
      message: "Enter your first number:"
    },
    {
      name: "num2",
      type:"number",
      message:"Enter your second number:"
    },
    {
      name: "Operation",
      choices:["Addition","Subsraction","Multiplication","Divistion"],
      message:"Please Enter "
    }
    
]);

