//general
const transitionAttrs = {animate: 'animate', initial: 'initial'}
const transitionAttrsExit = {...transitionAttrs, exit: 'exit'}

//Shared.js
const loadingAnimation = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: { duration: 1}},
  eanimate: {opacity: 1, margin: '1.25rem', transition: {duration : 1}}
}

const trackStaggerChild  = {
  resinitial: {opacity: 0, y: '100%', zIndex: -1},
  resanimate: { opacity: 1, translateY: '-100%', zIndex: 1, transition: {ease: 'easeOut', duration: .75}}
}

const trackStaggerParent = {
  resinitial: {zIndex: -1},
  resanimate: { opacity: 1, zIndex: 1, transition: {staggerChildren: .25, duration: 5}},
}

export const staggerParent = {animate: 'resanimate', initial: 'resinitial', variants: trackStaggerParent}
export const staggerChild = {variants: trackStaggerChild }

//CurateStyle
const iconAppear = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {ease: 'easeOut', duration: .6}}
}
export const transitionAdd = {...transitionAttrs, variants: iconAppear}
export const transitionText = {...transitionAttrs, variants: loadingAnimation }


//TrackStyle
const curateTrackAnimation = {
  initial: {opacity: 0, y: '100%', zIndex: -1},
  animate: { opacity: 1, translateY: '-100%',  zIndex: 0, transition: {ease: 'easeOut', duration: .5}}
}

const emotionTrackAnimation = {
  initial: {opacity: 0, x: '100%'},
  animate: { opacity: 1, translateX: '-100%', transition: { ease: 'easeOut', duration: .75}},
  exit: {opacity: 0, x: '50%', transition: {ease: 'easeIn', duration: .5}}
}

export const transitionCurateTrack = {...transitionAttrs, variants: curateTrackAnimation }
export const transitionEmotionTrack = {...transitionAttrsExit, variants: emotionTrackAnimation}

//EmotionStyle 
const emotionAnimation = {
  initial: state => {
    if (state === 1) {
      return {x: '75%'}
    } 
    if (state === -1) {
      return {x: '-75%'}
    }
  },
  animate: state => {
    if (state === 1) {
      return { translateX: '-75%', transition: { ease: 'easeOut', duration: .75}}
    } 
    if (state === -1) {
      return { translateX: '75%', transition: { ease: 'easeOut', duration: .75}}
    }
    if (state === 0) {
      return{ translateX: 0, opacity: 0, transition: {duration: 0}}
    }
  },
  exit: state => {
    if (state === 1) {
      return {translateX: '-150%', transition: {ease: 'easeIn', duration: .5}}
    } 
    if (state === -1) {
      return {translateX: '150%', transition: {ease: 'easeIn', duration: .5}}
    }
    if(state === 0) {
      return{translateX: 0, opacity: 0, transition: {duration: 0}}
    }
  }
}

const emotionTextAnimation = {
  initial: {opacity: 0, y: '-75%'},
  animate: {opacity: 1, translateY: '75%', transition: {duration: .5, ease: 'easeOut'}},
  exit: {opacity: 0, translateY: '-75%', transition: {duration: .35, ease: 'easeIn'}}
}

export const transitionEmotion = {...transitionAttrsExit, variants: emotionAnimation}
export const transitionEmotionText = {...transitionAttrs, variants: emotionTextAnimation}

//ExtraStyle.js
const welcomeAnimation = {
  winitial: {opacity: 0},
  wanimate: {opacity: 1, transition: { staggerChildren: .2}},
}

const welcomeAnimationChildren = {
  winitial: {opacity: 0, y: '100%'},
  wanimate: {opacity: 1, translateY: '-100%', transition: {ease: 'easeOut', duration: .5}}
}

export const transitionChild = {variants: welcomeAnimationChildren}
export const transitionWelcome = {animate: 'wanimate', initial: 'winitial', variants: welcomeAnimation}
export const transitionLoadText = {animate: 'eanimate', initial: 'initial', variants: loadingAnimation}


//ExtraDetails.js

const staggerParentAltAnimation = {
  resinitial: {zIndex: -1},
  resanimate: { opacity: 1, zIndex: 1, transition: {staggerChildren: .125}},
}

const staggerChildAltAnimation = {
  resinitial: {opacity: 0, y: '-100%', zIndex: -1},
  resanimate: { opacity: 1, translateY: '100%', zIndex: 1, transition: {ease: 'easeOut', duration: .35}}
}

export const staggerParentAlt = {...staggerParent, variants: staggerParentAltAnimation}
export const staggerChildAlt = {variants: staggerChildAltAnimation}

const extraTextAnimation = {
  initial: {opacity: 0, x: '-75%'},
  animate: {opacity: 1, translateX: '75%', transition: {duration: .5, ease: 'easeOut'}},
  exit: {opacity: 0, translateX: '50%', transition: {duration: .35, ease: 'easeIn'}}
}

export const transitionExtraText = {...transitionAttrsExit, variants: extraTextAnimation}