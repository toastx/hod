import {fileID} from "./upload.js"
var request = require('request');
async function download(fileId){
var options = {
  'method': 'GET',
  'url': 'https://app.zeeve.io/zdfs-api/api/v1/file/'+fileId,
  'headers': {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3Yjc4OGNmN2U0NDYwOTAzYTRlZTRmODEzNWVkNjgyOGExMGIxOWUyNDFkYzU5NCIsImFjY291bnRfaWQiOiJmN2FkMjEwNy1iNmQ0LTRkMGUtODE5OS02OTBlNjJjMzk2NzciLCJhY2Nlc3Nfa2V5IjoiMDdiNzg4Y2Y3ZTQ0NjA5MDNhNGVlNGY4MTM1ZWQ2ODI4YTEwYjE5ZTI0MWRjNTk0IiwiZW1haWwiOiJ4YXJrMTEwM0BnbWFpbC5jb20iLCJpYXQiOjE2Njc4ODIzNzYsImV4cCI6MTk4MzQ1ODM3Nn0.fO1uDKCdvsou5KbcgiV_KFpkiZUwOWkvZ2-JkbeT_ek'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(JSON.parse(response.body));
});
}
var fileId = fileID;
download(fileId);

