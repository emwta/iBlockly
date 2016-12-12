/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

goog.provide('Blockly.Blocks.colour');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.provide('Blockly.Input');



Blockly.Blocks['inex_board'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Board")
        .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.inexboardarduino), 'Board')
        .appendField("Board From INEX");
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};