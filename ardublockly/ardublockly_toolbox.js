/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */

'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};
Ardublockly.TOOLBOX_XML =
'<xml>' +
'  	<sep></sep>' +
'  	<category id="Board" name="Board/Library">' + 
'	<block type="libraryme"></block>'+
'	<block type="inex_board"></block>'+
'	<block type="switch_ok"></block>'+
'	</category>'+

'  <sep></sep>' +
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +

'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +


'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <block type="math_number"></block>' +
'      </value>'+
'    </block>' +
'    <block type="sensor_digital_in"></block>' +
'    <block type="out_set">' +
'       <value name="STAT">'+
'           <shadow type="math_number">'+
'               <field name="NUM">1</field>'+
'           </shadow>'+
'       </value>'+
'   </block>'+
'   <block type="knob">'+
'       <value name="VALUE">'+
'           <block type="math_number">'+
'               <field name="NUM">180</field>'+
'           </block>'+
'       </value>'+
'   </block>'+

'   <block type="knob2para">'+
'       <value name="VALUEMIN">'+
'           <shadow type="math_number">'+
'               <field name="NUM">0</field>'+
'           </shadow>'+
'       </value>'+
'       <value name="VALUEMAX">'+
'           <block type="math_number">'+
'               <field name="NUM">180</field>'+
'           </block>'+
'       </value>'+
'   </block>'+
'   <block type="led8Byte">'+
'       <value name="Byte">'+
'           <shadow type="math_number">'+
'               <field name="NUM">170</field>'+
'           </shadow>'+
'       </value>'+
'   </block>'+
'  </category>' +

' 	 <sep></sep>' +
' 	 <category id="Motor" name="Motor">' +
'	<block type="move">'+
'   	  <value name="speed">' +
'  	  	  <block type="math_number">' +
'         <field name="NUM">50</field>'+
'        </block>' +
'      </value>' +
'</block>'+

'	<block type="spin">'+
'   	  <value name="speed">' +
'  	  	  <block type="math_number">' +
'         <field name="NUM">50</field>'+
'        </block>' +
'      </value>' +
'</block>'+

'	<block type="turn">'+
'   	  <value name="speed">' +
'  	  	  <block type="math_number">' +
'         <field name="NUM">50</field>'+
'        </block>' +
'      </value>' +
'</block>'+

'   <block type="motor_choose">'+
'       <value name="SPEED">'+
'           <block type="math_number">'+
'               <field name="NUM">50</field>'+
'           </block>'+
'       </value>'+
'    </block>'+

'   <block type="forward2">'+
' <value name="speedMotorLeft">'+
'           <block type="math_number">'+
'               <field name="NUM">50</field>'+
'           </block>'+
'       </value>'+
' <value name="speedMotorRight">'+
'           <block type="math_number">'+
'               <field name="NUM">50</field>'+
'           </block>'+
'       </value>'+
'    </block>'+

'   <block type="Backward2">'+
' <value name="speedMotorLeft">'+
'           <block type="math_number">'+
'               <field name="NUM">50</field>'+
'           </block>'+
'       </value>'+
' <value name="speedMotorRight">'+
'           <block type="math_number">'+
'               <field name="NUM">50</field>'+
'           </block>'+
'       </value>'+
'    </block>'+

'	<block type="motor_stop"></block>'+
'   <block type="servo_angle">'+
'       <value name="NUM">'+
'           <block type="math_number">'+
'               <field name="NUM">180</field>'+
'           </block>'+
'       </value>'+
'    </block>'+
'	</category>'+

'    <sep></sep>' +
'    <category id="GLCD" name="GLCD Text">' +
'    <block type="glcd_mode"></block>' +
'    <block type="glcd_set_text_size"></block>' +
'    <block type="glcd_set_text_color"></block>' +
'	 <block type="glcd_text_background"></block>'+
'	 <block type="fillscreen"></block>'+
'    <block type="glcd_text"></block>' +
'    <block type="glcd_variable_text"></block>' +
'	 <block type="glcdclearscreen"></block>'+

'  </category>' +

'	<sep></sep>'+
'		<category id="GraphicGLCD" name="GLCD Graphic">'+

'	 <block type="glcd_line">'+
'	 <value name="SX">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="SY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="EX">' +
'        <shadow type="math_number">' +
'          <field name="NUM">50</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="EY">'+
'		<shadow type="math_number">' +
'          <field name="NUM">50</field>' +
'        </shadow>' +
'      </value>' +
'		</block>'+

'	 <block type="glcd_rectangle">'+
'	 <value name="X">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="Y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="HEIGHT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">40</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="WIDTH">'+
'		<shadow type="math_number">' +
'          <field name="NUM">40</field>' +
'        </shadow>' +
'      </value>' +
'	</block>'+

'	 <block type="glcd_fill_rectangle">'+
'	 <value name="X">' +
'        <shadow type="math_number">' +
'          <field name="NUM">40</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="Y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">0</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="HEIGHT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">40</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="WIDTH">'+
'		<shadow type="math_number">' +
'          <field name="NUM">40</field>' +
'        </shadow>' +
'      </value>' +
'		</block>'+

'	 <block type="glcd_circle">'+
'		<value name="X">' +
'        <shadow type="math_number">' +
'          <field name="NUM">64</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="Y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">80</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="RADIUS">' +
'        <shadow type="math_number">' +
'          <field name="NUM">20</field>' +
'        </shadow>' +
'      </value>' +
'	 </block>'+

'	 <block type="glcd_fillcircle">'+
'		<value name="X">' +
'        <shadow type="math_number">' +
'          <field name="NUM">64</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="Y">' +
'        <shadow type="math_number">' +
'          <field name="NUM">80</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="RADIUS">' +
'        <shadow type="math_number">' +
'          <field name="NUM">20</field>' +
'        </shadow>' +
'      </value>' +
'		</block>'+

'	 <block type="glcd_arc">'+
'	 <value name="CX">' +
'        <shadow type="math_number">' +
'          <field name="NUM">50</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="CY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">60</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="RADIUS">' +
'        <shadow type="math_number">' +
'          <field name="NUM">20</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="SD">'+
'		<shadow type="math_number">' +
'          <field name="NUM">45</field>' +
'        </shadow>' +
'      </value>' +
'		<value name="ED">'+
'		<shadow type="math_number">' +
'          <field name="NUM">300</field>' +
'        </shadow>' +
'      </value>' +
'	</block>'+

'</category>'+

'    <sep></sep>' +
'   <category id="catSensors" name="Sensors">' +

'    <block type="sensor_analog_read"></block>' +
'    <block type="sensor_gp2d120_read"></block>' +
'    <block type="sensor_sonar_read"></block>' +
'    <block type="sensor_temp_mcp9701_read"></block>' +

'   </category>' +

'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'    </category>' +
'    <sep></sep>' +

'   <category id="catSound" name="Sound">' +
'	<block type="beep"></block>'+

'   <block type="sound">'+
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">500</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="TIME">' +
'        <shadow type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'  </category>' +
' 	 <sep></sep>' +
' 	 <category id="Communication" name="Communication">' +
'   <block type="uart"></block>'+
'	<block type="uart_text"></block>'+
'   <block type="uart_getkey_var"></block>'+
'   <block type="uart_available"></block>'+
'   <block type="uart1"></block>'+
'	<block type="uart1_text"></block>'+
'   <block type="uart1_getkey_var"></block>'+
'   <block type="uart1_available"></block>'+
' 	 </category>' +
'</xml>'
