import React from "react";
import { Container } from "react-bootstrap";
import TipCard from "../components/TipCard";

export default function Tips() {
  return (
    <div className="d-flex  justify-content-between flex-wrap">
      <TipCard
        text={"Why is my dog chewing everything?"}
        hiddenText={
          "Dog and puppy chewing is a natural behavior to explore the environment. The one thing to be aware of is that when a dog chews everything it can become a compulsive behavior. The best way to deter a pup or adolescent dog from chomping through your home is to provide alternatives"
        }
      />
      <TipCard
        text={"Why does my dog digs all time?"}
        hiddenText={
          "Why a dog digs is related to breed, behavior and activity level. Some breeds may have higher prey drives and dig in search of burrowing animals or insects. Most dogs may dig because they are bored and need exercise, while other dogs dig cooling pits to beat the heat. if your dog digs cooling pits,keep him inside."
        }
      />
      <TipCard
        text={"How to stop a puppy from biting?"}
        hiddenText={
          "The best way to stop a puppy from biting you or others is to teach him a new behavior. One of the most effective ways to redirect a puppy's biting or nipping habit is to replace his intended target with a soft toy or chew treat."
        }
      />
      <TipCard
        text={"Why do dogs eat poop?"}
        hiddenText={
          "Dogs consume poop, known as 'coprophagia', for many reasons including stress, learned behavior, boredom, the list is endless! What's important, is that with the right training, any dog can stop poop-eating behavior."
        }
      />
      <TipCard
        text={"Why do dogs eat grass?"}
        hiddenText={
          "Veterinarians explain that there are many theories on why do dogs eat grass, amongst them are instinct, habit, PICA, nutrient deficiencies and G.I. relief. The truth is that nobody knows for sure, and while grass isn't bad for your dog, most lawns are treated with chemicals that can make a dog sick."
        }
      />
      <TipCard
        text={"Do fireworks scare your dog? "}
        hiddenText={
          " While they're fun for humans, the loud, unexpected sounds of fireworks cause stress and anxiety for a lot of dogs. Take a tip: give your dog a special treat or his favorite toy, it might help to create positive associations with fireworks."
        }
      />
      <TipCard
        text={"What to do if your potty training fails?"}
        hiddenText={
          "'Feeding schedule': Free feeding is actually reinforces the idea that there will always be food in the bowl and it can decrease the dog's desire to eat on a set schedule.Free-feeding dogs adds difficulty to the timing of potty breaks.Consult your veterinarian to make sure the amount you are feeding and diet are appropriate for your dog's breed, size, and life stage."
        }
      />
      <TipCard
        text={
          "Why is my dog so afraid of thunder and how can I make him less scared?"
        }
        hiddenText={
          "Many dogs are afraid of thunder simply because they do not understand what it is.Dogs hear this loud noise and perceive it as something threatening. During a thunderstorm, try to provide background noise for your dogs, such as TV or radio. This may help to somewhat drown out the noise of the thunder. You can also try to get your dog's mind off the storm by playing with him."
        }
      />
      <TipCard
        text={
          "How can I stop my dog from jumping whenever I put my jacket or sweatshirt on? She thinks she's coming with me every time I leave the house."
        }
        hiddenText={"Practice the wait command: It sounds like your pup needs to work on impulse- or self-control. Throughout the day, practice waiting to give her a treat or her food or anything else she wants until she sits without you asking."}
      />
    </div>
  );
}