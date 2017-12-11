var iMax = 8;
var chesBoard = new Array(iMax);
var MaxCount=64;
for (i=0;i<iMax;i++) {
    chesBoard[i]=new Array(iMax);
}

for (i=0;i<iMax;i++) {
    
    for (j=0;j<iMax;j++) {
        chesBoard[i][j]="0";

    
}
}


var nextPos = 
[

    "-2,-1", 
    "-2, 1", 
    "-1,-2", 
    "-1, 2", 
    " 1,-2", 
    " 1, 2", 
    " 2,-1", 
    " 2, 1" 
];
var fCount=0;
var anschk=false;

function moveknight(iim, jjm)
{
   // fCount++;
   count_num();
   chesBoard[iim][jjm]=(fCount+1).toString(); 
   
    if (anschk)
        return;
    if (chkfull())
    {

        process.stdout.write("Finish  \n");
        anschk=true;

    }
    else
    {
        
        for (var ii = 0; ii <nextPos.length; ii++) 
        {
            var nexti=parseInt(nextPos[ii].substr(0,2))+iim;
            var nextj=parseInt(nextPos[ii].substr(3,2))+jjm;
            
            if ((nexti>=0 && nexti<iMax) && (nextj>=0 && nextj<iMax)) 
            {
                if (chesBoard[nexti][nextj]=="0") 
                {
                    moveknight(nexti, nextj);
                    if (anschk)
                        return;
            
                }
                
            }

                
            
        }

        chesBoard[iim][jjm]="0"; 
    }
    
    
}
function chkfull()
{
    var ret_chk=true;
    count_num();
    if (fCount<MaxCount)
        ret_chk=false;
    return ret_chk;
}
function count_num()
{
    var cc=0;
    for (i=0;i<iMax;i++) {
        
        for (j=0;j<iMax;j++) {
            if ((chesBoard[i][j])=="0")
                ret_chk=false;
            else
                cc++;
    
        
    }
    }
    fCount=cc;
    
}    
moveknight(3,3);
for (i=0;i<iMax;i++) {
    for (j=0;j<iMax;j++) {
        
    process.stdout.write(i+" , "+j+" : "+chesBoard[i][j]+"  \n");
}
}

