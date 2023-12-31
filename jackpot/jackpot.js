function jackpot()
{
    var num1=Math.floor(Math.random()*3)
    var num2=Math.floor(Math.random()*3)
    var num3=Math.floor(Math.random()*3)
    var num4=Math.floor(Math.random()*3)
    var res=document.getElementsByClassName("a")
    res[0].value=(`${num1}`)
    res[1].value=(`${num2}`)
    res[2].value=(`${num3}`)
    res[3].value=(`${num4}`)
    if(num1==num2&&num1==num3&&num1==num4)
    {
        var image=document.getElementsByTagName("img")
        image[0].style.display="block"
        // document.getElementById("img").style.transitionDuration="5s"
       
    }
    else{
        res[0].value=(`${num1}`)
        res[1].value=(`${num2}`)
        res[2].value=(`${num3}`)
        res[3].value=(`${num4}`)
    }
    }