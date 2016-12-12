/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

goog.provide('Blockly.Arduino.inexboardcode');

goog.require('Blockly.Arduino');


Blockly.Arduino['inex_board'] = function(block) {
  var board = block.getFieldValue('Board');
  Blockly.Arduino.addInclude('board', '#include<' + board + '.h>');
};