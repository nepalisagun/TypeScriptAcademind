let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Sagun";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //while (true) { }
}

generateError("An Error Occurred", 500);
