// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certificate {
    struct Cert {
            string studentName;
                    string course;
                            uint256 issueDate;
                                    bool isValid;
                                        }

                                            mapping(uint256 => Cert) public certificates;
                                                uint256 public certCount;

                                                    function issueCertificate(string memory _studentName, string memory _course) public {
                                                            certCount++;
                                                                    certificates[certCount] = Cert(_studentName, _course, block.timestamp, true);
                        
                                                                        }

                                                                            function verifyCertificate(uint256 _id) public view returns (string memory, string memory, uint256, bool) {
                                                                                    Cert memory c = certificates[_id];
                                                                                            return (c.studentName, c.course, c.issueDate, c.isValid);
                                                                                                }

                                                                                                    function revokeCertificate(uint256 _id) public {
                                                                                                            certificates[_id].isValid = false;
                                                                                                                }
                                                                                                                }
