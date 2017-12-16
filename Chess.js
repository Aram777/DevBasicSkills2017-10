var iMax = 5;
var chesBoard = new Array(iMax);
var MaxCount = iMax * iMax;
for (i = 0; i < iMax; i++) {
    chesBoard[i] = new Array(iMax);
    for (j = 0; j < iMax; j++)
        chesBoard[i][j] = 0;
}
var nextPosi = [-2, -2, -1, -1, 1, 1, 2, 2];
var nextPosj = [-1, 1, -2, 2, -2, 2, -1, 1];
var fCount = 0;

function createtable() {
    var table = document.getElementById("ChesBoard");
    var tt = 50;
    for (let rowIndex = 0; rowIndex <= iMax; rowIndex++) {
        row = table.insertRow(rowIndex);
        for (let colIndex = 0; colIndex <= iMax; colIndex++) {
            let cell = row.insertCell(colIndex);
            if ((rowIndex == 0) || (colIndex == 0)) {
                if ((colIndex == 0) && (rowIndex == 0)) {
                    cell.style.width = "20".toString() + "px";
                    cell.style.height = "20".toString() + "px";
                }
                if ((rowIndex == 0) && (colIndex > 0)) {
                    cell.style.width = tt.toString() + "px";
                    cell.style.height = "20".toString() + "px";
                    cell.innerHTML = colIndex.toString();
                }
                if ((colIndex == 0) && (rowIndex > 0)) {
                    cell.style.width = "20".toString() + "px";
                    cell.style.height = tt.toString() + "px";
                    cell.innerHTML = rowIndex.toString();
                }
            } else {
                cell.style.width = tt.toString() + "px";
                cell.style.height = tt.toString() + "px";
                cell.onclick = function () {
                    start_calc(rowIndex - 1, colIndex - 1);
                };
                if (rowIndex % 2 == 0) {
                    if (colIndex % 2 == 0)
                        cell.bgColor = "white";
                    else
                        cell.bgColor = "darkgrey";
                } else {
                    if (colIndex % 2 == 0)
                        cell.bgColor = "darkgrey";
                    else
                        cell.bgColor = "white";
                }
            }
        }
    }
}

function clearTableContent() {
    for (i = 1; i < iMax + 1; i++)
        for (j = 1; j < iMax + 1; j++)
            document.getElementById("ChesBoard").rows[i].cells[j].innerHTML = "";


}

function start_calc(starti, startj) {
    clearTableContent();
    for (i = 0; i < iMax; i++) {
        chesBoard[i] = new Array(iMax);
        for (j = 0; j < iMax; j++)
            chesBoard[i][j] = 0;
    }
    fCount = 0;

    moveknight(starti, startj);
    if (chesBoard[0][0] > 0) {
        for (i = 1; i < iMax + 1; i++) {
            for (j = 1; j < iMax + 1; j++) {
                document.getElementById("ChesBoard").rows[i].cells[j].innerHTML = chesBoard[i - 1][j - 1].toString();;

            }
        }
    } else {
        var msg = "You choosed the cell " + (starti+1).toString() + " , " + (startj+1).toString() +
            "\n But it's not possible to start from there" +
            "\n Please select another cell by clicking on that";
        alert(msg);
        return;
    }
}

function moveknight(iim, jjm) {

    if (fCount == MaxCount - 1) {
        fCount++;
        chesBoard[iim][jjm] = fCount;
    }
    if (fCount >= MaxCount)
        return;
    else {
        for (var ii = 0; ii < nextPosi.length; ii++) {
            var nexti = nextPosi[ii] + iim;
            var nextj = nextPosj[ii] + jjm;
            if ((nexti >= 0 && nexti < iMax) && (nextj >= 0 && nextj < iMax)) {
                if (chesBoard[nexti][nextj] == 0) {
                    fCount++;
                    chesBoard[iim][jjm] = fCount;
                    
                    if (fCount < MaxCount) {
                        moveknight(nexti, nextj);
                        if (fCount >= MaxCount)
                            break;
                        else {
                            chesBoard[iim][jjm] = 0;
                            fCount--;
                        }
                    } else
                        break;
                }
            }
        }
    }
}