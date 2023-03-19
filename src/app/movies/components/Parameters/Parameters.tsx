// import React, { useEffect, useState } from 'react';
// import raseArr from '../mockData/campfire.json';
// import { IParameter } from '../Types/Types';
// import './Parameters.css';

// /* interface IFormInput extends IParameters {
//   raseArr: IRaceArray[];
//   nameRU: string;
//   nameEN: string;
//   description: string;
//   initialValue: number;
//   value: number;
// } */

// interface IParametersProps {
//     setParameters(v: IParameter[]): void;
// }
// /**
//  *
//  * этап выбора SPECIAL
//  */

// export const Parameters: React.FC<IParametersProps> = (props) => {
//     const [special, setSpecial] = useState<IParameter[]>([]);
//     const [summaryParam, setSummaryParam] = useState<number>(0);

//     useEffect(() => {
//         let initialArr: IParameter[] = [];
//         let initialSum: number = 0;
//         raseArr.parameters.forEach((item) => {
//             let { nameEN, initialValue } = item;

//             let arr = {
//                 name: nameEN,
//                 value: initialValue,
//                 error: '',
//                 bonus: '0',
//             };
//             initialArr.push(arr);
//             initialSum = initialSum + initialValue;
//         });
//         setSpecial(initialArr);
//         setSummaryParam(initialSum);
//     }, []);

//     const handleChangeSpecial = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         event.preventDefault();
//         let bonusValue: string;
//         let resultValue: number;
//         const { value } = event.target as HTMLButtonElement;
//         let item = value.split('-');
//         if (item[1] === 'decrease' && summaryParam > 48) {
//             return setSpecial(
//                 special.map((el) => {
//                     if (el.value > 13 && el.name === item[0]) {
//                         setSummaryParam(summaryParam - 2);
//                         resultValue = el.value -= 1;
//                         bonusValue = handleCheckParam(resultValue);
//                         return { ...el, value: resultValue, bonus: bonusValue };
//                     }
//                     if (el.value > 8 && el.name === item[0]) {
//                         setSummaryParam(summaryParam - 1);
//                         resultValue = el.value -= 1;
//                         bonusValue = handleCheckParam(resultValue);
//                         return { ...el, value: resultValue, bonus: bonusValue };
//                     } /* else if (el.value === 8 && el.name === item[0]) {
//               return { ...el, error: "Значение не меньше 8" };
//             } */
//                     return el;
//                 }),
//             );
//         } else if (item[1] === 'increase' && summaryParam < 75) {
//             return setSpecial(
//                 special.map((el) => {
//                     if (el.value >= 13 && el.value < 15 && el.name === item[0]) {
//                         setSummaryParam(summaryParam + 2);
//                         resultValue = el.value += 1;
//                         bonusValue = handleCheckParam(resultValue);
//                         return { ...el, value: resultValue, bonus: bonusValue };
//                     } else if (el.value < 15 && el.name === item[0]) {
//                         setSummaryParam(summaryParam + 1);
//                         resultValue = el.value += 1;
//                         bonusValue = handleCheckParam(resultValue);
//                         return { ...el, value: resultValue, bonus: bonusValue };
//                     }
//                     return el;
//                 }),
//             );
//         }
//     };

//     // распределение параметров в тестовом режиме
//     const handleCheckParam = (value: number | undefined) => {
//         switch (value) {
//             case undefined:
//                 return '0';
//             case 8:
//                 return '-1';
//             case 9:
//                 return '-1';
//             case 12:
//                 return '+1';
//             case 13:
//                 return '+1';
//             case 14:
//                 return '+2';
//             case 15:
//                 return '+2';
//             default:
//                 return '0';
//         }
//     };

//     const handleSubmitForm = (event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
//         event.preventDefault();
//         props.setParameters(special);
//     };

//     return (
//         <section className="section">
//             <h2 className="section__heading">Распределение параметров</h2>
//             <p className="parameters__description">Теперь вы знаете расу.</p>
//             <p className="parameters__description">
//                 Далее вам нужно распределить параметры, чтобы узнать, в чём ваш персонаж хорош, а в чём нет.
//             </p>
//             <p className="parameters__description">
//                 Чтобы распределить параметры, можно перетащить значения 15, 14, 13, 12, 10, 8 в ячейки или расставить
//                 вручную.
//             </p>
//             <p className="parameters__description">Главное требование, чтобы сумма всех очков не превышала 75 очков.</p>
//             <p className="parameters__description">Рекомендуется значение параметра не меньше 8 и не больше 15.</p>
//             <form className="parameters__form" onSubmit={handleSubmitForm}>
//                 <div className="parameters__items">
//                     {raseArr.parameters.map((item) => (
//                         <div className="parameters__item" key={item.nameEN}>
//                             <div className="parameters__status">
//                                 <h4 className="parameters__title">{item.nameRU}</h4>
//                                 <p className="parameters__title">
//                                     {special.find((el) => el.name === item.nameEN)?.bonus}
//                                 </p>
//                             </div>
//                             <p className="parameters__subtitle">{item.description}</p>
//                             <div className="parameters__values">
//                                 <div>
//                                     <p className="parameters__subtitle">Выставите значение</p>
//                                 </div>
//                                 <div className="parameters__value">
//                                     <button
//                                         className="parameters__button"
//                                         onClick={handleChangeSpecial}
//                                         value={`${item.nameEN}-decrease`}
//                                     >
//                                         -
//                                     </button>
//                                     <p className="parameters__result">
//                                         {special.find((el) => el.name === item.nameEN)?.value}
//                                     </p>
//                                     <button
//                                         className="parameters__button"
//                                         onClick={handleChangeSpecial}
//                                         value={`${item.nameEN}-increase`}
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                                 {/* <p className="parameters__error">
//                   {special.find((el) => el.name === item.nameEN)?.error}
//                 </p> */}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="parameters__items">
//                     <p>Осталось очков: {75 - summaryParam}</p>
//                     <button type="submit" className="parameters__submit">
//                         Сохранить
//                     </button>
//                 </div>
//             </form>
//         </section>
//     );
// };
