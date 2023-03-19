import React, { useRef } from "react";
import raseArr from "../mockData/campfire.json";
import { IClass } from "../Types/Types";

interface IClassItem {
  characterClass: IClass;
  setCharacterClass: (v: string) => void;
  active: boolean;
  onToggle: () => void;
}
/**
 *
 * ячейка выбора класса
 */
export function ClassItem({
  characterClass,
  setCharacterClass,
  active,
  onToggle,
}: IClassItem) {
  const contentEl = useRef<HTMLDivElement>(null);

  const openItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setCharacterClass(characterClass.value);
  };

  return (
    <div className="class__item">
      <div className="class-item__heading" onClick={onToggle}>
        <span
          className={`class-item__span ${
            active ? "class-item__span_active" : ""
          } `}
        />
        <h3 className="class-item__title">{characterClass.name}</h3>
        <button className="class-item__submit-button" onClick={openItemHandler}>
          Выбрать
        </button>
      </div>
      <div
        className="class-item__body"
        style={
          active
            ? { height: contentEl.current?.scrollHeight, marginTop: "10px" }
            : { height: "0px", marginTop: "0" }
        }
        ref={contentEl}
      >
        <p className="class-item__text">Описание</p>
        <p className="class-item__text">{characterClass.description}</p>
        <p className="class-item__text">Совет</p>
        <p className="class-item__text">{characterClass.advice}</p>
        <p className="class-item__text">Способности</p>
        <div className="race-item__abilities">
          {raseArr.abilities
            .find((item) => item.name === characterClass.value)
            ?.values.map((item) => (
              <div className="race-item__items" key={item.name}>
                <div>
                  <p className="race-item__item">{item.name}</p>
                  <p className="race-item__item">
                    Доступно с {item.level} уровня
                  </p>
                </div>
                <p className="race-item__item">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
