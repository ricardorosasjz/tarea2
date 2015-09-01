//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

/*
Ricardo Rosas Juarez
ID: 150371
*/

//Imprimir input
_INPUT = "4\n1 8\n2 4\n10 13\n11 20";
console.log(_INPUT);

//Obtener arreglo del input
arreglo = obtenerArreglo(_INPUT);

//Obtener casos y llamar funcion para rango de busqueda
casos = parseInt(arreglo[0]);
obtenerRango(arreglo,casos);

//Funcion para obtener arreglo del input
function obtenerArreglo(_INPUT)
{
dividir = _INPUT.split("\n");
arreglo = dividir;
return arreglo;
}

//Funcion para obtener rango de busqueda para cuadrados perfectos
function obtenerRango(arreglo,casos)
{
  for(i=1; i <= casos; i++)
  {
  inicial_final = arreglo[i].split(" ");
  inicio = parseInt(inicial_final[0]);
  fin = parseInt(inicial_final[1]);
  buscarCuadrados(inicio,fin); //Buscar cuadrados perfectos dentro del rango
  }
}

//Funcion para buscar cuadrados perfectos
function buscarCuadrados(inicial,final)
{ 
  cuadrados = 0;
  for(contador=inicial; contador<=final; contador++)
  {
      if(Math.sqrt(contador)%1 == 0)
      {
        cuadrados++;
      }
      else{}
  }
  console.log(cuadrados);
}

