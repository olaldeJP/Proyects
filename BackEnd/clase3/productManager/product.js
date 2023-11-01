export default class product{
    static id;
    constructor(title,description,price,thumbnail,code,stock){
        this.id=this.id++
        this.title=title
        this.description=description
        this.price=price
        this.thumbnail=thumbnail
        this.code=code
        this.stock=stock
    }

    get id(){
        return this.id
    }
    set id(newId){
        this.id=newId
    }

    get title(){
        return this.title
    }
    set title(newTitle){
        this.title=newTitle
    }
    get description(){
        return this.description
    }
    set description(newDescription){
        this.description=newDescription
    }
    get price(){
        return this.price
    }
    set price(newPrice){
        this.price=newPrice
    }
    get thumbnail(){
        return this.thumbnail
    }
    set thumbnail(newThumbnail){
        this.thumbnail=newThumbnail
    }
    get code(){
        return this.code
    }
    set code(newcode){
        this.code=newcode
    }
    get stock(){
        return this.stock
    }
    set stock(newStock){
        this.stock=newStock
    }
}