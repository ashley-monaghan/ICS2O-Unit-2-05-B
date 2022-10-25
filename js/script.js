// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-2-05-B/sw.js", {
    scope: "/ICS2O-Unit-2-05-B/",
  })
}

/**
 * This function calculates you total salary and deducted.
 */
function calculate() {
  // input
  const hours = parseFloat(document.getElementById("number-of-hours").value)
  const rate = parseFloat(document.getElementById("hourly-rate").value)

  // process
  const pay = hours * rate * (1 - 0.18)
  const tax = hours * rate * 0.18

  // output
  document.getElementById("pay").innerHTML =
    "Your total pay will be: $" + pay.toFixed(2)

  // output
  document.getElementById("tax").innerHTML =
    "Your deducted pay will be: $" + tax.toFixed(2)
}
