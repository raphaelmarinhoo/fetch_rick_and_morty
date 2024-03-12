getCharacter();

async function getCharacter() {
  try {
    const characterName = document
      .getElementById("characterName")
      .value.toLowerCase();
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const characterImage = data.results[0].image;
      const imgElement = document.getElementById("characterImage");

      imgElement.src = characterImage;
      imgElement.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}
