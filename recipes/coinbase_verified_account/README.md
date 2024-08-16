# Coinbase verified account

This recipe allows you to create a copy of your Coinbase verified account attestation on another chain.

"Verified Account" attestations are created by Coinbase on Base.

## About Coinbase verifications

Onchain verification leverages the Ethereum Attestation Service to enable the issuance of Coinbase-verified, onchain attestations. Initially, you’ll verify that you have a valid Coinbase trading account and your country of residence (optional). These verifications can be tied to any self-custodial Ethereum (EVM) wallet address and are non-transferrable to other addresses. 

https://www.coinbase.com/onchain-verify

## Query details

The query looks for an attestation based on the following schema UID: `0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9`.

It makes no additional verifcations of the attestation beyond its existence as the resolver contract of the schema guarantees the correctness of the data.
