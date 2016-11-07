import React, { Component } from 'react';
import './App.css';
import ListChangesView from './ListChangesView';
import ChangeView from './ChangeView';

const changes = [{"id":1,"createdAt":"2016-04-10T19:10:15.257Z","updatedAt":"2016-04-10T19:10:15.257Z","itemCount":10360},{"id":2,"createdAt":"2016-04-10T19:15:35.306Z","updatedAt":"2016-04-10T19:15:35.306Z","itemCount":145},{"id":3,"createdAt":"2016-04-10T19:17:10.003Z","updatedAt":"2016-04-10T19:17:10.003Z","itemCount":449},{"id":4,"createdAt":"2016-04-10T19:25:23.928Z","updatedAt":"2016-04-10T19:25:23.928Z","itemCount":330},{"id":5,"createdAt":"2016-04-10T19:28:30.585Z","updatedAt":"2016-04-10T19:28:30.585Z","itemCount":98},{"id":6,"createdAt":"2016-04-11T10:18:29.557Z","updatedAt":"2016-04-11T10:18:29.557Z","itemCount":138},{"id":7,"createdAt":"2016-04-18T07:16:11.771Z","updatedAt":"2016-04-18T07:16:11.771Z","itemCount":15},{"id":8,"createdAt":"2016-04-20T13:23:02.514Z","updatedAt":"2016-04-20T13:23:02.514Z","itemCount":429},{"id":9,"createdAt":"2016-09-08T05:17:44.707Z","updatedAt":"2016-09-08T05:17:44.707Z","itemCount":1532},{"id":10,"createdAt":"2016-10-28T10:47:07.228Z","updatedAt":"2016-10-28T10:47:07.228Z","itemCount":424}]

const change = {"id":7,"createdAt":"2016-04-18T07:16:11.771Z","updatedAt":"2016-04-18T07:16:11.771Z","Items":[{"id":11368,"code":47716,"name":"Bohmann BH-4150 Термос 1,5л. узкгорло(чехол)","image_file":"BH_4120_4150__400.jpg","description":"ТЕРМОС С УЗКИМ ГОРЛОМ Ремень. Чехол Объем: 1,5 литра","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11368}},{"id":11369,"code":47718,"name":"Bohmann BH-4175 Термос 0,75л. узк.горло 0,75л.(чехол)","image_file":"BH_4160_4175__400.jpg","description":" ТЕРМОС С УЗКИМ ГОРЛОМ Ремень. Чехол Объем: 0,75 литра","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11369}},{"id":11370,"code":47723,"name":"Bohmann BH-4215 Термос 1,5л. широк.горло","image_file":"BH_4212A 4215A 4218A 4210A__400.jpg","description":" ТЕРМОС С ШИРОКИМ ГОРЛОМ Клапан для впуска воздуха Объем: 1,5 литра","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11370}},{"id":11371,"code":48600,"name":"АТН-820 Весы напольные электронные","image_file":"48600.jpg","description":"48600.jpg","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11371}},{"id":11372,"code":48847,"name":"Bohmann BH-1526 Кастрюля со ст кр 26см  11,0л","image_file":"BH_1522_BH_1524_BH_1526_BH_1528_BH_1530__400.jpg","description":"BH_1522_BH_1524_BH_1526_BH_1528_BH_1530__400.jpg","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11372}},{"id":11373,"code":48852,"name":"Bohmann BH-2722 Кастрюля ст. кр. 4,7л","image_file":"BH_2718_2720_2722_2724__400.jpg","description":"Нержавеющая сталь Капсульное дно Прозрачная стеклянная крышка Размеры 22х12,5/ 4,7л.","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11373}},{"id":11374,"code":52748,"name":"Rondell 653-RD  Венчик Anatomie","image_file":"43219.jpg","description":"Материал рабочей поверхности – высококачественная нержавеющая сталь 18/10. Толщина стали 2.5 мм. Зеркальная полировка стальных частей из высококачественной нержавеющей стали 18/10.","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11374}},{"id":11375,"code":52763,"name":"ATH-5493 Утюг 2000Вт","image_file":"52043.jpg","description":"Керамическая подошва; подча пара 32 гр/мин; паровой удар до 86 гр/мин; прозрачный резервуар для воды; мощность 2000 Вт.","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11375}},{"id":11376,"code":55927,"name":"СТАВР АСПТ- 1000 Аппарат для сварки пластиковых труб 1000 Вт","image_file":"54262.jpg","description":"Аппарат для сварки пластиковых труб 1000 Вт, регулируемая  температура 260/280/310, насадки 20/25/32мм, время нагрева 3мин, металлический кейс","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11376}},{"id":11377,"code":57179,"name":"Аквафор-Премиум (сирень) с доп. кассетой Фильтр Кувшин 3,8л","image_file":"55013.jpg","description":"Ресурс стандартного фильтрующего модуля\n300 л \nПомпа для повышения давления\nнет \nНакопительная емкость\nесть, объем 3.8 л \nПрозрачный корпус\nесть","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11377}},{"id":11378,"code":57180,"name":"Аквафор-Премиум (цикламен) с доп. кассетой Фильтр Кувшин 3,8л","image_file":"55014.jpg","description":"Ресурс модуля: 300 л, Объем кувшина: 3,8л. Вместительный фильтр-кувшин с удобной ручкой. В комплекте универсальный модуль: В100-5, Глубоко очищает воду,Удаляет механические и органические примеси, активный хлор, тяжелые металлы,Снижает жесткость воды.","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11378}},{"id":11379,"code":57301,"name":"PomidOro Vegetto SL1822 соусник 18 см","image_file":"53380.jpg","description":"Диаметр 18 см, углеродистая сталь. Толщина соусника - 0,7 мм, крышки - 0,5 мм. Декор выполнен из термостойкого пластика. Антипригарное покрытие внутри позволяет готовить с минимальным количеством масла, соусник легко моется. Объём 2 л.","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11379}},{"id":11380,"code":57307,"name":"PomidOro SET76 набор кухонных приборов 3 шт","image_file":"54986.jpg","description":"В набор входят поварешка, шумовка и прямоугольная лопатка.\nМатериал - полупрозрачный силикон.\nДлина прибора 29 см","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11380}},{"id":11381,"code":57327,"name":"PomidOro Milano Q2214 Форма для запекания 22см.","image_file":"48622.jpg","description":"Размер 22 см, бежевое керамическое покрытие Kerano™ внутри, внешняя поверхность - суперпрочное и износостойкое покрытие цвета \"бургунди\". Ручки c силиконовыми вставками. Штамп по специальной пресс-форме с толщиной боковых стенок - 0.8 мм.","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11381}},{"id":11382,"code":57331,"name":"Maxwell MW-1051 Чайник дисковый","image_file":"55901.jpg","description":"Блокировка включения без воды\t+\nИндикация включения\t+\nМатериал корпуса\tсталь\nМатериал фильтра\tнейлон\nМощность\t2200 вт\nОбъем\t1,7 л","ItemChange":{"createdAt":"2016-04-18T07:16:11.796Z","updatedAt":"2016-04-18T07:16:11.796Z","ChangeId":7,"ItemId":11382}}]}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Vitek Ural images</h2>
        </div>
            <ListChangesView changes={changes}/>
            <ChangeView change={change} />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}





export default App;
