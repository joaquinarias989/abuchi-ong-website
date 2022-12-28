import introImg from '../../../assets/intro-img.svg';

function Intro() {
  return (
    <div className='intro'>
      <div className='intro__top'>
        <div className='intro__title'>
          <h1>Titulo Corto</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button type='button' className='btn-main'>
            CONOCÉNOS
          </button>
        </div>
        <div className='intro__imgs'>
          <img src={introImg} />
          <img src={introImg} />
        </div>
      </div>
      <div className='intro__stats'>
        <img src=''></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          ipsa.
        </p>
        <div>
          <span>83 </span>
          <span>Familias ayudadas</span>
        </div>
        <div>
          <span>16 de Octubre </span>
          <span>Día Mundial de la Alimentación</span>
        </div>
      </div>
    </div>
  );
}

export default Intro;
