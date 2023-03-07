
function myFunction() { 
    let question = prompt("After entering the building, you make your way to your office where you find a new file on your computer. \It looks like a new research paper came in during the evening with the title 'Impoartant Information'.\n What do you do?\n 1.do you read the information immediatly, \n 2.look from whom it came from as it could be a joke or \n 3.do you ignore it until you have time to read it as you receive many files like this?");
    if (question == "1")  {
        question2 = prompt ("You decided to look look at it quickly it could be something important. \n It was, the new research shows if the global population do not do somwhting about their impact on the Earth, the current climate will degrade and we will experience unconsistent fluxtuations in the weather. \n The problem is there is not enough researhc done on finding different solutions. The paper is arguing about a problem without coming up with tangible solutions that could help the public make a difference and not rely on government policies. \n What to do next? \n 1. Just Ignore it until they come back with a solution, \n 2. Send a reply stating that it is important information but that wihtout solutions nothing can be done or \n 3. Talk to higher ups, asking for funding to help research solutions to the problem.");
    } else if (question == "2") 
        window.open ("zombie.html");
    else if (question == "3"){ 
        text = prompt ("Let's try again!");
    }


    if (question2 == "1")  
        window.open ("zombie.html");
    else if (question2 == "2") 
            question4 = prompt ("By the time they came back to you, the problem had intensified. You brought it up with different governements but all they could do was promise and right policies, they had more important things like running the economi and the country and would only do something if other countries would do it too! \n What else could be done? \n 1.Join a protest to try and get some movement from the government, \n 2.Ally yourself with a notariable world NGO and find a way to trick governemnets into seeing who would be better at solving this first and show off, \n 3. Or Just gave up and hope things turn out ok?");
    else if (question2 == "3"){
            question3 = prompt ("Who knew this could be so simple! \n After you talked to your higher ups, they decided to fund the research porject against climate change and work in co-operation with the scientist. One problem remained, how to get different governments around the world to work towards saving our planet. \n 1.Put together a team with people from the science project, notorious NGOs, press officiers, ect and start a global campaign, \n 2.Send the project to different governemnt and let them deal with it,\n 3.Or Use a fear campaign to scare eveyrone off and hope that they make some changes");}   

    if (question3 == "1") 
        window.open ("win.html");
    else if (question3 == "2")
     window.open ("zombie.html"); 
    else if (question3 == "3") {
        text = prompt ("Since when has fear worked for the right purpose, let's try again!");
    }

    if (question4 == "1") {
        text = prompt ("Good try but it didn't help that much, let's try again!");
    } else if (question4 == "2") 
        window.open ("win.html");
    else if (question4 == "3") 
        window.open ("zombie.html");
    
  }
 

// function myFunction() {
//     let text;
//     let question1 = prompt("After entering the building, you make your way to your office where you find a new file on your computer. It looks like a new research paper came in during the evening with the title 'Impoartant Information'. What do you? 1.do you read the information immediatly, 2.look from whom it came from as it could be a joke or 3.do you ignore it until you have time to read it as you receive many files like this?");
//     switch(question1) {
//       case "1":
//             var question2 = prompt;
//            text = "You decided to look look at it quickly it could be something important. It was, the new research shows if the global population do not do somwhting about their impact on the Earth, the current climate will degrade and we will experience unconsistent fluxtuations in the weather.The problem is there is not enough researhc done on finding different solutions. The paper is arguing about a problem without coming up with tangible solutions that could help the public make a difference and not rely on government policies. What to do next? 1. Just Ignore it until they come back with a solution, 2. Send a reply stating that it is important information but that wihtout solutions nothing can be done or 3. Talk to higher ups, asking for funding to help research solutions to the problem.";
//         break;
//       case "2":
//         window.open ("zombie.html");
//         break;
//       case "3":
//         text = "Let's try again!";
//     }
//     document.getElementById("gameplay").innerHTML = text;
//   }

// document.getElementById("gameplay").innerHTML =
//       "Hello " + person + "! How are you today?"; 

// if(response.toLowerCase() == "yes") {
//     console.log("Let's Get Started!");
//     var question = prompt("What would you pick first? hikking boots, a tent or magic carpet?");
// } else if  (response.toLowerCase() == "maybe") {
//     console.log("Remeber last minute shopping is alswys stressful, please decide soon!");
// }
// else if (response.toLowerCase() == "no") {
//     console.log("See you another time!");
// }


// if (question == "hikking boots") {
//     console.log("Well done!");
//     var question2 = prompt("What would you pick next? waterproofs, a wand or tent?");
// } else if (question == "tent") {
//     console.log("try again!")
// } else if (question == "magic carpet") {
//     console.log("try again!")
// }

// if (question2 == "waterproofs") {
//     console.log("Yes!You never how Scottish weather can be!")
// } else if (question2 == "a wand") {
//     console.log("Try agian! Think about staying dry!")
// } else if (question2 == "tent"){
//     console.log("Try agian! Think about staying dry!")
// }
