if (queryResult[0]?.balance && queryResult[0]?.balance === "0") {
  return JSON.stringify([
    {
      name: "noEth",
      type: "bool",
      value: true,
    },
  ]);
}

throw new Error("Address is invalid or holds Eth.");
