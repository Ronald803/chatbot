const qrcode = require('qrcode-terminal');
const {Client,MessageMedia} = require('whatsapp-web.js');

const client = new Client()

client.on('qr',qr=>{
    qrcode.generate(qr, {small: true})
})

client.on('ready',()=>{
    console.log("Logueado correctamente")
})

client.on('message',message=>{
  const typeMessage = message._data.type;             // Esta variable puede llegar a ser 'chat' o tambien 'order'
  const bodyMessage = message._data.body;             // Esta variable es el cuerpo del mensaje cuando el tipo de mensaje es chat
                                                      // si el tipo de mensaje es 'order' este campo esta vacío
  const notifyNameMessage = message._data.notifyName  // Es el nickname de quien envió el mensaje
  const remoteMessageNumber = message._data.id.remote // Es el numero quien envia el mensaje
  const orderTitle = message._data.orderTitle         // si el tipo de mensaje es 'order' aca viene lo que se ordenó
  const itemCount = message._data.itemCount           // si el tipo de mensaje es 'order' parece que esta es la cantidad de lo que se pidio
  const totalAmount1000 = message._data.totalAmount1000//si el tipo de mensaje es 'order' este es el precio de lo que se ordeno multiplicado por 1000
  const totalCurrencyCode = message._data.totalCurrencyCode//si el tipo de mensaje es 'order' este es el tipo de moneda en este caso bolivianos

  //console.log({typeMessage},{bodyMessage},{notifyNameMessage},{remoteMessageNumber},{orderTitle},{itemCount},{totalAmount1000},{totalCurrencyCode});
  //console.log(message);
  if(typeMessage === "order"){
    const imageUrl= 'https://tecnotek.uy/wp-content/uploads/2022/03/QR_MercadoPago-e1647385811898-768x984.png'
    MessageMedia.fromUrl(imageUrl).then((media) => {
      //const messageText = new MessageMedia(media.mimetype, media.data, media.filename);
      //client.sendMessage(message.from, messageText);
      setTimeout(()=>{
        client.sendMessage(message.from, 'Deposita el 50% del costo total para reservar tu pedido');  
      },1500)
    })
  }
  if(isThisWordInTheString("hola",message.body)){
    const imageUrl= 'https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/314066700_184596134092273_650221308378870268_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=-ooihRuIztMAX_Z2ilw&_nc_ht=scontent.flpb1-1.fna&oh=00_AfDVOKaAeQ2bT-aioyVrXc_xGqRrCbNwWCmdp_yxOGU73A&oe=658B88CE'
    MessageMedia.fromUrl(imageUrl).then((media) => {
      //const messageText = new MessageMedia(media.mimetype, media.data, media.filename);
      //client.sendMessage(message.from, messageText);
      setTimeout(()=>{
        client.sendMessage(message.from, 'Hola!😄 Somos Academia Prometeo. Te comparto las siguientes opciones de interes sobre la Academia\n1. Libro *Medicina* 👈\n2. Libro *Matematica* 👈\n3. Tarjetas *Terminología* Médica 👈\nEscribe la opción de tu interes, ejemplo: "Medicina."\nSi gustas puedes realizar tu pedido directamente de nuestro catálogo:\nhttps://wa.me/c/59175252611');      
      },1500)
    })
  }
  if(isThisWordInTheString("medicina",message.body)){
    const imageUrl= 'https://scontent.flpb1-2.fna.fbcdn.net/v/t39.30808-6/259761621_471628654611604_161293813508830690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ci7MpUXtMf8AX-gu3qa&_nc_ht=scontent.flpb1-2.fna&oh=00_AfC3wb-v0IuzDEOIriK5_ZXhtvTT4N8NFR6N48wTpH5_0Q&oe=658D2C6A'
    MessageMedia.fromUrl(imageUrl).then((media) => {
      //const messageText = new MessageMedia(media.mimetype, media.data, media.filename);
      //client.sendMessage(message.from, messageText);
      setTimeout(()=>{
        client.sendMessage(message.from, '*Libro 1000 MED*\nEste material es un banco de preguntas y problemas típicos de:\n🔹 Biología\n🔹 Anatomía\n🔹 Lenguaje\n🔹 Matemáticas\n🔹 Física\n🔹 Química\nCon todos los distintos temas incluidos en las guías otorgadas para el ingreso a la facultad de Medicina y Tecnología Médica.\n*Costo*: 30 BS\nSi quieres reservar tu pedido escribe la palabra *Pagar*');  
      },1500)
    })
  }
  if(isThisWordInTheString("matematica",message.body)){
    const imageUrl= 'https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/395709236_343795784838973_1425221449254092112_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vR5mV42FL2YAX8G58cn&_nc_ht=scontent.flpb1-1.fna&oh=00_AfCmyORyhD_ME3Yi0oAr3J78p4CgRmfc47EcafWHcaW_Tg&oe=658CA07A'
    MessageMedia.fromUrl(imageUrl).then((media) => {
      //const messageText = new MessageMedia(media.mimetype, media.data, media.filename);
      //client.sendMessage(message.from, messageText);
      setTimeout(()=>{
        client.sendMessage(message.from, '*Libro Matemática Preuniversitaria*\nPrepárate para ingresar a:\n🔹Facultad de Ciencias Económicas y Financieras\n🔹Facultad de Ingeniería\n🔹Facultad de Tecnología\n🔹Facultad de Medicina\nConsta de todos los contenidos que se consideran en las pruebas de suficiencia académica.\n❗️ Teoría y práctica \n❗️ Ejercicios resueltos de exámenes pasados\n❗️ Más de 900 ejercicios propuestos.\n*Costo*: 25 Bs\nSi quieres reservar tu pedido escribe la palabra *Pagar*');  
      },1500)
    })
  }
  if(isThisWordInTheString("terminologia",message.body)){
    const imageUrl= 'https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/378341935_319789067239645_5794247176949376298_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=g9A3TRExbvgAX_xkPmH&_nc_ht=scontent.flpb1-1.fna&oh=00_AfCiZZTAAUYspq3r1E6EkRKPSg7hjdTgRem6cPYGjzEpwA&oe=658BC039'
    MessageMedia.fromUrl(imageUrl).then((media) => {
      //const messageText = new MessageMedia(media.mimetype, media.data, media.filename);
      //client.sendMessage(message.from, messageText);
      setTimeout(()=>{
        client.sendMessage(message.from, '*Tarjetas de Terminología Médica*\nSon más de 100 tarjetas con los prefijos, sufijos y raíces de terminología médica que preguntan en el examen de ingreso a la facultad de medicina, enfermería, tecnología médica nutrición y dietética.\nCada ficha tiene el prefijo sufijo raíz su significado, una imagen para asociar el significado, y un respectivo ejemplo de uso.\n*Costo*: 20 Bs.\nSi quieres reservar tu pedido escribe la palabra *Pagar*');  
      },1500)
    })
  }
  if(isThisWordInTheString("Pagar",message.body)){
    const imageUrl= 'https://tecnotek.uy/wp-content/uploads/2022/03/QR_MercadoPago-e1647385811898-768x984.png'
    MessageMedia.fromUrl(imageUrl).then((media) => {
      //const messageText = new MessageMedia(media.mimetype, media.data, media.filename);
      //client.sendMessage(message.from, messageText);
      setTimeout(()=>{
        client.sendMessage(message.from, 'Deposita el 50% del costo total para reservar tu pedido');  
      },1500)
    })
  }
  if(isThisWordInTheString("adios",message.body )){
    client.sendMessage(message.from, 'Que tengas un resto de jornada agradable.');
  }

});
function isThisWordInTheString (word,text){
  const wordLower = word.toLowerCase();
  const textLower = text.toLowerCase();
  const arrayOfWords = textLower.split(' ');
  let wordExists = false;
  wordExists = arrayOfWords.some((w)=>{ return w===wordLower })
  return wordExists
}
client.initialize();