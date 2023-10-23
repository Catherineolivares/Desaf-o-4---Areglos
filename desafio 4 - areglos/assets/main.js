const propiedadesAlquiler = [
    {
        nombre: 'Casa en viña',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Hermosa casa en viña, vista al mar, perfecta para vacacionar',
        ubicacion: 'Viña del Mar',
        habitaciones:3,
        baños: 2,
        costo: 350000,
        smoke: true,
        pets: true,

    },
    {
        nombre: 'Casa en Hijuelas',
        src: 'https://http2.mlstatic.com/D_NQ_NP_905660-MLC49654350520_042022-O.webp',
        descripcion: 'La casa en hijuelas, perfecta para vacacionar con vista al oasis de La Campana',
        ubicacion: 'El canil, Hijuelas',
        habitaciones:2,
        baños: 2,
        costo: 450000,
        smoke: false,
        pets: false,

    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb',
        habitaciones:3,
        baños: 2,
        costo: 550000,
        smoke: true,
        pets: false,

    }

   

];
const propiedadesVentas = [
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones:1,
        baños: 1,
        costo: 2000,
        smoke: true,
        pets: true,

    },
    {
        nombre: 'House Mouse',
        src: 'https://static.wikia.nocookie.net/disney/images/d/d0/4D3ECC6B-1EF0-4A70-A026-011C0FCB6E6A.png/revision/latest?cb=20210302190854&path-prefix=es',
        descripcion: 'La casa de Michey Muese, acogedora está situada en lo alto de la pradera',
        ubicacion: 'Disney, Chicago',
        habitaciones:3,
        baños: 2,
        costo: 2500,
        smoke: false,
        pets: false,

    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculare',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 4,
        baños: 4,
        costo: 5500,
        smoke: false,
        pets: true,

    }

   

];

function verPropiedadesAlquiler(){

    const propiedadesContainer = document.getElementById('TarjetaContenedor');

    let claseFumar = '';
    let claseAnimal = '';  
    propiedadesAlquiler.forEach(propiedades => {
        
    if(propiedades.smoke == true){
        propiedades.smoke = 'No se permite fumar';
        claseFumar = 'text-danger';
        
    }else{
        propiedades.smoke = 'Se permite fumar';
        claseFumar = 'text-success';    
        
    }
    if(propiedades.pets == true){
        propiedades.pets = 'No se permite mascotas';
        claseAnimal = 'text-danger';
        
    }else{
        propiedades.pets = 'Se permite 1 mascota';
        claseAnimal = 'text-success';    
        
    }
     

        
        propiedadesContainer.innerHTML += '<div class="col-md-4 mb-4"><div class="card"><img src="'+ propiedades.src 
        +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ propiedades.nombre 
        +'</h5><p class="card-text">'+ propiedades.descripcion 
        +'</p><p><i class="fas fa-map-marker-alt"></i> '+ propiedades.ubicacion 
        +'</p><p class="card-text"><i class="fas fa-bed"></i> '+ propiedades.habitaciones 
        +'</p><p class="card-text"><i class="fas fa-bath"></i> '+ propiedades.baños 
        +'</p><p class="card-text"><i class="fas fa-dollar-sign"></i> '+ propiedades.costo 
        +'</p><p class="'+ claseFumar +'"> <i class="fas fa-smoking-ban"></i> '+ propiedades.smoke 
        +'</p><p class="'+ claseAnimal +'"> <i class="fas fa-paw"></i> '+ propiedades.pets +'</p>';
        propiedadesContainer.innerHTML += '</div>';
        propiedadesContainer.innerHTML += '</div>';
        propiedadesContainer.innerHTML += '</div>';
        



    });
}

function verPropiedadesVenta(){

    const propiedadesContainer = document.getElementById('TarjetaContenedor1');
   
    let claseFumar = '';
    let claseAnimal = '';    
    propiedadesVentas.forEach(propiedades => {

    if(propiedades.smoke == true){
        propiedades.smoke = 'No se permite fumar';
        claseFumar = 'text-danger';
        
    }else{
        propiedades.smoke = 'Se permite fumar';
        claseFumar = 'text-success';    
        
    }
    if(propiedades.pets == true){
        propiedades.pets = 'No se permite mascotas';
        claseAnimal = 'text-danger';
        
    }else{
        propiedades.pets = 'Se permite 1 mascota';
        claseAnimal = 'text-success';    
        
    }
   
        
        propiedadesContainer.innerHTML += '<div class="col-md-4 mb-4"><div class="card"><img src="'+ propiedades.src 
        +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ propiedades.nombre 
        +'</h5><p class="card-text">'+ propiedades.descripcion 
        +'</p><p><i class="fas fa-map-marker-alt"></i> '+ propiedades.ubicacion 
        +'</p><p class="card-text"><i class="fas fa-bed"></i> '+ propiedades.habitaciones 
        +'</p><p class="card-text"><i class="fas fa-bath"></i> '+ propiedades.baños 
        +'</p><p class="card-text"><i class="fas fa-dollar-sign"></i> '+ propiedades.costo 
        +'</p><p class="'+ claseFumar +'"> <i class="fas fa-smoking-ban"></i> '+ propiedades.smoke 
        +'</p><p class="'+ claseAnimal +'"> <i class="fas fa-paw"></i> '+ propiedades.pets +'</p>';
        propiedadesContainer.innerHTML += '</div>';
        propiedadesContainer.innerHTML += '</div>';
        propiedadesContainer.innerHTML += '</div>';
        



    });
}

verPropiedadesAlquiler();
verPropiedadesVenta();


