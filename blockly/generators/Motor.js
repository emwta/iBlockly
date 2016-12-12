'use strict';

goog.provide('Blockly.Blocks.colour');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.provide('Blockly.Input');

Blockly.Blocks.colour.HUE = 315;




 Blockly.Blocks['motor_forward'] = {
  init: function() {
    this.appendValueInput("FD")
        .setCheck("Number")
        .appendField("Forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip(Blockly.Msg.Motor_Speed);
    this.setHelpUrl('http://www.example.com/');
  }
  
 /*updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'PIN', 'digitalPins');
  }*/
};

Blockly.Blocks['left'] = {
  init: function() {
    this.appendValueInput("Left")
        .setCheck("Number")
        .appendField("Left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.Motor_Speed);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['motor_back'] = {
  init: function() {
    this.appendValueInput("Back")
        .setCheck("Number")
        .appendField("Back");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(Blockly.Msg.Motor_Speed);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['motor_right'] = {
  init: function() {
    this.appendValueInput("Right")
        .setCheck("Number")
        .appendField("Right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip(blocky.Msg.Motor_Speed);
    this.setHelpUrl('http://www.example.com/');
  }
};
