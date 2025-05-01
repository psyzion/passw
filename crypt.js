

var passarray = new Array("2160");
let onepass = prompt("Ge mig de 4 rätta siffrorna", "lycka till");
var passSum=0, mult=1;

for (var pi=0;pi<onepass.length;pi++)
{
var onenumber=onepass.charCodeAt(pi);
passSum += onenumber * mult;
mult *= 3;
}

for (var pi=0;pi<passarray.length;pi++)
{
if (passSum == passarray[pi]) alert("Bravo!!");
}
alert("Nope!!");