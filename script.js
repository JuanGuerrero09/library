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
let bookNumber = 0



//Selectors

const addButton = document.querySelector('#addBtn')
const bookElements = document.querySelectorAll('.book')
const inputData = document.querySelectorAll('input')
const deleteBtns = document.querySelectorAll('.close')


console.log(inputData[3].checked)
console.log(bookElements)


//Event listeners

addButton.addEventListener('click', addBook)
deleteBtns.forEach(deleteBtn => deleteBtn.addEventListener('click', deleteBook))

//Functions

function addBook() {
    const book = createBook()
    myLibrary.push(book)
    inputData.forEach(data => data.value = '')
    showBook(myLibrary)
}

function createBook(){
    const newBook = new Book()
    newBook.title = inputData[0].value
    newBook.author = inputData[1].value
    newBook.pages = inputData[2].value
    newBook.read = inputData[3].checked
    return newBook
}
function showLibrary(e){
    console.log(e.target.getAttribute('value'))
    console.log(myLibrary)
}

function showBook(myLibrary){

    bookNumber = checkEmptySpace()
    const bookElement = bookElements[bookNumber]
    bookElement.classList.toggle('active')

    bookElement.innerHTML =
    bookElement.classList.contains('active') ?
    bookElement.innerHTML = 
    `<i class="fa-solid fa-x close active"></i>
    <p class="card-title" style="font-size: 0.9rem">${myLibrary[bookNumber].title}</p>
    <p class="card-title" style="font-size: 0.6rem">${myLibrary[bookNumber].author}</p>
    <i class="fa-solid fa-book"></i>
    <p class="card-title" style="font-size: 0.6rem">Pages: ${myLibrary[bookNumber].pages}</p>
    <p class="card-read" style="font-size: 0.7rem"> Status: ${myLibrary[bookNumber].read ? 'book read': 'not read'}</p>` 
    : bookElement.innerHTM = ""

}

function checkEmptySpace(){
    if (myLibrary.length != 0 && myLibrary.indexOf('') === -1){
        return myLibrary.length - 1
    }
    else{
        return myLibrary.indexOf('')
    }
}

function deleteBook(e){
    const currentBook = e.target.parentElement.getAttribute('value')
    console.log(currentBook)

}

/*
Add a book
Light the book
Active press status

*/