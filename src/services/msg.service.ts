export const getMessages = (): Message[] => {
  const messages: Message[] = [
    {
      author: "Beria",
      content: "Ahoj",
      side: 1,
      time: Date.now() - 10e6,
    },
    {
      author: "galook",
      content: "Čus. Benga!",
      side: 0,

      time: Date.now() - 10e5,
    },
    {
      author: "Beria",
      content: "Jaký benga??",
      side: 1,

      time: Date.now() - 10e5,
    },
    {
      author: "Beria",
      content: "Should I enable the Hiding Extraction Protocol?",
      side: 1,

      time: Date.now() - 10e5,
    },
    {
      author: "galook",
      content:
        "You should stay totally calm. No worries there. The bengas will be handled by my team and you have literally nothing to worry about.",
      side: 0,

      time: Date.now() - 10e3,
    },
  ];
  return messages;
};
