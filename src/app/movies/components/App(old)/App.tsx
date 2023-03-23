// import React, { useEffect, useState } from 'react';
// import Character from "../Character/Character";
// import Abilities from '../Abilities/Abilities';
// import { Class } from '../Class/Class';
// import { Footer } from '../Footer(old)/Footer';
// import { Header } from '../header/Header';
// import { Parameters } from '../Parameters/Parameters';
// import { Race } from '../Race(old)/Race';
// import { ResultList } from '../ResultList/ResultList';
// import { Staff } from '../Staff/Staff';
// import { IAbility, IParameter } from '../Types/Types';
// import './App.css';

// function App() {
//     const [race, setRace] = useState<string>('Подлежит выбору');
//     const [parameters, setParameters] = useState<IParameter[]>([]);
//     const [characterClass, setCharacterClass] = useState<string>('Подлежит выбору');
//     const [abilities, setAbilities] = useState<IAbility[]>([]);
//     const [isModalOpen, setModalOpen] = useState(false);

//     useEffect(() => {
//         // console.log(abilities);
//     }, [abilities]);

//     const handleOpenModal = () => {
//         setModalOpen(!isModalOpen);
//     };

//     return (
//         <div className="App">
//             <Header openModal={handleOpenModal} isModalOpen={isModalOpen} />
//             <div id="stars"></div>
//             <div id="stars2"></div>
//             <div id="stars3"></div>

//             <Race setRace={setRace} />
//             <Parameters setParameters={setParameters} />
//             <Class setCharacterClass={setCharacterClass} />
//             {/* <Character race={race} parameters={parameters} /> */}
//             <Abilities parameters={parameters} race={race} setResult={setAbilities} character={characterClass} />
//             <Staff />
//             {isModalOpen && <ResultList />}
//             <Footer />
//         </div>
//     );
// }

// export default App;
