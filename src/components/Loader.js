import React, { useState, useEffect } from 'react';
import './Loader.css';
import { TraceSpinner } from "react-spinners-kit";

const badJokes = [
  "Why did the computer take up gardening? Because it wanted to improve its root system!",
  "How do you comfort a JavaScript bug? You console it!",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why did the loading bar break up with the progress bar? It needed some space.",
  "Did you hear about the loading bar that walked into a bar? Neither did I, it's still loading.",
  "Hold on, I'm working on my magic spell to make this load faster. Abracadabra, loading...!",
  "TIP: Don't use 'beef stew' as a computer password. It's not stroganoff.",
  "Why did the computer get glasses? To improve its websight",
  "Why did the computer sneeze? It had a virus",
  "Have you heard of that new band '1023 Megabytes'? They're pretty good, but they don't have a gig just yet.",
  "How many programmers does it take to change a light bulb? None, because it is a hardware problem.",
  "What is a Linux user's favorite game? sudo ku",
  "What do hackers do on a boat? Phishing.",
  "How does a computer get drunk? It takes screenshots.",
  "Why did the PowerPoint presentation cross the road? To get to the other slide.",
  "Why are people afraid of computers? They byte.",
  "What does a baby computer call its father? Data!",
  "What did the spider do on the computer? It built a website!",
  "What type of computer can sing? A-Dell!",
  "What’s a computer’s favorite beat? The algorithm!",
  "Autocorrect can go straight to he'll.",
  "What do you call a computer mouse that swears a lot? A cursor!",
  "How many symbols do you need to type on a keyboard to make a heart? Less than three.",
  "There are 10 types of people in the world: those who understand binary, and those who don’t.",
  "Why do Java developers wear glasses? Because they can’t C#.",
  "Are you ready for it?"
];

function Loader() {
  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    // Generate a random joke when the component mounts
    generateRandomJoke();
  }, []);

  const generateRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * badJokes.length);
    setRandomJoke(badJokes[randomIndex]);
  };

  return (    
    <div className="spinner">
        <TraceSpinner size={60} frontColor="hotPink" backColor="white" />
        <p className="joke-text">{randomJoke}</p>
    </div>                
  );
}

export default Loader;
