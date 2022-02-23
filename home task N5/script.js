/// 1 task
function circleSquare(radius){
    return (radius*radius)*3.14;
}

/// 2 task 
function circleLensght(radius){
    return radius * (2*3.14);
}

/// 3 task 
function average (a,b){
    return (a + b)/2;
}

/// task 4
 
function calc(x,y,action){
    if (action==="-"){
        return x - y;
    }else if (action==="+"){
        return x + y;
    }else if (action==="*"){
        return x * y;
    }else if (action==="%"){
        return x % y;
    }else if (action==="/"){
        return x / y;
    }else if (action==="^"){
        return x ^ y;
    }
}
