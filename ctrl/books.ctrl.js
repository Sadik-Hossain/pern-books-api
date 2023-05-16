const getAllBooks = async (req, res) => {
  try {
    res.status(200).json({ msg: "get all book" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getABook = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ msg: `get a book no.${id}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const addBook = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (name && price)
      res.status(201).json({ msg: "addbook", data: { name, price } });
    else {
      res.status(404).json({ msg: "no data!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { name, price } = req.body;
    const { id } = req.params;
    if (name && price)
      res
        .status(201)
        .json({ msg: `update book no: ${id}`, data: { name, price, id } });
    else {
      res.status(404).json({ msg: "no data!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) res.status(201).json({ msg: `deleted book no: ${id}` });
    else {
      res.status(404).json({ msg: "no book found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getABook,
  addBook,
  updateBook,
  deleteBook,
};
