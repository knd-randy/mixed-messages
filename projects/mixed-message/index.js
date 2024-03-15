// Define arrays for each part of the message
const quotes = [
    "The only way to do great work is to love what you do.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "It’s not whether you get knocked down. It’s whether you get up."
  ];
  
  const actions = [
    "Take a small step towards your goals today.",
    "Remember to schedule time for your passions this week.",
    "Reflect on your recent successes and plan your next steps."
  ];
  
  const affirmations = [
    "You have the power to create change.",
    "Your potential to succeed is infinite.",
    "You are brimming with energy and overflowing with joy."
  ];
  
  // Function to generate a random message
  function generateMessage() {
    // Randomly select one item from each array
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    
    // Combine the selections into a single message
    return `${quote} ${action} ${affirmation}`;
  }
  
  // Display the message
  console.log(generateMessage());