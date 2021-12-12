
export type status = 
        | 'Disponible para retirar' 
        | 'Embarcado' 
        | 'Recibido miami' 
        | 'Retenido por aduanas'
        | 'En almacen';


export const getImageStatus = ( status: status ) => {

    switch (status) {
        case 'Disponible para retirar':
            return require('../assets/green_check.png');
        
        case 'Embarcado':
            return require('../assets/avion.png');

        case 'Recibido miami': 
            return require('../assets/box.png');

        case 'Retenido por aduanas':
            return require('../assets/icono_warning_bps.png');

        case 'En almacen': 
            return require('../assets/icono_almacen_bps.png');
    
        default:
            return require('../assets/icono_almacen_bps.png');
    }
}