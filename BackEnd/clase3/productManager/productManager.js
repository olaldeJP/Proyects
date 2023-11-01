import fs from 'fs/promises'
//import product from './product'


let id=1
function generarId() {
    return id++
  }
  
  
class productManager{
    #products=[]
    #ruta
    constructor(ruta){
        this.#products=[]
        this.#ruta=`C:/Users/jpola/Proyects/BackEnd/clase3/productManager/db/${ruta}.json`
  }


//Validar Campos de los productos
    validarCampos(title,description,price,thumbnail,code,stock)
        {
            if(title === null || title === undefined || title==='') {
                console.log('Error: el titulo no puede estar vacio, ser null o undefined')
                return false
            }else{
                    if(description === null || description === undefined || description === '') {
                        console.log('Error: la descripcion no puede estar vacia, ser null o undefined')
                        return false
                    }else
                      {
                        if(price === null || price === undefined|| price === '' ) {
                            console.log('Error: el precio no puede estar vacio, ser null o undefined')
                            return false
                        }else
                          {
                            if(code === null || code === undefined || code === ''  ) {
                                console.log('Error: el codigo no puede estar vacio, ser null o undefined')
                                return false
                            }else
                                {
                                    if(thumbnail === null || thumbnail === undefined || thumbnail==='') 
                                        {
                                            console.log('Error: la imagen no puede estar vacio, ser null o undefined')
                                            return false
                                        }else
                                            {
                                                if(stock === null || stock === undefined || stock === '') {
                                                    console.log('Error: el stock no puede estar vacio, ser null o undefined')
                                                    return false
                                            }else{
                                                return true
                                            }
                                        }
                                }
                        }
                    }
                }
        } 


//Si el codigo existe, devuelve el Producto, sino devuelve undefine
    validarCodigo(codigo)
        {
            return (this.#products.find(function estaElCodigo(product) {
                    return product.code === codigo;
                }))
        }
    
// Si el nuevo producto es valido y no esta repetido , lo agrega al arreglo
    addProduct(newProduct)
        {
            if(this.validarCampos(newProduct.title,newProduct.description,newProduct.price,newProduct.thumbnail,newProduct.code,newProduct.stock)){
                if(this.validarCodigo(newProduct.code) === undefined){
                    newProduct.id=generarId()
                    this.#products.push(newProduct)
                    this.reset()
                }else{
                    console.log('Ya existe un producto con el mismo codigo')
                }
            }
            
    
        }

    getProducts(){
        return [...this.#products]
    }
    getProductById(id){
        let product=this.#products.find(function buscarProducto(product) {
            return product.id === id});
        if(product === undefined){
            return 'No se encontro el producto con el ID'
        }
        else{
            return product
        }
    }

     reset(){
         fs.unlinkSync(this.#ruta);
         fs.writeFile (this.#ruta,JSON.stringify(this.#products))
    }

    deleateProductById(id){
        const newProduct = this.#products.filter(product => product.id !== id);
        console.log(newProduct)
        this.#products=newProduct
        console.log(this.#products)
        this.reset()
    }
  
}
   

const p1={
        title:'T1',
        description:'D1',
        price:5,
        thumbnail:'2',
        code:'5',
        stock:5
}
const p2={
    title:'T2',
    description:'D2',
    price:5,
    thumbnail:'2',
    code:'1',
    stock:5
}
const p3={
    title:'T3',
    description:'D3',
    price:5,
    thumbnail:'3',
    code:'3',
    stock:5
}
const pm=new productManager("baseDeDatos")
pm.addProduct(p1)
pm.addProduct(p2)
pm.addProduct(p3)
pm.deleateProductById(2)

