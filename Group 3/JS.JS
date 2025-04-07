function weatherAdvice(temperature, isRaining){
    if (temperature < 10){
        advice = "Wear a heavy jacket.";
    }else if( temperature >= 10 && temperature <= 20 && isRaining){
        advice = "Bring an umbrella.";
    }else{
        advice = "Enjoy the weather.";
    }
    return advice;
}

console.log(weatherAdvice(8, false))
console.log(weatherAdvice(15, true))
console.log(weatherAdvice(25, true))

/*
1. start
2. create a function named weatherAdvice with 2 parameter named temperature and isRaining
3.create a if statement that check if temperature is below 10 
4.create a if else statement that check if temperature is between 10 and 20 
5.
*/
r