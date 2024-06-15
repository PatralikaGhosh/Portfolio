import { useEffect } from 'react';
import anime from 'animejs';
import './styles_animation.css';


const MyComponent: React.FC = () => {
    useEffect(() => {
      anime({
        targets: '.letter__part',
        translateY: {
          value: [-30, 0],
          duration: 900,
          delay: 1000,
          elasticity: 600,
          easing: 'easeOutElastic',
        },
        opacity: {
          value: [0, 1],
          duration: 300,
          easing: 'linear',
          delay: 1000,
        },
      });
  
      anime({
        targets: '.color-1',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutElastic',
        duration: 4000,
        delay: 1000,
        loop: false,
        direction: 'alternate',
      });
  
      anime({
        targets: '.color-3',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutElastic',
        duration: 4000,
        delay: 1200,
        loop: false,
        direction: 'alternate',
      });
  
      anime({
        targets: '.color-2',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutElastic',
        duration: 4000,
        delay: 1400,
        loop: false,
        direction: 'alternate',
      });
    }, []);
  
    return (
      <div id="playPause">
        <svg width="50%" viewBox="0 0 300 63.3" className="letters letters--effect-1">
        {/* S */}
        <g className="letter letter--6">
          <g className="letter__part">
            <path className="letter__layer color-1" d="M163,39.8c-1.2,7.4-4.2,12.4-11.7,12.4c-10.5,0-12.3-10.1-12.3-22.5S141.3,7.2,151.8,7.2c7.4,0,10.5,5.1,11.7,12.4" />
            <path className="letter__layer color-3" d="M163,39.8c-1.2,7.4-4.2,12.4-11.7,12.4c-10.5,0-12.3-10.1-12.3-22.5S141.3,7.2,151.8,7.2c7.4,0,10.5,5.1,11.7,12.4" />
            <path className="letter__layer color-2" d="M163,39.8c-1.2,7.4-4.2,12.4-11.7,12.4c-10.5,0-12.3-10.1-12.3-22.5S141.3,7.2,151.8,7.2c7.4,0,10.5,5.1,11.7,12.4" />
          </g>
        </g>
  
          {/* K */}
          <g className="letter letter--2">
            <g className="letter__part">
              <path className="letter__layer color-1" d="M43,45.3l0,-38.5" />
              <path className="letter__layer color-1" d="M43,28.2l12.8,-21.4l-12.8,21.4l12.8,21.4z" />
            </g>
            <g className="letter__part">
              <path className="letter__layer color-3" d="M43,45.3l0,-38.5" />
              <path className="letter__layer color-3" d="M43,28.2l12.8,-21.4l-12.8,21.4l12.8,21.4z" />
            </g>
            <g className="letter__part">
              <path className="letter__layer color-2" d="M43,45.3l0,-38.5" />
              <path className="letter__layer color-2" d="M43,28.2l12.8,-21.4l-12.8,21.4l12.8,21.4z" />
            </g>
          </g>
  
          {/* I */}
          <g className="letter letter--3">
            <g className="letter__part">
              <path className="letter__layer color-1" d="M73,7.3v38.5" />
              <path className="letter__layer color-3" d="M73,7.3v38.5" />
              <path className="letter__layer color-2" d="M73,7.3v38.5" />
            </g>
          </g>
  
          {/* L */}
          <g className="letter letter--4">
            <g className="letter__part">
              <path className="letter__layer color-1" d="M103,7.3v38.5h-17.2" />
              <path className="letter__layer color-3" d="M103,7.3v38.5h-17.2" />
              <path className="letter__layer color-2" d="M103,7.3v38.5h-17.2" />
            </g>
          </g>
  
          {/* L */}
          <g className="letter letter--5">
            <g className="letter__part">
              <path className="letter__layer color-1" d="M133,7.3v38.5h-17.2" />
              <path className="letter__layer color-3" d="M133,7.3v38.5h-17.2" />
              <path className="letter__layer color-2" d="M133,7.3v38.5h-17.2" />
            </g>
          </g>
  
          {/* S */}
          <g className="letter letter--6">
            <g className="letter__part">
              <path className="letter__layer color-1" d="M163,39.8c-1.2,7.4-4.2,12.4-11.7,12.4c-10.5,0-12.3-10.1-12.3-22.5S141.3,7.2,151.8,7.2c7.4,0,10.5,5.1,11.7,12.4" />
              <path className="letter__layer color-3" d="M163,39.8c-1.2,7.4-4.2,12.4-11.7,12.4c-10.5,0-12.3-10.1-12.3-22.5S141.3,7.2,151.8,7.2c7.4,0,10.5,5.1,11.7,12.4" />
              <path className="letter__layer color-2" d="M163,39.8c-1.2,7.4-4.2,12.4-11.7,12.4c-10.5,0-12.3-10.1-12.3-22.5S141.3,7.2,151.8,7.2c7.4,0,10.5,5.1,11.7,12.4" />
            </g>
          </g>
        </svg>
      </div>
    );
  };
  
  export default MyComponent;