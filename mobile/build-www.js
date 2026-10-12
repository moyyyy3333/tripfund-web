// Copies the static site (repo root) into www/tripfund-web so the /tripfund-web basePath works inside the app.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),out=path.join(__dirname,'www'),dst=path.join(out,'tripfund-web');
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(dst,{recursive:true});
const skip=new Set(['.git','mobile','node_modules','.github']);
for(const e of fs.readdirSync(root)) if(!skip.has(e)) fs.cpSync(path.join(root,e),path.join(dst,e),{recursive:true});
fs.writeFileSync(path.join(out,'index.html'),'<!doctype html><meta http-equiv="refresh" content="0;url=/tripfund-web/"><script>location.replace("/tripfund-web/")</script>');
console.log('www ready');
