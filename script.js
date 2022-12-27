function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function(){
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'book read': 'not read yet'}`
}

//Variables

const myLibrary = []
let bookSpace = 0

//Selectors

const addButton = document.querySelector('#addBtn')
const libraryElement = document.querySelector('.library')
const inputData = document.querySelectorAll('input')
const deleteBtns = document.querySelectorAll('.close')

//Event listeners

addButton.addEventListener('click', addBook)

//Functions

function addBook() {
    bookSpace = checkEmptySpace()
    const book = createBook()
    myLibrary[bookSpace] = book 
    inputData.forEach(data => data.value = '')
    showBook(myLibrary, bookSpace)
}

function createBook(){
    const newBook = new Book()
    newBook.title = inputData[0].value
    newBook.author = inputData[1].value
    newBook.pages = inputData[2].value
    newBook.read = inputData[3].checked
    return newBook
}


function showBook(myLibrary, bookSpace){
    const bookElement = document.createElement('div')
    bookElement.innerHTML = 
    `
    <i class="fa-solid fa-x close active"></i>
    <p class="card-title" style="font-size: 0.9rem">${myLibrary[bookSpace].title}</p>
    <p class="card-title" style="font-size: 0.6rem">${myLibrary[bookSpace].author}</p>
    <i class="fa-solid fa-book"></i>
    <p class="card-title" style="font-size: 0.6rem">Pages: ${myLibrary[bookSpace].pages}</p>
    <p class="card-read" style="font-size: 0.7rem"> Status: ${myLibrary[bookSpace].read ? 'book read': 'not read'}</p>
    ` 
    bookElement.classList.add('active', 'book')
    bookElement.setAttribute('value', bookSpace)
    libraryElement.appendChild(bookElement)

    const deleteBtns = document.querySelectorAll('.close')
    deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteBook))

}

function checkEmptySpace(){
    if (myLibrary.indexOf('') === -1){
        return myLibrary.length
    }
    else{
        return myLibrary.indexOf('')
    }
}

function deleteBook(e){
    const selectedBook = e.target.parentElement
    const indexOfBook = selectedBook.getAttribute('value')
    selectedBook.remove()
    myLibrary[indexOfBook] = ''
}

