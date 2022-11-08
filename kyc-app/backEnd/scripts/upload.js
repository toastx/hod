import {details} from "./datascrape.js"
var request = require('request');
var fs = require('fs');

async function upload(filepathPAN, filepathAadhar, userName){
    var options = {
    'method': 'POST',
    'url': 'https://app.zeeve.io/zdfs-api/api/v1/file/upload',
    'headers': {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3Yjc4OGNmN2U0NDYwOTAzYTRlZTRmODEzNWVkNjgyOGExMGIxOWUyNDFkYzU5NCIsImFjY291bnRfaWQiOiJmN2FkMjEwNy1iNmQ0LTRkMGUtODE5OS02OTBlNjJjMzk2NzciLCJhY2Nlc3Nfa2V5IjoiMDdiNzg4Y2Y3ZTQ0NjA5MDNhNGVlNGY4MTM1ZWQ2ODI4YTEwYjE5ZTI0MWRjNTk0IiwiZW1haWwiOiJ4YXJrMTEwM0BnbWFpbC5jb20iLCJpYXQiOjE2Njc4ODIzNzYsImV4cCI6MTk4MzQ1ODM3Nn0.fO1uDKCdvsou5KbcgiV_KFpkiZUwOWkvZ2-JkbeT_ek'
    },
    formData: {
        'files': fs.createReadStream(filepathPAN),
        'files': fs.createReadStream(filepathAadhar),
        'name': userName,
        'isDirectory': 'true'
    }
    };
    request(options, function (error, response) {
    if (error) throw new Error(error);
    var result = response.body
    var final = JSON.parse(result)
    console.log(final);
    var data = final.data;
    var fileID = data.fileID;
    return fileID;
});
}
var img1 ="C:/Users/dipu6/Downloads/Jjauni4igOzN3Kri4swaACl0W5zf0qElMow3XabMSc8.png"
var img2 ="C:/Users/dipu6/Downloads/JLwXObgj4anBi5MIhZt8KQFN_IQCDIO_Cffh1iAW7us.png"
var userName = details[0];
var fileID = upload(img1,img2,userName);
