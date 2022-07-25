const onClick = document.querySelector(".button")
const Joke = [
    "What rock group has four men that don't sing? Mount Rushmore.",
    "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
    "What do sprinters eat before a race? Nothing, they fast!",
    "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
    "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
    "How many apples grow on a tree? All of them!",
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    "I like telling Dad jokes. Sometimes he laughs!",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "Why can't Barbie get pregnant? Because Ken comes in a different box. Heyooooooo",
    "You ever notice that the most dangerous thing about marijuana is getting caught with it?",
    "How did the blonde die raking leaves? She fell out of the tree.",
    "Why did the chicken hold a seance? To get to the other side.",
    "Where do baby cows go to eat lunch? At the calf-eteria.",
    "Which gospel contains Jesus' parable about the shades of numbers? Math hue.",
    "Ted Cruz getting elected.",
    "Roses are red, Violets are blue. I have a gun. Get in the van.",
    "What did the car said to the valet? I've been through a lot.",
    "Donald Trump is going to ban the sale of shredded cheese. He wants to make America grate again",
    "Why did the Vim user cross the road? To fuck your mom."
]

function getJoke() {

  let randomNumber = Math.floor(Math.random() * (Joke.length));
  document.getElementById("displayJoke").innerHTML = Joke[randomNumber];

}

onClick.addEventListener("click", getJoke);
