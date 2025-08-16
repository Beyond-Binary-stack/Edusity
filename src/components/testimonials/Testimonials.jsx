import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0); // fix: tx should persist

  const slideForward = () => {
    if (tx.current > -75) { // allow 4 slides: 0 → -25 → -50 → -75
      tx.current -= 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emillia Clark</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                Choosing to study at Edusity was a life-changing decision for me.
                The faculty members were always willing to support and guide me,
                and the learning environment helped me grow both academically and personally
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Oliver Jenkins</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                Attending Edusity gave me the confidence and skills I needed to succeed in my field.
                From the moment I stepped on campus, I felt a sense of belonging.
                The mentorship I received and the opportunities for hands-on learning were second to none
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Isla Morgan</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                My time at Edusity was filled with growth, discovery, and unforgettable experiences.
                The university provided me with all the tools I needed to thrive—both inside and outside the classroom.
                I will always be grateful for the friendships and knowledge I gained here
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>James Walker</h3>
                  <span>Edusity, UK</span>
                </div>
              </div>
              <p>
                Edusity has set a new standard for education in my eyes. The integration of technology,
                the dedication of the staff, and the vibrant student community made my academic journey truly exceptional.
                I couldn't have asked for a better university experience
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
