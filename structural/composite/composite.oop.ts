import { CompNode, Content, NodeType } from "./composite.types";

export class CompFolder implements CompNode {
  public title: string = "";

  private children: CompNode[] = [];

  constructor(title: string, children: CompNode[] = []) {
    this.children = children;
    this.title = title;
  }

  getContent(): Content {
    const folderContent: Content[] = [];

    this.children.forEach((child) => {
      folderContent.push({
        ...child.getContent(),
      });
    });

    return {
      title: this.title,
      type: NodeType.Folder,
      children: folderContent,
    };
  }
}

export class CompFile implements CompNode {
  public title: string = "";
  public content: string = "";

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  getContent(): Content {
    return {
      title: this.title,
      type: NodeType.File,
      content: this.content,
    };
  }
}
