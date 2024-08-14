const registrations = queryResult[0].data.account?.registrations;
if (
  !registrations ||
  !Array.isArray(registrations) ||
  registrations.length === 0
) {
  throw new Error("You are not the owner of any ENS domains.");
}
return JSON.stringify([{ name: "isEnsNameOwner", type: "bool", value: true }]);
