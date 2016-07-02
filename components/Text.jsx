import React from 'react';

export default  React.createClass({
  componentWillMount() {
    if (window.pluso)if (typeof window.pluso.start == "function") return;
    if (window.ifpluso==undefined) { window.ifpluso = 1;
      var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
      s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
      s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
      var h=d[g]('body')[0];
      h.appendChild(s);
    }
  },
  render: function() {
    return (
      <div>
        <div className="clearfix" id="page">{/* column */}
          <div className="position_content" id="page_position_content">
            <div className="browser_width colelem" id="u5822-bw">
              <div id="u5822">{/* group */}
                <div className="clearfix" id="u5822_align_to_page">
                  {/* m_editable region-id="editable-static-tag-U5861-BP_infinity" template="index.html" data-type="image" */}
                  <div className="clip_frame grpelem" id="u5861" data-muse-uid="U5861" data-muse-type="img_frame">{/* image */}
                    <img className="block" id="u5861_img" src="images/1_ekran_bg_02.png" alt width={1280} height={802} data-muse-src="images/1_ekran_bg_02.png" />
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U4529-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u4529-4" data-muse-uid="U4529" data-muse-type="txt_frame">{/* content */}
                    <p>BEINDRESS</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U4542-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u4542-4" data-muse-uid="U4542" data-muse-type="txt_frame">{/* content */}
                    <p>8 (499) 390 82 43</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U4662-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u4662-8" data-muse-uid="U4662" data-muse-type="txt_frame">{/* content */}
                    <p>м.Пушкинская</p>
                    <p>Леонтьевский пер. 5</p>
                    <p>пн-сб с 9-17 00</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U4533-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u4533-4" data-muse-uid="U4533" data-muse-type="txt_frame">{/* content */}
                    <p>ИНТЕРНЕТ-МАГАЗИН ЖЕНСКИХ ПЛАТЬЕВ</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U4545-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u4545-10" data-muse-uid="U4545" data-muse-type="txt_frame">{/* content */}
                    <p>ИЗЫСКАННЫЕ</p>
                    <p>ВЕЧЕРНИЕ ПЛАТЬЯ</p>
                    <p>С НЕПРИЛИЧНОЙ</p>
                    <p>СКИДКОЙ 50%</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U4555-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u4555-6" data-muse-uid="U4555" data-muse-type="txt_frame">{/* content */}
                    <p>При нажатии на кнопку, вы просто</p>
                    <p>перейдете в интернет-магазин...</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U5896" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
                  <a className="nonblock nontext Button clearfix grpelem" id="buttonu5896" href="http://reason.kz/" target="_blank" data-muse-uid="U5896">{/* container box */}{/* m_editable region-id="editable-static-tag-U5898-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}<div className="clearfix grpelem" id="u5898-4" data-muse-uid="U5898" data-muse-type="txt_frame">{/* content */}<p>Смотреть каталог</p></div>{/* /m_editable */}</a>
                  {/* /m_editable */}
                </div>
              </div>
            </div>
            <div className="colelem" id="u4568">{/* custom html */}
              <iframe className="actAsDiv" style={{width: '100%', height: '100%'}} src="http://www.youtube.com/embed/gPD81T6BWrQ?autoplay=0&loop=0&showinfo=0&theme=dark&color=red&controls=1&modestbranding=0&start=0&fs=1&iv_load_policy=1&wmode=transparent&rel=1" frameBorder={0} allowFullScreen />
            </div>
            {/* m_editable region-id="editable-static-tag-U4580-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
            <div className="clearfix colelem" id="u4580-4" data-muse-uid="U4580" data-muse-type="txt_frame">{/* content */}
              <p>ВЫБЕРИТЕ КАТЕГОРИЮ</p>
            </div>
            {/* /m_editable */}
            <div className="clearfix colelem" id="pu4583-4">{/* group */}
              {/* m_editable region-id="editable-static-tag-U4583-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4583-4" data-muse-uid="U4583" data-muse-type="txt_frame">{/* content */}
                <p>КОКТЕЙЛЬНЫЕ ПЛАТЬЯ</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4589-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4589-4" data-muse-uid="U4589" data-muse-type="txt_frame">{/* content */}
                <p>БЕЛЫЕ ДЛИННЫЕ ПЛАТЬЯ</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4595-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4595-4" data-muse-uid="U4595" data-muse-type="txt_frame">{/* content */}
                <p>ВЕЧЕРНИЕ ДЛИННЫЕ ПЛАТЬЯ</p>
              </div>
              {/* /m_editable */}
            </div>
            <div className="clearfix colelem" id="pu4608">{/* group */}
              {/* m_editable region-id="editable-static-tag-U4608-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u4608" data-muse-uid="U4608" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u4608_img" src="images/dress_01.png" alt width={324} height={408} data-muse-src="images/dress_01.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4598-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u4598" data-muse-uid="U4598" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u4598_img" src="images/dress_02.png" alt width={324} height={408} data-muse-src="images/dress_02.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4618-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u4618" data-muse-uid="U4618" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u4618_img" src="images/dress_03.png" alt width={324} height={408} data-muse-src="images/dress_03.png" />
              </div>
              {/* /m_editable */}
            </div>
            <div className="clearfix colelem" id="pu4631-4">{/* group */}
              {/* m_editable region-id="editable-static-tag-U4631-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4631-4" data-muse-uid="U4631" data-muse-type="txt_frame">{/* content */}
                <p>40 000 ₽</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4850-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4850-4" data-muse-uid="U4850" data-muse-type="txt_frame">{/* content */}
                <p>40 000 ₽</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4885-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4885-4" data-muse-uid="U4885" data-muse-type="txt_frame">{/* content */}
                <p>40 000 ₽</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4638-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4638-6" data-muse-uid="U4638" data-muse-type="txt_frame">{/* content */}
                <p id="u4638-4"><span id="u4638">от</span><span id="u4638-2"> </span><span id="u4638-3">20 000 ₽</span></p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4847-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4847-6" data-muse-uid="U4847" data-muse-type="txt_frame">{/* content */}
                <p id="u4847-4"><span id="u4847">от</span><span id="u4847-2"> </span><span id="u4847-3">20 000 ₽</span></p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4888-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4888-6" data-muse-uid="U4888" data-muse-type="txt_frame">{/* content */}
                <p id="u4888-4"><span id="u4888">от</span><span id="u4888-2"> </span><span id="u4888-3">20 000 ₽</span></p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4644-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u4644" data-muse-uid="U4644" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u4644_img" src="images/line.png" alt width={105} height={2} data-muse-src="images/line.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4853-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u4853" data-muse-uid="U4853" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u4853_img" src="images/line.png" alt width={105} height={2} data-muse-src="images/line.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4891-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u4891" data-muse-uid="U4891" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u4891_img" src="images/line.png" alt width={105} height={2} data-muse-src="images/line.png" />
              </div>
              {/* /m_editable */}
            </div>
            <div className="clearfix colelem" id="pbuttonu5905">{/* group */}
              {/* m_editable region-id="editable-static-tag-U5905" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
              <a className="nonblock nontext Button clearfix grpelem" id="buttonu5905" href="http://reason.kz/" target="_blank" data-muse-uid="U5905">{/* container box */}{/* m_editable region-id="editable-static-tag-U5906-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}<div className="clearfix grpelem" id="u5906-4" data-muse-uid="U5906" data-muse-type="txt_frame">{/* content */}<p>Посмотреть</p></div>{/* /m_editable */}</a>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5917" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
              <a className="nonblock nontext Button clearfix grpelem" id="buttonu5917" href="http://reason.kz/" target="_blank" data-muse-uid="U5917">{/* container box */}{/* m_editable region-id="editable-static-tag-U5918-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}<div className="clearfix grpelem" id="u5918-4" data-muse-uid="U5918" data-muse-type="txt_frame">{/* content */}<p>Посмотреть</p></div>{/* /m_editable */}</a>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5932" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
              <a className="nonblock nontext Button clearfix grpelem" id="buttonu5932" href="http://reason.kz/" target="_blank" data-muse-uid="U5932">{/* container box */}{/* m_editable region-id="editable-static-tag-U5933-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}<div className="clearfix grpelem" id="u5933-4" data-muse-uid="U5933" data-muse-type="txt_frame">{/* content */}<p>Посмотреть</p></div>{/* /m_editable */}</a>
              {/* /m_editable */}
            </div>
            {/* m_editable region-id="editable-static-tag-U4898-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
            <div className="clearfix colelem" id="u4898-10" data-muse-uid="U4898" data-muse-type="txt_frame">{/* content */}
              <p>Самое важное в женской одежде — женщина, которая ее носит.</p>
              <p>С годами я понял, что <span id="u4898-4">самое главное в платье</span> —</p>
              <p>это женщина, которая его надевает!</p>
            </div>
            {/* /m_editable */}
            <img className="colelem" id="u4906-4" alt="Ив Сен-Лоран" width={108} height={25} src="images/u4906-4.png" />{/* rasterized frame */}
            <div className="clearfix colelem" id="pu4910">{/* group */}
              {/* m_editable region-id="editable-static-tag-U4910-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u4910" data-muse-uid="U4910" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u4910_img" src="images/bg_02.png" alt width={1280} height={641} data-muse-src="images/bg_02.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4920-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4920-6" data-muse-uid="U4920" data-muse-type="txt_frame">{/* content */}
                <p>ШОУ-РУМ</p>
                <p>В ЦЕНТРЕ МОСКВЫ</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4926-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4926-4" data-muse-uid="U4926" data-muse-type="txt_frame">{/* content */}
                <p>м. Пушкинская, Леонтьевский переулок 5с1</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4935-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4935-6" data-muse-uid="U4935" data-muse-type="txt_frame">{/* content */}
                <p>Звоните и записываетесь</p>
                <p>по тел. 8 (499) 390 82 43</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4947-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4947-6" data-muse-uid="U4947" data-muse-type="txt_frame">{/* content */}
                <p>Приезжаете в любое</p>
                <p>время пн-сб с 9-1700</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4956-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4956-6" data-muse-uid="U4956" data-muse-type="txt_frame">{/* content */}
                <p>Примиряете и принимаете</p>
                <p>решение покупать или нет</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4929-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4929-4" data-muse-uid="U4929" data-muse-type="txt_frame">{/* content */}
                <p>.01</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4944-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4944-4" data-muse-uid="U4944" data-muse-type="txt_frame">{/* content */}
                <p>.02</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U4959-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4959-4" data-muse-uid="U4959" data-muse-type="txt_frame">{/* content */}
                <p>.03</p>
              </div>
              {/* /m_editable */}
            </div>
            {/* m_editable region-id="editable-static-tag-U4965-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
            <div className="clearfix colelem" id="u4965-4" data-muse-uid="U4965" data-muse-type="txt_frame">{/* content */}
              <p>НАШИ ПРЕИМУЩЕСТВА</p>
            </div>
            {/* /m_editable */}
            <div className="clearfix colelem" id="pu4968">{/* group */}
              <div className="grpelem" id="u4968">{/* simple frame */}</div>
              <div className="grpelem" id="u4993">{/* simple frame */}</div>
              <div className="grpelem" id="u5018">{/* simple frame */}</div>
            </div>
            <div className="clearfix colelem" id="pu4987-6">{/* group */}
              {/* m_editable region-id="editable-static-tag-U4987-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u4987-6" data-muse-uid="U4987" data-muse-type="txt_frame">{/* content */}
                <p>КАЧЕСТВЕННЫЕ</p>
                <p>МАТЕРИАЛЫ</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5015-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5015-6" data-muse-uid="U5015" data-muse-type="txt_frame">{/* content */}
                <p>ДОСТУПНЫЕ</p>
                <p>ЦЕНЫ</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5040-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5040-6" data-muse-uid="U5040" data-muse-type="txt_frame">{/* content */}
                <p>ДОСТАВКА</p>
                <p>ПО ВСЕЙ РОССИИ</p>
              </div>
              {/* /m_editable */}
            </div>
            <div className="clearfix colelem" id="pu5043">{/* group */}
              <div className="grpelem" id="u5043">{/* simple frame */}</div>
              <div className="grpelem" id="u5068">{/* simple frame */}</div>
              <div className="grpelem" id="u5093">{/* simple frame */}</div>
            </div>
            <div className="clearfix colelem" id="pu5065-6">{/* group */}
              {/* m_editable region-id="editable-static-tag-U5065-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5065-6" data-muse-uid="U5065" data-muse-type="txt_frame">{/* content */}
                <p>ВСЕ ПЛАТЬЯ</p>
                <p>В НАЛИЧИИ</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5090-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5090-6" data-muse-uid="U5090" data-muse-type="txt_frame">{/* content */}
                <p>ПРОВЕРЕННЫЕ</p>
                <p>ПОСТАВЩИКИ</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5099-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5099-6" data-muse-uid="U5099" data-muse-type="txt_frame">{/* content */}
                <p>ПОДАРКИ</p>
                <p>И СКИДКИ</p>
              </div>
              {/* /m_editable */}
            </div>
            <div className="clearfix colelem" id="pu5121">{/* group */}
              <div className="browser_width grpelem" id="u5121-bw">
                <div id="u5121">{/* group */}
                  <div className="clearfix" id="u5121_align_to_page">
                    {/* m_editable region-id="editable-static-tag-U5127-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                    <div className="clearfix grpelem" id="u5127-4" data-muse-uid="U5127" data-muse-type="txt_frame">{/* content */}
                      <p>ОТЗЫВЫ</p>
                    </div>
                    {/* /m_editable */}
                  </div>
                </div>
              </div>
              <div className="PamphletWidget clearfix grpelem" id="pamphletu5224">{/* none box */}
                <div className="ThumbGroup clearfix grpelem" id="u5236">{/* none box */}
                  <div className="popup_anchor">
                    <div className="Thumb popup_element" id="u5238">{/* simple frame */}</div>
                  </div>
                  <div className="popup_anchor">
                    <div className="Thumb popup_element" id="u5239">{/* simple frame */}</div>
                  </div>
                  <div className="popup_anchor">
                    <div className="Thumb popup_element" id="u5279">{/* simple frame */}</div>
                  </div>
                  <div className="popup_anchor">
                    <div className="Thumb popup_element" id="u5426">{/* simple frame */}</div>
                  </div>
                  <div className="popup_anchor">
                    <div className="Thumb popup_element" id="u5432">{/* simple frame */}</div>
                  </div>
                </div>
                <div className="popup_anchor" id="u5225popup">
                  <div className="ContainerGroup clearfix" id="u5225">{/* stack box */}
                    <div className="Container clearfix grpelem" id="u5226">{/* group */}
                      {/* m_editable region-id="editable-static-tag-U5285-BP_infinity" template="index.html" data-type="image" */}
                      <div className="clip_frame grpelem" id="u5285" data-muse-uid="U5285" data-muse-type="img_frame">{/* image */}
                        <img className="block" id="u5285_img" src="images/photo.png" alt width={190} height={190} data-muse-src="images/photo.png" />
                      </div>
                      {/* /m_editable */}
                      <div className="clearfix grpelem" id="ppu5295-4">{/* column */}
                        <div className="clearfix colelem" id="pu5295-4">{/* group */}
                          {/* m_editable region-id="editable-static-tag-U5295-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                          <div className="clearfix grpelem" id="u5295-4" data-muse-uid="U5295" data-muse-type="txt_frame">{/* content */}
                            <p>Маришка Ващук</p>
                          </div>
                          {/* /m_editable */}
                          {/* m_editable region-id="editable-static-tag-U5411-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,clickable" data-ice-editable="link" */}
                          <a className="nonblock nontext clearfix grpelem" id="u5411-4" href="https://vk.com/viola.bekker" target="_blank" data-muse-uid="U5411" data-muse-type="txt_frame">{/* content */}<p>vk.com/mariavasha</p></a>
                          {/* /m_editable */}
                        </div>
                        {/* m_editable region-id="editable-static-tag-U5417-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                        <div className="clearfix colelem" id="u5417-4" data-muse-uid="U5417" data-muse-type="txt_frame">{/* content */}
                          <p>Белый всегда считался цветом нежности, женственности. Когда остановилась именно на нем для выступления на вокальном конкурсе, не прогадала) Образ получился ярким, но в то же время изысканным. Я была в центре внимания, многим обязана именно правильно подобранному наряду. У меня были бежевые туфли, поэтому весь акцент был на декольте и вырезе на спине. Потрясно! Спасибо вам за прекрасные вещи)</p>
                        </div>
                        {/* /m_editable */}
                      </div>
                    </div>
                    <div className="Container invi grpelem" id="u5230">{/* simple frame */}</div>
                    <div className="Container invi grpelem" id="u5282">{/* simple frame */}</div>
                    <div className="Container invi grpelem" id="u5429">{/* simple frame */}</div>
                    <div className="Container invi grpelem" id="u5435">{/* simple frame */}</div>
                  </div>
                </div>
                <div className="popup_anchor">
                  <div className="PamphletPrevButton PamphletLightboxPart popup_element" id="u5232">{/* simple frame */}</div>
                </div>
                <div className="popup_anchor">
                  <div className="PamphletNextButton PamphletLightboxPart popup_element" id="u5234">{/* simple frame */}</div>
                </div>
              </div>
            </div>
            {/* m_editable region-id="editable-static-tag-U5506-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
            <div className="clearfix colelem" id="u5506-6" data-muse-uid="U5506" data-muse-type="txt_frame">{/* content */}
              <p>ЗНАМЕНИТЫЕ ЛЮДИ —</p>
              <p>ЦЕНЯТ НАШИ ПЛАТЬЯ</p>
            </div>
            {/* /m_editable */}
            <div className="clearfix colelem" id="pu5513">{/* group */}
              {/* m_editable region-id="editable-static-tag-U5513-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u5513" data-muse-uid="U5513" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u5513_img" src="images/instagram_01.png" alt width={320} height={366} data-muse-src="images/instagram_01.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5523-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u5523" data-muse-uid="U5523" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u5523_img" src="images/instagram_02.png" alt width={320} height={366} data-muse-src="images/instagram_02.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5533-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u5533" data-muse-uid="U5533" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u5533_img" src="images/instagram_03.png" alt width={320} height={366} data-muse-src="images/instagram_03.png" />
              </div>
              {/* /m_editable */}
            </div>
            <div className="clearfix colelem" id="pu5543">{/* group */}
              {/* m_editable region-id="editable-static-tag-U5543-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u5543" data-muse-uid="U5543" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u5543_img" src="images/instagram_04.png" alt width={320} height={366} data-muse-src="images/instagram_04.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5553-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u5553" data-muse-uid="U5553" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u5553_img" src="images/instagram_05.png" alt width={320} height={366} data-muse-src="images/instagram_05.png" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5563-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u5563" data-muse-uid="U5563" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u5563_img" src="images/instagram_06.png" alt width={319} height={366} data-muse-src="images/instagram_06.png" />
              </div>
              {/* /m_editable */}
            </div>
            <div className="browser_width colelem" id="u5871-bw">
              <div id="u5871">{/* group */}
                <div className="clearfix" id="u5871_align_to_page">
                  {/* m_editable region-id="editable-static-tag-U5874-BP_infinity" template="index.html" data-type="image" */}
                  <div className="clip_frame grpelem" id="u5874" data-muse-uid="U5874" data-muse-type="img_frame">{/* image */}
                    <img className="block" id="u5874_img" src="images/2_ekran_bg.png" alt width={1280} height={800} data-muse-src="images/2_ekran_bg.png" />
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U5583-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u5583-8" data-muse-uid="U5583" data-muse-type="txt_frame">{/* content */}
                    <p>СКИДКА 50%</p>
                    <p>НА ВСЕ МОДЕЛИ</p>
                    <p>ТОЛЬКО ДО 31 ИЮЛЯ</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U5592-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
                  <div className="clearfix grpelem" id="u5592-6" data-muse-uid="U5592" data-muse-type="txt_frame">{/* content */}
                    <p>При нажатии на кнопку, вы просто</p>
                    <p>перейдете в интернет-магазин...</p>
                  </div>
                  {/* /m_editable */}
                  {/* m_editable region-id="editable-static-tag-U5941" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
                  <a className="nonblock nontext Button clearfix grpelem" id="buttonu5941" href="http://reason.kz/" target="_blank" data-muse-uid="U5941">{/* container box */}{/* m_editable region-id="editable-static-tag-U5942-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}<div className="clearfix grpelem" id="u5942-4" data-muse-uid="U5942" data-muse-type="txt_frame">{/* content */}<p>Смотреть каталог</p></div>{/* /m_editable */}</a>
                  {/* /m_editable */}
                </div>
              </div>
            </div>
            {/* m_editable region-id="editable-static-tag-U5595-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
            <div className="clearfix colelem" id="u5595-8" data-muse-uid="U5595" data-muse-type="txt_frame">{/* content */}
              <p><span id="u5595">СДЕЛАЙТЕ РЕПОСТ</span> И ПОЛУЧИТЕ ВОЗМОЖНОСТЬ</p>
              <p>ВЫИГРАТЬ <span id="u5595-5">ШИКАРНОЕ ПЛАТЬЕ!!!</span></p>
            </div>
            {/* /m_editable */}
            {/* m_editable region-id="editable-static-tag-U5601-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
            <div className="clearfix colelem" id="u5601-7" data-muse-uid="U5601" data-muse-type="txt_frame">{/* content */}
              <p>(подробности уточняйте у менеджера <a className="nonblock" href="https://vk.com/viola.bekker" target="_blank">vk.com/manager</a>)</p>
            </div>
            {/* /m_editable */}
            <div className="colelem" id="u5609">{/* custom html */}
              <div className="pluso" data-background="none;" data-options="big,square,line,horizontal,counter,sepcounter=1,theme=14" data-services="vkontakte,facebook,odnoklassniki" />
            </div>
            <div className="verticalspacer" />
            <div className="clearfix colelem" id="pu5613">{/* group */}
              {/* m_editable region-id="editable-static-tag-U5613-BP_infinity" template="index.html" data-type="image" */}
              <div className="clip_frame grpelem" id="u5613" data-muse-uid="U5613" data-muse-type="img_frame">{/* image */}
                <img className="block" id="u5613_img" src="images/footer.jpg" alt width={1280} height={286} data-muse-src="images/footer.jpg" />
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5627-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5627-5" data-muse-uid="U5627" data-muse-type="txt_frame">{/* content */}
                <p>ОСТАЛИСЬ ВОПРОСЫ? <span id="u5627-2">ЗВОНИТЕ</span></p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5639-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5639-4" data-muse-uid="U5639" data-muse-type="txt_frame">{/* content */}
                <p><span id="u5639">Добавляйтесь в друзья в соц.сетях и учавствуйте в конкурсах</span></p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5633-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link" */}
              <div className="clearfix grpelem" id="u5633-4" data-muse-uid="U5633" data-muse-type="txt_frame">{/* content */}
                <p>8 (499) 390 82 43</p>
              </div>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5642" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
              <a className="nonblock nontext grpelem" id="u5642" href="https://www.facebook.com/violabekker" target="_blank" data-muse-uid="U5642">{/* simple frame */}</a>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5654" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
              <a className="nonblock nontext grpelem" id="u5654" href="https://www.instagram.com/urodchtoli/" target="_blank" data-muse-uid="U5654">{/* simple frame */}</a>
              {/* /m_editable */}
              {/* m_editable region-id="editable-static-tag-U5648" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" */}
              <a className="nonblock nontext grpelem" id="u5648" href="https://vk.com/viola.bekker" target="_blank" data-muse-uid="U5648">{/* simple frame */}</a>
              {/* /m_editable */}
            </div>
          </div>
        </div>
        <div className="preload_images">
          <img className="preload" src="images/star_02.png" alt />
          <img className="preload" src="images/birka_02.png" alt />
          <img className="preload" src="images/box_02.png" alt />
          <img className="preload" src="images/dress_icon_02.png" alt />
          <img className="preload" src="images/people_02.png" alt />
          <img className="preload" src="images/gift_02.png" alt />
          <img className="preload" src="images/slider_02.png" alt />
          <img className="preload" src="images/slider_03.png" alt />
          <img className="preload" src="images/left_02.png" alt />
          <img className="preload" src="images/right_02.png" alt />
          <img className="preload" src="images/fb_02.png" alt />
          <img className="preload" src="images/insta_icon_02.png" alt />
          <img className="preload" src="images/vk_02.png" alt />
        </div>
        {/* JS includes */}
        {/* Other scripts */}
      </div>
    );
  }
});
