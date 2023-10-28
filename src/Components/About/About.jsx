import React from 'react'
import './About.css'


function Home() {
  return (
    <>
      <div className='home'>
        <div className="hero">
          ABOUT US
        </div>
      </div>

      <div className="about">

        <h1 className='heading'>
          INTRODUCTION
        </h1>

        <div className='intro'>
          <div className='logo'>

          </div>
          <div className='intro-text'>
            <p>
              At <b>Pimpri Chinchwad College of Engineering (PCCOE)</b>, we believe that nurturing creativity and talent is an integral part of a holistic education. Our Art Circle is a vibrant and dynamic student organization dedicated to promoting cultural activities and providing a platform for students to showcase their diverse arts, skills, and talents. With a clear set of objectives and a range of functions, the Art Circle plays a pivotal role in enriching the campus experience and fostering personal growth.
            </p><br/>
            <p>
              The PCCOE Art Circle is a community of individuals who are passionate about the arts, working together to cultivate and celebrate the rich tapestry of talent within our institution. We believe that the arts play a vital role in personal development, and through our efforts, we aim to encourage students to reach their full creative potential.
            </p>
          </div>

        </div>

        <h1 className='heading'>
           CLUBS
        </h1>

        <div className='club'>
          <div className="summary head left">
              <div className="top">
               Theatre Club 
              </div>
              <div className="bottom">
              To nurture creative expression and cultural understanding. We achieve this by staging productions, offering workshops, encouraging scriptwriting, conducting auditions, and providing opportunities in stagecraft. Join us in exploring the world of drama and storytelling at PCCOE's Theatre Club.
              </div>
          </div>
          <div className="img right">
            <img src={require('../../assest/about/theatre.png')}/>
          </div>
        </div>

        <div className='club'>
        <div className="img right">
            <img src={require('../../assest/about/dance.png')}/>
          </div>
          <div className="summary head left">
              <div className="top">
               Dancing Club 
              </div>
              <div className="bottom">
              The Dancing Club at our institution is a dynamic platform for students to express themselves through rhythmic movements. Whether you're an experienced dancer or a novice, this club welcomes all to learn, practice, and perform various dance styles, promoting physical fitness and artistic expression.
              </div>
          </div>
          
        </div>

        <div className='club'>
          <div className="summary head left">
              <div className="top">
               Singing Club 
              </div>
              <div className="bottom">
              In the Singing Club, your melodious voice finds a home. Whether you're a seasoned vocalist or a beginner, this club offers a space to share your passion for music and hone your singing skills, from classical to contemporary genres. </div>
          </div>
          <div className="img right">
            <img src={require('../../assest/about/singing.png')}/>
          </div>
        </div>

        <div className='club'>
        <div className="img right">
            <img src={require('../../assest/about/music.png')}/>
          </div>
          <div className="summary head left">
              <div className="top">
               Music Club 
              </div>
              <div className="bottom">
              The Music Club is where melodies meet enthusiasts. Musicians of all levels and styles gather to appreciate, create, and perform music, forming a harmonious community dedicated to the art of sound. </div>
          </div>
          
        </div>

        <div className='club'>
          <div className="summary head left">
              <div className="top">
               Rangoli Club 
              </div>
              <div className="bottom">
              Our Rangoli Club is committed to preserving and celebrating the timeless Indian art of Rangoli. Join us to learn, create, and appreciate intricate and vibrant designs, adding a touch of tradition to your artistic expression.
              </div>
          </div>
          <div className="img right">
            <img src={require('../../assest/about/rangoli.png')}/>
          </div>
        </div>

        <div className='club'>
        <div className="img right">
            <img src={require('../../assest/about/paint.png')}/>
          </div>
          <div className="summary head left">
              <div className="top">
               Painting Club 
              </div>
              <div className="bottom">
              The Painting Club provides a canvas for your creativity. Whether you're a novice or an experienced artist, this club is your space to explore different painting techniques and express your artistic vision on paper or canvas.
              </div>
          </div>
          
        </div>

        <div className='club'>
          <div className="summary head left">
              <div className="top">
               Writing Club 
              </div>
              <div className="bottom">
              If you have a flair for words, the Writing Club is where you belong. Poets, storytellers, and wordsmiths gather to share, develop, and celebrate their writing skills in a supportive creative environment.
              </div>
          </div>
          <div className="img right">
            <img src={require('../../assest/about/write.png')}/>
          </div>
        </div>

        <div className='club'>
        <div className="img right">
            <img src={require('../../assest/about/anchor.png')}/>
          </div>
          <div className="summary head left">
              <div className="top">
               Anchoring Club 
              </div>
              <div className="bottom">
              The Anchoring Club focuses on refining your public speaking and presentation skills. Join us to learn the art of hosting events, conducting interviews, and public speaking, all while being part of a vibrant and enthusiastic community.
              </div>
          </div>
          
        </div>

        <div className='club'>
          <div className="summary head left">
              <div className="top">
               Photography Club 
              </div>
              <div className="bottom">
              The Photography Club is dedicated to capturing moments and telling stories through visuals. Whether you're a novice or an experienced photographer, join us to learn techniques, explore your artistic eye, and document campus life through your lens.</div>
          </div>
          <div className="img right">
            <img src={require('../../assest/about/photo.png')}/>
          </div>
        </div>

        <div className='club'>
        <div className="img right">
            <img src={require('../../assest/about/film.png')}/>
          </div>
          <div className="summary head left">
              <div className="top">
               Short Film Club 
              </div>
              <div className="bottom">
              Aspiring filmmakers and storytellers find their home in the Short Film Club. Join us to learn the art of filmmaking, from scriptwriting to production, and share your cinematic creations with a community passionate about storytelling through film.</div>
          </div>
          
        </div>


      </div>

    </>
  )
}

export default Home
