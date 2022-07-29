// Contract dealing with calls of the user and delegating to implementation if it doesn't understand.

//SPDX-License-Identifier:MIT

import "@openzeppelin/contracts/proxy/Proxy.sol";

pragma solidity ^0.8.10;

contract FrontFace is Proxy{
    address public implementation;

    constructor(address _impl){
        implementation = _impl;
    }

    function _implementation() internal view virtual override returns (address){
        return implementation;
    }
}