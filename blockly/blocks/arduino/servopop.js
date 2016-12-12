/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks.io.HUE = 180;


Blockly.Blocks['servo_angle'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendValueInput('NUM')
        .appendField(Blockly.Msg.SERVO_TITLE )
        .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.pwmPins), 'PIN')
        .appendField(Blockly.Msg.SERVO_TITLE1)
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SERVO_TIP);
  }
  };
  
  