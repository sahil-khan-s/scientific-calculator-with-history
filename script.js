function insert(num){
    document.form1.textview.value=document.form1.textview.value+num;
}

function equal(){
    var exp = document.form1.textview.value;
    if (exp)
    {
        document.form1.textview.value=eval(exp)
    }
}

function backspace(){
    var exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0,exp.length - 1);
}


function square() {
	form1.textview.value = eval(form1.textview.value) * eval(form1.textview.value)
}

function sqrt() {
	form1.textview.value = Math.sqrt(form1.textview.value);
}

function tan() {
	form1.textview.value = Math.tan(form1.textview.value);
}
function sin() {
	form1.textview.value = Math.sin(form1.textview.value);
}
function cos() {
	form1.textview.value = Math.cos(form1.textview.value);
}
function ln() {
	form1.textview.value = Math.log(form1.textview.value);
}