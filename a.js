const fs = require("fs");
const adm_zip = require('adm-zip');
function readFile(fileDir){
    return new Promise((resolve, reject) => {
        fs.readFile(fileDir,'utf-8',function(error,data){
            if(!!error==false){
                resolve(data)
            }else{
                reject(error)
            }
        })
    })
}

function writeFile(fileDir,str){
    return new Promise((resolve, reject) => {
        fs.writeFile(fileDir,str,'utf-8',function(error){
            if(!!error==false){
                resolve(true)
            }else{
                reject(false)
            }
        })
    })
}


async function unzip(dir){ //拆config.json
    let a = await readFile(dir+"/config.json");
    let jsonstr = JSON.parse(a);
    let keys = Object.keys(jsonstr);
    keys.forEach(function(item,index){
        writeFile(dir+"/formateConfig/"+item+".json",JSON.stringify(jsonstr[item],null,4))
    });
}

async function zip(dir) { //合并压缩
    var results = []
    var list = fs.readdirSync(dir+"/formateConfig")
    let configObj = {};
    for (var i = 0; i < list.length; i++) {
        if(list[i].endsWith('.json')){
            let a = await readFile(dir + '/formateConfig/' + list[i]);
            let obj = {};
            let name = list[i].replace(".json","");
            obj[name]=JSON.parse(a);
            let str = JSON.stringify(obj)
            await writeFile(dir+"/config/"+name+".json",str)
            // configObj[name] = obj;
        }
    } 

    var zip = new adm_zip();  
    zip.addLocalFolder(dir+'/config');  
    zip.writeZip('./assets/config.zip');  

    fs.rename('./assets/config.zip','./assets/config.pack',(err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('重命名成功！');
        }
    });
}

async function main(dir){
    await unzip(dir)
    await zip(dir)
}

 main("C:\\git-workspace\\aliyuncode\\zxj\\lua2json");






