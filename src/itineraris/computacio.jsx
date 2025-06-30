import bg from "../../public/computacio_bg-ca.png";

const assignatures = [
{
    "nom": "DPOO",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/joinchat/pi74UNn-eEg2MDFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.564&Context=2&Locale=es",
    "top": "16.70%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "ALGEBRA",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+Tn4Ql3wROm9kYmI0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.557&Context=2&Locale=ca", 
    "top": "16.20%",
    "left": "37.00%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "GRAFS I COMPLEXITAT",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+_uPnZYUYkgtmNDI8",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.569&Context=2&Locale=es", 
    "top": "29.70%",
    "left": "25.80%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "IA",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+O5e8v_cVkmZkYzVk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.582&Context=2&Locale=es", 
    "top": "29.80%",
    "left": "58.90%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "DED",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+YStDrf0e0HJjM2Y0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.613&Context=2&Locale=ca", 
    "top": "42.80%",
    "left": "18.80%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "AUTOMATES I GRAMATIQUES",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+N9_9PPEBiZAzMzJk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.579&Context=2&Locale=ca", 
    "top": "42.90%",
    "left": "34.00%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "REPRESENTACIO DEL CONEIXEMENT",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+L_TqYbODZzU0ZThk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.581&Context=2&Locale=ca", 
    "top": "42.90%",
    "left": "51.10%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "APRENENTATGE COMPUTACIONAL",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+omTaVuWEQgoxODZk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.583&Context=2&Locale=ca", 
    "top": "42.90%",
    "left": "66.50%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "ESTADISTICA",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+49DM__XoY9BjZmZk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.568&Context=2&Locale=es", 
    "top": "44.00%",
    "left": "85.10%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "ESTRUCTURA DE COMPUTADORS",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+kVNbI3_gGZg4YWZk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.573&Context=2&Locale=es", 
    "top": "57.00%",
    "left": "4.00%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "COMPILADORS",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+3SIz_thlb6g3ODFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.580&Context=2&Locale=ca", 
    "top": "54.40%",
    "left": "18.80%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "MINERIA DE DADES",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+9RLuCAkC9-UyNWFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.584&Context=2&Locale=ca", 
    "top": "54.40%",
    "left": "66.60%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "FP",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/joinchat/XDHxbMY71Hs2NDE0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.554&Context=2&Locale=es", 
    "top": "54.40%",
    "left": "85.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "TFG",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+fjOlBtxEqKI5M2Y8",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.616&Context=2&Locale=es", 
    "top": "65.00%",
    "left": "18.900%",
    "width": "27.40%",
    "height": "7.9%"
},
{
    "nom": "UBD",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+QsUHjYmQiyQ5MWFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.567&Context=2&Locale=es", 
    "top": "64.30%",
    "left": "85.30%",
    "width": "11.00%",
    "height": "7.5%"
}
];

export default {
  bg,
  assignatures
};