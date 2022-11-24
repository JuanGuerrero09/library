let myLibrary = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.isRead = this.read? 'Book read' : 'Not read yet'
}


Book.prototype.info = function(){
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${Book.isRead}`
}

const bookOne = new Book('Cien años de soledad', 'Gabriel Garcia Marquez', 345, true)

console.log(bookOne.info())