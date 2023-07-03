import "../StyleSheets/Sec2.css";
import dispo from '../Assets/disposi.png'

function Sec2() {
  return (
    <div className="Sec2">
      <div className="conteudo">
        <h2 className="sec-titu">Use o TickTick em qualquer dispositivo</h2>
        <h3 className="sec-sub">Nao importa onde estiver, nunca perca um compromisso</h3>
        <ul className="lista">
          <li> 
          Seja uma tarefa relacionada ao trabalho ou uma meta pessoal, TickTick está aqui para lhe ajudar a gerenciar todas as suas tarefas.
          </li>
          <li>
          Defina um lembrete e deixe de se preocupar com prazos não cumpridos a partir de agora.
          </li>
          <li>
          Com cinco diferentes visualizações de calendário, você pode verificar e gerenciar seus compromissos de uma maneira mais conveniente.
          </li>
        </ul>
      </div>
      <img src={dispo} alt="" className="ilustra"/>
    </div>
  );
}

export default Sec2;
