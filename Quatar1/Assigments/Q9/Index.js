
var myfavoriteNumber= 369;

console.log(myfavoriteNumber);

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(myfavoriteNumber)));
