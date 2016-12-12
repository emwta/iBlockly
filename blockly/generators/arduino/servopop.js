/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

goog.provide('Blockly.Arduino.motor');

goog.require('Blockly.Arduino');



Blockly.Arduino['servo_angle'] = function(block) {
  var pin = block.getFieldValue('PIN');
   var angle = Blockly.Arduino.valueToCode(
      block, 'SERVO_ANGLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'servo(' + pin +','+ angle + ');\n';
   Blockly.Arduino.addInclude('servo_pin', '#include <popx2.h>');
  return code;
};
