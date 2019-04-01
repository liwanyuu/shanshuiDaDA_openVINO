mo_file="/opt/intel/computer_vision_sdk/deployment_tools/model_optimizer/mo.py"

#change path in your environment
python3 $mo_file --input_model "/home/ubuntu/ShanshuiDaDA_pth/output/latest_net_G.onnx" --output_dir "/home/ubuntu/ShanshuiDaDA_pth/output/fp32_onnx" --data_type "FP32" --model_name "latest_net_G_FP32"

#for myriad, change to FP16
#python3 $mo_file --input_model "/home/ubuntu/ShanshuiDaDA_pth/output/latest_net_G.onnx" --output_dir "/home/ubuntu/ShanshuiDaDA_pth/output/fp16_onnx" --data_type "FP16" --model_name "latest_net_G_FP16"

#for tf
#python3 $mo_file --input_model "/home/ubuntu/ShanshuiDaDA_pth/output/latest_net_G.pb" --output_dir "/home/ubuntu/ShanshuiDaDA_pth/output/fp32_tf" --data_type "FP32" --model_name "latest_net_G_FP32" --disable_nhwc_to_nchw
