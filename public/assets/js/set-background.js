function evaluateMe() {
    var year=document.getElementById("year").value;
    var month=document.getElementById("mm").value;
    var day=document.getElementById("dd").value;

    var date = new Date(year, month-1, day, 0, 0, 0, 0);
    //console.log(date);
    document.getElementById("mytext").innerHTML = date.getTime();
    document.getElementById("mytext2").innerHTML = date.getTime()/1000;
}