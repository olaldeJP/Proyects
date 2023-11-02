import fs from 'fs/promises'

let id=1
function generarId() {
    return id++
  }
  
  
class ProductManager{
    #ruta
    #products=[]
    
    constructor(ruta){
        this.#products=[]
        this.#ruta=ruta
    }

    #validarCampos(product)
        {  
            if(!product.title || !product.description || !product.price || !product.code  || !product.thumbnail || !product.stock || !(product.price>0)) {
                console.log('CAMPOS INVALIDOS')
                return false
            }else{
                return true
                    }
        } 
    #validarCodigo(codigo)
        {
            return (this.#products.find((product)=> product.code === codigo));
            
        }
    
    addProduct(newProduct)
        {  
            if(this.#validarCampos(newProduct)){
                if(this.#validarCodigo(newProduct.code) === undefined){
                    newProduct.id=generarId()
                    this.#products.push(newProduct)
                    const Json=JSON.stringify(this.#products)
                    fs.writeFile(this.#ruta,Json)
                }else{
                    console.log('Ya existe un producto con el mismo codigo')
                }
            }
        }

    getProducts(){
        return [...this.#products]
    }
    getProductById(id){
        let producto=this.#products.find((product) => product.id === id);
        if(producto === undefined){
            console.log('No se encontro el producto con el ID')
            return false
        }
        else{
            return producto
        }
    }
    
    async deleateProductById(id) {
      
        const newArray=this.#products.filter((product) => product.id !== id)
        this.#products=newArray
        const Json=JSON.stringify(this.#products)
        console.log(Json)
        fs.writeFile(this.#ruta,Json)
    }
    
    updateProduct(id,campo,nuevoValor){
        let product= this.getProductById(id); 
        product[campo]=nuevoValor
        const Json=JSON.stringify(this.#products)
        fs.writeFile(this.#ruta,Json)
    }
}


   


const p1 = {
    title: 'T1',
    description: 'D1',
    price: 5,
    thumbnail: '2',
    code: '5',
    stock: 5
}
const p2 = {
    title: 'T2',
    description: 'D2',
    price: 5,
    thumbnail: '2',
    code: '1',
    stock: 5
}
const p3 = {
    title: 'T3',
    description: 'D3',
    price: 3,
    thumbnail: '3',
    code: '3',
    stock: 5
}
const p5 = {
    title: 'T1',
    description: 'D1',
    price: 5,
    thumbnail: '2',
    code: '5',
    stock: 5
}

const pm=new ProductManager('productsDB.JSON')
pm.addProduct(p1)
pm.addProduct(p2)
pm.addProduct(p3)
pm.updateProduct(3,'title','nuevoTitulo')
pm.deleateProductById(2)