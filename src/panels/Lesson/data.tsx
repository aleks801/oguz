import video from "assets/video.png"
import { Attention } from "components/Attention"
import { AttentionWrapper } from "components/AttentionWrapper"
import { Button } from "components/Button"
import { Input } from "components/Input"
import { InputGroup } from "components/InputGroup"
import { Question } from "components/Question"
import { SpeechBaloon } from "components/SpeechBaloon"
import { YesNo } from "components/YesNo"

export type LessonData = {
  chapterId: number
  episodeId: number
  content: React.ReactNode
}

export const lessonsData: LessonData[] = [
  {
    chapterId: 0,
    episodeId: 1,
    content: (
      <>
        <h1>
          Вводный урок.
          <br /> Для кого этот курс?
        </h1>
        <p>
          Общая рекомендация для тебя: проходи минимум один, и максимум два урока в день. Так твое обучение будет эффективнее.
        </p>
        <img style={{ margin: "32px 0" }} src={video} />
        <h3 style={{ marginBottom: 16 }}>Готов пройти курс до конца?</h3>
        <Button variant="yes_green" />
      </>
    ),
  },
  {
    chapterId: 1,
    episodeId: 1,
    content: (
      <>
        <h1>Главные ошибки в отношениях «Доходы-расходы». Кассовый разрыв</h1>
        <p>
          Привет! Прежде чем перейти к первому видеоуроку, советую тебе завести блокнот для записей либо электронный документ.
          Очень важно фиксировать новые знания и выполнять задания письменно.
        </p>
        <img style={{ margin: "32px 0" }} src={video} />
        <h3>Есть ли у тебя кассовый разрыв?</h3>
        <YesNo />
        <p>
          Теперь ты знаешь, какие стратегические ошибки делают бедные люди. Внеси в свой блокнот, какие из них совершаешь ты?
          Оставь закладку на этой странице, при каждой трате или поступлении денег, проверяй себя. Не совершаешь ли ты ошибку
          снова?
        </p>
        <SpeechBaloon>
          А теперь смотри видео-бонус, где я научу тебя структурировать свои расходы. Все открытия также вноси в свой блокнот
        </SpeechBaloon>
        <img style={{ margin: "32px 0" }} src={video} />
        <AttentionWrapper>
          <Attention>
            Внимание! Даже если сейчас ты не зарабатываешь деньги, структура расходов все равно необходима. Это база для
            дальнейших заработков!
          </Attention>
        </AttentionWrapper>
      </>
    ),
  },
  {
    chapterId: 1,
    episodeId: 2,
    content: (
      <>
        <h1>Кредиты — зло или возможность? Как правильно работать с займами.</h1>
        <h3>Есть ли у тебя кредиты?</h3>
        <YesNo />
        <h3>Сколько процентов от дохода занимают твои кредиты?</h3>
        <InputGroup
          header="Сколько процентов от дохода занимают твои кредиты?"
          options={["10-30%", "30-50%", "Более 50%", "Меньше 10%"]}
          type="radio"
        />
        <AttentionWrapper>
          <Attention>Теперь приступай к просмотру видео</Attention>
        </AttentionWrapper>
        <img style={{ margin: "32px 0" }} src={video} />
        <SpeechBaloon>
          Прежде чем переходить к следующим видео, вспомни эксперимент с зефиром и подумай, умеешь ли ты откладывать свои желания?
          Внеси мысли в блокнот.
        </SpeechBaloon>
        <img style={{ margin: "32px 0" }} src={video} />
        <p>
          Тебя будут снова и снова склонять к ипотеке. Запомни манипуляции, к которым будут прибегать банки и твои знакомые,
          которые ипотеку уже взяли:
        </p>
        <ol>
          <li>
            <h2>«Иначе квартиру не купить»</h2>
            <p>Это неправда, и если ты освоишь навыки повышения доходов, ты купишь квартиру без кредита</p>
          </li>
          <li>
            <h2>«Зато свое» </h2>
            <p>Нет, квартира в залоге у банка</p>
          </li>
          <li>
            <h2>«Все так живут» </h2>
            <p>А ты хочешь жить по-другому, это твое право</p>
          </li>
          <li>
            <h2>«Платеж по ипотеке равен плате за аренду. Зачем работать на дядю?» </h2>
            <p>
              Посчитай еще раз, вместе со всеми страховками и скрытыми платежами. А еще прибавь, сколько потеряешь из-за страха
              сменить работу, покинуть город и т.д.
            </p>
          </li>
          <li>
            <h2>«Подумай, где будешь жить в старости?» </h2>
            <p>Ипотечная квартира не обеспечит тебе старость, для этого нужен пассивный доход</p>
          </li>
        </ol>
        <img style={{ margin: "32px 0" }} src={video} />
        <p style={{ width: "100%" }}>
          Итак, вернемся к тесту в начале. <br />
          Давай поймем, насколько твои кредиты <br />
          угрожают твоему будущему?
        </p>
        <ul>
          <li>
            <p>
              <span style={{ textDecoration: "underline" }}>50% и больше</span> — ты в большой опасности, в течение полугода
              необходимо довести бремя хотя бы до 20%
            </p>
          </li>
          <li>
            <p>
              <span style={{ textDecoration: "underline" }}>30-50%</span> — средний уровень опасности, гаси кредит хотя бы до
              уровня - 10% от дохода
            </p>
          </li>
          <li>
            <p>
              <span style={{ textDecoration: "underline" }}>10%-30%</span> — ты переборщил/а, нужно довести кредитное бремя до
              уровня минимум 10% от дохода
            </p>
          </li>
          <li>
            <p>
              <span style={{ textDecoration: "underline" }}>менее 10%</span> — приемлемый уровень, но лучше совсем без кредитов.
              Начинай откладывать деньги в резерв
            </p>
          </li>
        </ul>
        <AttentionWrapper>
          <Attention>
            ЗАПОМНИ главное правило, которое изучили сегодня:
            <br />
            <br />
            «ТРЕНИРУЙ ЗАДЕРЖКУ»
          </Attention>
        </AttentionWrapper>
        <SpeechBaloon>
          И вот тебе мое задание: каждый день отказывай себе в чем-то, без чего можешь обойтись. Не ешь «вот это вкусное
          пирожное», не дай себе поспать «еще пять минут», не покупай «ту красивую кофточку». Такие простые тренировки позволят
          тебе удержаться от глобальных трат.
        </SpeechBaloon>
      </>
    ),
  },
  {
    chapterId: 2,
    episodeId: 1,
    content: (
      <>
        <h1>Правила финансовой грамотности</h1>
        <SpeechBaloon>
          Поздравляю, ты с успехом прошел/а первую главу моего учебника и готов/а идти дальше. Сейчас я расскажу о главных
          правилах финансовой грамотности. Слушай внимательно и обязательно занеси все пункты в свой блокнот, так информация лучше
          запоминается. В финале проверю твои знания, поэтому сохраняй внимание!
        </SpeechBaloon>
        <img style={{ margin: "32px 0" }} src={video} />
        <h3>
          Специальное задание <br />
          по итогам этого урока:
        </h3>
        <AttentionWrapper>
          <div>
            <Question>Как ты считаешь, попал/а ли ты в финансовое болото?</Question>
            <p>Если затрудняешься ответить, пересмотри видео выше. Внеси свои мысли в блокнот, они тебе пригодятся.</p>
          </div>
        </AttentionWrapper>
      </>
    ),
  },
  {
    chapterId: 2,
    episodeId: 2,
    content: (
      <>
        <h1>Что приводит тебя к бедности?</h1>
        <AttentionWrapper>
          <div>
            <p>Внимательно посмотри следующее видео. А после ответь на мои вопросы.</p>
            <Question>Что приводит тебя к бедности?</Question>
            <Question>На чём нельзя экономить?</Question>
          </div>
        </AttentionWrapper>
        <img style={{ margin: "32px 0" }} src={video} />
        <SpeechBaloon>
          Итак, я рассказал о вещах, которые приводят тебя к бедности. Проанализируй свое поведение и выпиши ошибки. Следующие две
          недели следи за собой и постарайся не совершать глупости. Если все же сделал/а, постарайся вовремя исправить, например,
          сдать ненужную покупку обратно в магазин. Ну и переходи к следующему уроку.
        </SpeechBaloon>
      </>
    ),
  },
  {
    chapterId: 2,
    episodeId: 3,
    content: (
      <>
        <h1>Время – деньги. Как правильно считать цену своей работы?</h1>
        <h3>Прежде чем посмотришь следующее видео, ответь:</h3>
        <AttentionWrapper>
          <div>
            <Question>Что для тебя важнее — деньги или время?</Question>
            <p>
              Не торопись, подумай над ответом. И занеси его в свой блокнот, в финале урока нужно будет ответить на вопрос снова.
            </p>
          </div>
        </AttentionWrapper>
        <img style={{ margin: "32px 0" }} src={video} />
        <SpeechBaloon>
          Итак, поздравляю! Ты прошел/а 2 главу моего учебника, ты почти на экваторе.  Давай закрепим второй блок небольшим
          тестом. Ответь на вопросы ниже!
        </SpeechBaloon>
        <InputGroup
          header="1. Что означает «хочется – перехочется» в интерпретации Игоря Рыбакова?"
          options={["Не стоит мечтать ", "Не стоит тратить больше, чем зарабатываешь", "Не стоит хотеть слишком многого"]}
          type="radio"
        />
        <InputGroup
          header="2. Сколько нужно откладывать в резерв?"
          options={["В зависимости от заработка", "Половину дохода", "Минимум 10% от дохода"]}
          type="radio"
        />
        <InputGroup
          header="3. Сколько нужно вкладывать в будущее?"
          options={["Этого делать не нужно", "Все, что остается после обязательных трат", "Минимум 30% от дохода"]}
          type="radio"
        />
        <InputGroup
          header="4. Что такое Октодом?"
          options={[
            "Восьмикомнатная квартира",
            "Созвездие справа от Малой Медведицы",
            "Схема важнейших частей человеческой жизни",
          ]}
          type="radio"
        />
        <InputGroup
          header="5. Что значит быть богатым в подходе Рыбакова?"
          options={["Зарабатывать от 1 млн рублей в месяц", "Любить и быть любимым", "Иметь много счастливых минут в жизни"]}
          type="radio"
        />
        <InputGroup
          header="6. На чем не стоит экономить?"
          options={["На второй половине", "На резерве", "На детях", "На поддержании статуса", "На росте доходов"]}
          type="check"
        />
      </>
    ),
  },
  {
    chapterId: 3,
    episodeId: 1,
    content: (
      <>
        <h1>Почему большинство людей ненавидят свою работу?</h1>
        <SpeechBaloon>
          В этом блоке я расскажу, почему люди годами зарабатывают гроши и что делать, чтобы выйти на другой уровень заработка?
          Сконцентрируй все свое внимание. В финале будет проверка!
        </SpeechBaloon>
        <img style={{ margin: "32px 0" }} src={video} />
        <AttentionWrapper>
          <Attention>Внимание, важное задание!</Attention>
        </AttentionWrapper>
        <p style={{ marginTop: 32 }}>
          Ты знаешь, что больше 70% людей ненавидят свою работу?! Да, это так.
          <br />
          <br />
          Так вот тренировка от меня: проанализируй свое ближайшее окружение, любят ли твои друзья и родственники свою работу?
          <br />
          <br />
          Чем больше вокруг тебя людей, которые ненавидят свое дело, тем выше шанс, что ты не добьешься успеха. Окружение тебе
          следует сменить. Как это сделать, я расскажу в конце этого курса. А пока с усердием выполняй следующие задания.
        </p>
      </>
    ),
  },
  {
    chapterId: 3,
    episodeId: 2,
    content: (
      <>
        <h1>Как начать зарабатывать больше?</h1>
        <p>
          Один из главных признаков «плохой» работы — низкая зарплата. Запомни, не бывает хорошей работы за печеньки. Люди делают
          дело, чтобы получать достойно. Так давай разберем, что же мешает людям зарабатывать?
        </p>
        <img style={{ margin: "32px 0" }} src={video} />
        <SpeechBaloon>
          Если ты сейчас работаешь или думаешь о том, куда пойти работать, проанализируй: насколько уникальна твоя компетенция?
        </SpeechBaloon>
        <h3>ЗАПОМНИ ВАЖНОЕ ПРАВИЛО, КОТОРОЕ РАБОТАЕТ ВСЕГДА:</h3>
        <AttentionWrapper>
          <Attention>Чтобы зарабатывать больше многих, надо уметь то, что не умеют многие</Attention>
        </AttentionWrapper>
        <p style={{ marginTop: 32 }}>
          В следующем видео расскажу, что делать, чтобы повысить доход. Смотри и обязательно заноси инсайты в свой блокнот.
        </p>
        <img style={{ margin: "32px 0" }} src={video} />
        <h3>Вопрос к тебе:</h3>
        <AttentionWrapper>
          <Attention>
            Есть ли достойная работа в городе, в котором ты сейчас живешь? Если нет, подумай, почему ты не yезжаешь?
          </Attention>
        </AttentionWrapper>
        <p style={{ marginTop: 32 }}>
          Страх — то, что парализует. И чтобы поставить себе этот страх на службу, выполни мое упражнение: представь, что будешь
          жить на нищенскую зарплату всю жизнь, прямо в деталях представь! Страшно? А теперь возьми этот страх и используй его,
          чтобы все изменить. Сменить работу, переехать в другой город, овладеть новой профессией. Мои рекомендации в следующем
          уроке.
        </p>
      </>
    ),
  },
  {
    chapterId: 3,
    episodeId: 3,
    content: (
      <>
        <h1>Какие профессии стоит осваивать прямо сейчас?</h1>
        <p>
          Самая распространенная ошибка — считать, что профессию нужно выбирать один раз и на всю жизнь. Эти времена давно прошли.
          Если видишь, что дело устарело, или в твоем сегменте больше нет бюджетов — меняй. Это главное правило хороших заработков
          в найме. В следующем видео смотри, какие навыки будут востребованы в будущем.
        </p>
        <img style={{ margin: "32px 0" }} src={video} />
        <ol>
          <li>
            <p>Посмотри вторую часть видео еще раз.</p>
          </li>
          <li>
            <p>Зафиксируй все компетенции, которые следует освоить, чтобы быть успешным в современном мире.</p>
          </li>
          <li>
            <p>Выдели те, где у тебя просадка. Очень важно прокачать слабые места.</p>
          </li>
          <li>
            <p>
              Найди людей, которые уже это сделали, и присоединись к ним — установи контакт и поддерживай его. Лучшее, что ты
              можешь сделать — это быть в кругу успешных людей. Этот круг автоматически тебя подтянет.
            </p>
          </li>
        </ol>
        <SpeechBaloon>
          Итак, ты все ближе к финишу, и почти готов/а к повышению дохода. Давай же закрепим третью главу небольшим тестом. После
          можешь переходить к четвертой главе.
        </SpeechBaloon>
        <InputGroup
          header="1. Какая доля людей по статистике ненавидят свою работу?"
          options={["30%", "50%", "Больше 70%"]}
          type="radio"
        />
        <InputGroup
          header="2. Первый и главный признак плохой работы?"
          options={["Тебе она не нравится", "Низкая зарплата", "Склочный коллектив"]}
          type="radio"
        />
        <InputGroup
          header="3. За какую работу никогда не платят много?"
          options={["Которую делаешь без энтузиазма", "За ту, которую могут делать многие", "В найме вообще много не платят"]}
          type="radio"
        />
        <InputGroup
          header="4. Какие профессии будут выигрывать у алгоритмов и роботов?"
          options={["Нет таких, роботы победят", "Творческие профессии", "Очень простые, люди дешевле роботов"]}
          type="radio"
        />
      </>
    ),
  },
  {
    chapterId: 4,
    episodeId: 1,
    content: (
      <>
        <h1>Правила инвестирования для новичков</h1>
        <h3>ВНИМАНИЕ!</h3>
        <AttentionWrapper>
          <div>
            <Attention>Сейчас очень много людей говорят о пассивном доходе. </Attention>
            <p>А правда, что может быть лучше: сидишь, ничего не делаешь, а деньги капают. Но держи свой ум холодным.</p>
          </div>
        </AttentionWrapper>
        <p>
          Начинающие инвесторы очень часто теряют деньги, в период кризиса почти всегда теряют. Поэтому я советую переходить к
          инвестициям, когда ты уже крепко стоишь на ногах и у тебя есть источник хорошего заработка, а лучше не один. Тем не
          менее, тема важная, и ввести тебя в курс я обязан. Поехали!
        </p>
        <img style={{ margin: "32px 0" }} src={video} />
        <p>
          Зафиксируй в своем блокноте три основных условия, при существовании которых ты можешь начать инвестиции. Не помнишь?
          Тогда пересмотри видео снова. И самое главное правило от Игоря Рыбакова: не думай, что все сможешь сделать
          самостоятельно. Лучше присоединись к стратегиям опытных инвесторов.
        </p>
        <SpeechBaloon>
          Переходи ко второму уроку главы — там я дам главное правило, ради которого стоило записывать весь курс.
        </SpeechBaloon>
      </>
    ),
  },
  {
    chapterId: 4,
    episodeId: 2,
    content: (
      <>
        <h1>Инвестиции в себя. Как вырваться из бедности?</h1>
        <img style={{ margin: "32px 0" }} src={video} />
        <h3>Задание:</h3>
        <p>
          Выпиши от 5 до 10 вариантов профессий или компетенции, которые ты можешь освоить, чтобы резко повысить свой доход уже в
          ближайшие полгода. Не дожидаясь окончания этого курса, прямо сейчас, изучи школы, где ты можешь освоить новые навыки, и
          приступай. Я жду тебя на стороне успеха.
        </p>
        <AttentionWrapper>
          <Attention>Самая важная инвестиция, которую ты можешь сделать — это инвестиция в себя. </Attention>
        </AttentionWrapper>
        <p>
          Последние турбуленции в мире показали, что единственное, что тебя прокормит везде — это твоя голова. Акции могут
          рухнуть, биржи — остановить торги, недвижимость можно арестовать. а вот твои навыки — самая твердая валюта.
        </p>
        <SpeechBaloon>
          Я обещаю, легко не будет. Но ты обязательно сможешь! Я верю в тебя. Проходи тест и переходи к бонусному уроку
        </SpeechBaloon>
        <InputGroup
          header="1. Что такое «эффект крабов»?"
          options={[
            "Когда старые друзья не дают вырваться из бедности и рутины",
            "Когда вырвался из бедности и можешь позволить себе крабов в ресторане",
            "Когда уцепился за лучшую возможность клещами",
          ]}
          type="radio"
        />
        <InputGroup
          header="2. В каком случае можно начинать инвестировать?"
          options={[
            "У тебя нет долгов",
            "Когда прошел курсы начинающих инвесторов",
            "Сформирован резерв",
            "Ты больше не хочешь работать",
          ]}
          type="check"
        />
        <InputGroup
          header="3. Главная ошибка начинающих инвесторов?"
          options={["Отсутствие знаний о ценных бумагах", "Инвестиции в себя", "Инвестировать с кредитным плечом"]}
          type="radio"
        />
        <InputGroup
          header="4. Какой вид инвестиций я, Игорь Рыбаков, советую для молодых людей?"
          options={["В недвижимость", "В акции крупных промышленных компаний", "В IT сектор", "Инвестиции в себя"]}
          type="radio"
        />
      </>
    ),
  },
  {
    chapterId: 5,
    episodeId: 1,
    content: (
      <>
        <h1>А что, если я предприниматель?</h1>
        <SpeechBaloon>
          Я убежден, что предприимчивыми люди рождаются. Иначе они никогда не научились бы ходить, разговаривать и не придумывали
          бы игры. Все это компетенции предпринимателя. Но стоит ли всем предприимчивым идти в бизнес? Я думаю, нет. Но прежде чем
          решить что-то для себя, посмотри следующее видео. Оно поможет сориентироваться.
        </SpeechBaloon>
        <img style={{ margin: "32px 0" }} src={video} />
        <p>
          Как ты думаешь, готов ли ты к своему делу или хочешь поработать в найме в сильной команде? Занеси в блокнот свои мысли.
          Это и будет твое финальное задание перед важным тестом.
        </p>
        <img style={{ margin: "32px 0" }} src={video} />
        <h3>Какой ты предприниматель?</h3>
        <p>
          Предлагаю тебе небольшой тест на готовность к бизнесу. Если получишь положительный результат, ты готов идти дальше. И
          этот курс только первый километр твоего пути к успеху.
        </p>
        <InputGroup
          header="1. Чего тебе больше всего хочется сейчас в твоем деле?"
          options={["Автономности в принятии решений", "Больше денег", "Реализации своих собственных идей"]}
          type="radio"
        />
        <InputGroup
          header="2. Готов/а ли ты брать на себя ответственность?"
          options={[
            "Только за свои действия",
            "Готов брать ответственность за команду",
            "Готов брать ответственность и решать то, что произошло не по моей вине",
          ]}
          type="radio"
        />
        <InputGroup
          header="3. Готов/а ли ты расставаться с людьми из команды?"
          options={["Да, если они мне мешают", "Да, если человек мешает делу", "Нет, я не могу уволить человека"]}
          type="radio"
        />
        <InputGroup
          header="4. Что для тебя деньги?"
          options={[
            "Ресурс для реализации мечты",
            "Ресурс для покупки вещей, о которых давно мечтал",
            "Ресурс для свободы и автономности",
          ]}
          type="radio"
        />
        <AttentionWrapper>
          <Attention>Бонус видео после теста</Attention>
        </AttentionWrapper>
        <img style={{ margin: "32px 0" }} src={video} />
        <p>
          И прежде чем попрощаться окончательно, я хочу еще раз напомнить тебе о записях в блокноте. Все те правила, что там есть,
          помогут тебе принимать верные решения без потерь. Каждый раз, когда будешь делать важный шаг, сверяйся с этими
          правилами, и твои шансы на успех вырастут в 10 раз!
        </p>
      </>
    ),
  },
]
