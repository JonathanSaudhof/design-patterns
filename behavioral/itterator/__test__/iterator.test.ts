import { MovieCollection } from "../iterator";

describe("Iterator Pattern", () => {
  describe("Movie Iterator", () => {
    let movieCollection: MovieCollection;
    beforeEach(() => {
      movieCollection = new MovieCollection();
      movieCollection.addItem({
        name: "The Shawshank Redemption",
        year: 1994,
      });
      movieCollection.addItem({ name: "The Godfather", year: 1972 });
      movieCollection.addItem({ name: "The Dark Knight", year: 2008 });
    });

    test("should iterate over collection", () => {
      const iterator = movieCollection.getIterator();

      expect(iterator.next()).toEqual({
        name: "The Shawshank Redemption",
        year: 1994,
      });
      expect(iterator.next()).toEqual({ name: "The Godfather", year: 1972 });
      expect(iterator.next()).toEqual({ name: "The Dark Knight", year: 2008 });
    });

    test("should rewind collection", () => {
      const iterator = movieCollection.getIterator();
      iterator.next();
      iterator.next();
      expect(iterator.next()).toEqual({ name: "The Dark Knight", year: 2008 });
      expect(iterator.rewind()).toEqual({
        name: "The Shawshank Redemption",
        year: 1994,
      });
    });

    test("should throw error if there is no next element in collection", () => {
      const iterator = movieCollection.getIterator();
      iterator.next();
      iterator.next();
      iterator.next();
      expect(() => iterator.next()).toThrow(
        "No more elements in the collection."
      );
    });
  });

  describe("Movie Iterator", () => {
    let movieCollection: MovieCollection;
    beforeEach(() => {
      movieCollection = new MovieCollection();
      movieCollection.addItem({
        name: "The Shawshank Redemption",
        year: 1994,
      });
      movieCollection.addItem({ name: "The Godfather", year: 1972 });
      movieCollection.addItem({ name: "The Dark Knight", year: 2008 });
    });

    test("should iterate over collection", () => {
      const iterator = movieCollection.getIterator();

      expect(iterator.next()).toEqual({
        name: "The Shawshank Redemption",
        year: 1994,
      });
      expect(iterator.next()).toEqual({ name: "The Godfather", year: 1972 });
      expect(iterator.next()).toEqual({ name: "The Dark Knight", year: 2008 });
    });

    test("should rewind collection", () => {
      const iterator = movieCollection.getIterator();
      iterator.next();
      iterator.next();
      expect(iterator.next()).toEqual({ name: "The Dark Knight", year: 2008 });
      expect(iterator.rewind()).toEqual({
        name: "The Shawshank Redemption",
        year: 1994,
      });
    });

    test("should throw error if there is no next element in collection", () => {
      const iterator = movieCollection.getIterator();
      iterator.next();
      iterator.next();
      iterator.next();
      expect(() => iterator.next()).toThrow(
        "No more elements in the collection."
      );
    });
  });
});
