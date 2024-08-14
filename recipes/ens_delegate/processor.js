const delegate = queryResult[0].data.delegate;
if (
  !delegate ||
  !delegate.numberVotes ||
  typeof delegate.numberVotes !== "number" ||
  delegate.numberVotes < 1
) {
  throw new Error("You are not an ENS delegate.");
}
return JSON.stringify([{ name: "isEnsDelegate", type: "bool", value: true }]);
