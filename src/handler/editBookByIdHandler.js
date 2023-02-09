const books = require("../books");

const editBookByIdHandler = (request, h) => {
    const { id } = request.params;

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

    const updatedAt = new Date().toISOString();

    const updatedBook = {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        updatedAt
    };

    if (updatedBook.name === undefined){
        const response = h.response({
            status: `fail`,
            message: `Gagal memperbarui buku. Mohon isi nama buku`

        });
        response.code(400);
        return response;
    };

    if (updatedBook.readPage > updatedBook.pageCount){
        const response = h.response({
            status: `fail`,
            message: `Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount`

        });
        response.code(400);
        return response;
    };

    const index = books.findIndex((book) => book.id === id);

    if (index !== -1){
        books[index] = {
            ...books[index],
            ...updatedBook
        };

        const response = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
          });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan'
      });
      response.code(404);
      return response;
};

module.exports = editBookByIdHandler;