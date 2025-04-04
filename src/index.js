function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "adc0c17ee81tacb6636fff3dfe47o3f8";
  let prompt = `User instructions: Generate a short poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poet passionate about cute animals. Your mission is to generate a four line poem following the user instructions. Separate each line with a <br/>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
