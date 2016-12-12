/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

goog.provide('Blockly.Blocks.tone');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');



Blockly.Blocks['beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Beep')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.profiles.inexboard.digitalPins), "BeepPIN");
   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(345);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/tone');
  }
};



Blockly.Blocks['sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Sound PIN')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.profiles.inexboard.digitalPins), "SoundPin");
    this.appendValueInput("FREQUENCY")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('Frequency');
    this.appendValueInput("TIME")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField('Time');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(345);
  //  this.setTooltip(Blockly.Msg.ARD_TONE_TIP);
    this.setHelpUrl('https://www.arduino.cc/en/Reference/tone');
  },
  onchange: function() {
    var freq = Blockly.Arduino.valueToCode(this, "FREQUENCY", Blockly.Arduino.ORDER_ATOMIC);
    if (freq < 31 || freq > 65535) {
      this.setWarningText(Blockly.Msg.ARD_TONE_WARNING, 'sound');
    } else {
      this.setWarningText(null, 'sound');
    }
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};