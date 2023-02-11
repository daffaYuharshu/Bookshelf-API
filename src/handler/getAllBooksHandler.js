const books = require(`../books`);

const getAllBooksHandler = () => {
    if (books.length === 0) {
        return {
            status: `success`,
            data: {
                books
            }
        }
    };

    const allBook = [];

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
    })

    return {
        status: `success`,
        data: {
            books: allBook
        }    
    };
};

module.exports = getAllBooksHandler;

