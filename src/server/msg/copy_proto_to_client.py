import os.path
import shutil
import sys  
import os
import execjs
s_dir = os.getcwd()

s_server_msg_root = os.path.join(s_dir, '')
s_client_root = os.path.join(s_dir, '../../../Clients/Chess/')
s_client_proto_root = os.path.join(s_client_root, 'assets/resources/proto/')

def removeDir(src):
    if os.path.exists(src):
        shutil.rmtree(src)

def copyDir(src, dst):
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(src, dst)
	
def file_extension(path):
    return os.path.splitext(path)[1]
	
print('copy proto ')
list = os.listdir(s_server_msg_root)
for i in range(0,len(list)):
	path = os.path.join(s_server_msg_root,list[i])
	if os.path.isfile(path):
		if file_extension(path) == '.proto':
			print('copy', path)
			shutil.copy(path, s_client_proto_root)
			
print('copy successfull')

