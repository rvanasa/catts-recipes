if (!queryResult[0].data.attestations[0]) {
  throw new Error("Couldn't find any Armitage contributions for this address.");
}

const decodedDataJson = JSON.parse(
  queryResult[0].data.attestations[0].decodedDataJson
);

const userCredScore = decodedDataJson.find(
  (item) => item.name === "userCredScore"
)?.value?.value;

if (userCredScore < 100) {
  throw new Error("A cred score of 100 is required for this attestation.");
}

return JSON.stringify([
  { name: "armitage_contributor", type: "bool", value: true },
]);
