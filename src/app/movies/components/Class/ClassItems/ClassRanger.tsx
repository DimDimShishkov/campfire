import React, { useRef } from "react";
import raseArr from "../../mockData/campfire.json";
import { IClass } from "../../Types/Types";

interface IClassItem {
  characterClass: IClass;
  setCharacterClass: (v: string) => void;
  active: boolean;
  onToggle: () => void;
}
/**
 *
 * ячейка выбора класса Воин
 */
export function ClassRanger({
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
    setCharacterClass("Fighter");
  };

  return (
    <div className="class__item">
      <div className="class-item__heading" onClick={onToggle}>
        <span
          className={`class-item__span ${
            active ? "class-item__span_active" : ""
          } `}
        />
        <h3 className="class-item__title">Следопыт</h3>
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
        <p className="class-item__text">
          Вдали от суеты городов и посёлков, за изгородями, которые защищают
          самые далёкие фермы от ужасов дикой природы, среди плотно стоящих
          деревьев, беспутья лесов и на просторах необъятных равнин следопыты
          несут свой бесконечный дозор.
        </p>
        <p className="class-item__text">Совет</p>
        <p className="class-item__text">
          Во-первых, у вашей Ловкости должно быть наивысшее значение. Следующим
          по величине должно быть значение Мудрости. Следопыты,
          концентрирующиеся на сражении с двумя оружиями, делают наивысшей
          характеристикой Силу, а не Ловкость.
        </p>

        <p className="class-item__text">Кость хитов</p>
        <p className="class-item__text">1к10 за каждый уровень следопыта.</p>

        <p className="class-item__text">Хиты на уровень</p>
        <p className="class-item__text">
          На 1 уровне 10 + модификатор Телосложения и 6 + модификатор
          Телосложения на каждом последующем.
        </p>

        <p className="class-item__text">Доспехи</p>
        <p className="class-item__text">
          Лёгкие доспехи, Средние доспехи и Щиты.
        </p>

        <p className="class-item__text">Оружие</p>
        <p className="class-item__text">Простое оружие и Воинское оружие.</p>

        <p className="class-item__text">Навыки</p>
        <p className="class-item__text">
          Выберите 3 навыка из следующих: Анализ, Атлетика, Внимательность,
          Выживание, Обращение с животными, Природа, Проницательность и
          Скрытность.
        </p>

        <p className="class-item__text">Способности</p>
        <div className="race-item__abilities"></div>
      </div>
    </div>
  );
}
