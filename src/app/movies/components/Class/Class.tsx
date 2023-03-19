import React, { useState } from "react";
import "./Class.css";
// import raseArr from "../mockData/campfire.json";
// import { ClassItem } from "./ClassItem";
import { ClassBarbarian } from "./ClassItems/ClassBarbarian";
import { ClassRogue } from "./ClassItems/ClassRogue";
import { ClassCleric } from "./ClassItems/ClassCleric";

interface IRaceProps {
  setCharacterClass(v: string): void;
}
/**
 *
 * этап выбора класса
 */

export const Class: React.FC<IRaceProps> = (props) => {
  const [clicked, setClicked] = useState<number>(-1);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };

  return (
    <section className="section">
      <h2 className="section__heading">Выбор класса</h2>
      <p className="class__description">Следующим этапом нужно выбрать класс</p>
      <p className="class__description">
        Сейчас доступны немногие классы и подклассы.
      </p>
      <p className="class__description">
        Находить новые надо будет за пределами костра, открывая их для всех
        игроков.
      </p>
      <p className="class__description">
        На данный момент доступны при создании персонажа Воин, Волшебник, Плут,
        Жрец, Следопыт и Варвар.
      </p>
      <div className="class__items">
        <ClassBarbarian
          setCharacterClass={props.setCharacterClass}
          active={clicked === 0}
          onToggle={() => handleToggle(0)}
        />
        <ClassRogue
          setCharacterClass={props.setCharacterClass}
          active={clicked === 1}
          onToggle={() => handleToggle(1)}
        />
        <ClassCleric
          setCharacterClass={props.setCharacterClass}
          active={clicked === 2}
          onToggle={() => handleToggle(2)}
        />
        {/* {raseArr.classes.map((item, index) => (
          <ClassItem
            characterClass={item}
            setCharacterClass={props.setCharacterClass}
            key={item.value}
            active={clicked === index}
            onToggle={() => handleToggle(index)}
          />
        ))} */}
      </div>
    </section>
  );
};
