function pangkatTiga (angka){
    return angka * angka * angka
}

function pangkatDua (angka){
    return angka*angka
}

const nama2 = "prada"
//Kalau mau export beberapa fule dalam satu kali 
//export gunakan module.export ={...,...}
module.exports = {pangkatTiga, nama2, pangkatDua}

