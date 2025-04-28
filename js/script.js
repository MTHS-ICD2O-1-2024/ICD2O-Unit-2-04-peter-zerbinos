// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area of a triangle.
 */
function onButtonClicked () {
  // input
  const baseOfTriangle = parseFloat(document.getElementById('base-of-triangle').value)
  const heightOfTriangle = parseFloat(document.getElementById('height-of-triangle').value)

  // process
  const areaOfTriangle = (baseOfTriangle * heightOfTriangle)/2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}
