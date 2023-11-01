import fs from 'fs/promises'


let id=1
function generarId() {
    return id++
  }
  
  
class productManager{
    #products=[]
    #ruta
    constructor(ruta){
        this.#products=[]
        this.#ruta=ruta
       // fs.writeFile(`C:\Users\jpola\Proyects\BackEnd\clase3\productManager\db\${this.#ruta}.json`)
    }

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

    validarCodigo(codigo)
        {
            return (this.products.find(function estaElCodigo(product) {
                    return product.code === codigo;
                }))
        }
    
    addProduct(newProduct)
        {
            if(this.validarCampos(newProduct.title,newProduct.description,newProduct.price,newProduct.thumbnail,newProduct.code,newProduct.stock)){
                if(this.validarCodigo(newProduct.code) === undefined){
                    newProduct.id=generarId()
                    this.products.push(newProduct)
                }else{
                    console.log('Ya existe un producto con el mismo codigo')
                }
            }
            
    
        }

    getProducts(){
        return [...this.products]
    }
    getProductById(id){
        let product=this.products.find(function buscarProducto(product) {
            return product.id === id});
        if(product === undefined){
            return 'No se encontro el producto con el ID'
        }
        else{
            return product
        }
    }
}
   

const p=new productManager('productos')
console.log(p)