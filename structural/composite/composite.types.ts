export enum NodeType {
  Folder = "folder",
  File = "file",
}

export type FolderContent = {
  title: string;
  type: NodeType.Folder;
  children: Content[];
};

export type FileContent = {
  title: string;
  type: NodeType.File;
  content: string;
};

export type Content = FolderContent | FileContent;

export interface CompNode {
  title: string;
  getContent(): Content;
}
