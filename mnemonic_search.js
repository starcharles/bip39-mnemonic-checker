var bip39 = require('bip39');
var wordlist = bip39.wordlists.EN; 

var my_mnemonic='input mnemonic words';

for(var j=0; j < 24; j++){
  var index = j;
  var mnemonic_arr = my_mnemonic.split(/\s/);

  for(var i=0; i< 2048; i++){
    mnemonic_arr[index] = wordlist[i];
    var mnemonic = mnemonic_arr.join(' ');
    var result = bip39.validateMnemonic(mnemonic, wordlist);

    if(result){
      console.log(mnemonic);
    }
  }
}
