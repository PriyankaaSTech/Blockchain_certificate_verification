let provider;
let signer;
let contract;

// Replace this with your deployed contract address
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";

// ABI of the Certificate contract
const abi = [
    "function issueCertificate(string memory _studentName, string memory _course) public",
    "function verifyCertificate(uint256 _id) public view returns (string memory, string memory, uint256, bool)",
    "function revokeCertificate(uint256 _id) public"
];

async function init() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, abi, signer);
    } else {
        alert("Install MetaMask!");
    }
}

async function issueCertificate() {
    const studentName = document.getElementById("studentName").value;
    const course = document.getElementById("course").value;
    await contract.issueCertificate(studentName, course);
    alert("Certificate issued!");
}

async function verifyCertificate() {
    const id = document.getElementById("verifyId").value;
    const result = await contract.verifyCertificate(id);
    document.getElementById("verifyResult").innerText = `
        Name: ${result[0]}, Course: ${result[1]}, Date: ${new Date(result[2]*1000)}, Valid: ${result[3]}
    `;
}

async function revokeCertificate() {
    const id = document.getElementById("revokeId").value;
    await contract.revokeCertificate(id);
    alert("Certificate revoked!");
}

init();
