const funciones = {

    fromDollarToYan: function(dolar) {
        let valor = dolar*7.13;
        return valor;
    },
    
    fromEuroToDollar: function(euro){
        let valor = euro*1.10;
        return valor;
    },

    fromYanToPound: function(Yan){
        let valor = Yan*0.0055;
        return valor;
    }

}


// export const objeto = {fromDollarToYan}
module.exports = funciones;