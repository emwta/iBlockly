# iBlockly
iBlockly is a visual programming editor for Arduino. It is based on Google's [Blockly][1], which has been forked to generate [Arduino][15] code.

Support IPSE-SE ATX-2 POP-X2 Arduino R3B.

iBlockly The graphical software for Arduino-based microcontroller

iBlockly is a fun, easy way to program the Arduino-based microcontroller, in which you build a program – piece by piece – using the blocks. Thanks to Google's Blockly development team for distribution and open all necessary sources for our team to make our own the graphical programming tools for young and newbie maker.

The `iBlocklyServer` Python package initialises a local server to be able to compile and load the Arduino code using the [Arduino IDE][2].

This is all packaged in a self contained executable on browser Chrome, Opera, Firefox and Microsoft Edge.

![image](http://doc.inex.co.th/wp-content/uploads/2016/11/Picture1-1024x537.png)

## Features
* Generates Arduino code with visual drag-and-drop blocks.
* Uploads the code to an Arduino Board.
* Useful "code block warnings"
* Useful comment block.
* Compatible with a wide range of official Arduino Boards and inex board.
* Works on Windows / Mac OS X

iBlockly is still under development and a few features are not yet implemented. A to-do list can be found in the [TODO.md][3] file.


## Installing

iBlockly available for Chrome/Opera/Firefox and Microsoft Edge.

You will also need the [Arduino IDE by INEX version 1.7.11 or higher][2]. for compile and upload to Arduino board.


| Windows build       | Mac OS X build       |
|:-------------------:|:--------------------:|
| [Download Link][13] | [Download Link][14]  |


#### "Core version" (Python server only)
If you prefer, the core software can be used by running only the Python server, which loads the web interface on your local browser (Chrome recommended).

The quick version: Clone this repository, initialise all submodules, and execute:

```
click iBlockly.exe
```

## Running
1. Install the [Arduino IDE][2] version 1.7.11 or higher (latest version is always recommended).
2. Install the [Python][22] version 3.5.x or 2.7.x (recommend 2.7.x)
3. Run iBlockly as defined in your installation method.
3. Configure iBlockly to locate the Arduino IDE [following these instructions][6] or [Thai version][23].

![running](http://doc.inex.co.th/wp-content/uploads/2016/11/2016-12-12_135709-1024x525.png)
## Credit

This project has been inspired by [BlocklyDuino][16] and [Ardublockly][10].

Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/][1]. 


## License

Copyright (c) 2016 Awillis https://github.com/emwta

Copyright (c) 2016 [INEX,Thailand][18]

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE][9] file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://inex.co.th/shop/index.php/software-download
[3]: TODO.md
[4]: https://github.com/carlosperate/ardublockly/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: ConfigureiBlockly.md
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://www.inex.co.th/store/software/Arduino1.7.11_Setup161201.exe
[14]: http://www.inex.co.th/store/software/Arduino1.7.11_Setup161201.dmg
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md
[18]: http://www.inex.co.th
[19]: http://www.doc.inex.co.th
[20]: http://www.inexglobal.com
[21]: https://github.com/emwta
[22]: https://www.python.org/downloads/
[23]: ReadSetupiBlockly.pdf
