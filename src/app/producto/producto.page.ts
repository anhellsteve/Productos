import { Component } from '@angular/core';

// Define la interfaz Producto para especificar la estructura de cada producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

// Utiliza el decorador @Component para configurar el componente
@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage {
  constructor() {}

  // Lista de productos inicializada con algunos datos
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'BANANO',
      precio: 1000,
      descripcion: 'FRUTAS',
      imagen:
        'http://1.bp.blogspot.com/-ewi88Bxx-_0/VZ2M0JfJWRI/AAAAAAAABmI/QwGr5hRS7yo/s1600/Siete-beneficios-de-comer-banano-en-tu-dieta-diaria%25E2%2580%25A6.jpg',
    },
    {
      id: 2,
      nombre: 'MANGO',
      precio: 2000,
      descripcion: 'FRUTAS',
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_625780-MLM31983066994_082019-W.jpg',
    },
    {
      id: 3,
      nombre: 'PERA',
      precio: 3000,
      descripcion: 'FRUTAS',
      imagen:
        'https://th.bing.com/th/id/OIP._FOIwOycRUFh1niA32P23wHaGB?rs=1&pid=ImgDetMain',
    },
    {
      id: 4,
      nombre: 'LIMON',
      precio: 4000,
      descripcion: 'FRUTAS',
      imagen:
        'https://th.bing.com/th/id/OIP.Mm7sAmUmQdeukk1ffjS6CQHaFE?rs=1&pid=ImgDetMain',
    },
    {
      id: 5,
      nombre: 'SANDIA',
      precio: 5000,
      descripcion: 'FRUTAS',
      imagen:
        'https://th.bing.com/th/id/OIP.V0NmYiXJiMiGyz4ZR17vxgHaFS?rs=1&pid=ImgDetMain',
    },
  ];

  // Objeto temporal para almacenar los datos del producto que se va a agregar o editar
  productoTemporal = {
    id: 0,
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: '',
  };

  // Método para agregar un nuevo producto a la lista
  agregarProducto() {
    this.productos.push({
      ...this.productoTemporal,
      id: this.productos.length + 1,
    });
    this.LimpiarProductoTemporal();
  }

  // Método para actualizar un producto existente en la lista
  actualizarProducto(id: number) {
    const index = this.productos.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.productos[index] = { ...this.productoTemporal };
    }
    this.LimpiarProductoTemporal();
  }

  // Método para editar un producto existente (cargar sus datos en el objeto temporal)
  editarProducto(product: Producto) {
    this.productoTemporal = { ...product };
  }

  // Método para eliminar un producto de la lista
  eliminarProducto(id: number) {
    this.productos = this.productos.filter((p) => p.id !== id);
  }

  // Método para limpiar los datos del objeto temporal
  LimpiarProductoTemporal() {
    this.productoTemporal = {
      id: 0,
      nombre: '',
      precio: 0,
      descripcion: '',
      imagen: '',
    };
  }
}
