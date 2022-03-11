

// Problem 2: Print Prime Numbers from 1 to given limit


var number =13;
var count = 0;

for(var i=1; i<= number; i++)
{
    if(number % i == 0)
    {
        count++;
    }
}

if(count == 2)
{
    console.log("This number is a prime");
}
else
{
    console.log("This is not a prime");
}


