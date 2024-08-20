if (queryResult[0]?.balance && queryResult[0]?.balance !== "0") {
  return JSON.stringify([
    {
      name: "holdsEth",
      type: "bool",
      value: true,
    },
  ]);
}

throw new Error("Address holds no Eth.");
