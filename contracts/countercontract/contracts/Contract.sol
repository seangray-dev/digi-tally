// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {
    uint256 public count = 0;

    function increment() public {
        count += 1;
    }

    function decremt() public {
        require(count > 0, "count must be greater than 0");
        count -= 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}