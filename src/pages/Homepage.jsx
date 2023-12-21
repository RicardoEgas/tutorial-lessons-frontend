/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorials } from '../redux/tutorialSlice';
import './home.css';

const slideWidth = 30;

// console.log('hompage path: ', window.location.pathname);

const Home = () => {
  const dispatch = useDispatch();
  const tutorials = useSelector((state) => state.tutorials.tutorials);
  const [items, setItems] = useState([]);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  useEffect(() => {
    dispatch(getTutorials());
  }, [dispatch]);

  useEffect(() => {
    const tutorialItems = tutorials.map((tutorial) => ({
      course: {
        title: tutorial.title,
        image: tutorial.photo,
      },
    }));
    console.log(tutorialItems);
    setItems([...tutorialItems]);
  }, [tutorials]);

  const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const createItem = (position, idx) => {
    const distance = idx - activeIdx;
    const translateValue = distance * slideWidth;
    
    const item = {
      styles: {
        transform: `translateX(${translateValue}rem)`,
      },
      course: items[idx].course,
    };
  
    console.log('Active Index:', activeIdx);
    console.log('TranslateX:', translateValue);
  
    switch (position) {
      case bigLength - 1:
      case bigLength + 1:
        item.styles = { ...item.styles, filter: 'grayscale(1)' };
        break;
      case bigLength:
        break;
      default:
        item.styles = { ...item.styles, opacity: 1 };
        break;
    }
  
    return item;
  };
  

  const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx);
    console.log(item);

    return (
      <li className="carousel__slide-item" style={item.styles}>
        <div className="carousel__slide-item-img-link">
          <img src={item.course.image} alt={item.course.title} />
        </div>
        <div className="carousel-slide-item__body">
          <h4>{item.course.title}</h4>
        </div>
      </li>
    );
  };

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setActiveIdx((activeIdx + bigLength - jump) % bigLength);
    }
    console.log('Previous Clicked');
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setActiveIdx((activeIdx + jump) % bigLength);
    }
    console.log('Next Clicked');
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  // useEffect(() => {
  //   if (isTicking) sleep(300).then(() => setIsTicking(false));
  // }, [isTicking, sleep]);

  useEffect(() => {
    const handleSleep = async () => {
      if (isTicking) {
        await sleep(300);
        setIsTicking(false);
      }
    };
  
    handleSleep();
  }, [isTicking]);
  

  return (
    <>
      <div className="home">
        <h1>Welcome to Our Application</h1>
        <p className="home-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          sequi, odit totam consequuntur doloremque beatae cum quidem, cupiditate
          possimus nihil alias harum laborum facilis maxime accusamus veritatis
          reiciendis repellat facere!
        </p>
        <div className="carousel__wrap">
          <div className="carousel__inner">
            <button
              className="carousel__btn carousel__btn--prev"
              onClick={() => prevClick()}
            >
              <i className="carousel__btn-arrow carousel__btn-arrow--left" />
            </button>
            <div className="carousel__container">
              <ul className="carousel__slide-list">
                {items.map((item, i) => (
                  <CarouselSlideItem
                    key={i}
                    idx={i}
                    pos={i}
                    activeIdx={activeIdx}
                  />
                ))}
              </ul>
            </div>
            <button
              className="carousel__btn carousel__btn--next"
              onClick={() => nextClick()}
            >
              <i className="carousel__btn-arrow carousel__btn-arrow--right" />
            </button>
            <div className="carousel__dots">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={i === activeIdx ? 'dot active' : 'dot'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
