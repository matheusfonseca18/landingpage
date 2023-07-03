import "../StyleSheets/Home.css";
import padrao from "../Assets/padrao.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="esq">
        <h1 className="titulo">Organize suas tarefas em apenas 1 lugar!</h1>
        <h2 className="subT">Junte-se a milhões de pessoas para capturar ideias, organizar a vida e fazer algo criativo todos os dias.</h2>
        <div className="botoes">
          <a href="https://ticktick.com/signup" target="blank">
            <div className="conta">Crie sua conta</div>
          </a>
          <a href="https://ticktick.com/about/download" target="blank"><div className="baixar">Download</div></a>
        </div>
      </div>
      <div className="padrao">
        <img src={padrao} alt="" className="back" />
      </div>
    </div>
  );
};

export default Home;
