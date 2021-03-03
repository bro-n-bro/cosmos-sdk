(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{812:function(e,i,t){"use strict";t.r(i);var o=t(1),n=Object(o.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),t("h2",{attrs:{id:"signing-info-liveness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing-info-liveness"}},[e._v("#")]),e._v(" Signing Info (Liveness)")]),e._v(" "),t("p",[e._v("Every block includes a set of precommits by the validators for the previous block,\nknown as the "),t("code",[e._v("LastCommitInfo")]),e._v(" provided by Tendermint. A "),t("code",[e._v("LastCommitInfo")]),e._v(" is valid so\nlong as it contains precommits from +2/3 of total voting power.")]),e._v(" "),t("p",[e._v("Proposers are incentivized to include precommits from all validators in the "),t("code",[e._v("LastCommitInfo")]),e._v("\nby receiving additional fees proportional to the difference between the voting\npower included in the "),t("code",[e._v("LastCommitInfo")]),e._v(" and +2/3 (see "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/967",target:"_blank",rel:"noopener noreferrer"}},[e._v("TODO"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("Validators are penalized for failing to be included in the "),t("code",[e._v("LastCommitInfo")]),e._v(" for some\nnumber of blocks by being automatically jailed, potentially slashed, and unbonded.")]),e._v(" "),t("p",[e._v("Information about validator's liveness activity is tracked through "),t("code",[e._v("ValidatorSigningInfo")]),e._v(".\nIt is indexed in the store as follows:")]),e._v(" "),t("ul",[t("li",[e._v("ValidatorSigningInfo: "),t("code",[e._v("0x01 | ConsAddress -> amino(valSigningInfo)")])]),e._v(" "),t("li",[e._v("MissedBlocksBitArray: "),t("code",[e._v("0x02 | ConsAddress | LittleEndianUint64(signArrayIndex) -> VarInt(didMiss)")])])]),e._v(" "),t("p",[e._v("The first mapping allows us to easily lookup the recent signing info for a\nvalidator based on the validator's consensus address. The second mapping acts\nas a bit-array of size "),t("code",[e._v("SignedBlocksWindow")]),e._v(" that tells us if the validator missed\nthe block for a given index in the bit-array. The index in the bit-array is given\nas little endian uint64.")]),e._v(" "),t("p",[e._v("The result is a "),t("code",[e._v("varint")]),e._v(" that takes on "),t("code",[e._v("0")]),e._v(" or "),t("code",[e._v("1")]),e._v(", where "),t("code",[e._v("0")]),e._v(" indicates the\nvalidator did not miss (did sign) the corresponding block, and "),t("code",[e._v("1")]),e._v(" indicates\nthey missed the block (did not sign).")]),e._v(" "),t("p",[e._v("Note that the "),t("code",[e._v("MissedBlocksBitArray")]),e._v(" is not explicitly initialized up-front. Keys\nare added as we progress through the first "),t("code",[e._v("SignedBlocksWindow")]),e._v(" blocks for a newly\nbonded validator. The "),t("code",[e._v("SignedBlocksWindow")]),e._v(" parameter defines the size\n(number of blocks) of the sliding window used to track validator liveness.")]),e._v(" "),t("p",[e._v("The information stored for tracking validator liveness is as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gVmFsaWRhdG9yU2lnbmluZ0luZm8gZGVmaW5lcyBhIHZhbGlkYXRvcidzIHNpZ25pbmcgaW5mbyBmb3IgbW9uaXRvcmluZyB0aGVpcgovLyBsaXZlbmVzcyBhY3Rpdml0eS4KbWVzc2FnZSBWYWxpZGF0b3JTaWduaW5nSW5mbyB7CiAgc3RyaW5nIGFkZHJlc3MgPSAxOwogIC8vIGhlaWdodCBhdCB3aGljaCB2YWxpZGF0b3Igd2FzIGZpcnN0IGEgY2FuZGlkYXRlIE9SIHdhcyB1bmphaWxlZAogIGludDY0IHN0YXJ0X2hlaWdodCA9IDI7CiAgLy8gaW5kZXggb2Zmc2V0IGludG8gc2lnbmVkIGJsb2NrIGJpdCBhcnJheQogIGludDY0IGluZGV4X29mZnNldCA9IDM7CiAgLy8gdGltZXN0YW1wIHZhbGlkYXRvciBjYW5ub3QgYmUgdW5qYWlsZWQgdW50aWwKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIGphaWxlZF91bnRpbCA9IDQ7CiAgLy8gd2hldGhlciBvciBub3QgYSB2YWxpZGF0b3IgaGFzIGJlZW4gdG9tYnN0b25lZCAoa2lsbGVkIG91dCBvZiB2YWxpZGF0b3IKICAvLyBzZXQpCiAgYm9vbCB0b21ic3RvbmVkID0gNTsKICAvLyBtaXNzZWQgYmxvY2tzIGNvdW50ZXIgKHRvIGF2b2lkIHNjYW5uaW5nIHRoZSBhcnJheSBldmVyeSB0aW1lKQogIGludDY0IG1pc3NlZF9ibG9ja3NfY291bnRlciA9IDY7Cn0K"}}),e._v(" "),t("p",[e._v("Where:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Address")]),e._v(": The validator's consensus address.")]),e._v(" "),t("li",[t("strong",[e._v("StartHeight")]),e._v(": The height that the candidate became an active validator\n(with non-zero voting power).")]),e._v(" "),t("li",[t("strong",[e._v("IndexOffset")]),e._v(": Index which is incremented each time the validator was a bonded\nin a block and may have signed a precommit or not. This in conjunction with the\n"),t("code",[e._v("SignedBlocksWindow")]),e._v(" param determines the index in the "),t("code",[e._v("MissedBlocksBitArray")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("JailedUntil")]),e._v(": Time for which the validator is jailed until due to liveness downtime.")]),e._v(" "),t("li",[t("strong",[e._v("Tombstoned")]),e._v(": Desribes if the validator is tombstoned or not. It is set once the\nvalidator commits an equivocation or for any other configured misbehiavor.")]),e._v(" "),t("li",[t("strong",[e._v("MissedBlocksCounter")]),e._v(": A counter kept to avoid unnecessary array reads. Note\nthat "),t("code",[e._v("Sum(MissedBlocksBitArray)")]),e._v(" equals "),t("code",[e._v("MissedBlocksCounter")]),e._v(" always.")])])],1)}),[],!1,null,null,null);i.default=n.exports}}]);