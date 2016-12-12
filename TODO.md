# iBlockly to-do list

## iBlockly build system
- [x] ~~Update the documentation build script to work on the project root directory like the other build scripts.~~
- [ ] Update the py2exe Windows Build to place the executable on the projetct root directory.
- [ ] Should the Windows build be moved to PyInstaller and keep a single build script for all platforms??
- [x] ~~Add documentation build steps to the CI build servers~~


## iBlockly desktop wrapper
- [ ] Wait for resolution and implement appData directory move fixes https://github.com/atom/electron/issues/2721
- [ ] Move Electron front end changes script from iBlockly html injection into preload script executed from Electron
- [ ] Add menu to directly select amongst the different Arduino boards supported
- [ ] Executable app signing
- [ ] Check for "built python server executable", if not found check if python is installed, if it is then run the server in a python subprocess.


## iBlockly front end
- [ ] Change delete all icon with "new"
- [ ] Similar to Arduino IDE, select area to display button action text, and change the text with button mouse over
- [ ] Ensure that basic empty sketch code shows on page load
- [ ] On low resolutions ensure the blockly vertical height is lower than the viewport
- [x] ~~Add tooltips to the action buttons and floating round buttons~~
- [ ] Finish adding internationalisation, start with only English and Spanish


## iBlockly
- [x] Merge changes from upstream to add zoom functionality
- [ ] Modify zoom icons to be smaller and placed in a different position
- [ ] Arduino setup and loop block can be copy/pasted using keyboard shorcuts, stop this from happening
- [ ] Refactor new variable name to be able to select custom name on single action and asynchronously

#### iBlockly changes to submit upstream
- [ ] Any useful changes to the zoom functionality
- [ ] Use of window.prompt

#### Static typing
- [ ] logic_ternary block getType to defines type as that of its inputs
- [ ] logic_null block right now does not return a type, this might change
- [ ] math_number block 'errornumber' type used for debugging, remove
- [ ] math_arithmetic getType to check types of given inputs to decide between int or float. Right now first block within sets the type.
- [ ] math_constrain getType to check types of given inputs to decide between int or float. Right now first block within sets the type.
- [ ] math_number getType to use regular expressions more efficiently
- [ ] math_on_list to add static type if lists get implemented
- [ ] controls_for getVarType function
- [ ] controls_forEach block uses lists, these are not implemented in the Arduino generator (possible arrays), when implemented this block needs a getVarType, varType, and getType functions
- [ ] add getVarType to the procedures blocks
- [ ] the loops count type is set to int, user could input a decimal, so add input checking to determine type
- [ ] Number blocks automatically trim unnecessary decimal digits "x.0 => x", change this behavior so that "x.0" can be set as a decimal

#### Arduino generator
- [ ] Text trim does not currently generate Arduino valid code
- [x] Second part of the generator refactory

## iBlock block and Arduino board
- [ ] Block for Internet of Thing ESP8266
- [ ] 


## Future features
- [ ] Block creator app that also used blockly to create the generator code
- [ ] Server component of the block creator to add files into project directory folder and have client side to read them and include them into the toolbox
- [ ] Serial console for comms with Arduino
- [ ] Serial data graphing
- [ ] SVG image creation to displayed used pins with given function
- [ ] Auto updating from server for the desktop app

### iBlockly block and Arduino board
- [ ] Block for Internet of Thing ESP8266.
- [ ] Color for toolbox help remember use block.
- [ ] Procedures block return type.
