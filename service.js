var https = require('https');

var serv = function(){

    this.getParseData = function(data) {
        var resArr = [];
        try {
            var dataArray = data.split("\r\n");

            console.log("Total elements quantity: ", dataArray.length);
            console.log("Start parsing...");



            for(var i = 1; i < dataArray.length; i++){
                console.log("Parsing: " + (i*100/dataArray.length).toFixed(0) + " %");
                if(i % 2 != 0){
                    if(!dataArray[i]) continue;
                    var newObj,
                        titleArr = dataArray[i].split(","),
                        title = titleArr[titleArr.length-1],
                        link = dataArray[i+1];

                    newObj = {
                        title: title,
                        link: link
                    };

                    resArr.push(newObj);
                }
            }
            console.log("Result array formed: ", resArr);
        }
        catch(err){
            console.log('Error ' + err.name + ":" + err.message + "\n" + err.stack);
        }

        return resArr;

    }
};

module.exports = serv;