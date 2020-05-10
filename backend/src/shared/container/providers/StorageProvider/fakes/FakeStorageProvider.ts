import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private stotage: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.stotage.push(file);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const findIndex = this.stotage.findIndex(
      storageFile => storageFile === file,
    );

    this.stotage.splice(findIndex, 1);
  }
}

export default FakeStorageProvider;
