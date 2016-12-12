/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

goog.provide('Blockly.Arduino.senser');

goog.require('Blockly.Arduino');

Blockly.Arduino.sensor_gp2d120_set_variable=function()
{	var adc = this.getFieldValue("ADC_CH");
	var b = this.getFieldValue("VAR");
	var result = b+ " = getdist("+adc+");\n";
	return result;
};
Blockly.Arduino.sensor_sonar_set_variable=function()
{	var b = this.getFieldValue("VAR");
	var result = b+ " = sonar();\n";
	return result;
};

