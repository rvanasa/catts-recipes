# Verified Coinbase One

This recipe allows you to create a copy of your "Verified Coinbase One" attestation on another chain.

"Verified Coinbase One" attestations are created by Coinbase on Base.

## About Coinbase verifications

Onchain verification leverages the Ethereum Attestation Service to enable the issuance of Coinbase-verified, onchain attestations. Initially, you’ll verify that you have a valid Coinbase trading account and your country of residence (optional). These verifications can be tied to any self-custodial Ethereum (EVM) wallet address and are non-transferrable to other addresses. 

https://www.coinbase.com/onchain-verify

## Query details

The query looks for an attestation based on the following schema UID: `0x254bd1b63e0591fefa66818ca054c78627306f253f86be6023725a67ee6bf9f4`.

It makes no additional verifcations of the attestation beyond its existence as the resolver contract of the schema guarantees the correctness of the data.
