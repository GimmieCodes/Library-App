function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

let lib = []

function addBookToLibrary(title,author,pages,read){
    lib.push(new Book(title,author,pages,read))

}

