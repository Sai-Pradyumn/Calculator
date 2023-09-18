let output = document.getElementById("input");

function display(num){
    output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Invalid");
        Clear();
    }
    // output.value = eval(output.value);
}

function Clear(){
    output.value = '';
}

function del(){
    output.value = output.value.slice(0,-1);
}
