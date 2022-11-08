const details = [];
function set_value(){
    details[0]=document.getElementById("name").value;
    details[1]=document.getElementById("date").value;
    details[2]=document.getElementById("email").value;
    details[3]=document.getElementById("mobile").value;
    
    details[4]=document.getElementById("gender").value;
    details[5]=document.getElementById("occupation").value;
    details[6]=document.getElementById("aadhar").value;
    details[7]=document.getElementById("pancard").value;
    details[8]=document.getElementById("income").value;
}
function set_value2(){
    details[9]=document.getElementById("addresstype").value;
    details[10]=document.getElementById("ad1").value;
    details[11]=document.getElementById("district").value;
    details[12]=document.getElementById("state").value;
    details[13]=document.getElementById("pincode").value;
    alert(details[13]);
}