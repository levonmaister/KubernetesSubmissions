
var charachterlist = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]

function makeString(){
    var string = '';
    for (var i = 0; i < 10; i++){
        string += charachterlist[Math.floor(Math.random() * charachterlist.length)];
    }

    var timeStamp = new Date().toISOString();


    return timeStamp + '       ' + string;
}

function logOutput(){
    var output = makeString();
    console.log(output);
}

setInterval(logOutput, 5000);


