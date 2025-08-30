# Blockchain_certificate_verification


## Overview
This project is a **Blockchain-based Certificate Management System** built using **Solidity** and tested on **Remix VM**.  
It allows you to **issue, verify, and revoke certificates** in a secure, tamper-proof manner.

## Features
- Issue Certificate – Add a new certificate with student name, course, and issue date.  
- Verify Certificate – Check certificate details and validity.  
- Revoke Certificate – Mark a certificate as invalid.  

## Smart Contract
The main smart contract is `Certificate.sol`.  
- Stores certificate details in a mapping.  
- Tracks total certificates issued with `certCount`.  
- Functions: `issueCertificate`, `verifyCertificate`, `revokeCertificate`.  

## Testing in Remix VM
- Issue, verify, revoke certificates tested successfully.  
- Note: Remix VM resets on refresh. For persistent deployment, use **MetaMask + testnet**.  

## Project Structure
