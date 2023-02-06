const { nanoid } = require("nanoid");
const books = require("../books");

const addBookHandler = (request, h) => {
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = request.payload;

    const id = nanoid(16);
    const finished = pageCount === readPage ? true : false;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newBook = {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        id,
        finished,
        insertedAt,
        updatedAt
    };
    
    const noName = ((newBook) => {
        return newBook.name === `` ? true : false;
    });

    if (noName){
        const response = h.response({
            status: `fail`,
            message: `Gagal menambahkan buku. Mohon isi nama buku`
        });
        response.code(400);
        return response;
    };

    books.push(newBook);

    const isSuccess = books.filter((book) => book.id === id).length > 0;
   
    if (isSuccess) {
        const response = h.response({
            status: `success`,
            message: `Buku berhasil ditambahkan`,
            data: {
                bookId: id
            }
        });
        response.code(201);
        return response;
    
    };

    const response = h.response({
        status: `fail`,
        message: `Buku gagal ditambahkan`
    });
    response.code(500);
    return response;

};

module.exports = addBookHandler;