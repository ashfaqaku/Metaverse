import inquirer from "inquirer";
(
      async () => {
        const userInput: {userId:string , userPin:string} = await inquirer.prompt([
          {
            name:"userId",
            message:"Please Enter you user ID",
            type: "input"
          },
          {
            name:"userPin",
            message:"Please Enter your Pin Number",
            type:"password"
          }
        ])
        // console.log(userInput.userId);
        // console.log(userInput.userPin);
        const userData = {
            userId:userInput.userId,
            userPin:userInput.userPin,
            amount:Math.floor(Math.random()*100000 +1)
        }
        console.log(userData.amount);
        const selectedOpt:{Options: "cash Withdrawl" | "exit"} = await inquirer.prompt([
          {
            name:"Options",
            message:"Select any option",
            type:"list",
            choices:["cash Withdrawl", "Check Balance", "exit"]
          }
        ])
        if (selectedOpt.Options === "cash Withdrawl"){
          const enteredAmount:{amout:number} = await inquirer.prompt([
            {
              name:"amout",
              message:"Enter your Amount",
              type:"number",
              validate:(input)=>{
                if(input>userData.amount){
                  return "Insufficient Balance"
                }
                else{return true}
              }
            }
          ])
          userData.amount -= enteredAmount.amout;
          console.log(`Amount after withdrawl :${userData.amount}`);
        }
      }
)()
