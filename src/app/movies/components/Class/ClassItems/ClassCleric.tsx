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
 * ячейка выбора класса Жреца
 */
export function ClassCleric({
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
    setCharacterClass("Жрец");
  };

  return (
    <div className="class__item">
      <div className="class-item__heading" onClick={onToggle}>
        <span
          className={`class-item__span ${
            active ? "class-item__span_active" : ""
          } `}
        />
        <h3 className="class-item__title">Жрец</h3>
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
          Жрецы являются посредниками между миром смертных и далёкими мирами
          богов. Настолько же разные, насколько боги, которым они служат, жрецы
          воплощают работу своих божеств. В отличие от обычного проповедника,
          жрец наделён божественной магией.
        </p>
        <p className="class-item__text">Совет</p>
        <p className="class-item__text">
          Во-первых, у вашей Мудрости должно быть наивысшее значение. Следующей
          по величине характеристикой должна быть Сила или Телосложение.
        </p>

        <p className="class-item__text">Кость хитов</p>
        <p className="class-item__text">1к8 за каждый уровень жреца.</p>

        <p className="class-item__text">Хиты на уровень</p>
        <p className="class-item__text">
          На 1 уровне 8 + модификатор Телосложения и 5 + модификатор
          Телосложения на каждом последующем.
        </p>

        <p className="class-item__text">Доспехи</p>
        <p className="class-item__text">
          Лёгкие доспехи, Средние доспехи и Щиты.
        </p>

        <p className="class-item__text">Оружие</p>
        <p className="class-item__text">Простое оружие.</p>

        <p className="class-item__text">Навыки</p>
        <p className="class-item__text">
          Выберите два навыка из следующих: История, Медицина, Проницательность,
          Религия, Убеждение.
        </p>

        <p className="class-item__text">Развитие жреца</p>
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
              Заговоры и ячейки{" "}
              <span>
                Количество известных заговоров и ячеек заклинаний на уровень
                заклинаний
              </span>{" "}
            </p>
            <p className="class-item__main-item">Умения</p>

            <p className="class-item__item">1</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">3 (2/1ур.)</p>
            <p className="class-item__item">
              Использование заклинаний, Божественный домен
            </p>

            <p className="class-item__item">2</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">3 (3/1ур.)</p>
            <p className="class-item__item">
              Божественный канал (1/отдых), Умение божественного домена,
              Праведное восстановление
            </p>

            <p className="class-item__item">3</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">3 (4/1ур. 2/2ур.)</p>
            <p className="class-item__item">-</p>

            <p className="class-item__item">4</p>
            <p className="class-item__item">+2</p>
            <p className="class-item__item">4 (4/1ур. 3/2ур.)</p>
            <p className="class-item__item">Увеличение характеристик</p>

            <p className="class-item__item">5</p>
            <p className="class-item__item">+3</p>
            <p className="class-item__item">4 (4/1ур. 3/2ур. 2/3ур.)</p>
            <p className="class-item__item">Уничтожение Нежити (ПО ½)</p>
          </div>
        </div>

        <p className="class-item__text">Умения</p>
        <div className="race-item__items">
          <div>
            <p className="race-item__item">Использование заклинаний</p>
            <p className="race-item__item">Доступно с 1 уровня</p>
          </div>
          <p className="race-item__item">
            Будучи проводником божественной силы, вы можете накладывать
            заклинания жреца. На 1-м уровне вы знаете три заговора на свой выбор
            из списка заклинаний жреца. Вы узнаёте дополнительные заговоры жреца
            на более высоких уровнях, как показано в колонке «Известные
            заговоры». В отличие от правил обычной книги, вы можете
            заготавливать кантрипы (заклинания 0-го круга) в начале дня, как и
            слотовые заклинания; таким образом, вы можете менять полученные от
            класса кантрипы каждый день.
          </p>

          <div>
            <p className="race-item__item">Божественный домен</p>
            <p className="race-item__item">Доступно с 1 уровня</p>
          </div>
          <p className="race-item__item">
            Выберите один домен, связанный с Вашим божеством. Ваш выбор даёт Вам
            Заклинания домена и другие умения. Он также даёт Вам дополнительные
            способы использования Божественного канала, когда Вы получаете это
            умение на 2 уровне, и дополнительные умения на 6, 8 и 17 уровнях.
          </p>

          <div>
            <p className="race-item__item">Божественный канал</p>
            <p className="race-item__item">Доступно с 2 уровня</p>
          </div>
          <p className="race-item__item">
            Вы получаете возможность направлять божественную энергию
            непосредственно от своего божества, используя её для подпитки
            магических эффектов. Вы начинаете с двумя такими эффектами:
            «Изгнание Нежити» и эффектом, определяемым вашим доменом. Некоторые
            домены дают вам дополнительные эффекты, как только вы получите новые
            уровни. Когда вы используете «Божественный канал», вы выбираете,
            какой эффект создать. Затем вы должны окончить короткий или
            продолжительный отдых, чтобы использовать «Божественный канал»
            снова. Некоторые эффекты «Божественного канала» требуют совершить
            спасбросок. Когда вы используете эффекты такого рода, сложность
            равна сложности спасброска от ваших заклинаний жреца.
          </p>

          <div>
            <p className="race-item__item">Праведное восстановление</p>
            <p className="race-item__item">Доступно с 2 уровня</p>
          </div>
          <p className="race-item__item">
            Вы можете использовать «Божественный канал», чтобы подпитать свои
            заклинания. Бонусным действием вы касаетесь своего священного
            символа, произносите молитву и возвращаете одну потраченную ячейку
            заклинаний, уровень которой не превышает половины вашего бонуса
            мастерства (с округлением в большую сторону). Вы можете использовать
            это умение количество раз, зависящее от уровня в этом классе: один
            раз на 2-м уровне, два раза на 6-м уровне, три раза на 18-м уровне.
            Вы восстанавливаете все потраченные использования после окончания
            продолжительного отдыха.
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
            <p className="race-item__item">Уничтожение Нежити (ПО ½)</p>
            <p className="race-item__item">Доступно с 5 уровня</p>
          </div>
          <p className="race-item__item">
            Когда Нежить проваливает спасбросок от вашего умения «Изгнание
            Нежити», существо мгновенно уничтожается, если его показатель
            опасности не превышает значения 1/2 или ниже
          </p>
        </div>

        <p className="class-item__text">Доступные домены</p>
        <div className="class-item__abilities">
          <p className="race-item__item">Домен бури</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Боги, чьи портфолио включают домен бури правят бурями, морями и
              небесами. Среди них боги грома и молний, боги землетрясений,
              некоторые боги огня и насилия, физической силы и бесстрашия. Боги
              бури отправляют своих жрецов внушать страх простым смертным, либо
              наставляя людей на праведный путь, либо заставляя их приносить
              жертвы, чтобы избежать божественного гнева.
            </p>
            <div>
              <p className="race-item__item">Заклинания домена</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              С 1 уровня: волна грома [thunderwave], туманное облако [fog
              cloud]. С 3 уровня: дребезги [shatter], порыв ветра [gust of wind]
            </p>
            <div>
              <p className="race-item__item">Бонусное владение</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы осваиваете владение воинским оружием и тяжёлыми доспехами.
            </p>
            <div>
              <p className="race-item__item">Гнев бури</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете громогласно покарать атакующих. Если существо в пределах
              5 футов от Вас, которое Вы можете видеть, успешно попадает по вам
              атакой, Вы можете реакцией заставить существо пройти испытание
              Ловкости. Существо получает урона звуком или электричеством (по
              Вашему выбору) 2к8, если провалит испытание, и половину этого
              урона если преуспеет. Вы можете использовать это умение количество
              раз, равное Вашему модификатору Мудрости (минимум 1 раз). Вы
              восстанавливаете все потраченные применения, когда завершаете
              длинный отдых.
            </p>

            <div>
              <p className="race-item__item">
                Божественный канал: Разрушительный гнев
              </p>
              <p className="race-item__item">Доступно с 2 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете использовать Божественный канал, чтобы овладеть
              могуществом бури с необузданной свирепостью. Когда Вы совершаете
              бросок урона звуком или электричеством, Вы можете использовать
              Разрушительный гнев, чтобы причинить максимальный урон вместо
              броска.
            </p>
          </div>

          <p className="race-item__item">Домен войны</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Война имеет много проявлений. Она может сделать героев из обычных
              людей. Она может быть отчаянной и ужасающей, с проявлениями
              жестокости и трусости, затмевающими примеры мастерства и
              бесстрашия. В любом случае, боги войны следят за воинами и
              вознаграждают за великие свершения. Жрецы таких богов отличаются в
              битве, вдохновляя остальных сражаться или призывая к насилию в
              своих молитвах.
            </p>
            <div>
              <p className="race-item__item">Заклинания домена</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              С 1 уровня: божественное благоволение [divine favor], щит веры
              [shield of faith]. С 3 уровня: божественное оружие [spiritual
              weapon], магическое оружие [magic weapon]
            </p>

            <div>
              <p className="race-item__item">Бонусное владение</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы получаете владение воинским оружием и тяжёлыми доспехами.
            </p>
            <div>
              <p className="race-item__item">Боевой священник</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Ваш бог наделяет Вас воодушевлением, когда Вы вступаете в битву.
              Когда Вы используете действие Атака, Вы можете совершить одну
              атаку оружием бонусным действием. Вы можете использовать это
              умение количество раз, равное вашему модификатору Мудрости
              (минимум 1 раз). Вы восстанавливаете все потраченные
              использования, когда завершаете длинный отдых.
            </p>
            <div>
              <p className="race-item__item">
                Божественный канал: Направленный удар
              </p>
              <p className="race-item__item">Доступно с 2 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете использовать Божественный Канал, чтобы наносить удары со
              сверхъестественной точностью. Когда Вы совершаете атаку, Вы можете
              использовать получить бонус +10 к этому броску. Вы можете выбрать
              это уже после того, как увидите результат броска, но до того, как
              Мастер объявит о попадании или промахе атаки.
            </p>
          </div>

          <p className="race-item__item">Домен жизни</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Домен жизни сосредоточен на трепещущей позитивной энергии — одной
              из фундаментальных сил вселенной, которая поддерживает жизнь. Боги
              жизни способствуют жизнеспособности и здоровью, исцеляя больных и
              раненых, заботясь о нуждающихся, и отгоняя нежить и силы смерти.
            </p>

            <div>
              <p className="race-item__item">Заклинания домена</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              С 1 уровня: благословение [bless], лечение ран [cure wounds]. С 3
              уровня: божественное оружие [spiritual weapon], малое
              восстановление [lesser restoration]
            </p>

            <div>
              <p className="race-item__item">Бонусное владение</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы осваиваете владение тяжёлыми доспехами.
            </p>
            <div>
              <p className="race-item__item">Поборник жизни</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Ваши лечащие заклинания становятся более эффективными. Каждый раз,
              когда Вы используете заклинание 1 круга или выше,
              восстанавливающее хиты существу, это существо восстанавливает
              дополнительно число хитов, равное 2 + круг заклинания.
            </p>
            <div>
              <p className="race-item__item">
                Божественный канал: Сохранение жизни
              </p>
              <p className="race-item__item">Доступно с 2 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете использовать Божественный канал, чтобы лечить тяжёлые
              ранения. Вы действием демонстрируете свой священный символ и
              призываете целительную энергию, которая может восстановить число
              хитов, равное Вашему уровню жреца, умноженному на пять. Выберите
              любых существ в пределах 30 футов от себя и распределите эти хиты
              между ними. Это умение не может восстановить существу хиты выше
              половины от его максимума. Вы не можете использовать это умение на
              нежити и конструктах.
            </p>
          </div>

          <p className="race-item__item">Домен знаний</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Боги знаний ценят образованность и понимание прежде всего.
              Некоторые учат собирать знания и делать их доступными в
              библиотеках и университетах, или развивать практические знания
              ремёсел и изобретений. Некоторые божества копят знания и хранят их
              в тайне для себя. А некоторые обещают своим последователям, что
              они получат огромную власть, если раскроют тайны мультивселенной.
              Последователи этих богов изучают эзотерические знания, собирают
              старые фолианты, исследуют тайные уголки земли, и изучают всё, что
              смогут.
            </p>

            <div>
              <p className="race-item__item">Заклинания домена</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              С 1 уровня: опознание [identify], приказ [command]. С 3 уровня:
              внушение [suggestion], гадание [augury]
            </p>

            <div>
              <p className="race-item__item">Благословение знаний</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете выучить два языка на свой выбор. Вы также получаете
              владение двумя навыками из следующего списка: История, Магия,
              Природа, Религия. Ваш бонус мастерства удваивается для всех
              проверок характеристик при использовании этих навыков.
            </p>

            <div>
              <p className="race-item__item">
                Божественный канал: Знания веков
              </p>
              <p className="race-item__item">Доступно с 2 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете использовать Божественный канал, чтобы получить доступ к
              источнику знаний. Вы действием выбираете навык или инструмент. На
              10 минут Вы осваиваете владение выбранным навыком или
              инструментом.
            </p>
          </div>

          <p className="race-item__item">Домен обмана</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Боги обмана интриганы и подстрекатели, которые постоянно бросают
              вызов принятому порядку среди богов и смертных. Это покровители
              воров, негодяев, азартных игроков, мятежников и освободителей. Их
              жрецы представляют разрушительные силы мира, пронзающие гордость,
              высмеивающие тиранов, крадущие у богатых, освобождающие пленных и
              попирающие бессмысленные традиции. Прямому противостоянию они
              предпочитают уловки, проделки, обман и воровство.
            </p>

            <div>
              <p className="race-item__item">Заклинания домена</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              С 1 уровня: маскировка [disguise self], очарование личности [charm
              person]. С 3 уровня: бесследное передвижение [pass without trace],
              отражения [mirror image]
            </p>

            <div>
              <p className="race-item__item">Благословение обманщика</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете действием коснуться согласного существа, отличного от
              Вас, чтобы позволить ему совершать с преимуществом проверки
              Ловкости (Скрытность). Это благословение длится 1 час, или Вы не
              используете это умение снова.
            </p>
            <div>
              <p className="race-item__item">Божественный канал: Двуличность</p>
              <p className="race-item__item">Доступно с 2 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете использовать Божественный канал, чтобы создать
              иллюзорную копию себя. Вы действием создаёте идеальную иллюзию
              себя, которая существует в течение 1 минуты, или пока Вы не
              потеряете концентрацию (как при концентрации на заклинании).
              Иллюзия появляется в свободном пространстве, видимом Вами в
              пределах 30 футов. Бонусным действием в свой ход Вы можете
              переместить иллюзию на расстояние до 30 футов в видимое Вами
              пространство, но иллюзия должна оставаться в пределах 120 футов от
              Вас. На протяжении действия умения Вы можете творить заклинания,
              как если бы Вы находились в пространстве иллюзии, но должны
              использовать собственные чувства. Кроме того, когда и Вы и Ваша
              иллюзия находитесь в пределах 5 футов от существа, которое может
              видеть иллюзию, Вы совершаете броски атаки по этому существу с
              преимуществом, так как иллюзия отвлекает его.
            </p>
          </div>

          <p className="race-item__item">Домен природы</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Боги природы столь же разнообразны, как и сама дикая природа, от
              непостижимых богов глубоких лесов до дружелюбных божеств,
              отождествляемых с родниками и рощами. Друиды, почитающие природу в
              целом, могут служить одному из этих божеств, практикуя
              таинственные обряды и читая почти забытые молитвы на собственном
              тайном языке. Но многие из этих богов имеют также жрецов, героев,
              которые выполняют более активную роль в продвижении интересов
              конкретного бога природы. Эти жрецы могут охотиться на злых
              чудовищ, портящих лесные угодья, благословлять урожай верующих,
              или иссушать посевы тех, кто прогневал их богов.
            </p>

            <div>
              <p className="race-item__item">Заклинания домена</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              С 1 уровня: дружба с животными [animal friendship], разговор с
              животными [speak with animals]. С 3 уровня: бесследное дубовая
              кора [barkskin], шипы [spike growth]
            </p>

            <div>
              <p className="race-item__item">Бонусное владение</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы осваиваете владение тяжёлыми доспехами.
            </p>
            <div>
              <p className="race-item__item">Послушник природы</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы изучаете один заговор друида на свой выбор. Вы также получаете
              владение одним из следующих навыков: Выживание, Природа, Уход за
              животными.
            </p>
            <div>
              <p className="race-item__item">
                Божественный канал: Очарование животных и растений
              </p>
              <p className="race-item__item">Доступно с 2 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете использовать Божественный канал, чтобы очаровать
              животных и растения. Вы действием демонстрируете свой священный
              символ и называете имя своего божества. Все звери и растительные
              существа, которые могут видеть Вас, и находятся в пределах 30
              футов от Вас, должны пройти испытание Мудрости. Если существо
              провалит испытание, оно становится очарованным Вами на 1 минуту,
              или пока не получит урон. Пока существо очаровано, оно дружелюбно
              к Вам и другим существам, которых Вы укажете.
            </p>
          </div>

          <p className="race-item__item">Домен света</p>
          <div className="race-item__items">
            <p className="race-item__item">Описание</p>
            <p className="race-item__item">
              Боги света представляют идеалы возрождения и обновления, истины,
              бдительности и красоты, часто используя символ солнца. Некоторые
              из этих богов сами изображаются как солнце или возничий, ведущий
              солнце через небо. Другие — как неутомимые часовые, чьи глаза
              пронзают любую тень и видят любой обман. Некоторые являются
              божествами красоты и артистизма, которые учат, что искусство — это
              средство совершенствования души. Жрецы бога света — просветлённые
              души, исполненные сиянием и силой проницательности своего
              божества, отгоняющие прочь ложь и испепеляющие тьму.
            </p>

            <div>
              <p className="race-item__item">Заклинания домена</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              С 1 уровня: огненные ладони [burning hands], огонь фей [faerie
              fire]. С 3 уровня: палящий луч [scorching ray], пылающий шар
              [flaming sphere]
            </p>

            <div>
              <p className="race-item__item">Дополнительный заговор</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы получаете заговор Свет, если ещё не имели его раньше.
            </p>
            <div>
              <p className="race-item__item">Защищающая вспышка</p>
              <p className="race-item__item">Доступно с 1 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете создать божественный свет между собой и атакующим
              противником. Если Вы атакованы видимым Вами существом, находящимся
              в пределах 30 футов, Вы можете реакцией создать помеху его броску
              атаки, вызывая перед атакующим вспышку света, до того как он
              попадёт или промажет. Существа, которые не могут быть ослеплены,
              обладают иммунитетом к этому умению. Вы можете использовать это
              умение количество раз, равное Вашему модификатору Мудрости
              (минимум один раз). Вы восстанавливаете все потраченные
              использования, когда завершаете длинный отдых.
            </p>
            <div>
              <p className="race-item__item">
                Божественный канал: Сияние рассвета
              </p>
              <p className="race-item__item">Доступно с 2 уровня</p>
            </div>
            <p className="race-item__item">
              Вы можете использовать Божественный канал, чтобы призывать
              солнечный свет, прогоняющий тьму и причиняющий урон излучением
              врагам. Вы действием демонстрируете свой священный символ, и вся
              магическая тьма в пределах 30 футов от Вас рассеивается. Кроме
              того, все враждебные существа в пределах 30 футов от Вас должны
              пройти испытание Телосложения. Существа получают урон излучением,
              равный 2к10 + Ваш уровень жреца в случае провала, и половину этого
              урона в случае успешного испытания. Существа с полным укрытием от
              Вас не подвержены воздействию.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
