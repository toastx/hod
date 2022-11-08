import {details} from "./datascrape.js"
App = {
    web3Provider: null,
    contracts: {},
    init: function() {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } 
    web3 = new Web3(App.web3Provider);
  
  
      return App.initContract();
    },
    initContract: function(){
    var abi =[
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_approvedUser",
                        "type": "address"
                    }
                ],
                "name": "ApprovedUser",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "_rejectedUser",
                        "type": "address"
                    }
                ],
                "name": "RejectedUser",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "Admin",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_userAddress",
                        "type": "address"
                    }
                ],
                "name": "getUserDetails",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum KYC.Application",
                        "name": "",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum KYC.Gender",
                        "name": "",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "userDetails",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "userId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum KYC.Application",
                        "name": "application",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "age",
                        "type": "uint256"
                    },
                    {
                        "internalType": "enum KYC.Gender",
                        "name": "gender",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "permanentAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "district",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "state",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pinCode",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "datahash",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "createdBy",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "createdAt",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "userIds",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    }
}
App.contracts.User =  web3.eth.contract(abi).at('0xF4aa05b3EA41759baDBFA9973533B63a3bfBa0F1');

var name = details[0]
var age = details[1]
var email = details[2]
var mobile = details[3]
var g = details[4]
var occupation = details[5]
var aadhar= details[6]
var pancard= details[7]
var income = details[8]
var address = details[9]
var district = details[11]
var state = details[12]
var pincode = details[13]

App.contracts.User.requestNewUser(function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
  });
App.contracts.User.getUserDetails()
App.contracts.User.approveUser()
App.contracts.User.rejectUser()

