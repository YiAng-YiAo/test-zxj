#coding:utf8

import zipfile 
import os
import shutil


__selfDir__ = os.path.dirname(__file__)
os.chdir("../lua2json")

os.system("lua2json.exe")
os.chdir(__selfDir__)

def adddirfile(outPath, inDir): 
	f = zipfile.ZipFile(outPath,'w',zipfile.ZIP_DEFLATED) 
	os.chdir(inDir)
	for dirpath, dirnames, filenames in os.walk("./"):
		print("-----------------------")
		for filename in filenames: 
			f.write(os.path.join(dirpath,filename)) 
	f.close() 

outPath = "../assets/config.pack"
print("==========================================")
adddirfile(outPath, "../lua2json/config/")

print("to => " + outPath)

raw_input("finish!!!")