import * as React from "react";
import NavBar from "../components/navbar";
import { useSprings } from "@react-spring/web";

const Home = () => {

  // const text = [...'hey there how are you']
  // const from = { transform: 'translate3d(0,0px,0)' }
  // const to = inView ? [{ transform: 'translate3d(0,-40px,0)' }, { transform: 'translate3d(0,40px,0)' }] : from

  // const base = {
  //   config: { mass: 5, tension: 2000, friction: 200 },
  //   from: from,
  //   to: to,
  // }

  // const springs = useSprings(text.length, text.map((t, i) => ({ ...base, delay: 100 * i })))

  // const handwriting = () => {
  // return (
  //   <div>
  //     {springs.map((s, i) => {
  //       return (
  //         <animated.span key={`char${i}`} style={s}>
  //           {text[i] === ' ' ? <>&nbsp;</> : text[i]}
  //         </animated.span>
  //       )
  //     })}
  //   </div>
  // )
  //   }

  return (
    <div className="page-container">
      <NavBar/>
      {/* {handwriting()} */}
      <p className="cursive-font">
        Hi there, <br />I build beautiful, accessible and efficient websites. <br />
        Take a look around, hope you enjoy.
        <span className="align-right"> -Nicole</span>
      </p>
    </div>
  );
};

export default Home;
