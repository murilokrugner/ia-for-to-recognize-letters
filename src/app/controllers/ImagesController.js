import { createWorker } from 'tesseract.js';
//import image from '../../images/Capturar.JPG'

class ImagesController {
  async index(req, res) {
    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data } = await worker.detect('teste');
    console.log(data);
  }
}

/*(async () => {

})();*/
export default new ImagesController();
