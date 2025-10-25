import figlet from "figlet";

async function doStuff(){
    const text = await figlet.text("Ritik loves Vaishnavi a lot!");
    console.log(text);
}

doStuff();