import './postArticle.css';
import vector2 from '../../../../../public/vector/Vector2.png';
import vector3 from '../../../../../public/vector/Vector3.png';
import vector5 from '../../../../../public/vector/Vector5.png';

const PostArticle = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';
    const border = document.querySelector('.border');
    border.style.display = 'none';
    return `
    <div class="cont-first">
    <h1 style="font-size:28px;"> Unggah <span style="color: #699BF7;"> Artikel </span></h1>
        <img class="vector5-artikel img-fluid lazyload" data-src="${vector5}" alt="vector">
        <img class="vector6-artikel img-fluid lazyload" data-src="${vector3}" alt="vector">
        <img class="vector7-artikel img-fluid lazyload" data-src="${vector2}" alt="vector">

    <div class="form-postArtikel">

        <div class="cont-postArtikel">
        <div class="cont-img d-flex justify-content-center">
        <img class='img-fluid text-center' src="./images/ucinganjing.png" alt='ilustration hewan' width="550px" /></div>
            <form>
            <div class="form-group">
                <label style="font-weight: bold;" for="exampleFormControlInput1">Judul Artikel</label>
                <input type="text" class="form-control" id="exampleFormControlInput1">
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskrispi Artikel</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Pertama Artikel</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" >
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskrispi Bahasan Pertama</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Kedua Artikel</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" >
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskrispi Bahasan Kedua</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlFile1">Unggah gambar Artikel</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
            <div class="button-unggah d-flex justify-content-end">
            <button class="button2" id="unggah">Unggah</button></div>
            </form>
        </div>
    </div>
    
    </div>

   
    `;
  },

  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);
  },

};

export default PostArticle;
