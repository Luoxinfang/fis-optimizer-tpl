# fis-optimizer-tpl

A plugin optimizer tpl files

### Usage
  used in fis3 optimizer 
 
#### npm install

    $ npm i -g fis-parser-optimizer-tpl
    
#### Example of Use
  fis-config.js
    
    fis.media('prod').match('/**.tpl', {
      parser: fis.plugin('optimizer-tpl')
    });
