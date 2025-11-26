var s_text="Welcome to pune";
document.write(s_text);
document.write("<br>");
document.write(s_text);
document.write("<br>");
document.write(s_text);
document.write("<br>");
document.write(s_text);
document.write("<br>");
document.write(s_text);
document.write("<br>");
document.write("<br>");



var fname="yash";
var fname="rahul";
fname="Ashutosh";
document.write(fname);

let lname="patil";
//let lname="ajagare"; reassign not possible
lname=" Thorat"; //redeclare is possible
document.write(lname);

const cname=" FCT";
//const cname="tcs"; reassign not possible
//cname="Wipro"; re-declare also not possible
document.write(cname);
document.write("<br>");

function example()
{
    var x=1;
    let y=2;
    const z=3;

    if(true)
    {
        var x=10;
        let y=20;
        const z=30;

        document.write("x: "+x+"<br>")
        document.write("y: "+y+"<br>")
        document.write("z: "+z+"<br><br>")
    }
        document.write("x: "+x+"<br>")
        document.write("y: "+y+"<br>")
        document.write("z: "+z+"<br><br>")
}