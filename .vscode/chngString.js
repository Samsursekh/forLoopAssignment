// ami jodi string a kono changes korte chai tahole i need t follow
// this steps

// Ist way of doing this
//" masai"  to "kasai"


// var str = "masai";

// var arr =[];
// for(var i = 0; i<str.length; i++)
// {
//     arr.push(str[i]);
// }

// arr[0] = "k";

// console.log(arr);



// var bag ="";

// for(var j=0; j<arr.length; j++)
// {
//     bag = bag + arr[j];
   
// }

// console.log(bag);



// IInd way of doing this

var str = "masai";

var bag ="";
for(var i=0; i<str.length; i++)
{
if(i == 0)
{
    bag = bag + "k";
}
else
{
    bag = bag + str[i];
}
   
    
}
console.log(bag);