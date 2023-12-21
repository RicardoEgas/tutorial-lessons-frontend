/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './home.css'

const slideWidth = 30;

const _items =  [
  {
      course: {
          title: 'Computer Course',
          desc: 'This a computer course',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZyUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
      },
  },
  {
    course: {
        title: 'Computer Course',
        desc: 'This a computer course',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZyUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
    },
},
{
  course: {
      title: 'Computer Course',
      desc: 'This a computer course',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZyUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
},
{
  course: {
      title: 'Computer Course',
      desc: 'This a computer course',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZyUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
},
{
  course: {
      title: 'Computer Course',
      desc: 'This a computer course',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZyUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
},
{
  course: {
      title: 'Computer Course',
      desc: 'This a computer course',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZyUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
},
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${(position - 1) * slideWidth}rem)`,
    },
    course: _items[idx].course,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: 'grayscale(1)' };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 1 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.course.image} alt={item.course.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.course.title}</h4>
        <p>{item.course.desc}</p>
      </div>
    </li>
  );
};

const Home = () => {
  const [items, setItems] = useState(Array.from(Array(_items.length).keys()));
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map(
          (_, i) => prev[(i - jump + bigLength) % bigLength]
        );
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  return (
    <>
      <div className='home'>
        <h1>Welcome to Our Application</h1>
        <p className='home-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sequi, odit totam consequuntur doloremque beatae cum quidem, cupiditate possimus nihil alias harum laborum facilis maxime accusamus veritatis reiciendis repellat facere!</p>
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
                {items.map((pos, i) => (
                  <CarouselSlideItem
                    key={i}
                    idx={i}
                    pos={pos}
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
              {items.slice(0, length).map((pos, i) => (
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