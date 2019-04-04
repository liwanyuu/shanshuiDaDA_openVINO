* This code has been tested with openVINO on mac version openvino_2019.1.090, [install guide](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_macos.html) here.

* To run this on linux, there will be serveral tweaks needed:
   * reinferece.py
      - line 35,36 need be changed to your openvino path and linux/mac are different


* Clone this project:
``` bash
git clone
```

* Install openVINO for mac. [Instruction](https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_macos.html)

* change directory to this project:
``` bash
cd shanshuiDadA_openVINO
```

* Start node.js server
``` bash
node newapp.js
```
* Open [localhost:8000](http://localhost:8000/) in your browser

* OR (Suggested!) Use **a touch screen device eg.Tablet, Smart Phone etc.** to load the url and draw SHANSHUI from there. 

* The model was trained with pytorch and converted to onnx then inference with openVINO
    * More on how ShanshuiDaDA project on (my page)[https://www.aven.cc/Shanshui-DaDA.html] and (this repo)[https://github.com/aaaven/ShanshuiDaDA_pth]
    * More on how to convert/inference pytorch pretrained model with openVINO can be find (here)[https://github.com/aaaven/shanshuiDaDA_openVINO_modelONLY]
