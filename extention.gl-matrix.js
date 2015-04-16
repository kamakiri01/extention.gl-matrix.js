/*
 * CAUTION
 * this functions parameter naming convention is old.
 * if same name with new glMatrix, you need check param semantics.
 */
 mat4.multiplyVec3 = function(a,b,c){
    c||(c=b);
    var d=b[0],e=b[1],b=b[2];
    c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];
    c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];
    c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];
    return c
}
mat4.multiplyVec4 = function(a,b,c){
    c||(c=b);
    var d=b[0],e=b[1],g=b[2],b=b[3];
    c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;
    c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;
    c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;
    c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;
    return c
}
mat3.multiplyVec2 = function (a,b,c){
    c||(c=b);
    var d=b[0],b=b[1];
    c[0]=d*a[0]+b*a[3]+a[6];
    c[1]=d*a[1]+b*a[4]+a[7];
    return c
}
mat3.multiplyVec3 = function (a,b,c){
    c||(c=b);
    var d=b[0],e=b[1],b=b[2];
    c[0]=d*a[0]+e*a[3]+b*a[6];
    c[1]=d*a[1]+e*a[4]+b*a[7];
    c[2]=d*a[2]+e*a[5]+b*a[8];
    return c
};
mat2.multiplyVec2 = function (a,b,c){c||(c=b);
    var d=b[0],b=b[1];
    c[0]=d*a[0]+b*a[1];
    c[1]=d*a[2]+b*a[3];
    return c
}

//old
//mat2.multiply
function (a,b,c){c||(c=a);
    var d=a[0],e=a[1],g=a[2],a=a[3];
    c[0]=d*b[0]+e*b[2];
    c[1]=d*b[1]+e*b[3];
    c[2]=g*b[0]+a*b[2];
    c[3]=g*b[1]+a*b[3];
    return c}

//new 
function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
}
