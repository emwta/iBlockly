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

Blockly.Blocks.glcd_text = {
    init: function() {
        this.setColour(190);
	this.appendDummyInput().appendField("GLCD Row:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.glcdrow), 'ROW');
	this.appendDummyInput().appendField("Text")
	.appendField(new Blockly.FieldTextInput("Hello"),'TXT');
	this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Display Message on GLCD");
    }
};

Blockly.Blocks.glcd_variable_text = {
    init: function() {
        this.setColour(190);
	this.appendDummyInput().appendField("GLCD Show Value:");
	this.appendValueInput("VARIABLE_SETTYPE_INPUT");
        this.appendDummyInput().appendField(Blockly.Msg.ARD_VAR_AS);
	this.appendDummyInput().appendField("Type:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.glcdtype), 'VAR_TYPE');	
	this.appendDummyInput().appendField("Row:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.glcdrow), 'ROW');
	this.appendDummyInput().appendField("Prefix:")
	.appendField(new Blockly.FieldTextInput("Value = "),'PREFIX');
	this.appendDummyInput().appendField("Subfix:")
	.appendField(new Blockly.FieldTextInput(" Unit   "),'SUBFIX');
	this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Display value on GLCD");
    },
    getBlockType: function() {
        var a = this.getFieldValue("VARIABLE_SETTYPE_TYPE");
        return Blockly.Types[a]
    }
};
Blockly.Blocks.glcd_analog_sensor = {
    init: function() {
        this.setColour(190);
	this.appendDummyInput().appendField("GLCD Show Sensor Analog:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.analogPins), 'ADC_CH');
	this.appendDummyInput().appendField("Row:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.glcdrow), 'ROW');
	this.appendDummyInput().appendField("Prefix:")
	.appendField(new Blockly.FieldTextInput("Value = "),'PREFIX');
	this.appendDummyInput().appendField("Subfix:")
	.appendField(new Blockly.FieldTextInput(" Unit   "),'SUBFIX');		
	this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Display Sensor Analog value on GLCD");
    }
};
Blockly.Blocks.glcd_digital_sensor = {
    init: function() {
        this.setColour(190);
	this.appendDummyInput().appendField("GLCD Show Sensor Digital:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.digitalPins), 'DIGITAL_CH');
	this.appendDummyInput().appendField("Row:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.glcdrow), 'ROW');	
	this.appendDummyInput().appendField("Prefix:")
	.appendField(new Blockly.FieldTextInput("Value = "),'PREFIX');
	this.appendDummyInput().appendField("Subfix:")
	.appendField(new Blockly.FieldTextInput(" Unit   "),'SUBFIX');		
	this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Display Sensor Analog value on GLCD");
    }
};
Blockly.Blocks.glcd_set_text_size = {
    init: function() {
        this.setColour(190);
	this.appendDummyInput().appendField("GLCD Text Size:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.glcdtextsize), 'SIZE');
	this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Set text size for display on GLCD");
    }
};
Blockly.Blocks.glcd_set_text_color = {
    init: function() {
        this.setColour(190);
	this.appendDummyInput().appendField("GLCD Text Color:")
	.appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.profiles.inexboard.glcdcolor), 'COLOR');
	this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Set text color for display on GLCD");
    }
};