function generateStory() {
    const adjective = document.getElementById("adjective").value;
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;
    const food = document.getElementById("food").value;
    
    const story = `One day, SpongeBob woke up feeling ${adjective}. He grabbed his pet ${noun} and decided to ${verb} all the way to the ${place}. When he got there, he saw Patrick eating a huge ${food}! "That looks delicious!" SpongeBob said.`;
    
    document.getElementById("story").innerText = story;
}