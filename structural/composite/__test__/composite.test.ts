import { CompFile, CompFolder } from "../composite.oop";

describe("Composite Pattern", () => {
  it("should return the correct content structure", () => {
    const fileA = new CompFile("File A", "File A content");
    const fileB = new CompFile("File B", "File B content");
    const fileC = new CompFile("File C", "File C content");
    const fileD = new CompFile("File D", "File D content");

    const folder1 = new CompFolder("Folder 1", [fileA, fileB]);
    const folder2 = new CompFolder("Folder 2", [fileC]);

    const rootFolder = new CompFolder("Root Folder", [folder1, folder2, fileD]);

    const expectedContent = {
      title: "Root Folder",
      type: "folder",
      children: [
        {
          title: "Folder 1",
          type: "folder",
          children: [
            { title: "File A", type: "file", content: "File A content" },
            { title: "File B", type: "file", content: "File B content" },
          ],
        },
        {
          title: "Folder 2",
          type: "folder",
          children: [
            { title: "File C", type: "file", content: "File C content" },
          ],
        },
        { title: "File D", type: "file", content: "File D content" },
      ],
    };

    expect(rootFolder.getContent()).toEqual(expectedContent);
  });
});
