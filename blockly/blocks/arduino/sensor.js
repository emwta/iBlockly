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

Blockly.Blocks.sensor_gp2d120_set_variable = {
    init: function() {
        //this.setColour(190);
		this.appendDummyInput().appendField("Get IR Range from:")
		.appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.profiles.inexboard.analogPins), 'ADC_CH');
		this.jsonInit({
            message0: 'set to: %1',	// Blockly.Msg.VARIABLES_SET,	// Arg 1,2 
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: "Variable"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: "Get IR Range set to variable"
        });
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks.variables_get.customContextMenu,
    getVarType: function(a) {
        return Blockly.Types.NUMBER		// Force to set to variable int type 
    }
};
Blockly.Blocks.sensor_sonar_set_variable = {
    init: function() {
        this.jsonInit({
            message0: 'Get Sonar set to: %1',	// Blockly.Msg.VARIABLES_SET,	// Arg 1,2 
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: "Variable"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: 160,
            tooltip: "Get Sonar to variable"
        });
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks.variables_get.customContextMenu,
    getVarType: function(a) {
        return Blockly.Types.NUMBER		// Force to set to variable int type 
    }
};