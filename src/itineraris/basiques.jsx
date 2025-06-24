//import bg from "../../public/basiques_ca.png";
const bg = "/basiques_ca.png";

const assignatures = [
// COL 1
{
    "nom": "ALG",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+Tn4Ql3wROm9kYmI0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.557&Context=2&Locale=ca", 
    "top": "12.00%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "AM",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+IZH2bDH1Yhg3MTY8",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.558&Context=2&Locale=es",     
    "top": "23.40%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},{
    "nom": "ALG",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+Tn4Ql3wROm9kYmI0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=05.557&Context=2&Locale=ca", 
    "top": "12.00%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "AM",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+IZH2bDH1Yhg3MTY8",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.558&Context=2&Locale=es",     
    "top": "23.40%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "EST",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+49DM__XoY9BjZmZk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.568&Context=2&Locale=es",    
    "top": "34.90%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "FFI",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+EDq1jc9Eyrc0ZmE0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.611&Context=2&Locale=es",    
    "top": "46.30%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "IMI",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+8uQDJ65O2RI3ZmJk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.614&Context=2&Locale=es",    
    "top": "58.00%",
    "left": "4.30%",
    "width": "11.00%",
    "height": "7.5%"
},
// COL 2
{
    "nom": "LOG",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+72JcXjB6jKc0Y2U0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.570&Context=2&Locale=es", 
    "top": "12.00%",
    "left": "20.00%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "GC",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+_uPnZYUYkgtmNDI8",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.569&Context=2&Locale=es",    
    "top": "35.00%",
    "left": "20%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "IA",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+O5e8v_cVkmZkYzVk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.582&Context=2&Locale=es",    
    "top": "46.50%",
    "left": "20%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "PCPP",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+7u39uId-askxMjZk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=22.500&Context=2&Locale=es",    
    "top": "58.00%",
    "left": "20%",
    "width": "11.00%",
    "height": "9%"
},
// COL 3
{
    "nom": "EP",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/joinchat/dJwEDI_-Yh4xMWJk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.565&Context=2&Locale=es", 
    "top": "12.00%",
    "left": "35.70%",
    "width": "11.00%",
    "height": "7.5%"
},

{
    "nom": "IPO",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+HRX5mPo-UaU3M2Vk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.590&Context=2&Locale=es",    
    "top": "58.00%",
    "left": "35.70%",
    "width": "11.00%",
    "height": "7.5%"
},
// COL 4
{
    "nom": "FP",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/joinchat/XDHxbMY71Hs2NDE0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.554&Context=2&Locale=es", 
    "top": "12.00%",
    "left": "51.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "PP",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+FtMISwYTexAyMzFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.555&Context=2&Locale=es",    
    "top": "35.00%",
    "left": "51.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "DPOO",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/joinchat/pi74UNn-eEg2MDFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.564&Context=2&Locale=es",    
    "top": "46.50%",
    "left": "51.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "UBD",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+QsUHjYmQiyQ5MWFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.567&Context=2&Locale=es",    
    "top": "58.00%",
    "left": "51.3%",
    "width": "11.00%",
    "height": "7.5%"
},{
    "nom": "DBD",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+6cxdYoj7RCBkMjg0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.585&Context=2&Locale=es",    
    "top": "69.30%",
    "left": "51.3%",
    "width": "11.00%",
    "height": "7.5%"
},
// COL 5
{
    "nom": "FC",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+xomD6KT-aos1MzQ0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.562&Context=2&Locale=es", 
    "top": "12.00%",
    "left": "67.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "EC",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+kVNbI3_gGZg4YWZk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.573&Context=2&Locale=es", 
    "top": "23.40%",
    "left": "67.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "SSOO",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+_sQX8Zs525JmODM0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.566&Context=2&Locale=es",    
    "top": "35.00%",
    "left": "67.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "XAI",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+85-IyL6zZs5kNWY0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.572&Context=2&Locale=es",    
    "top": "46.50%",
    "left": "67.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "AXSO",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+x-NdSCJ5TLJkYmE0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.575&Context=2&Locale=es",    
    "top": "58.00%",
    "left": "67.3%",
    "width": "11.00%",
    "height": "7.5%"
},{
    "nom": "SSDD",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+CpdS5pTNIjUyYjY0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.589&Context=2&Locale=es",    
    "top": "69.40%",
    "left": "67.7%",
    "width": "11.00%",
    "height": "7.5%"
},
// COL 6
{
    "nom": "CCPTIC",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+P1LQlrIQLz1jZDc0",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.563&Context=2&Locale=es", 
    "top": "12.10%",
    "left": "83.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "TEX",
    "descripcio": "Descripció...",
    "telegram": "[NO INCLUIDO EN EXCEL]",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.561&Context=2&Locale=es", 
    "top": "23.60%",
    "left": "83.30%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "ENG1",
    "descripcio": "Descripció...",
    "telegram": "[NO INCLUIDO EN EXCEL]",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.559&Context=2&Locale=es",    
    "top": "35.00%",
    "left": "83.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "ENG2",
    "descripcio": "Descripció...",
    "telegram": "[NO INCLUIDO EN EXCEL]",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.560&Context=2&Locale=es",    
    "top": "46.50%",
    "left": "83.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "AGO",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+V-07kP5B5a41MjFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.556&Context=2&Locale=es",    
    "top": "58.10%",
    "left": "83.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "GP",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+dEEZrLBpqdU1MWFk",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.571&Context=2&Locale=es",    
    "top": "69.60%",
    "left": "83.3%",
    "width": "11.00%",
    "height": "7.5%"
},
{
    "nom": "TFG",
    "descripcio": "Descripció...",
    "telegram": "https://t.me/+fjOlBtxEqKI5M2Y8",
    "plaDocent": "https://apps.uoc.edu/PlaDocent/PlaDocent?Semestre=20251&SignatureCode=75.616&Context=2&Locale=es",    
    "top": "69.50%",
    "left": "4.5%",
    "width": "27.30%",
    "height": "7.5%"
}
];

export default {
  bg,
  assignatures,
};