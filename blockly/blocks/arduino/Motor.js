'use strict';

goog.provide('Blockly.Blocks.colour');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.provide('Blockly.Input');

Blockly.Blocks.colour.HUE = 330;




Blockly.Blocks['motor_forward'] = {
  init: function() {
    this.appendValueInput("FD")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.Motor_FD);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip(Blockly.Msg.Motor_Speed);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};


Blockly.Blocks['motor_left'] = {
  init: function() {
    this.appendValueInput("SL")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.Motor_SL);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip(Blockly.Msg.Motor_Speed);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};

Blockly.Blocks['motor_back'] = {
  init: function() {
    this.appendValueInput("BK")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.Motor_BK);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip(Blockly.Msg.Motor_Speed);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};


Blockly.Blocks['motor_right'] = {
  init: function() {
    this.appendValueInput("SR")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.Motor_SR);
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setTooltip(Blockly.Msg.Motor_Speed);
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};


Blockly.Blocks['motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor Stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};

Blockly.Blocks['switch_ok'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Switch OK");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
  }
};


Blockly.Blocks['motor_choose'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.GETHELP);
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendValueInput('SPEED')
        .appendField('Motor')
        .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.motor), 'MOTOR')
        .appendField('Speed')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.Motor_Speed);
  }
  };

Blockly.Blocks['forward2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Forward2");
    this.appendValueInput("speedMotorLeft")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Left");
    this.appendValueInput("speedMotorRight")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Right");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['Backward2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Backward2");
    this.appendValueInput("speedMotorLeft")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Left");
    this.appendValueInput("speedMotorRight")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Right");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

