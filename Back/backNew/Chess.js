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
var anschk = false;
moveknight(0, 0);

for (i = 0; i < iMax; i++) {
    for (j = 0; j < iMax; j++) {
        process.stdout.write(i + " , " + j + " : " + chesBoard[i][j] + "  \n");
    }
}

function start_calc(starti, startj) {
    moveknight(starti, startj);
    for (i = 0; i < iMax; i++) {
        for (j = 0; j < iMax; j++) {
            process.stdout.write(i + " , " + j + " : " + chesBoard[i][j] + "  \n");
        }
    }
}

function moveknight(iim, jjm) {
    if (fCount==MaxCount-1)
    {
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