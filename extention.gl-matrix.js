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
