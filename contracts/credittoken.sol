//SPDX-License-Identifier: UNLICENSED


pragma solidity ^0.8.7;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';
import './Registry.sol';


 contract CreditToken is Registry,ERC20{
    uint totalsupply;
    uint supply;
    uint tokenBurnedCount =0;
    uint8 private _decimals;
    
    constructor() ERC20("Carbon", "C")  {
      
    }
    // function decimals() public view virtual override returns (uint8) {
    //     return 0;
    // }
    mapping(address => uint) public BalanceOf;
    mapping(address => uint) public approvedCredits;
    mapping(address => uint) public tokensApprovedForBurn;
    modifier onlyVerifier() {
        require(msg.sender == verifiers[verifiercount]._addr);
        _;
    }
    modifier onlyCreditHolder() {
        require(msg.sender == CreditHolders[totalRegistered]._addr);
        _;
    }
//     function deposit (address walletAddress) payable public {

//  }
    function approveCreditsHeld(address _holder) public onlyVerifier returns(uint){
        uint cred = CreditHolders[totalRegistered].creditsHeld;
        approvedCredits[_holder]+= cred;
        return cred;
    }

    function createCarbonToken() public onlyCreditHolder() returns(uint) {
        address Owner = CreditHolders[totalRegistered]._addr;
        supply = approvedCredits[Owner];
        totalsupply = totalsupply + supply;
        BalanceOf[Owner] = BalanceOf[Owner] + supply;
        _mint(msg.sender, supply);
        return totalsupply;
    }
    function transferCredits(address to, uint value) public  onlyCreditHolder() {
        _transfer(msg.sender, to, value);
        BalanceOf[msg.sender] = BalanceOf[msg.sender] - value;
        BalanceOf[to] = BalanceOf[to] + value;
    }
    function transferCreditsFrom(address from, address to, uint value) public {
        transferFrom(from, to, value);
        BalanceOf[from] = BalanceOf[from] - value;
        BalanceOf[to] = BalanceOf[to] + value;
    }
    function approveBurn(uint carbonTokens, address holder) public onlyVerifier{
        tokensApprovedForBurn[holder]+=carbonTokens;
    }
    function burnTokens() public onlyOwner() returns(bool) {
        _burn(msg.sender, tokensApprovedForBurn[msg.sender]);
        totalsupply = totalsupply - (tokensApprovedForBurn[msg.sender]);
        BalanceOf[msg.sender] = BalanceOf[msg.sender] - (tokensApprovedForBurn[msg.sender]);
        return true;
    }
    function buyCarbonCredits(uint amount) public payable {
        uint value = amount * 1;
        require(msg.value > 0);
        transferCreditsFrom(address(this),msg.sender, value);
        }

}