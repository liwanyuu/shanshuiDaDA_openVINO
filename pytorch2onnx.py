import torch
from torch.autograd import Variable

import os
from options.test_options import TestOptions
from data import CreateDataLoader
from models import create_model


opt = TestOptions().parse()
opt.num_threads = 1   # test code only supports num_threads = 1
opt.batch_size = 1  # test code only supports batch_size = 1
opt.serial_batches = True  # no shuffle
opt.no_flip = True  # no flip
opt.display_id = -1  # no visdom display

model = create_model(opt)
model.setup(opt)

dummy_input = Variable(torch.randn(1, 3, 256, 256))

#change output path in your environment
torch.onnx.export(model.netG, dummy_input, "/home/ubuntu/ShanshuiDaDA_pth/output/latest_net_G.onnx")
