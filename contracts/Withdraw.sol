// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Withdraw {
    constructor() {
        if (address(this).balance > 0) {
            (bool success,) = msg.sender.call{value: address(this).balance}("");
            require(success);
        }
    }
}
