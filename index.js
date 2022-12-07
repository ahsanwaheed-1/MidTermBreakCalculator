var button = document.querySelector("button");

button.addEventListener("click", function() {

    var term1 = document.querySelector(".term1").value;
    var term2 = document.querySelector(".term2").value;
    var term3 = document.querySelector(".term3").value;

    document.querySelector(".output").innerHTML= term1+"x^2 + "+term2+"x + "+term3;

    var multiple = term1*term3;
    for(var i=-500; i<=500; i++)
    {
        for(var j=-500; j<=500; j++)
        {
            if (i*j == multiple && i+j == term2)
            {
                document.querySelector(".factors").innerHTML = i + " , " + j;
            }
        }
    }
});
