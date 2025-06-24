import React from 'react'
import Story from './Story';
import './StoryReel.css';



function StoryReel() {
  return (
   <div className="storyReel">
      <Story
        image='https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg'
        profileSrc='https://en.wikipedia.org/wiki/Wikipedia:Images#/media/File:Igor_Stravinsky_LOC_32392u.jpg'
        title="Igor Stravinsky"
      />
      <Story
        image='https://upload.wikimedia.org/wikipedia/commons/2/23/Background_pic.jpg'
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/7/7f/Profile-pic.jpg"
        title="Pradeep Chowbey"
      />
      <Story
        image='https://upload.wikimedia.org/wikipedia/commons/7/7a/Frans_Post_-_Gezicht_op_Olinda%2C_Brazili%C3%AB.jpg'
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/0/0d/Profile_Picture_of_Mayor_Matt_Delligatti.jpg"
        title="Mayor Matt Delligatti"
      />
      <Story
        image= 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Picture_of_K2.jpg'
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg"
        title="Elon Musk"
      />
      <Story
        image= 'https://upload.wikimedia.org/wikipedia/commons/9/95/Prunella_modularis_on_a_fence_post.jpg'
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
    </div>
  )
}

export default StoryReel
