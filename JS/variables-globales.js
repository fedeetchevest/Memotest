let movimientos = 0;
let grupoTarjetas = [["๐","๐","๐"],["๐","๐","๐ธ","๐","๐ฑ"],["๐งจ","๐","๐","๐"]];
let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

let nivelActual = 0;
let niveles = [
    {
        tarjetas: grupoTarjetas[0]
    },
    {
        tarjetas:grupoTarjetas[0].concat(grupoTarjetas[1])
    },
    {
        tarjetas:grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2])

    },
];
