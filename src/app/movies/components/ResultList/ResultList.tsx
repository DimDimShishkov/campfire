// // import { useState } from "react";
// import "./ResultList.css";
// // import raseArr from "../mockData/campfire.json";
// // import { RaceItem } from "./RaceItem";

// /**
//  *
//  * чарник персонажа
//  */

// export const ResultList = () => {
//   // const [clicked, setClicked] = useState<number>(-1);

//   return (
//     <section className="result-list">
//       <div className="result-list__container">
//         <div className="result-list__header">
//           <div className="result-list__name">
//             <input
//               name="name"
//               type="text"
//               className="result-list__name-input"
//               placeholder="Введите имя персонажа"
//             />
//             <span className="result-list__line"></span>
//             <span className="result-list__label">имя персонажа</span>
//           </div>

//           <div className="result-list__info">
//             <p className="result-list__info-text">Варвар</p>
//             <p className="result-list__info-text"> </p>
//             <p className="result-list__info-text"> </p>
//             <span className="result-list__label">класс</span>
//             <span className="result-list__label">предыстория</span>
//             <span className="result-list__label">имя игрока</span>
//             <p className="result-list__info-text">Утишир</p>
//             <p className="result-list__info-text"> </p>
//             <p className="result-list__info-text">1</p>
//             <span className="result-list__label">раса</span>
//             <span className="result-list__label">мировоззрение</span>
//             <span className="result-list__label">уровень</span>
//             <span className="result-list__info-line result-list__info-line_upper"></span>
//             <span className="result-list__info-line result-list__info-line_lower"></span>
//           </div>
//         </div>

//         <div className="result-list__body">
//           <div className="result-list__body-column">
//             <div className="result-list__stats-skills">
//               <div className="result-list__stats">
//                 <div className="stat-block">
//                   <p className="stat-block__label">Сила</p>
//                   <p className="stat-block__modifier">+2</p>
//                   <span className="stat-block__score">15</span>
//                 </div>
//                 <div className="stat-block">
//                   <p className="stat-block__label">Ловкость</p>
//                   <p className="stat-block__modifier">+2</p>
//                   <p className="stat-block__score">15</p>
//                 </div>
//                 <div className="stat-block">
//                   <p className="stat-block__label">Телосложение</p>
//                   <p className="stat-block__modifier">+2</p>
//                   <p className="stat-block__score">15</p>
//                 </div>
//                 <div className="stat-block">
//                   <p className="stat-block__label">Интеллект</p>
//                   <p className="stat-block__modifier">+0</p>
//                   <p className="stat-block__score">15</p>
//                 </div>
//                 <div className="stat-block">
//                   <p className="stat-block__label">Мудрость</p>
//                   <p className="stat-block__modifier">+0</p>
//                   <p className="stat-block__score">15</p>
//                 </div>
//                 <div className="stat-block">
//                   <p className="stat-block__label">Харизма</p>
//                   <p className="stat-block__modifier">−1</p>
//                   <p className="stat-block__score">15</p>
//                 </div>
//               </div>

//               <div className="result-list__skills">
//                 <div className="modifier-block">
//                   <span className="modifier-block__modifier"></span>
//                   <span className="modifier-block__label">вдохновение</span>
//                 </div>

//                 <div className="modifier-block">
//                   <span className="modifier-block__modifier">+2</span>
//                   <span className="modifier-block__label">Бонус владения</span>
//                 </div>

//                 <div className="saves-block">
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">Сила </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">Ловкость </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">Телосложение </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">Интеллект </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">Мудрость </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">Харизма </p>
//                   </div>
//                   <span className="saves-block__label">Спасброски</span>
//                 </div>
//                 <div className="saves-block">
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Акробатика{" "}
//                       <span className="save-block__label-base">(Лов)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Анализ{" "}
//                       <span className="save-block__label-base">(Инт)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Атлетика{" "}
//                       <span className="save-block__label-base">(Сил)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Восприятие{" "}
//                       <span className="save-block__label-base">(Муд)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Выживание{" "}
//                       <span className="save-block__label-base">(Муд)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Выступление{" "}
//                       <span className="save-block__label-base">(Хар)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Запугивание{" "}
//                       <span className="save-block__label-base">(Хар)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       История{" "}
//                       <span className="save-block__label-base">(Инт)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Ловкость рук{" "}
//                       <span className="save-block__label-base">(Лов)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Магия{" "}
//                       <span className="save-block__label-base">(Инт)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Медицина{" "}
//                       <span className="save-block__label-base">(Муд)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Обман{" "}
//                       <span className="save-block__label-base">(Хар)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Природа{" "}
//                       <span className="save-block__label-base">(Инт)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Проницательность{" "}
//                       <span className="save-block__label-base">(Муд)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Религия{" "}
//                       <span className="save-block__label-base">(Инт)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Скрытность{" "}
//                       <span className="save-block__label-base">(Лов)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Убеждение{" "}
//                       <span className="save-block__label-base">(Хар)</span>{" "}
//                     </p>
//                   </div>
//                   <div className="save-block">
//                     <span className="save-block__marker"></span>
//                     <p className="save-block__modifier">+4</p>
//                     <p className="save-block__label">
//                       Уход за животными{" "}
//                       <span className="save-block__label-base">(Муд)</span>{" "}
//                     </p>
//                   </div>

//                   <span className="saves-block__label">навыки</span>
//                 </div>
//               </div>
//             </div>

//             <div className="modifier-block">
//               <span className="modifier-block__modifier">10</span>
//               <span className="modifier-block__label">
//                 пассивная мудрость (Восприятие)
//               </span>
//             </div>

//             <div className="text-block">
//               <div className="text-block__textarea"></div>
//               <p className="vitality-block__text">Прочие владения и языки</p>
//             </div>
//           </div>

//           <div className="result-list__body-column">
//             <div className="vitality-block">
//               <div className="vitality-block__box no-back">
//                 <svg
//                   className="vitality-block__shield"
//                   width="48"
//                   height="60"
//                   viewBox="0 0 48 60"
//                   fill="none"
//                 >
//                   <path
//                     d="M23.8494 0.802124L1.86096 12.5092V36.2236L9.39125 50.3321L23.8494 59.0374L38.0063 50.3321L46.139 36.2236V12.5092L23.8494 0.802124Z"
//                     fill="white"
//                   ></path>
//                   <path
//                     d="M46.8264 12.1484L24.2164 0.13221C23.881 -0.0463404 23.479 -0.0438346 23.1461 0.138475L1.16172 12.1546C0.801164 12.352 0.577545 12.7291 0.577545 13.1395V28.8356C0.590736 41.7383 8.25532 53.4111 20.1084 58.5803L23.1599 59.9066C23.445 60.0306 23.7698 60.0312 24.0556 59.9078L27.494 58.4268C39.5669 53.3697 47.4212 41.5841 47.4225 28.5243V13.1395C47.4225 12.7247 47.1932 12.3432 46.8264 12.1484ZM45.921 28.5C45.9185 40.6596 38.2441 52.2944 27.0029 57L23.6109 58.2L20.6968 57C9.66353 52.1885 2.09155 41.3562 2.07899 29.3457V13.2L23.6997 1.5L45.921 13.2V28.5Z"
//                     fill="black"
//                   ></path>
//                 </svg>
//                 <p className="vitality-block__shield-text">14</p>
//                 <p className="vitality-block__shield-desc">КЗ</p>
//               </div>
//               <div className="vitality-block__box">
//                 <p className="vitality-block__shield-text">+2</p>
//                 <p className="vitality-block__shield-desc">Инициатива</p>
//               </div>
//               <div className="vitality-block__box">
//                 <p className="vitality-block__shield-text">30</p>
//                 <p className="vitality-block__shield-desc">Скорость</p>
//               </div>

//               <div className="vitality-block__hp">
//                 <p className="vitality-block__heading">
//                   Максимум хитов ________________
//                   <span className="vitality-block__subheading">16</span>
//                 </p>
//                 <p className="vitality-block__text">Текущие хиты</p>
//               </div>
//               <div className="vitality-block__temp">
//                 <p className="vitality-block__text">Временные хиты</p>
//               </div>
//               <div className="vitality-block__medium">
//                 <p className="vitality-block__value">1к12</p>
//                 <p className="vitality-block__text">Кость хитов</p>
//               </div>
//               <div className="vitality-block__medium">
//                 <div className="vitality-block__death">
//                   <p className="vitality-block__death-label">Успехи</p>
//                   <div className="vitality-block__death-wrap">
//                     <span className="vitality-block__death-circle"></span>
//                     <span className="vitality-block__death-circle"></span>
//                     <span className="vitality-block__death-circle"></span>
//                   </div>
//                 </div>
//                 <div className="vitality-block__death">
//                   <p className="vitality-block__death-label">Провалы</p>
//                   <div className="vitality-block__death-wrap">
//                     <span className="vitality-block__death-circle"></span>
//                     <span className="vitality-block__death-circle"></span>
//                     <span className="vitality-block__death-circle"></span>
//                   </div>
//                 </div>
//                 <p className="vitality-block__text">Спасброски от смерти</p>
//               </div>
//             </div>

//             <div className="text-block">
//               <div className="weapons-block__row">
//                 <p className="vitality-block__text">Название</p>
//                 <p className="vitality-block__text">Бонус атаки</p>
//                 <p className="vitality-block__text">Урон/вид</p>
//               </div>
//               <div className="text-block__textarea"></div>
//               <p className="vitality-block__text">Атаки и заклинания</p>
//             </div>
//             <div className="text-block">
//               <div className="text-block__textarea"></div>
//               <p className="vitality-block__text ">Снаряжение</p>
//             </div>
//           </div>

//           <div className="result-list__body-column">
//             <div className="personality-block">
//               <div className="text-block">
//                 <div className="text-block__textarea"></div>
//                 <p className="vitality-block__text">Черты характера</p>
//               </div>
//               <div className="text-block  ">
//                 <div className="text-block__textarea"></div>
//                 <p className="vitality-block__text">Идеалы</p>
//               </div>
//               <div className="text-block  ">
//                 <div className="text-block__textarea"></div>
//                 <p className="vitality-block__text">Привязанности</p>
//               </div>
//               <div className="text-block  ">
//                 <div className="text-block__textarea"></div>
//                 <p className="vitality-block__text">Слабости</p>
//               </div>
//             </div>
//             <div className="text-block  ">
//               <div className="text-block__textarea"></div>
//               <p className="vitality-block__text ">Умения и способности</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
