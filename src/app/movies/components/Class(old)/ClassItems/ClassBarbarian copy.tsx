// import React, { useRef } from "react";
// // import raseArr from "../../mockData/campfire.json";
// // import { IClass } from "../../Types/Types";

// interface IClassItem {
//   // characterClass: IClass;
//   setCharacterClass: (v: string) => void;
//   active: boolean;
//   onToggle: () => void;
// }
// /**
//  *
//  * ячейка выбора класса Варвар
//  */
// export function ClassBarbarian({
//   setCharacterClass,
//   active,
//   onToggle,
// }: IClassItem) {
//   const contentEl = useRef<HTMLDivElement>(null);

//   const openItemHandler = (
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => {
//     event.stopPropagation();
//     setCharacterClass("Варвар");
//   };

//   return (
//     <div className="class__item">
//       <div className="class-item__heading" onClick={onToggle}>
//         <span
//           className={`class-item__span ${
//             active ? "class-item__span_active" : ""
//           } `}
//         />
//         <h3 className="class-item__title">Варвар</h3>
//         <button className="class-item__submit-button" onClick={openItemHandler}>
//           Выбрать
//         </button>
//       </div>
//       <div
//         className="class-item__body"
//         style={
//           active
//             ? { height: contentEl.current?.scrollHeight, marginTop: "10px" }
//             : { height: "0px", marginTop: "0" }
//         }
//         ref={contentEl}
//       >

//   );
// }
