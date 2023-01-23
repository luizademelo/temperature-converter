function convert(value, type){
    let temp = parseFloat(value); 
    switch(type){
        case "celsius": 
            document.getElementById("fahrenheit").value = temp*1.8 + 32; 
            document.getElementById("kelvin").value = temp+273.15; 
            break; 
        case "fahrenheit": 
            document.getElementById("celsius").value = Math.round(((temp-32)/1.8) * 100) / 100; 
            document.getElementById("kelvin").value = Math.round(((temp-32)/1.8) * 100) / 100 + 273.15; 
            break; 
        case "kelvin":
            document.getElementById("celsius").value = (temp - 273.15); 
            document.getElementById("fahrenheit").value = (temp - 273.15) * 1.8 + 32;  
            break; 
    }
}