// import React, { Component } from 'react'
// import VideoPlayer from 'react-video-js-player'

// class VideoApp extends Component {
//   player = {}
//   state = {
//     video: {
//       src:
//         'https://www.youtube.com/watch?v=SpJLXEdyI5E&list=PLDYtK_l_JpVOSk1pihgZGl8B6nUASvxyn&index=4',
//       poster: 'https://i.postimg.cc/02FQ3fGn/Rectangle-40.png',
//     },
//   }

//   onPlayerReady(player) {
//     console.log('Player is ready: ', player)
//     this.player = player
//   }

//   onVideoPlay(duration) {
//     console.log('Video played at: ', duration)
//   }

//   onVideoPause(duration) {
//     console.log('Video paused at: ', duration)
//   }

//   onVideoTimeUpdate(duration) {
//     console.log('Time updated: ', duration)
//   }

//   onVideoSeeking(duration) {
//     console.log('Video seeking: ', duration)
//   }

//   onVideoSeeked(from, to) {
//     console.log(`Video seeked from ${from} to ${to}`)
//   }

//   onVideoEnd() {
//     console.log('Video ended')
//   }

//   render() {
//     return (
//       <div>
//         <VideoPlayer
//           controls={true}
//           src={this.state.video.src}
//           poster={this.state.video.poster}
//           width="1240"
//           height="550"
//           onReady={this.onPlayerReady.bind(this)}
//           onPlay={this.onVideoPlay.bind(this)}
//           onPause={this.onVideoPause.bind(this)}
//           onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
//           onSeeking={this.onVideoSeeking.bind(this)}
//           onSeeked={this.onVideoSeeked.bind(this)}
//           onEnd={this.onVideoEnd.bind(this)}
//         />
//       </div>
//     )
//   }
// }
// export default VideoApp

import React from 'react'

function Video() {
  return (
   <img src="https://i.postimg.cc/02FQ3fGn/Rectangle-40.png" alt="about-photo" />
  )
}

export default Video
