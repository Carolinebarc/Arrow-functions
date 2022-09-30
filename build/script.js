"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var imc = function (Weight, height) {
    return Weight / (Math.pow(height, 2));
};
console.log('Qual seu peso? ');
var Weight = Number(prompt("--> "));
console.log("Qual sua altura: ");
var height = Number(prompt("--> "));
var imResultado = imc(Weight, height);
console.log("Seu IMC \u00E9 ".concat(imResultado));
