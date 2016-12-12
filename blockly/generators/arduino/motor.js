/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

goog.provide('Blockly.Arduino.motor');

goog.require('Blockly.Arduino');


 Blockly.Arduino['motor_forward'] = function(block) {
     var speedMotorFD = Blockly.Arduino.valueToCode(
      block, 'FD', Blockly.Arduino.ORDER_ATOMIC) || '0';
      
      
    if ((speedMotorFD < 0) || (speedMotorFD > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'FD');
  } else {
    block.setWarningText(null, 'FD');
  } 
  var code = 'fd(' + speedMotorFD + ');\n';
  return code;
};

Blockly.Arduino['motor_back'] = function(block) {
var speedMotorBK = Blockly.Arduino.valueToCode(
      block, 'BK', Blockly.Arduino.ORDER_ATOMIC) || '0';
         if ((speedMotorBK < 0) || (speedMotorBK > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'BK');
  } else {
    block.setWarningText(null, 'BK');
  }  
  var code = 'bk(' + speedMotorBK + ');\n';
Blockly.Arduino.addInclude('include', '#include <popx2.h>');
  return code;
};

Blockly.Arduino['motor__right'] = function(block) {
     var speedMotorSR = Blockly.Arduino.valueToCode(
      block, 'SR', Blockly.Arduino.ORDER_ATOMIC) || '0';
         if ((speedMotorSR < 0) || (speedMotorSR > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'SR');
  } else {
    block.setWarningText(null, 'SR');
  }  
  var code = 'tr(' + speedMotorSR + ');\n';
  return code;
};

 Blockly.Arduino['motor_left'] = function(block) {
     var speedMotorSL = Blockly.Arduino.valueToCode(
      block, 'SL', Blockly.Arduino.ORDER_ATOMIC) || '0';
      if ((speedMotorSL < 0) || (speedMotorSL > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'SL');
  } else {
    block.setWarningText(null, 'SL');
  }  
  var code = 'tl(' + speedMotorSL + ');\n';
  return code;
};




Blockly.Arduino['motor_choose'] = function(block) {
    var pin = block.getFieldValue('MOTOR');
     var speedMotorSL = Blockly.Arduino.valueToCode(
      block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';
      if ((speedMotorSL < 0) || (speedMotorSL > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'SL');
  } else {
    block.setWarningText(null, 'SPEED');
  }  
  var code = 'motor(' + pin + ',' + speedMotorSL +');\n';;
  Blockly.Arduino.addInclude('include', '#include <popx2.h>');
  return code;
};




Blockly.Arduino['motor_stop'] = function(block) {
  var code = 'ao('+');\n';
  return code;
};

Blockly.Arduino['switch_ok'] = function(block) {
    var SetupCode = 'OK('+');';
  Blockly.Arduino.addSetup('OK'+ SetupCode);
  return;
};



Blockly.Arduino['servo_angle'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var Angle = Blockly.Arduino.valueToCode(
      block, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '0';
if ((Angle < -1) || (Angle > 360)) {
    block.setWarningText('The angle value set must be between 0 and 360',
                         'angle');
  } else {
    block.setWarningText(null, 'angle');
  }
  var code = 'servo(' + pin + ',' + Angle + ');\n';
    return code;
};


Blockly.Arduino['forward2'] = function(block) {
     var speedMotorLeft = Blockly.Arduino.valueToCode(block, 'speedMotorLeft', Blockly.Arduino.ORDER_ATOMIC) || '0';
     if ((speedMotorLeft < 0) || (speedMotorLeft > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'speedMotorLeft');
  } else {
    block.setWarningText(null, 'speedMotorLeft');
  } 
  
    var speedMotorRight = Blockly.Arduino.valueToCode(block, 'speedMotorRight', Blockly.Arduino.ORDER_ATOMIC) || '0';
     if ((speedMotorRight < 0) || (speedMotorRight > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'speedMotorRight');
  } else {
    block.setWarningText(null, 'speedMotorRight');
  }  
  
  var code = 'fd2(' + speedMotorLeft + ',' + speedMotorRight + ');\n';
  return code;
};


Blockly.Arduino['Backward2'] = function(block) {
     var speedMotorLeft = Blockly.Arduino.valueToCode(block, 'speedMotorLeft', Blockly.Arduino.ORDER_ATOMIC) || '0';
     if ((speedMotorLeft < 0) || (speedMotorLeft > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'speedMotorLeft');
  } else {
    block.setWarningText(null, 'speedMotorLeft');
  } 
  
    var speedMotorRight = Blockly.Arduino.valueToCode(block, 'speedMotorRight', Blockly.Arduino.ORDER_ATOMIC) || '0';
     if ((speedMotorRight < 0) || (speedMotorRight > 100)) {
    block.setWarningText('The Speed Motor value set must be between 0 and 100',
                         'speedMotorRight');
  } else {
    block.setWarningText(null, 'speedMotorRight');
  }  
  
  var code = 'bk2(' + speedMotorLeft + ',' + speedMotorRight + ');\n';
  return code;
};