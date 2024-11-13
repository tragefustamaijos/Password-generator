const _lowercase = document.getElementById("lowercase");
const _uppercase = document.getElementById("uppercase");
const _digits = document.getElementById("digits");
const _symbols = document.getElementById("symbols");
const _length = document.getElementById("length");
const _result = document.getElementById("result");

function generate()
{
    const length = _length.value;
    if(length == '')
        {
            window.alert(`ENTER YOUR LENGHT, BITCH`);
            return;
        }
    
    if(length < 4)
    {
        window.alert(`They say size doesn't matter. I say yours is too short`)
    }
    let values = [];
    let rez = [];
    const lowercases = "abcdefghijklmnopqrstuvwxyz";
    const uppercases = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    const digits = "0123456789";
    const symbols = "?!@#$%^&*._";

    values += _lowercase.checked? lowercases :''
    values += _uppercase.checked? uppercases: ''
    values += _digits.checked? digits:''
    values += _symbols.checked? symbols: ''

    if(values.length == 0)
        {
            window.alert(`You know you gotta check something, right?`)
            return;
        }

    for(let i = 0; i<length; i++)
    {
        let random = Math.floor(Math.random() * (values.length - 1)) + 1;
        rez += values[random];
    }
    _result.innerHTML = rez
}