if (!queryResult[0].data.attestations[0]) {
  throw new Error("Couldn't find a Gitcoin Passport score for this address.");
}

const decodedDataJson = JSON.parse(
  queryResult[0].data.attestations[0].decodedDataJson
);

let data = [];
for (const item of decodedDataJson) {
  data.push({
    name: item.name,
    type: item.type,
    value: item.name === "score" ? item.value.value.hex : item.value.value,
  });
}

return JSON.stringify(data);
