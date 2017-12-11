function ClsFunction() {
    document.getElementById("Decn").value = "";
    document.getElementById("HDecn").value = "";
    document.getElementById("Octn").value = "";
    document.getElementById("Binn").value = "";
    var stk="cfgjcfgj";
    stk.replace("AND","");
    stk.replace("OR","");
    if (stk.length>0) 
    {
        //some probles
    }
    else{
        
    }
   
}
function myFunction(xx) {
    if (document.getElementById("sysChk1").checked) {
        var kk = document.getElementById("Decn").value;
        kk = kk + xx;
        document.getElementById("Decn").value = kk;
        document.getElementById("HDecn").value = Number(kk).toString(16).toUpperCase();
        document.getElementById("Octn").value = Number(kk).toString(8).toUpperCase();
        document.getElementById("Binn").value = Number(kk).toString(2).toUpperCase();
    }
    if (document.getElementById("sysChk2").checked) {
        var kk = document.getElementById("HDecn").value;
        kk = kk + xx;
        document.getElementById("HDecn").value = kk;
        kk = parseInt(kk, 16);
        document.getElementById("Decn").value = kk;
        document.getElementById("HDecn").value = Number(kk).toString(16).toUpperCase();
        document.getElementById("Octn").value = Number(kk).toString(8).toUpperCase();
        document.getElementById("Binn").value = Number(kk).toString(2).toUpperCase();
    }
    if (document.getElementById("sysChk3").checked) {
        var kk = document.getElementById("Octn").value;
        kk = kk + xx;
        document.getElementById("Octn").value = kk;
        kk = parseInt(kk, 8);
        document.getElementById("Decn").value = kk;
        document.getElementById("HDecn").value = Number(kk).toString(16).toUpperCase();
        document.getElementById("Octn").value = Number(kk).toString(8).toUpperCase();
        document.getElementById("Binn").value = Number(kk).toString(2).toUpperCase();
    }
    if (document.getElementById("sysChk4").checked) {
        var kk = document.getElementById("Binn").value;
        kk = kk + xx;
        document.getElementById("Binn").value = kk;
        kk = parseInt(kk, 2);
        document.getElementById("Decn").value = kk;
        document.getElementById("HDecn").value = Number(kk).toString(16).toUpperCase();
        document.getElementById("Octn").value = Number(kk).toString(8).toUpperCase();
        document.getElementById("Binn").value = Number(kk).toString(2).toUpperCase();
    }
}

function disbut(btnid) {
    document.getElementById("Decn").value = "";
    document.getElementById("HDecn").value = "";
    document.getElementById("Octn").value = "";
    document.getElementById("Binn").value = "";
    var a = parseInt(btnid);
    switch (a) {
        case 0:
            {
                document.getElementById("btn0").disabled = false;
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;
                document.getElementById("btn3").disabled = false;
                document.getElementById("btn4").disabled = false;
                document.getElementById("btn5").disabled = false;
                document.getElementById("btn6").disabled = false;
                document.getElementById("btn7").disabled = false;
                document.getElementById("btn8").disabled = false;
                document.getElementById("btn9").disabled = false;
                document.getElementById("btnA").disabled = true;
                document.getElementById("btnB").disabled = true;
                document.getElementById("btnC").disabled = true;
                document.getElementById("btnD").disabled = true;
                document.getElementById("btnE").disabled = true;
                document.getElementById("btnF").disabled = true;
                break;
            }
        case 1:
            {
                document.getElementById("btn0").disabled = false;
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;
                document.getElementById("btn3").disabled = false;
                document.getElementById("btn4").disabled = false;
                document.getElementById("btn5").disabled = false;
                document.getElementById("btn6").disabled = false;
                document.getElementById("btn7").disabled = false;
                document.getElementById("btn8").disabled = false;
                document.getElementById("btn9").disabled = false;
                document.getElementById("btnA").disabled = false;
                document.getElementById("btnB").disabled = false;
                document.getElementById("btnC").disabled = false;
                document.getElementById("btnD").disabled = false;
                document.getElementById("btnE").disabled = false;
                document.getElementById("btnF").disabled = false;
                break;

            }
        case 2:
            {
                document.getElementById("btn0").disabled = false;
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = false;
                document.getElementById("btn3").disabled = false;
                document.getElementById("btn4").disabled = false;
                document.getElementById("btn5").disabled = false;
                document.getElementById("btn6").disabled = false;
                document.getElementById("btn7").disabled = false;
                document.getElementById("btn8").disabled = true;
                document.getElementById("btn9").disabled = true;
                document.getElementById("btnA").disabled = true;
                document.getElementById("btnB").disabled = true;
                document.getElementById("btnC").disabled = true;
                document.getElementById("btnD").disabled = true;
                document.getElementById("btnE").disabled = true;
                document.getElementById("btnF").disabled = true;
                break;

            }
        case 3:
            {
                document.getElementById("btn0").disabled = false;
                document.getElementById("btn1").disabled = false;
                document.getElementById("btn2").disabled = true;
                document.getElementById("btn3").disabled = true;
                document.getElementById("btn4").disabled = true;
                document.getElementById("btn5").disabled = true;
                document.getElementById("btn6").disabled = true;
                document.getElementById("btn7").disabled = true;
                document.getElementById("btn8").disabled = true;
                document.getElementById("btn9").disabled = true;
                document.getElementById("btnA").disabled = true;
                document.getElementById("btnB").disabled = true;
                document.getElementById("btnC").disabled = true;
                document.getElementById("btnD").disabled = true;
                document.getElementById("btnE").disabled = true;
                document.getElementById("btnF").disabled = true;
                break;
            }
    }
}