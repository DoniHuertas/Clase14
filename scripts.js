console.log("Hola desde la terminal de Chrome y del Visual");

let nombre = "Daniel";
nombre = "Facundo";

console.log(nombre);
let miRequest = {
  method: "POST",
  body: {
    user: "Doni123",
    pass: "Abc456",
  },
  protocol: "ej HTTP1",
  headers: "Información complementaria",
  url: "A que dirección realizamos el pedido",
};

let miResponse = {
  statusCode: ["1xx", "2xx", "3xx", "4xx", "5xx"], // 202 -> Not found
  statusMessage: "Usuario creado",
  body: "Dependiendo del tipo de respuesta, puede existir un body",
  protocol: "ej HTTP1",
  headers: "Información complementaria",
};
