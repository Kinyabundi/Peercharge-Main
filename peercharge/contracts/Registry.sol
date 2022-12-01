//SPDX-License-Identifier: MIT License

pragma solidity ^0.8.17;


//import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol';
 //import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
 //import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Registry is Ownable {
//   using Counters for Counters.counter;
//     Counters.counter private _tokenIds;
    uint256 newItemId;
   


    constructor()  {
        newItemId = 0;
     totalCreditHolders[address(this)] = 10;

      

    }

  
mapping (address => uint) public totalCreditHolders;
uint totalRegistered = 0;
uint verifiercount=0;
uint customercount = 0;
struct CarbonCreditHolder {
    string name;
    string email;
    //string chargingstationName;
    string  geolocation;
    uint id;
    uint holderId;
    uint creditsHeld;
    uint pricepercredit;
    uint creditvalidityperiod;
    address _addr;
}
struct verifier {
    string name;
    string email;
    string Country;
    uint reg_no;
    uint license_no;
    address _addr;
    bool isExist;
}

mapping (uint => CarbonCreditHolder) public CreditHolders;
mapping (uint => verifier) public verifiers;



event newCreditHolder(string name, string email, string chargingstationName, uint holderId, uint creditsHeld, uint pricepercredit, uint creditvalidityperiod, address _addr);
//event mint( address _holder);

function registerCreditHolder(string memory name, string memory email, string memory chargingstationName, uint holderId, uint creditsHeld, uint pricepercredit, uint creditvalidityperiod) public {
    totalRegistered++;
    CreditHolders[totalRegistered] = CarbonCreditHolder(
        name,
        email,
        chargingstationName,
        totalRegistered,
        holderId,
        creditsHeld,
        pricepercredit,
        creditvalidityperiod,
        msg.sender);
    emit newCreditHolder(name,  email, chargingstationName, holderId, creditsHeld, pricepercredit,creditvalidityperiod, msg.sender);
  //  emit mintchargingstation();
}


function registerVerifiers(string memory name, string memory email, string memory Country, uint reg_no, uint license_no) public {
        verifiercount++;
        // check if verifier exist already
        require(verifiers[reg_no].isExist==false, "validator already registered");
        // require(license_no == ISO database, "you dont have a license to operate");
        verifiers[verifiercount]=verifier(name, email, Country,reg_no,license_no,msg.sender,true);
}

function getVerifiers() public view returns (verifier[] memory){
    verifier[] memory ret = new verifier[](verifiercount);
    for (uint i = 0; i < verifiercount; i++) {
        ret[i] = verifiers[i];
    }
    return ret;
}
function getCreditHolders() public view returns (CarbonCreditHolder[] memory){
    CarbonCreditHolder[] memory ret = new CarbonCreditHolder[](verifiercount);
    for (uint i = 0; i < totalRegistered; i++) {
        ret[i] = CreditHolders[i];
    }
    return ret;
}
 //function mintNFT (address _holder )
   // public onlyOwner returns (uint256){
     //   newItemId +=1;
       // _mint(_holder, newItemId);
        //return newItemId; }
    
function getTotalCreditHolders() public view returns(uint) {
    return totalCreditHolders[address(this)];
}

}