import React, { useRef } from "react";
// import raseArr from "../../mockData/campfire.json";
// import { IClass } from "../../Types/Types";

interface IClassItem {
  // characterClass: IClass;
  setCharacterClass: (v: string) => void;
  active: boolean;
  onToggle: () => void;
}
/**
 *
 * ячейка выбора класса Плут
 */
export function ClassRogue({
  // characterClass,
  setCharacterClass,
  active,
  onToggle,
}: IClassItem) {
  const contentEl = useRef<HTMLDivElement>(null);

  const openItemHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setCharacterClass("Плут");
  };

  return (
    <div className="class__item">
      <div className="class-item__heading" onClick={onToggle}>
        <span
          className={`class-item__span ${
            active ? "class-item__span_active" : ""
          } `}
        />
        <h3 className="class-item__title">Плут</h3>
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
          У них достаточно сноровки для нахождения решения в любой ситуации,
          демонстрируя находчивость и гибкость, которые являются краеугольным
          камнем любой успешной группы искателей приключений.
        </p>
        <p className="class-item__text">Совет</p>
        <p className="class-item__text">
          Во-первых, у вашей Ловкости должно быть наивысшее значение. Следующим
          по величине должно быть значение Интеллекта, при условии, что вы
          планируете взять архетип Мистический ловкач. В противном случае
          выберите Харизму, если планируете пользоваться обманом и социальным
          взаимодействием.
        </p>

        <p className="class-item__text">Кость хитов</p>
        <p className="class-item__text">1к8 за каждый уровень плута.</p>

        <p className="class-item__text">Хиты на уровень</p>
        <p className="class-item__text">
          На 1 уровне 8 + модификатор Телосложения и 5 + модификатор
          Телосложения на каждом последующем.
        </p>

        <p className="class-item__text">Доспехи</p>
        <p className="class-item__text">Лёгкие доспехи.</p>

        <p className="class-item__text">Оружие</p>
        <p className="class-item__text">
          Простое оружие, Короткий меч, Ручной арбалет, Длинный меч и Рапира.
        </p>

        <p className="class-item__text">Навыки</p>
        <p className="class-item__text">
          Выберите 4 навыка из следующих: Акробатика, Анализ, Атлетика,
          Внимательность, Выступление, Запугивание, Ловкость рук, Обман,
          Проницательность, Скрытность и Убеждение.
        </p>

        <p className="class-item__text">Развитие плута</p>
        <div className="race-item__abilities">
          <div className="class-item__items">
            <p className="class-item__main-item">Уровень</p>
            <p className="class-item__main-item">
              БМ{" "}
              <span>
                Бонус мастерства - количество очков добавляемых при броске на
                атаку
              </span>{" "}
            </p>
            <p className="class-item__main-item">
              Скрытая атака{" "}
              <span>
                дополнительный урон одному из существ, по которому вы попали
                атакой
              </span>{" "}
            </p>
            <p className="class-item__main-item">Умения</p>

            <p className="class-item__item">1</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">1к6</p>
            <p className="class-item__item">Компетентность, Скрытая атака</p>

            <p className="class-item__item">2</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">1к6</p>
            <p className="class-item__item">Хитрое действие</p>

            <p className="class-item__item">3</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">2к6</p>
            <p className="class-item__item">
              Архетип плута, Точное прицеливание
            </p>

            <p className="class-item__item">4</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">2к6</p>
            <p className="class-item__item">Увеличение характеристик</p>

            <p className="class-item__item">5</p>
            <p className="class-item__item">+3</p>
            <p className="class-item__item">3к6</p>
            <p className="class-item__item">Невероятное уклонение</p>
          </div>
        </div>
        <p className="class-item__text">Умения</p>
        <div className="race-item__items">
          <div>
            <p className="race-item__item">Компетентность</p>
            <p className="race-item__item">Доступно с 1 уровня</p>
          </div>
          <p className="race-item__item">
            Выберите два владения в навыках и бонус мастерства удваивается для
            всех проверок характеристик, которые Вы совершаете, используя любое
            из выбранных владений. На 6 уровне Вы можете выбрать ещё два
            владения (навыки или воровские инструменты), чтобы получить эту же
            выгоду.
          </p>

          <div>
            <p className="race-item__item">Скрытая атака</p>
            <p className="race-item__item">Доступно с 1 уровня</p>
          </div>
          <p className="race-item__item">
            Вы знаете, как точно наносить удар и использовать отвлечение врага.
            Один раз в ход Вы можете причинить дополнительный урон 1к6 одному из
            существ, по которому Вы попали атакой, совершённой с преимуществом к
            броску атаки. Атака должна использовать дальнобойное оружие или
            оружие со свойством «фехтовальное». Вам не нужно иметь преимущество
            при броске атаки, если другой враг цели находится в пределах 5 футов
            от неё. Этот враг не должен быть недееспособным, и у Вас не должно
            быть помехи для броска атаки.
          </p>

          <div>
            <p className="race-item__item">Хитрое действие</p>
            <p className="race-item__item">Доступно с 2 уровня</p>
          </div>
          <p className="race-item__item">
            Ваше мышление и ловкость позволяют двигаться и действовать быстрее.
            Каждый свой ход в бою Вы совершать Рывок, Отход или Засаду бонусным
            действием.
          </p>

          <div>
            <p className="race-item__item">Архетип плута</p>
            <p className="race-item__item">Доступно с 3 уровня</p>
          </div>
          <p className="race-item__item">
            Вы выбираете архетип, который отображает Ваши плутовские способности
          </p>

          <div>
            <p className="race-item__item">Точное прицеливание</p>
            <p className="race-item__item">Доступно с 3 уровня</p>
          </div>
          <p className="race-item__item">
            Вы Бонусным действием даёте себе преимущество на следующий бросок
            атаки на текущем ходу. Вы можете использовать эту способность,
            только если не двигались на этом ходу, и после её использования Ваша
            скорость станет равна 0 до конца текущего хода.
          </p>

          <div>
            <p className="race-item__item">Увеличение характеристик</p>
            <p className="race-item__item">Доступно с 4 уровня</p>
          </div>
          <p className="race-item__item">
            Вы можете повысить значение одной из Ваших характеристик на 2 или
            двух характеристик на 1. Как обычно, значение характеристики при
            этом не должно превысить 20.
          </p>

          <div>
            <p className="race-item__item">Невероятное уклонение</p>
            <p className="race-item__item">Доступно с 5 уровня</p>
          </div>
          <p className="race-item__item">
            Когда видимый Вами нападающий, попадает по Вам атакой, Вы можете
            реакцией уменьшить вдвое урон от этой атаки по себе.
          </p>
        </div>

        <p className="class-item__text">Архетипы плута</p>
        <div className="class-item__abilities">
          <p className="race-item__item">Вор</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Вы отточили навыки воровского искусства. В дополнение к улучшению
              ловкости и хитрости, вы узнаёте навыки, которые пригодятся во
              время изучения древних руин, чтения незнакомых языков,
              использования магических предметов, которые обычно вы не можете
              использовать.
            </p>
            <div>
              <p className="race-item__item">Форточник</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы получаете возможность лазать быстрее, чем обычно; лазание
              больше не стоит Вам дополнительного движения. Кроме того, когда Вы
              совершаете прыжок с разбега, расстояние, которое Вы преодолеваете,
              увеличивается на число футов, равное Вашему модификатору Ловкости.
            </p>
            <div>
              <p className="race-item__item">Быстрые руки</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете бонусным действием, предоставленным Вашим Хитрым
              действием, совершить проверку Ловкости (Ловкость рук),
              использовать Воровские инструменты, чтобы обезвредить ловушку или
              вскрыть замок, или же совершить действие Использование предмета.
            </p>
          </div>

          <p className="race-item__item">Убийца</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Вы сосредоточили своё обучение на мрачном искусстве смерти. Те,
              кто придерживаются этого архетипа, разнообразны: наёмные убийцы,
              шпионы, охотники за головами и даже особо помазанные священники,
              обученные истреблять врагов своего божества. Скрытность, яд и
              маскировка помогут в борьбе с врагами со смертоносной
              эффективностью.
            </p>
            <div>
              <p className="race-item__item">Дополнительные владения</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы получаете владение Набором для грима и Инструментами
              отравителя.
            </p>
            <div>
              <p className="race-item__item">Ликвидация</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы становитесь смертоносным для врагов. Вы совершаете с
              преимуществом броски атаки по всем существам, которые ещё не
              совершали ход в этом бою. Кроме того, все попадания по существам,
              захваченным врасплох, являются критическими попаданиями.
            </p>
          </div>

          <p className="race-item__item">Мистический ловкач</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Некоторые плуты усиливают свои прекрасно отточенные навыки
              скрытности и ловкости магией, обучаясь премудростям чар и иллюзий.
              Этими плутами становятся не только карманники и грабители, но и
              шутники, интриганы и достаточное количество искателей приключений.
            </p>
            <div>
              <p className="race-item__item">Улучшенная волшебная рука</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Когда Вы накладываете заклинание Волшебная рука, Вы можете создать
              руку невидимой, и совершать ею следующие дополнительные действия:
              можете положить один предмет, удерживаемый рукой, в контейнер,
              носимый или несомый другим существом / можете достать предмет из
              контейнера, носимого или несомого другим существом / можете
              использовать воровские инструменты для вскрытия замков и
              обезвреживания ловушек в дистанции этого заклинания. Вы можете
              выполнить одно из этих действий, не будучи замеченным, если
              успешно совершите проверку Ловкости (Ловкость рук) против проверки
              Мудрости (Внимательность) существа. Кроме того, Вы можете
              использовать бонусное действие, предоставленное умением Хитрое
              действие, для управления рукой.
            </p>
            <div>
              <p className="race-item__item">Использование заклинаний</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы знаете три заговора: Волшебная рука и два других заговора по
              своему выбору из списка Arcane Spells.
            </p>
          </div>

          <p className="race-item__item">Дуэлянт</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Ваше воинское искусство в равной степени опирается как на
              мастерство фехтования и скорость, так и на элегантность и харизму.
              В то время, как некоторые воины — громилы в тяжёлых доспехах, Ваш
              метод вести бой больше похож на выступление. Дуэлянты обычно имеют
              преимущество в поединках один на один, фехтуя двумя руками и
              держась на безопасном расстоянии от оппонента.
            </p>
            <div>
              <p className="race-item__item">Лихая удаль</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы бросаетесь в бой с смело и без колебаний. Вы добавляете свой
              модификатор Харизмы к результату броска инициативы. В добавок к
              этому, Вам не требуется более преимущество на броски атаки, для
              того, чтобы применять Скрытую атаку, если в пределах пяти футов от
              Вас нет ни одного существа, кроме Вашей цели. Все прочие правила
              для классового умения Скрытая атака применяются к Вам как обычно.
            </p>
            <div>
              <p className="race-item__item">Ловкое маневрирование</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы узнаёте, как наносить удары и сразу же ускользать от
              контратаки. На протяжении Вашего хода, если Вы проводите
              рукопашную атаку в ближнем бою — до конца Вашего хода это существо
              не может совершать провоцированные атаки против Вас.
            </p>
          </div>

          <p className="race-item__item">Комбинатор</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Вы концентрируете свою деятельность на людях, влиянии на них и их
              секретах. Многие шпионы, придворные и заговорщики следуют этому
              архетипу, ведя жизнь, полную интриг. Слова служат Вам оружием
              также часто, как ножи и яды, а секреты и расположение
              властьпридержащих — одни из Ваших наиболее ценных сокровищ.
            </p>
            <div>
              <p className="race-item__item">Мастер тактики</p>
              <p className="race-item__item">Доступно с 3 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете бонусным действием совершать действие Помощь. Когда Вы
              используете Помощь союзнику при атаке существа, цель той атаки
              может быть в 30 футах от Вас, а не в 5 футах, если цель может Вас
              видеть или слышать.
            </p>
            <div>
              <p className="race-item__item">Интриган</p>
              <p className="race-item__item">Доступно с 6 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете подражать манере и акценту речи существа, разговор
              которого слышите как минимум одну минуту, что позволяет
              представиться носителем речи из определённой земли, если знаете
              язык.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
