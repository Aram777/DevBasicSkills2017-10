var tmpstr = tt("this is a test1 papaj");
process.stdout.write(tmpstr + " \n");

function tt(in_str) {
    in_str = in_str + " ";
    let tmp_str = "";
    let ret_str = "";
    for (let index = 0; index < in_str.length; index++) {
        if (in_str.substr(index, 1) == " ") {
            if (tmp_str.length > 4) {
                tmp_str = tmp_str.split('').reverse().join('');
                if (ret_str.length > 0)
                    ret_str = ret_str + " ";
                ret_str = ret_str + tmp_str;
                tmp_str="";
            } else {
                if (ret_str.length > 0)
                    ret_str = ret_str + " ";
                ret_str = ret_str + tmp_str;
                tmp_str = "";
            }
        } else
            tmp_str = tmp_str + in_str.substr(index, 1);

    }
    return ret_str;
}