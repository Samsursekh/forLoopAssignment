

// Problem 2: Print Prime Numbers from 1 to given limit


for(var number = 1; number<=20; number++)
{
        // var number =13;
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
            console.log( number,"This number is a prime");
        }
        // else
        // {
        //     console.log( number,"This is not a prime");
        // }
}




