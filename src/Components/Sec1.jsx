import React from "react";
import "../StyleSheets/Sec1.css";
import magic from '../Assets/magic.svg'
import calendario from '../Assets/calendario.svg'
import sync from '../Assets/sync.svg'
import team from '../Assets/team.svg'


const girar1 = () => {
  let card = document.querySelector('div.quadr1');
  let arroz = document.querySelector('p.normal1');
  let feijao = document.querySelector('img.normal1');
  card.classList.toggle('muda1');
  arroz.classList.toggle('muda1');
  feijao.classList.toggle('muda1');
};

const girar2 = () => {
  let card = document.querySelector('div.quadr2');
  let arroz = document.querySelector('p.normal2');
  let feijao = document.querySelector('img.normal2');
  card.classList.toggle('muda2');
  arroz.classList.toggle('muda2');
  feijao.classList.toggle('muda2');
};

const girar3 = () => {
  let card = document.querySelector('div.quadr3');
  let arroz = document.querySelector('p.normal3');
  let feijao = document.querySelector('img.normal3');
  card.classList.toggle('muda3');
  arroz.classList.toggle('muda3');
  feijao.classList.toggle('muda3');
};

const girar4 = () => {
  let card = document.querySelector('div.quadr4');
  let arroz = document.querySelector('p.normal4');
  let feijao = document.querySelector('img.normal4');
  card.classList.toggle('muda4');
  arroz.classList.toggle('muda4');
  feijao.classList.toggle('muda4');
};

function Sec1() {
  return (
    <div className="Sec1">
      <h2 className="benef">Benefícios do TickTick no seu dia a dia</h2>
      <div className="isso">

        <div className="quadr1" onMouseOver={girar1} onMouseOut={girar1}>
          <img src={calendario} alt="" className="normal1"/>
          <h3>Gerenciamento de tarefas eficiente</h3>
          <p className="normal1">O TickTick oferece uma plataforma intuitiva e poderosa para gerenciar suas tarefas diárias. Com recursos como listas de tarefas, lembretes, prazos e prioridades, você pode organizar suas atividades de forma eficiente, garantindo que nada seja esquecido.</p>
        </div>

        <div className="quadr2" onMouseOver={girar2} onMouseOut={girar2}>
          <img src={sync} alt="" className="normal2"/>
          <h3>Sincronização em todos os dispositivos</h3>
          <p className="normal2">Com o TickTick, você pode acessar suas tarefas em qualquer lugar, a qualquer momento. O aplicativo sincroniza perfeitamente em todos os seus dispositivos, como smartphones, tablets e computadores, para que você possa manter-se atualizado e produtivo, esteja onde estiver.</p>
        </div>

        <div className="quadr3" onMouseOver={girar3} onMouseOut={girar3}>
          <img src={team} alt="" className="normal3"/>
          <h3>Colaboração simplificada</h3>
          <p className="normal3">Se você trabalha em equipe, o TickTick facilita a colaboração. Você pode compartilhar listas de tarefas, delegar atividades e acompanhar o progresso em tempo real. Isso promove a transparência e a comunicação eficaz, garantindo que todos estejam alinhados e produtivos.</p>
        </div>

        <div className="quadr4" onMouseOver={girar4} onMouseOut={girar4}>
        <img src={magic} alt="" className="normal4"/>
          <h3>Recursos avançados e personalização</h3>
          <p className="normal4">O TickTick oferece uma variedade de recursos avançados para melhorar sua produtividade. Você pode criar lembretes recorrentes, anexar arquivos às suas tarefas, definir etiquetas e filtrar suas listas de acordo com suas preferências. A personalização permite adaptar às suas necessidades, garantindo uma experiência personalizada.</p>
        </div>

      </div>
    </div>
  );
}

export default Sec1;
