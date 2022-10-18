<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CALCULADORA</title>

    <style>
       *{

           margin: 0;
           padding: 0;

        }

        .fundo{
            background-image: linear-gradient(45deg, black,crimson);
            height: 100vh;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;

        }

        .calculadora
        {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.8);
            top: 50%;
            left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 15px;
        padding: 15px;

        }

        .botão
        {
            width: 50px;
            height: 50px;
            font-size: 25px;
            cursor: pointer;
            margin: 3px;
            background-color: rgb(31,31,31);
            border: none;
            color: white;

        }

        .botão:hover
        
        {
            background-color: black;
        }

        #resultado
        
        {
            background-color: white;
            width: 207px;
            height: 30px;
            margin: 5px;
            font-size: 25px;
            color: black;
            text-align: right;
            padding: 5px;

        }
    </style>


</head>


<body>
    <div class="fundo">

        <h1>GERSON ANTONIO DE OLIVEIRA</h1>
        <div class="calculadora">
            <h1>Calculadora</h1>
            <p id="resultado"></p>
<Table>
    <tr>
        <td><button class="botão" onclick= "clean()">C</button></td>
        <td><button class="botão" onclick="back()"><</button></td>
        <td><button class="botão" onclick="insert('/')">/</button></td>
        <td><button class="botão" onclick="calcular()">=</button></td>
    </tr>

    <tr>
        <td><button class="botão" onclick="insert('7')">7</button></td>
        <td><button class="botão" onclick="insert('8')">8</button></td>
        <td><button class="botão" onclick="insert('9')">9</button></td>
        <td><button class="botão" onclick="insert('-')">-</button></td>
    </tr>
    <tr>
        <td><button class="botão" onclick="insert('4')">4</button></td>
        <td><button class="botão" onclick="insert('5')">5</button></td>
        <td><button class="botão" onclick="insert('6')">6</button></td>
        <td><button class="botão" onclick="insert('+')">+</button></td>
    </tr>
    <tr>
        <td><button class="botão" onclick="insert('1')">1</button></td>
        <td><button class="botão" onclick="insert('2')">2</button></td>
        <td><button class="botão" onclick="insert('3')">3</button></td>
       <td rowspan="2"><button class="botão" style="height: 106px;" onclick="calcular()">=</button></td>
    </tr>

    <tr>
        <td colspan="2"><button class="botão"style="width: 106px;" onclick="insert('0')">0</button></td>
        <td><button class="botão" onclick="insert('.')">.</button></td>
    </tr>

</Table>

        </div>
    </div>
</body>

<script>

function insert(num)
{
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero+num;
}

function clean()

{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

</script>


</html>
