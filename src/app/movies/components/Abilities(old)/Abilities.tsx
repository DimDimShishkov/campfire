// import { useState, useEffect } from "react";
// import { IAbility, IParameter } from "../Types/Types";
// import "./Abilities.css";
// import { AbilitiesWrap } from "./AbilitiesWrap";

// interface IProps {
//   race: string;
//   character: string;
//   parameters: IParameter[];
//   setResult(v: IAbility[]): void;
// }

// /**
//  *
//  * этап выбора навыков
//  */

// function Abilities({ race, parameters, setResult, character }: IProps) {

//   const [skills, setSkills] = useState(initialSkills);

//   useEffect(() => {
//     let resultArr: IAbility[] = [];
//     parameters?.map((param) => {
//       let mainParams = initialSkills.filter(
//         (skill) => skill.name?.split("-")[0] === param.name
//       );
//       mainParams.map((item) => {
//         return item?.name === param.name
//           ? resultArr.push({
//               name: item.name,
//               checked: false,
//               value: `${param.value}`,
//             })
//           : resultArr.push({
//               name: item.name,
//               checked: false,
//               value: `${param.bonus}`,
//             });
//       });
//       return mainParams;
//     });

//     setSkills(resultArr);
//   }, [race, parameters]);

//   const handleChangeSpecial = (
//     event: React.FormEvent<HTMLInputElement>
//   ): void => {
//     const { id, checked } = event.target as HTMLInputElement;
//     let result: number;
//     setSkills(
//       skills.map((el) => {
//         if (el.name === id) {
//           result = checked ? +el.value + 2 : +el.value - 2;
//           el.value = result > 0 ? `+${result}` : `${result}`;
//           return { ...el, checked: checked };
//         } else {
//           return { ...el };
//         }
//       })
//     );
//   };

//   let info;
//   if (
//     parameters.length &&
//     race !== "Подлежит выбору" &&
//     character !== "Подлежит выбору"
//   ) {
//     info = (
//       <>
//         <p className="abilities__description">
//           Уже выбрали расу, класс и расставили основные параметры.
//         </p>
//         <p className="abilities__description">
//           Остаётся выбрать навыки и спасброски.
//         </p>
//         <p className="abilities__description">Выбранная раса: {race}</p>
//         <p className="abilities__description">Выбранный класс: {character}</p>
//         <div className="abilities__containers">
//           <div className="abilities__container">
//             <h2 className="abilities__title">
//               Сила
//               <span className="abilities__line" />
//               <span className="abilities__title-number">
//                 {skills.find((item) => item.name === "str")?.value}
//               </span>
//             </h2>
//             <div className="abilities__items">
//               <div className="abilities__item">
//                 <div className="abilities__text-item">
//                   <p className="abilities__subtitle ">проверка</p>
//                 </div>
//                 <div className="abilities__number-item">
//                   <p className="abilities__subnumber">
//                     {skills.find((item) => item.name === "str-check")?.value}
//                   </p>
//                 </div>
//               </div>
//               <AbilitiesWrap
//                 skills={skills}
//                 itemName={"str-saves"}
//                 handleOnChange={handleChangeSpecial}
//               />
//             </div>
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"str-athletics"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Атлетика"}
//             />
//           </div>

//           {/* Телосложение */}
//           <div className="abilities__container">
//             <h2 className="abilities__title">
//               Телосложение
//               <span className="abilities__line" />
//               <span className="abilities__title-number">
//                 {skills.find((item) => item.name === "con")?.value}
//               </span>
//             </h2>
//             <div className="abilities__items">
//               <div className="abilities__item">
//                 <div className="abilities__text-item">
//                   <p className="abilities__subtitle">проверка</p>
//                 </div>
//                 <div className="abilities__number-item">
//                   <p className="abilities__subnumber">
//                     {skills.find((item) => item.name === "con-check")?.value}
//                   </p>
//                 </div>
//               </div>

//               <AbilitiesWrap
//                 skills={skills}
//                 itemName={"con-saves"}
//                 handleOnChange={handleChangeSpecial}
//               />
//             </div>
//           </div>

//           {/* Интеллект */}
//           <div className="abilities__container">
//             <h2 className="abilities__title">
//               Интеллект
//               <span className="abilities__line" />
//               <span className="abilities__title-number">
//                 {skills.find((item) => item.name === "int")?.value}
//               </span>
//             </h2>
//             <div className="abilities__items">
//               <div className="abilities__item">
//                 <div className="abilities__text-item">
//                   <p className="abilities__subtitle">проверка</p>
//                 </div>
//                 <div className="abilities__number-item">
//                   <p className="abilities__subnumber">
//                     {skills.find((item) => item.name === "int-check")?.value}
//                   </p>
//                 </div>
//               </div>
//               <AbilitiesWrap
//                 skills={skills}
//                 itemName={"int-saves"}
//                 handleOnChange={handleChangeSpecial}
//               />
//             </div>
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"int-investigation"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Анализ"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"int-history"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"История"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"int-arcana"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Магия"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"int-nature"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Природа"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"int-religion"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Религия"}
//             />
//           </div>

//           {/* Харизма */}
//           <div className="abilities__container">
//             <h2 className="abilities__title">
//               Харизма
//               <span className="abilities__line" />
//               <span className="abilities__title-number">
//                 {skills.find((item) => item.name === "cha")?.value}
//               </span>
//             </h2>
//             <div className="abilities__items">
//               <div className="abilities__item">
//                 <div className="abilities__text-item">
//                   <p className="abilities__subtitle ">проверка</p>
//                 </div>
//                 <div className="abilities__number-item">
//                   <p className="abilities__subnumber">
//                     {skills.find((item) => item.name === "cha-check")?.value}
//                   </p>
//                 </div>
//               </div>
//               <AbilitiesWrap
//                 skills={skills}
//                 itemName={"cha-saves"}
//                 handleOnChange={handleChangeSpecial}
//               />
//             </div>
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"cha-performance"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Выступление"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"cha-intimidation"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Запугивание"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"cha-deception"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Обман"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"cha-persuasion"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Убеждение"}
//             />
//           </div>

//           {/* Мудрость */}
//           <div className="abilities__container">
//             <h2 className="abilities__title">
//               Мудрость
//               <span className="abilities__line" />
//               <span className="abilities__title-number">
//                 {skills.find((item) => item.name === "wis")?.value}
//               </span>
//             </h2>
//             <div className="abilities__items">
//               <div className="abilities__item">
//                 <div className="abilities__text-item">
//                   <p className="abilities__subtitle ">проверка</p>
//                 </div>
//                 <div className="abilities__number-item">
//                   <p className="abilities__subnumber">
//                     {skills.find((item) => item.name === "wis-check")?.value}
//                   </p>
//                 </div>
//               </div>
//               <AbilitiesWrap
//                 skills={skills}
//                 itemName={"wis-saves"}
//                 handleOnChange={handleChangeSpecial}
//               />
//             </div>
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"wis-perception"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Восприятие"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"wis-survival"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Выживание"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"wis-medicine"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Медицина"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"wis-insight"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Проницательность"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"wis-animal"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Уход за животными"}
//             />
//           </div>

//           {/* ловкость */}
//           <div className="abilities__container">
//             <h2 className="abilities__title">
//               Ловкость
//               <span className="abilities__line" />
//               <span className="abilities__title-number">
//                 {skills.find((item) => item.name === "dex")?.value}
//               </span>
//             </h2>
//             <div className="abilities__items">
//               <div className="abilities__item">
//                 <div className="abilities__text-item">
//                   <p className="abilities__subtitle">проверка</p>
//                 </div>
//                 <div className="abilities__number-item">
//                   <p className="abilities__subnumber">
//                     {skills.find((item) => item.name === "dex-check")?.value}
//                   </p>
//                 </div>
//               </div>
//               <AbilitiesWrap
//                 skills={skills}
//                 itemName={"dex-saves"}
//                 handleOnChange={handleChangeSpecial}
//               />
//             </div>
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"dex-acrobatics"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Акробатика"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"dex-sleight"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Ловкость рук"}
//             />
//             <AbilitiesWrap
//               skills={skills}
//               itemName={"dex-stealth"}
//               handleOnChange={handleChangeSpecial}
//               itemText={"Скрытность"}
//             />
//           </div>

//           <div className="abilities__additional">
//             <div className="abilities__stats">
//               <div className="abilities__vit">
//                 <svg
//                   className="abilities-block__shield"
//                   width="48"
//                   height="60"
//                   viewBox="0 0 48 60"
//                   fill="none"
//                 >
//                   <path
//                     d="M23.8494 0.802124L1.86096 12.5092V36.2236L9.39125 50.3321L23.8494 59.0374L38.0063 50.3321L46.139 36.2236V12.5092L23.8494 0.802124Z"
//                     fill="rgb(103, 0, 1)"
//                   ></path>
//                   <path
//                     d="M46.8264 12.1484L24.2164 0.13221C23.881 -0.0463404 23.479 -0.0438346 23.1461 0.138475L1.16172 12.1546C0.801164 12.352 0.577545 12.7291 0.577545 13.1395V28.8356C0.590736 41.7383 8.25532 53.4111 20.1084 58.5803L23.1599 59.9066C23.445 60.0306 23.7698 60.0312 24.0556 59.9078L27.494 58.4268C39.5669 53.3697 47.4212 41.5841 47.4225 28.5243V13.1395C47.4225 12.7247 47.1932 12.3432 46.8264 12.1484ZM45.921 28.5C45.9185 40.6596 38.2441 52.2944 27.0029 57L23.6109 58.2L20.6968 57C9.66353 52.1885 2.09155 41.3562 2.07899 29.3457V13.2L23.6997 1.5L45.921 13.2V28.5Z"
//                     fill="#ff6701"
//                   ></path>
//                 </svg>
//                 <p className="abilities__text abilities__text_pc">14</p>
//                 <p className="abilities__text abilities__text_desc">КЗ</p>
//               </div>

//               <div className="abilities__stat">
//                 <p className="abilities__text">
//                   {parameters.find((item) => item.name === "dex")?.bonus}
//                 </p>
//                 <p className="abilities__text">Инициатива</p>
//               </div>

//               <div className="abilities__stat">
//                 <p className="abilities__text">30</p>
//                 <p className="abilities__text">Скорость</p>
//               </div>
//             </div>

//             <div className="abilities__stats">
//               <div className="abilities__stats">
//                 <div className="abilities__stat">
//                   <p className="abilities__text">16</p>
//                   <p className="abilities__text">Хиты на 1 ур.</p>
//                 </div>

//                 <div className="abilities__stat">
//                   <p className="abilities__text">1к12</p>
//                   <p className="abilities__text">Кость хитов</p>
//                 </div>
//               </div>
//             </div>
//             <button
//               className="abilities__stat abilities__button"
//               onClick={() => setResult(skills)}
//             >
//               Сохранить результат
//             </button>
//           </div>
//         </div>
//         <p className="abilities__description">
//           Как будете готовы - сохраните результат.
//         </p>
//       </>
//     );
//   } else if (
//     !parameters.length &&
//     race !== "Подлежит выбору" &&
//     character !== "Подлежит выбору"
//   ) {
//     info = (
//       <p className="abilities__description">
//         Раса и класс выбраны. Остаётся распределить параметры.
//       </p>
//     );
//   } else if (
//     parameters.length &&
//     (race === "Подлежит выбору" || character === "Подлежит выбору")
//   ) {
//     info = (
//       <p className="abilities__description">
//         Параметры распределены. Остаётся выбрать расу и класс.
//       </p>
//     );
//   } else {
//     info = (
//       <p className="abilities__description">
//         Сперва требуется распределить параметры, выбрать расу и класс.
//       </p>
//     );
//   }

//   return (

//   );
// }

// export default Abilities;
