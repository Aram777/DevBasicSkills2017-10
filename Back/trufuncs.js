function clcfunc() {

    var maxjj = 1;
    var maxmm = 1;
    var usertxt = document.getElementById("frmtxt").value.toUpperCase();
    var tbl = document.getElementById("truTable");
    var x = document.getElementById("truTable").rows.length;
    while (document.getElementById("truTable").rows.length>0) {
        document.getElementById("truTable").deleteRow(0);  
    }
    
    var ColCount = 1;
    var tmptxt = usertxt;
    tmptxt = tmptxt.replace(/AND/g, "");
    tmptxt = tmptxt.replace(/OR/g, "");
    tmptxt = tmptxt.replace(/NOT/g, "");
    tmptxt = tmptxt.replace(/[()]/g, "");
    if (tmptxt.indexOf("Q") > 0)
        maxjj = 2;
    if (tmptxt.indexOf("R") > 0)
        maxmm = 2;
    tmptxt = tmptxt.replace(/P/g, "");
    tmptxt = tmptxt.replace(/Q/g, "");
    tmptxt = tmptxt.replace(/R/g, "");
    tmptxt = tmptxt.trim();
    if (tmptxt != "") {
        alert("change " + tmptxt)
        return;
    }
    var row_ = tbl.insertRow(0);
    var cel = row_.insertCell(0);
    cel.innerHTML = "P";
    if (maxjj == 2) {
        var cel = row_.insertCell(ColCount);
        cel.innerHTML = "Q";
        ColCount++;

    }
    if (maxmm == 2) {
        var cel = row_.insertCell(ColCount);
        cel.innerHTML = "R";
        ColCount++;

    }
    var cel = row_.insertCell(ColCount);
    cel.innerHTML = usertxt;
    ColCount++;


    var xxx = -1;
    usertxt = usertxt.replace(/AND/g, "&&");
    usertxt = usertxt.replace(/OR/g, "||");
    usertxt = usertxt.replace(/NOT/g, "!");
    let rowCount = 1;

    for (let ii = 0; ii < 2; ii++) {
        for (let jj = 0; jj < maxjj; jj++) {
            for (let mm = 0; mm < maxmm; mm++) {
                xxx = -1;
                ColCount = 0;
                tmpstr = usertxt.replace(/P/g, ii.toString());
                tmpstr = tmpstr.replace(/Q/g, jj.toString());
                tmpstr = tmpstr.replace(/R/g, mm.toString());
                var newCom = "if (" + tmpstr + ")  " +
                    "xxx=1; " +
                    "else " +
                    "xxx=0;";
                eval(newCom);
                //alert(rowCount);
                var row = tbl.insertRow(rowCount);
                cel = row.insertCell(ColCount);
                cel.innerHTML = ii.toString();
                ColCount++;
                if (maxjj == 2) {
                    cel = row.insertCell(ColCount);
                    cel.innerHTML = jj.toString();
                    ColCount++;

                }
                if (maxmm == 2) {
                    cel = row.insertCell(ColCount);
                    cel.innerHTML = mm.toString();
                    ColCount++;
                }

                cel = row.insertCell(ColCount);
                cel.innerHTML = xxx;


            }

        }

    }
}