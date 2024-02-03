const getHealth = async (req, res, next) => {
  res.status(200).json({
    message: "Server is up and running!",
  });

  return;
};

const jokes = [
  "What did Java code call a C code? You have no class.",
  "Programmer: a machine that turns coffee into code.",
  "What’s the object-oriented way to become wealthy? Inheritance.",
  "To understand what recursion is, you must first understand recursion.",
  "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
];

const getJoke = async (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);

  res.status(200).json({
    joke: jokes[randomIndex],
  });

  return;
};

module.exports = {
  getHealth,
  getJoke,
};
