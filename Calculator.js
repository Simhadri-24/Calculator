const screen=document.querySelector(".screen");
const buttons=document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const value=button.textContent;

        switch(value)
        {
            case "AC":
                screen.value="";
                break;
            case "⌫":
                screen.value=screen.value.slice(0,-1);
                break;
            case "=":
                try{
                    const expression=screen.value.replace(/x/g,"*").replace(/÷/g, "/")
                        .replace(/%/g, "/100");
                        screen.value=eval(expression);
                }
                catch{
                    screen.value="Error";
                }
                break;
            default:
                screen.value+=value;
        }
    });
});