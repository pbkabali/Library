/* eslint-disable */
const myLibrary = [];

const modifyRead = props => ({
  toggleReadStatus: () => {
    props.read = !props.read;
  }
});

const Book = (title, author, pages, read) => {
  const props = { title, author, pages, read }
  return Object.assign(props, modifyRead(props))
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = Book('Harry Potter', 'J K Rowlings', 500, true);
const book2 = Book('Harry Potter2', 'J K Rowlings', 344, false);
const book3 = Book('Harry Potter3', 'J K Rowlings', 260, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

/* eslint-enable */
