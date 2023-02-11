const books = require(`../books`);

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    if (books.length === 0){
        return {
            status: `success`,
            data: {
                books
            } 
        }
    }
    
    const allBook = [];
    const allBookFiltered = [];

    const nameIsExist = name !== undefined;
    const readingIsExist = reading !== undefined;
    const finishedIsExist = finished !== undefined;

    if (nameIsExist){
        const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
        
        filteredBooks.forEach((book) => {
            const id = book.id;
            const name = book.name;
            const publisher = book.publisher;
    
            const newBook = {
                id,
                name,
                publisher
            }

            allBookFiltered.push(newBook);
        });
    };

    if (readingIsExist){
        const filteredBooks = books.filter((book) => book.reading == reading);
        
        filteredBooks.forEach((book) => {
            const id = book.id;
            const name = book.name;
            const publisher = book.publisher;
    
            const newBook = {
                id,
                name,
                publisher
            }

            allBookFiltered.push(newBook);
        });
    };

    if (finishedIsExist){
        const filteredBooks = books.filter((book) => book.finished == finished);
        
        filteredBooks.forEach((book) => {
            const id = book.id;
            const name = book.name;
            const publisher = book.publisher;
    
            const newBook = {
                id,
                name,
                publisher
            }

            allBookFiltered.push(newBook);
        });
    };

    if (nameIsExist || readingIsExist || finishedIsExist){
        return {
            status: `success`,
            data: {
                books: allBookFiltered
            }
        }
    } else {
        books.forEach((book) => {
            const id = book.id;
            const name = book.name;
            const publisher = book.publisher;
    
            const newBook = {
                id,
                name,
                publisher
            }
            allBook.push(newBook);
        });
        return {
            status: `success`,
            data: {
                books: allBook
            }
        }
    }
    
};

module.exports = getAllBooksHandler
