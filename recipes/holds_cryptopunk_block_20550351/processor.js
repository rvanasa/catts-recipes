if (
  !queryResult[0] ||
  !Array.isArray(queryResult[0]) ||
  queryResult[0].length === 0
) {
  throw new Error("Address holds no Punks.");
}

let holdsPunk = false;

for (const blockNumberStr of queryResult[0]) {
  const blockNumber = Number.parseInt(blockNumberStr);
  if (blockNumber <= 20550351) {
    holdsPunk = true;
    break;
  }
}

if (!holdsPunk) {
  throw new Error("Address holds no Punks at block 20550351.");
}

return JSON.stringify([
  {
    name: "holdsPunk",
    type: "bool",
    value: true,
  },
]);
