/* eslint-disable @typescript-eslint/no-var-requires */
const atRule = require("./at-rule");
const block = require("./block");
const color = require("./color");
const customProperty = require("./custom-property");
const declaration = require("./declaration");
const fontFamily = require("./font-family");
const keyframes = require("./keyframes");
const property = require("./property");
const scss = require("./scss");
const selector = require("./selector");
const sheet = require("./sheet");
const time = require("./time");
const value = require("./value");

module.exports = Object.assign(
    {},
    atRule,
    block,
    color,
    customProperty,
    declaration,
    fontFamily,
    keyframes,
    property,
    scss,
    selector,
    sheet,
    time,
    value,
);
